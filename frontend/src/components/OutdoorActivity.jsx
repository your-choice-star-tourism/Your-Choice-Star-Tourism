import React, { useContext, useEffect, useState } from 'react';
import Title from './Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import Item from './Item';
import { ShopContext } from '../context/ShopContext';

const OutdoorActivity = () => {
    const { books } = useContext(ShopContext);
    const [outdoorActivities, setOutdoorActivities] = useState([]);

    useEffect(() => {
        if (books.length > 0) {
            // Filter books where category is "Outdoor Activities"
            const filteredData = books.filter(book => book.category === "Outdoor Activities");
            setOutdoorActivities(filteredData);
        }
    }, [books]);

    if (outdoorActivities.length === 0) {
        return null; // Or a loading state
    }

    return (
        <section className="max-padd-container py-16" id='outdooractivity'>
            {/* Section title */}
            <Title title1={'Outdoor '} title2={'Activities'} titleStyles={'pb-10'} paraStyles={'!block'} />
            
            {/* Swiper container */}
            <Swiper
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    400: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    700: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
                modules={[Pagination, Autoplay]}
                className="h-[490px] sm:h-[560px] xl:h-[499px] mt-5"
            >
                {outdoorActivities.map((book) => (
                    <SwiperSlide key={book._id}>
                        <Item book={book} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default OutdoorActivity;