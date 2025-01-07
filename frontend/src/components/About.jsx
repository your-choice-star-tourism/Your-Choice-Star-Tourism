import React from 'react'
import Title from './Title'
import { TbCoins, TbShieldLockFilled, TbBubbleTextFilled } from 'react-icons/tb'
import about from "../assets/about2.webp"

const About = () => {
  return (
    <section className='max-padd-container py-12 xl:py-16' id='aboutus' >
      {/* container */}
      <div className='flexCenter flex-col px-6 gap-16 xl:gap-8 xl:flex-row' >
        {/* left side */}
        <div className='flex-1' >
          <Title title1={"Unveiling Our "} title2={"Agency's Key Features!"} titleStyles={'pb-10'} para1Styles={'!block'} />
          <div className='flex flex-col items-start gap-y-4'>
            <div className='flexCenter gap-x-4'>
              <div className='h-16 min-w-16 bg-secondaryOne flexCenter rounded-md'>
                <TbCoins className='text-2xl' />
              </div>
              <div>
                <h4 className='medium-18' >Affordable Pricing</h4>
                <p className='lg:text-[14px] sm:text-[12px] xs:text-[10px] xxs:text-[8px]'>Our agency offers affordable pricing, ensuring cost-effective solutions without compromising on quality.</p>
              </div>
            </div>
            <div className='flexCenter gap-x-4'>
              <div className='h-16 min-w-16 bg-secondaryOne flexCenter rounded-md'>
                <TbShieldLockFilled className='text-2xl' />
              </div>
              <div>
                <h4 className='medium-18' >User Data Security</h4>
                <p className='lg:text-[14px] sm:text-[12px] xs:text-[10px] xxs:text-[8px]'>Your data is safeguarded with advanced encryption, ensuring privacy and security at every step.</p>
              </div>
            </div>
            <div className='flexCenter gap-x-4'>
              <div className='h-16 min-w-16 bg-secondaryOne flexCenter rounded-md'>
                <TbBubbleTextFilled className='text-2xl' />
              </div>
              <div>
                <h4 className='medium-18' >Live Customer Support</h4>
                <p className='lg:text-[14px] sm:text-[12px] xs:text-[10px] xxs:text-[8px]'>Get live customer support anytime with instant responses, expert assistance, and reliable solutions.</p>
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className='flex-2 flexCenter' >
          <div className='bg-secondaryOne flexCenter p-4 max-h-[33rem] max-w-[33rem] rounded-2xl' >
            <img src={about} alt="aboutImg" height={300} width={300} className='shadow-2xl shadow-slate-900/50 rounded-lg' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
