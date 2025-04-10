import { useEffect } from "react";
import { TravelCardProps } from "./travelCardTemplate";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { MapPin, Users, Bed, Bath, CalendarDays, CheckCircle2 } from "lucide-react";


interface DestinationModalProps {
    isOpen: boolean;
    onClose: () => void;
    destination: TravelCardProps | null;
}

const additionalImages = [
    "https://images.unsplash.com/photo-1519874179391-3ebc752241dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    "https://images.unsplash.com/photo-1581351721010-8cf859cb14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  ];


export function DestinationModal ({ isOpen, onClose, destination }: DestinationModalProps){
    if (!destination) return null;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const isMobile = useIsMobile();

    // Parse the duration string to extract numbers
    const durInfo = destination.duration.match(/(\d+)\s+camas,\s+(\d+)\s+banheiro,\s+(\d+)\s+visitante/);
    const beds = durInfo ? durInfo[1] : "0";
    const baths = durInfo ? durInfo[2] : "0";
    const guests = durInfo ? durInfo[3] : "0";

    const allImages = [destination.image, ...additionalImages];
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
                          alt={`${destination.title} - Imagem ${index + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {/* <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10 ${isMobile ? 'flex' : ''}`}>
                  <CarouselPrevious className="h-8 w-8 rounded-full bg-white/70 backdrop-blur-sm hover:bg-white" />
                  <CarouselNext className="h-8 w-8 rounded-full bg-white/70 backdrop-blur-sm hover:bg-white" />
                </div> */}
                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm py-2 px-4 rounded-full z-10">
                  <span className="text-[#c23c6e] font-bold text-lg">{destination.price}</span>
                </div>
              </Carousel>
            </div>
    
            <div className="p-4 sm:p-6">
              <DialogHeader>
                <DialogTitle className="text-xl sm:text-2xl font-bold text-[#1A1F2C]">{destination.title}</DialogTitle>
                <DialogDescription className="flex items-center text-sm text-gray-500 mt-1">
                  <MapPin className="w-4 h-4 text-[#c23c6e] mr-1 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">{destination.address}</span>
                </DialogDescription>
              </DialogHeader>
    
              <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-6">
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  <div className="flex flex-col items-center justify-center p-2 sm:p-4 bg-gray-50 rounded-lg">
                    <Bed className="w-5 h-5 sm:w-6 sm:h-6 text-[#c23c6e] mb-1" />
                    <span className="text-xs sm:text-sm font-medium">{beds} Camas</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-2 sm:p-4 bg-gray-50 rounded-lg">
                    <Bath className="w-5 h-5 sm:w-6 sm:h-6 text-[#c23c6e] mb-1" />
                    <span className="text-xs sm:text-sm font-medium">{baths} Banheiro</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-2 sm:p-4 bg-gray-50 rounded-lg">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#c23c6e] mb-1" />
                    <span className="text-xs sm:text-sm font-medium">{guests} Visitantes</span>
                  </div>
                </div>
    
                <div className="pt-3 sm:pt-4 border-t border-gray-100">
                  <h4 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3">Descrição</h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Desfrute de uma estadia inesquecível em {destination.title}. Este destino único oferece uma
                    combinação perfeita de conforto e aventura. Com {beds} camas confortáveis e {baths} banheiro
                    moderno, acomoda até {guests} pessoas com todo o conforto necessário para uma experiência incrível.
                  </p>
                </div>
    
                <div className="pt-3 sm:pt-4 border-t border-gray-100">
                  <h4 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3">Comodidades</h4>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {["Wi-Fi grátis", "Café da manhã", "Ar-condicionado", "Piscina", "Academia", "Estacionamento"].map(
                      (amenity, i) => (
                        <div key={i} className="flex items-center">
                          <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-[#c23c6e] mr-1 sm:mr-2" />
                          <span className="text-xs sm:text-sm">{amenity}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
    
                <div className="pt-3 sm:pt-4 border-t border-gray-100">
                  <div className="mt-3 sm:mt-4 bg-[#c23c6e]/10 rounded-lg p-2 sm:p-3 text-center">
                    <span className="text-xs sm:text-sm font-medium text-[#c23c6e]">
                      {destination.price} - Reserve com antecedência para garantir os melhores preços
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )
}

export default DestinationModal;