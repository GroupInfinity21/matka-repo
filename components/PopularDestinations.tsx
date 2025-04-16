
"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MapPin, Star, Heart } from "lucide-react";

const popularDestinations = [
  {
    title: "João pessoa, PB",
    image: "https://img.freepik.com/fotos-premium/casas-coloridas-da-praca-antenor-navarro-no-centro-historico-de-joao-pessoa-joao-pessoa-paraiba-brasil_1190779-309.jpg?w=996",
    
  },
  {
    title: "Rio de Janeiro, RJ",
    image: "https://img.freepik.com/fotos-gratis/bondinho-do-pao-de-acucar-durante-o-por-do-sol_181624-36743.jpg?t=st=1744834305~exp=1744837905~hmac=89ccf6fa45aed8b972b5cc995e69214a24aeb43cef1473fecf3ce15249a51803&w=740",
    
  },
  {
    title: "Porto Seguro, BA",
    image: "https://hoteisquintadosol.com/wp-content/uploads/2021/04/praias-mais-bonitas-litoral-baiano.jpg",
    
  },
  {
    title: "Olímpia, SP",
    image: "https://cdn.blablacar.com/wp-content/uploads/br/2024/05/05094127/olimpia-sp.webp",
   
  },
  {
    title: "Orlando, EUA",
    image: "https://lirp.cdn-website.com/e650cfd8/dms3rep/multi/opt/thumb_orlando-1920w.png",
   
  },
];

export function PopularDestinations() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (index: number) => {
    setFavorites(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  return (
    <section className="py-28 bg-gradient-to-b from-white via-[#F9F8FF] to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <Badge variant="outline" className="px-4 py-1 mb-4 bg-white shadow-sm font-medium text-[#6e2a43]">
            Viagens em destaque
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Destinos Populares
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl text-center">
            Descubra os locais mais procurados pelos viajantes em todo o mundo e comece a planejar sua próxima aventura
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-[#6e2a43] to-[#fe387e] rounded-full mt-6"></div>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent>
            {popularDestinations.map((destination, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4 sm:pl-6">
                <Card className="overflow-hidden rounded-xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer">
                  <div className="relative h-72">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10 z-10" />
                    
                    
                    <div 
                      className="absolute top-4 right-4 z-20 bg-white/20 backdrop-blur-md p-2 rounded-full cursor-pointer transition-transform hover:scale-110"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(index);
                      }}
                    >
                      <Heart 
                        className={`w-5 h-5 ${favorites.includes(index) ? 'fill-[#FF719A] text-[#FF719A]' : 'text-white'}`}
                        strokeWidth={favorites.includes(index) ? 0 : 2}
                      />
                    </div>

                    
                    <img 
                      src={destination.image} 
                      alt={destination.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                      <div className="flex items-center mb-2">
                      </div>
                      
                      <h3 className="text-white font-bold text-xl group-hover:text-[#9b87f5] transition-colors">
                        {destination.title}
                      </h3>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="relative inset-0 translate-y-0 h-10 w-10 rounded-full border border-[#6e2a43] bg-white hover:bg-[#ff776b] hover:text-white transition-colors" />
            <CarouselNext className="relative inset-0 translate-y-0 h-10 w-10 rounded-full border border-[#6e2a43] bg-white hover:bg-[#ff776b] hover:text-white transition-colors" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}