import React from 'react';

const Title = ({ title1, title2, titleStyles, title1Styles, paraStyles, para1Styles, para2Styles, para3Styles, para4Styles, para5Styles, para6Styles, para7Styles, para8Styles, para9Styles }) => {
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
      <p className={`${para6Styles} hidden xxs:text-[12px]`}>
      Our service partners, who are our trusted suppliers for tours and excursions, play a vital role in delivering exceptional<br />travel experiences. They provide a wide range of high-quality services, ensuring our guests enjoy safe, memorable, and well-organized adventures tailored to their preferences.
      </p>
      <p className={`${para7Styles} hidden xxs:text-[12px]`}>
      We partner with hotels to operate multiple travel desks in their lobbies, offering seamless services to in-house guests,<br />customized travel solutions, and enhancing guest experiences with tailored itineraries and professional assistance.
      </p>
      <p className={`${para8Styles} hidden xxs:text-[12px]`}>
      Our testimonials on TripAdvisor highlight the genuine experiences of our guests,<br />showcasing their satisfaction and the exceptional service we provide.
      </p>
      <p className={`${para9Styles} hidden xxs:text-[12px]`}>
      We assist clients in planning their trips, helping them discover exciting places, book<br />comfortable stays, and create enjoyable experiences that match their interests and needs.
      </p>
    </div>
  );
}

export default Title;
