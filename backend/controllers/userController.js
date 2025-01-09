import validator from 'validator'
import userModel from '../models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'
import crypto from 'crypto'


// function to creating token
const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}
const passwordResetTokens = new Map();

// controller function to handle user login
const handleUserLogin = async (req, res) => {
    try {
        const {email, password} = req.body
        const user = await userModel.findOne({email})
        if (!user) {
            return res.json({success: false, message: "User does not exist"})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (isMatch) {
            const token = createToken(user.id)
            res.json({success: true, token})
        } else {
            res.json({success: false, message: "Invalid credentials"})
        }
    } catch (error) {
        console.log(error)
        res.json({success: false, message:error.message})
    }
}

// controller function to handle user register
const handleUserRegister = async (req, res) => {
    try {
        const {name, email, password} = req.body
        // check if user already exis or not
        const exists = await userModel.findOne({email})
        if (exists) {
            return res.json({success: false, message: 'User already exist'})
        }
        // checking email format and password strength
        if (!validator.isEmail(email)) {
            return res.json({success: false, message: 'Please enter valid email address'})
        }
        if (password.length < 8) {
            return res.json({success: false, message: 'Please enter strong password'})
        }
        // hashing user password with bcrypt package
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        
        // create a new user using hashed password
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user.id)
        res.json({success: true, token})
    } catch (error) {
        console.log(error)
        res.json({success: false, message:error.message})
    }
}

// controller function to handle admin login
const handleAdminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASS) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET);
            res.json({ success: true, token });
        } else {
            res.json({ success: false, message: "Invalid credentials" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'booking@yourchoicestar.com',
        pass: process.env.MAIL_SECRET_KEY
    },
    tls: {
        rejectUnauthorized: false
    }
});

const requestPasswordReset = async (req, res) => {
    try {
        console.log('Starting password reset request for:', req.body.email);
        
        const { email } = req.body;
        
        // Validate email
        if (!email || !validator.isEmail(email)) {
            console.log('Invalid email provided:', email);
            return res.json({ 
                success: false, 
                message: "Please provide a valid email address" 
            });
        }
        
        console.log('Looking up user in database...');
        const user = await userModel.findOne({ email });
        
        if (!user) {
            console.log('No user found with email:', email);
            return res.json({ 
                success: true, // Still return success for security
                message: "Email Sent Successfully" 
            });
        }
        
        console.log('User found, generating reset token...');
        const resetToken = crypto.randomBytes(32).toString('hex');
        
        passwordResetTokens.set(resetToken, {
            userId: user._id,
            expiresAt: Date.now() + (8 * 60 * 1000)
        });
        
        const resetLink = `https://yourchoicestar.com/reset-password/${resetToken}`;
        console.log('Reset link generated:', resetLink);
        
        const mailOptions = {
            from: {
                name: 'Your Choice Star Support',
                address: 'booking@yourchoicestar.com'
            },
            to: email,
            subject: 'Password Reset Request',
            html: `
                <h1>Password Reset Request</h1>
                <p>Click the link below to reset your password. This link will expire in 8 minutes.</p>
                <a href="${resetLink}">Reset Password</a>
                <p>If you didn't request this password reset, please ignore this email.</p>
            `
        };
        
        console.log('Attempting to send email...');
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        
        res.json({ 
            success: true, 
            message: "Email Sent Successfully" 
        });
        
    } catch (error) {
        console.error('Detailed password reset error:', {
            message: error.message,
            stack: error.stack,
            code: error.code
        });
        res.json({ 
            success: false, 
            message: "Failed to process password reset request. Please try again later." 
        });
    }
};
  
  const resetPassword = async (req, res) => {
    try {
      const { token, newPassword } = req.body;
  
      if (!token || !newPassword) {
        return res.json({ 
          success: false, 
          message: "Invalid request. Please provide all required information." 
        });
      }
  
      const resetData = passwordResetTokens.get(token);
  
      if (!resetData) {
        return res.json({ 
          success: false, 
          message: "Invalid or expired reset token" 
        });
      }
  
      if (Date.now() > resetData.expiresAt) {
        passwordResetTokens.delete(token);
        return res.json({ 
          success: false, 
          message: "Reset token has expired" 
        });
      }
  
      // Validate password strength
      if (newPassword.length < 8) {
        return res.json({ 
          success: false, 
          message: "Password must be at least 8 characters long" 
        });
      }
  
      // Hash new password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);
  
      // Update user password
      await userModel.findByIdAndUpdate(resetData.userId, { 
        password: hashedPassword 
      });
  
      // Remove used token
      passwordResetTokens.delete(token);
  
      res.json({ 
        success: true, 
        message: "Password successfully reset" 
      });
    } catch (error) {
      console.error('Password reset error:', error);
      res.json({ 
        success: false, 
        message: "Failed to reset password. Please try again later." 
      });
    }
  };


export { handleUserLogin, handleUserRegister, handleAdminLogin, resetPassword, requestPasswordReset }
