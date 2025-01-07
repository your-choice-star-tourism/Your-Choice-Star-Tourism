import React from 'react';
import { Link } from 'react-router-dom';
import HomeCover from "../assets/Home Cover.jpeg";

const Hero = () => {
  return (
    <>
      <section 
        className='xl:px-16 py-16 xl:py-36 hero-section mb-10 mt-16 lg:h-[34rem] xl:h-auto xxs:h-[32rem] relative'
        style={{ backgroundImage: `url(${HomeCover})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className='absolute inset-0 bg-black z-10' style={{ opacity: 0.5 }}></div> {/* Custom opacity */}
        <div className='relative z-20 gap-12 xl:flex-row text-white max-padd-container xl:pt-0 lg:pt-28 xxs:pt-20'>
          {/* left side */}
          <div className='flex flex-1 flex-col pt-12 xl:pt-32' >
            <h1 className='h1 lg:font-semibold xxs:font-medium'>
              Discover UAE               
            </h1>
            <p className='max-w-[44rem] text-white font-thin'>
              Embark on an unforgettable journey through the UAE with Your Choice Star Tourism. Experience stunning skyscrapers, vast golden deserts, and a rich tapestry of cultures.
            </p>
            <div className='mt-8'>
              <Link to={'/Tours'} className='items-center text-white px-6 py-2 rounded-md explore-btn'>Explore Services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
