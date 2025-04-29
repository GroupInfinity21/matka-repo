import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import FlightSearchForm from "./formAereo";

export function HeroAreo() {
  return (
  <div>
    <div className="min-h-[70vh] bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] relative">
      
      <Swiper
        className="absolute top-0 left-0 right-0 bottom-0"
        style={{ zIndex: 1, position: 'absolute' }} 
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <img src="/GPT.png" alt="Imagem 1" className="w-full h-full object-cover object-[center_30%]" />
        </SwiperSlide>
      </Swiper>
    </div>

    <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="text-center max-w-5xl -translate-y-36">
          <FlightSearchForm onSearch={(params) => console.log(params)} />
        </div>
      </div>
  </div>
  );
}
