import React from 'react'
import filter from "../assets/features/filter.png"
import call from "../assets/features/call.png"
import cart from '../assets/features/cart.png'
import secure from "../assets/features/secure.png"

const Features = () => {
  return (
    <section className="max-padd-container py-16">
      <div className='max-padd-container grid grid-cols-2 md:gird-cols-3 lg:grid-cols-4 gap-5 gap-y-12' >
        <div className='flexCenter flex-col gap-3' >
          <img src={filter} alt="featureIcon" height={44} width={44} />
          <div className='flexCenter flex-col' >
            <h5 className='h5 ' >Advanced Search and Filters</h5>
            <hr className='w-8 bg-secondary h-1 rounded-full border-none' />
          </div>
          <p className='text-center lg:text-[14px] sm:text-[12px] xs:text-[10px] xxs:text-[8px]' >Effortlessly search tours by title, category, or price range</p>
        </div>
        <div className='flexCenter flex-col gap-3' >
          <img src={call} alt="featureIcon" height={44} width={44} />
          <div className='flexCenter flex-col' >
            <h5 className= 'h5' >Expert Recommendations</h5>
            <hr className='w-8 bg-secondary h-1 rounded-full border-none' />
          </div>
          <p className='text-center lg:text-[14px] sm:text-[12px] xs:text-[10px] xxs:text-[8px]' >Customers can contact with our experts for better recommendations</p>
        </div>
        <div className='flexCenter flex-col gap-3' >
          <img src={cart} alt="featureIcon" height={44} width={44} />
          <div className='flexCenter flex-col' >
            <h5 className='h5' >Save to Cart</h5>
            <hr className='w-8 bg-secondary h-1 rounded-full border-none' />
          </div>
          <p className='text-center lg:text-[14px] sm:text-[12px] xs:text-[10px] xxs:text-[8px]' >Save tours to cart for future purchases or easy access</p>
        </div>
        <div className='flexCenter flex-col gap-3' >
          <img src={secure} alt="featureIcon" height={44} width={44} />
          <div className='flexCenter flex-col' >
            <h5 className='h5' >Secure Online Payments</h5>
            <hr className='w-8 bg-secondary h-1 rounded-full border-none' />
          </div>
          <p className='text-center lg:text-[14px] sm:text-[12px] xs:text-[10px] xxs:text-[8px]' >Enjoy seamless chekout with secure payment option</p>
        </div>
      </div>
    </section>
  )
}

export default Features
