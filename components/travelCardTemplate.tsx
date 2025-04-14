import { MapPin, Users, Bed, Bath } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface TravelCardProps {
  title: string;
  image: string;
  price: string;
  address: string;
  duration: string;
  className?: string;
  type?: "semanas" | "diarias" | "voos";
  onClose?: () => any;
  onClick?: () => any;
}

const TravelCardTempalte = ({
  title,
  image,
  price,
  address,
  duration,
  className,
  onClick
}: TravelCardProps) => {

  const durInfo = duration.match(/(\d+)\s+camas,\s+(\d+)\s+banheiro,\s+(\d+)\s+visitante/);
  const beds = durInfo ? durInfo[1] : "0";
  const baths = durInfo ? durInfo[2] : "0";
  const guests = durInfo ? durInfo[3] : "0";

  return (
    <Card  onClick={onClick} className={cn("overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300", className)}>
      <div className="relative h-64 overflow-hidden">
        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm py-1 px-3 rounded-full z-10">
          <span className="text-[#c23c6e] font-bold">{price}</span>
        </div>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <CardContent className="p-5">
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-xl text-[#1A1F2C] mb-1">{title}</h3>
            <div className="flex items-center text-sm text-gray-500">
              <MapPin className="w-4 h-4 text-[#c23c6e] mr-1 flex-shrink-0" />
              <span className="truncate">{address}</span>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  <Bed className="w-4 h-4 text-[#c23c6e] mr-1" />
                  <span className="text-xs">{beds}</span>
                </div>
                <div className="flex items-center">
                  <Bath className="w-4 h-4 text-[#c23c6e] mr-1" />
                  <span className="text-xs">{baths}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 text-[#c23c6e] mr-1" />
                  <span className="text-xs">{guests}</span>
                </div>
              </div>
              
              <div className="bg-[#6e2a43]/10 rounded-full py-1 px-3">
                <span className="text-xs font-medium text-[##c23c6e]">Disponível</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TravelCardTempalte;