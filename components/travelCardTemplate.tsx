
import React from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { MapPin, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface DestinationCardProps {
  id: string;
  image: string;
  title: string;
  location: string;
  onClick?: () => void;
  className?: string;
}

const DestinationCard = ({
  image,
  title,
  location,
  onClick,
  className
}: DestinationCardProps) => {
  
  const handleWhatsAppRedirect = (event: React.MouseEvent) => {
    event.stopPropagation(); 
    const message = `Olá, gostaria de mais informações sobre o destino: ${location}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/558394008989?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Card
      onClick={onClick}
      className={cn(
        "overflow-hidden rounded-xl border-none group cursor-pointer shadow-md hover:shadow-xl relative",
        className
      )}
    >
      
      <div className="h-80 overflow-hidden relative">
        <img
          src={image}
          alt={location}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex items-center space-x-2 opacity-90 mb-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-1.5">
              <MapPin className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium drop-shadow-md">{location}</span>
          </div>
          
          <Button 
            variant="secondary" 
            size="sm"
            className="bg-[#6e2a43] text-white w-full flex items-center justify-center gap-2 mt-2"
            onClick={handleWhatsAppRedirect}
          >
            <MessageSquare className="w-4 h-4" /> 
            Veja mais detalhes
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default DestinationCard;