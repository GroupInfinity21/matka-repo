import { useEffect } from "react";
import { TravelCardProps } from "./travelCardTemplate";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { MapPin, Users, Bed, Bath, CheckCircle2 } from "lucide-react";
import { FaWhatsapp } from 'react-icons/fa';
import { Offer } from "./offerSection";
import { Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { Clock } from "lucide-react";


interface DestinationModalProps {
    isOpen: boolean;
    onClose: () => void;
    offer: Offer | null 
}

export function OfferModal ({ isOpen, onClose, offer }: DestinationModalProps){
    if (!offer) return null;

    const allImages = [offer.image];
    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
          <DialogContent className="max-w-4xl overflow-y-auto max-h-[95vh] p-0  bg-white rounded-lg sm:max-w-[95vw] md:max-w-3xl lg:max-w-4xl">
            <div className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] relative overflow-hidden">
              <Carousel className="w-full h-full">
                <CarouselContent className="h-full">
                  {allImages.map((image, index) => (
                    <CarouselItem key={index} className="h-full">
                      <div className="h-full w-full">
                        <img
                          src={image}
                          alt={`${offer.title} - Imagem ${index + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm py-2 px-4 rounded-full z-10">
                  <span className="text-[#c23c6e] font-bold text-sm md:text-lg">{offer.discountedPrice}</span>
                </div>
              </Carousel>
            </div>
    
            <div className="p-4 sm:p-6">
              <DialogHeader>
                <DialogTitle className="text-xl sm:text-2xl font-bold text-[#1A1F2C]">{offer.title}</DialogTitle>
                <DialogDescription className="flex items-center text-sm text-gray-500 mt-1">
                  <MapPin className="w-4 h-4 text-[#c23c6e] mr-1 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">{offer.destination}</span>
                </DialogDescription>
              </DialogHeader>
    
              <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-6">
                <div className="pt-3 sm:pt-4 border-t border-gray-100">
                    <h4 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 flex items-center">
                      <Calendar className="w-4 h-4 text-[#c23c6e] mr-2" />
                      Datas Disponíveis
                    </h4>
                    <div className="text-sm text-gray-600 space-y-2">
                        {offer.date?.split(',').map((period, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-gray" />
                            <span>{period.trim()}</span>
                          </div>
                        ))}
                    </div>
                  </div>

               
                  <div className="pt-3 sm:pt-4 border-t border-gray-100">
                    <h4 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 flex items-center">
                      <Users className="w-4 h-4 text-[#c23c6e] mr-2" />
                      Capacidade
                    </h4>
                    <p className="text-sm text-gray-600">Acomoda até {offer.peoples}</p>
                  </div>

                <div className="pt-3 sm:pt-4 border-t border-gray-100">
                  <div className="mt-3 sm:mt-4 bg-gradient-to-r from-[#c23c6e]/20 to-[#c23c6e]/10 rounded-lg p-4 sm:p-5">
                    <div className="text-center mb-3">
                    </div>
                    <Button 
                      className="w-full bg-[#c23c6e] hover:bg-[#a8355f] flex items-center justify-center gap-2"
                      asChild
                    >
                      <a
                        href="https://wa.me/558394008989?text=Olá%20quero%20saber%20mais"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Reserve Agora
                        <FaWhatsapp size={18} />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
                
            </div>
          </DialogContent>
        </Dialog>
      )
}

export default OfferModal;