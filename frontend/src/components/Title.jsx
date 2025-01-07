import React from 'react';

const Title = ({ title1, title2, titleStyles, title1Styles, paraStyles, para1Styles, para2Styles, para3Styles, para4Styles, para5Styles }) => {
  return (
    <div className={`${titleStyles} pb-1`}>
      <h2 className={`${title1Styles} h2`}>{title1}
        <span className='text-secondary !font-light' >{title2}</span>
      </h2>
      <p className={`${paraStyles} hidden xxs:text-[12px]`}>
      From scenic escapes to thrilling adventures, find the perfect destination<br />to create unforgettable travel memories every time.
      </p>
      <p className={`${para1Styles} hidden xxs:text-[12px]`} >
      Experience essential travel features—affordable pricing, secure data,<br />and dedicated support—to make every journey smooth and memorable.
      </p>
      <p className={`${para2Styles} hidden xxs:text-[12px]`} >
      Explore our most popular tours designed to showcase the best destinations<br />and experiences for a memorable travel adventure.
      </p>
      <p className={`${para3Styles} hidden xxs:text-[12px]`} >
      Explore our range of tours and easily sort them according to your preferences<br />ensuring a customized travel experience tailored just for you.
      </p>
      <p className={`${para4Styles} hidden xxs:text-[12px]`} >
      These are the most booked services by our customers, offering unmatched experiences<br />tailored to their preferences and needs. Explore top-rated attractions and adventures today!
      </p>
      <p className={`${para5Styles} hidden xxs:text-[12px]`}>
      If you like these services, then you might also want to check out our add-ons for<br />enhanced experiences and exclusive benefits tailored to your preferences.
      </p>
    </div>
  );
}

export default Title;
