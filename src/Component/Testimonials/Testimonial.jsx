import React from 'react'
import SectionHeader from '../Sectionheader/SectionHeader'
import {Swiper,SwiperSlide} from 'swiper/react'
import profile1 from '../../img/profile3.jpg'
import profile2 from '../../img/profile4.jpg'
import profile3 from '../../img/profile5.jpg'
import profile4 from '../../img/profile6.jpg'
import { Pagination,A11y,Scrollbar,Navigation } from 'swiper'
import 'swiper/css'
import './Testimonial.css'
import 'swiper/css/bundle'





const Testimonial = () => {
  return (
    <section className='testimonial'>
        <div className="container testimonial__container">
            <SectionHeader title="what Our Student says" desc1='Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores' />
            <Swiper
            modules={[Pagination,Navigation,Scrollbar,A11y]}
            navigation={{clickable:true}}
            grabCursor={true}
            slidesPerView={1}
             className="testimonial__wrapper">
                
                <SwiperSlide>
                    <div className="testimonial__box">
                        <img src={profile1} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sequi dolore est, saepe tempore perferendis quasi voluptatum obcaecati laudantium animi voluptate quia.</p>
                        <h3>Larry Cage</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="testimonial__box" >
                        <img src={profile1} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sequi dolore est, saepe tempore perferendis quasi voluptatum obcaecati laudantium animi voluptate quia.</p>
                        <h3>Larry cab</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonial__box">
                        <img src={profile2} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sequi dolore est, saepe tempore perferendis quasi voluptatum obcaecati laudantium animi voluptate quia.</p>
                        <h3>Larry Cage</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonial__box">
                        <img src={profile3} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sequi dolore est, saepe tempore perferendis quasi voluptatum obcaecati laudantium animi voluptate quia.</p>
                        <h3>james Cage</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonial__box">
                        <img src={profile4} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sequi dolore est, saepe tempore perferendis quasi voluptatum obcaecati laudantium animi voluptate quia.</p>
                        <h3>john Cage</h3>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
        
        
    </section>
  )
}

export default Testimonial