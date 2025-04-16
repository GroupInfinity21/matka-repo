import { BadgePercent, Clock, CalendarDays } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface OfferCardProps {
  title: string;
  image: string;
  discountedPrice: string;
  destination: string;
  peoples: string;
  date?: string;
  validUntil: string;
  className?: string;
  onClick?: () => void;
}

const OfferCard = ({
  title,
  image,
  discountedPrice,
  destination,
  validUntil,
  peoples,
  className,
  onClick
}: OfferCardProps) => {
  return (
    <Card 
      onClick={onClick} 
      className={cn("overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl", className)}
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-3 left-3 text-white">
            <p className="text-sm font-medium">{destination}</p>
          </div>
      </div>

      <CardContent className="p-5">
        <div className="space-y-4">
          <div>
          <h3 className="font-semibold text-lg text-[#1A1F2C] line-clamp-1">{title}</h3>
  
            <div className="flex items-center mt-2">
              <span className="text-[#c23c6e] font-semibold text-base">{discountedPrice}</span>
            </div>
          </div>

          <div className=" pt-2 border-t border-gray-100">
            <CardFooter className="p-3  border-t">
              <Button 
                className="w-full bg-[#c23c6e] hover:bg-[#a8355f] text-white flex items-center justify-center"
              >
                Ver Detalhes
                <span className="ml-2">→</span>
              </Button>
           </CardFooter>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OfferCard;