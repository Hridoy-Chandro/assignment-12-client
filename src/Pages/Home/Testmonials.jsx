import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'




const Testmonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://assignment-12-server-rouge-rho.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className='my-10'>
            <SectionTitle
                heading={"TESTIMONIALS"}
            ></SectionTitle>


            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review.id}>
                        <div className='m-24 flex flex-col text-center items-center mx-24 my-20 py-10'>


                            <Rating className='text-center mb-4 items-center justify-center'
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                            <p className='py-7'>{review.details}</p>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>

        </section>
    );
};
export default Testmonials;

