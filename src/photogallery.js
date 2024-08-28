import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Navigation } from 'swiper/modules';
import 'bootstrap/dist/css/bootstrap.min.css';

// Replace these with the correct paths to your images
import slide_image_1 from './images/download (4).jpeg';
import slide_image_2 from './images/download (4).jpeg';
import slide_image_3 from './images/download (4).jpeg';
import slide_image_4 from './images/download (4).jpeg';
import slide_image_5 from './images/download (4).jpeg';
import slide_image_6 from './images/download (4).jpeg';
import slide_image_7 from './images/download (4).jpeg';
import slide_image_8 from './images/download (4).jpeg';

import background from './images/background.jpg'



function PhotoGallery() {
  return (
    <div className="container-fluid ">
      <h1 className="text-center mb-4 mt-0 " style={{color:'black'}}>Gallery</h1>
      <Swiper
        spaceBetween={10}
        slidesPerView={1} // Default to 1 slide per view on extra small screens
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        loop={false} // Disable continuous loop for manual control
        grabCursor={true} // Changes the cursor to a grab icon
        breakpoints={{
          0: {
            slidesPerView: 1, // 1 image on extra small screens
            spaceBetween: 5, // Less space between slides on extra small screens
          },
          576: {
            slidesPerView: 2, // 2 images on small screens
            spaceBetween: 10, // More space between slides on small screens
          },
          768: {
            slidesPerView: 3, // 3 images on medium screens
            spaceBetween: 15, // More space between slides on medium screens
          },
          992: {
            slidesPerView: 4, // 4 images on large screens
            spaceBetween: 20, // More space between slides on large screens
          },
        }}
      >
        <SwiperSlide>
          <div className="card" style={{ maxWidth: '100%', height: 'auto', overflow: 'hidden' }}>
            <img src={slide_image_1} className="card-img-top" alt="Image 1" style={{ width: '100%', height: 'auto' }} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card" style={{ maxWidth: '100%', height: 'auto', overflow: 'hidden' }}>
            <img src={slide_image_2} className="card-img-top" alt="Image 2" style={{ width: '100%', height: 'auto' }} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card" style={{ maxWidth: '100%', height: 'auto', overflow: 'hidden' }}>
            <img src={slide_image_3} className="card-img-top" alt="Image 3" style={{ width: '100%', height: 'auto' }} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card" style={{ maxWidth: '100%', height: 'auto', overflow: 'hidden' }}>
            <img src={slide_image_4} className="card-img-top" alt="Image 4" style={{ width: '100%', height: 'auto' }} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card" style={{ maxWidth: '100%', height: 'auto', overflow: 'hidden' }}>
            <img src={slide_image_5} className="card-img-top" alt="Image 5" style={{ width: '100%', height: 'auto' }} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card" style={{ maxWidth: '100%', height: 'auto', overflow: 'hidden' }}>
            <img src={slide_image_5} className="card-img-top" alt="Image 6" style={{ width: '100%', height: 'auto' }} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card" style={{ maxWidth: '100%', height: 'auto', overflow: 'hidden' }}>
            <img src={slide_image_5} className="card-img-top" alt="Image 8" style={{ width: '100%', height: 'auto' }} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card" style={{ maxWidth: '100%', height: 'auto', overflow: 'hidden' }}>
            <img src={slide_image_5} className="card-img-top" alt="Image 9" style={{ width: '100%', height: 'auto' }} />
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlides if needed */}
      </Swiper>
    </div>
  );
}

export default PhotoGallery;


// style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center'}}  for adding background image