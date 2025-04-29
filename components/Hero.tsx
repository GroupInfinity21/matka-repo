import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { format } from 'date-fns';
import { MapPin } from "lucide-react";

export function Hero() {

  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [travelers, setTravelers] = useState(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] relative">
      
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
          <img src="https://cdn.pixabay.com/photo/2015/03/09/18/34/beach-666122_1280.jpg" alt="Imagem 1" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/fotos-gratis/paisagem-de-nevoeiro-matinal-e-montanhas-com-baloes-de-ar-quente-ao-nascer-do-sol_335224-794.jpg?t=st=1745596651~exp=1745600251~hmac=ea5b848dab41ee06ad43f6e86aff3f04261b0fa27b0295cb4d77c31a573adbdd&w=996" alt="Imagem 1" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/fotos-gratis/morskie-oko-em-tatry_1204-510.jpg?t=st=1745596730~exp=1745600330~hmac=9b2ebd01ffe2ee7ebf5f800a0726d50524b76609e901c7ff3fbdd12c7076753c&w=996" alt="Imagem 1" className="w-full h-full object-cover" />
        </SwiperSlide>
      </Swiper>

      
      <div className="relative z-10 h-full flex items-center justify-center px-4 py-36">
        <div className="text-center max-w-5xl">
          <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Alugue sua semana de hospedagem com preço exclusivo em hotéis de luxo
          </h1>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">Para onde você vai?</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-white text-gray-900 placeholder-gray-500"
                    placeholder="Selecione"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">Check-in</label>
                <input
                  type="date"
                  value={checkIn ? format(checkIn, "yyyy-MM-dd") : ""}
                  onChange={(e) => setCheckIn(new Date(e.target.value))}
                  className="w-full px-4 py-2 rounded-lg bg-white text-gray-900"
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">Checkout</label>
                <input
                  type="date"
                  value={checkOut ? format(checkOut, "yyyy-MM-dd") : ""}
                  onChange={(e) => setCheckOut(new Date(e.target.value))}
                  className="w-full px-4 py-2 rounded-lg bg-white text-gray-900"
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">Viajantes</label>
                <input
                  type="number"
                  min="1"
                  value={travelers}
                  onChange={(e) => setTravelers(parseInt(e.target.value))}
                  className="w-full px-4 py-2 rounded-lg bg-white text-gray-900"
                />
              </div>
            </div>

            <button className="w-full bg-[linear-gradient(145deg,_rgba(255,119,107,1)_26%,_rgba(254,32,133,1)_100%)] text-white py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity">
              Buscar
            </button>

            <p className="text-white/90 text-sm mt-4">
              Está viajando menos que 1 semana?{" "}
              <a href="#" className="text-white underline hover:no-underline">
                Clique aqui e pesquise nossas diárias avulsas.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
