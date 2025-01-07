import React, { useContext, useEffect, useState } from 'react';
import Title from './Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import { ShopContext } from '../context/ShopContext';
import Item from './Item';

const PopularTours = () => {
    const { books } = useContext(ShopContext);
    const [popularBooks, setPopularBooks] = useState([]);

    useEffect(() => {
        const data = books.filter(item => item.popular);
        setPopularBooks(data.slice());
    }, [books]);

    return (
        <section className="max-padd-container py-12 my-16 bg-white" id="populartours">
            <Title 
                title1={'Popular '} 
                title2={'Services'} 
                titleStyles={'pb-10'} 
                para2Styles={'!block'} 
            />

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
                {popularBooks.map((book) => (
                    <SwiperSlide key={book._id}>
                        <Item book={book} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default PopularTours;