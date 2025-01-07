import React from 'react';
import { HashLink } from 'react-router-hash-link'; // Import HashLink
import { Link } from 'react-router-dom'; // Normal Link import if needed
import logo from '../assets/logoV.png';
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '../assets/data';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa'; // Import social media icons

const Footer = () => {
  return (
    <footer className='mb-4 my-16'>
      <div className='rounded-tr-3xl rounded-tl-3xl pt-12 xl:pt-20 pb-16 xl:px-6 md:px-6'>
        <h3 className='h3'>Discover UAE and Embrace the World</h3>
        <p>Explore UAE's beauty and cultures, and embrace a world of travel and adventure.</p>
        <hr className='my-8 bg-slate-900/30 h-[2px]' />
        {/* container */}
        <div className='flex justify-between flex-wrap gap-2'>
          <div className='max-w-sm'>
            {/* logo */}
            <Link to={'/'} className='flex-1 flex items-center justify-start'>
              <img src={logo} alt="" height={140} width={140} className='sm:flex mr-2' />
            </Link>
            <p className='py-4'>From scenic escapes to thrilling adventures, find the perfect destination to create unforgettable travel memories every time.</p>
          </div>
          <div className='flex justify-between flex-wrap gap-12'>
            {FOOTER_LINKS.map((col) => (
              <FooterColumn key={col.title} title={col.title}>
                <ul className='flex flex-col gap-4 regular-14 text-gray-20'>
                  {col.links.map((link, index) => (
                    typeof link === 'string' ? (
                      <Link to={link.value} key={index}>{link}</Link>
                    ) : (
                      <HashLink smooth to={link.value} key={index}>
                        {link.label}
                      </HashLink>
                    )
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className='flex flex-col gap-5'>
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link to='/' key={link.label} className='flex gap-4 md:flex-col lg:flex-row flex-wrap'>
                    <p>{link.label}:</p><p className='bold-15'>{link.value}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
            <div className='flex '>
              <FooterColumn title={SOCIALS.title}>
                <ul className='flex gap-4'>
                  {SOCIALS.links.map((link) => (
                    <a href={link.url} key={link.id} className='text-xl' target="_blank" rel="noopener noreferrer">
                      {link.icon}
                    </a>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
      </div>
      {/* copyrights */}
      <p className='text-white bg-tertiary medium-14 py-2 px-8 rounded flexBetween xs:px-8 xxs:px-2'>
        <span>Your Choice Star Tourism</span><span>All rights reserved</span>
      </p>
    </footer>
  );
}

const FooterColumn = ({ title, children }) => {
  return (
    <div className='flex flex-col gap-5'>
      <h4 className='bold-18 whitespace-nowrap'>{title}</h4>
      {children}
    </div>
  );
}

export default Footer;
