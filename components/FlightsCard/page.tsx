import React from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface FlightProps {
  id: string;
  airline: string;
  departureTime: string;
  departureAirport: string;
  arrivalTime: string;
  arrivalAirport: string;
  duration: string;
  stops: number;
  stopAirports?: string[];
  price: number;
  hasDiscount: boolean;
  originalPrice?: number;
  availableSeats: number;
}

interface FlightCardProps {
  flight: FlightProps;
  childrenCount: number;
}

const FlightCard: React.FC<FlightCardProps> = ({ flight, childrenCount }) => {
  const { toast } = useToast();
  
  const totalPrice = flight.price * (1 + (childrenCount * 0.75));
  const formattedTotalPrice = totalPrice.toFixed(2).replace('.', ',');
  
  const discountPercentage = flight.hasDiscount && flight.originalPrice 
    ? Math.round(((flight.originalPrice - flight.price) / flight.originalPrice) * 100) 
    : null;
  
  const handleSelectFlight = () => {
    toast({
      title: "Voo selecionado!",
      description: `Você selecionou um voo de ${flight.departureAirport} para ${flight.arrivalAirport} por R$ ${formattedTotalPrice}.`,
    });
  };
  
  return (
    <div className="relative bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      {flight.hasDiscount && discountPercentage && (
        <div className="absolute -top-3 -right-3 bg-[#FF776B] text-white text-xs font-bold rounded-full w-12 h-12 flex items-center justify-center z-10 shadow-md">
          <span>-{discountPercentage}%</span>
        </div>
      )}
      
      <div className="p-5">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          
          <div className="w-full md:w-1/6 mb-3 md:mb-0">
            <div className="text-lg font-bold">{flight.airline}</div>
            <div className="text-xs text-gray-500">Voo {flight.id}</div>
          </div>
          
          <div className="w-full md:w-3/6 flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0">
            <div className="text-center">
              <div className="text-xl font-bold">{flight.departureTime}</div>
              <div className="text-sm text-gray-700">{flight.departureAirport}</div>
            </div>
            
            <div className="flex flex-col items-center px-4 py-2">
              <div className="text-xs text-gray-500">{flight.duration}</div>
              <div className="relative w-24 h-0.5 bg-gray-300 my-2">
                {flight.stops > 0 && (
                  <>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#FF776B] rounded-full"></div>
                    <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs text-gray-500">
                      {flight.stops === 1 ? '1 escala' : `${flight.stops} escalas`}
                    </div>
                  </>
                )}
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-xl font-bold">{flight.arrivalTime}</div>
              <div className="text-sm text-gray-700">{flight.arrivalAirport}</div>
            </div>
          </div>
          
          <div className="w-full md:w-2/6 flex flex-col items-end mt-4 md:mt-0">
            <div className="flex items-center space-x-2">
              {flight.hasDiscount && flight.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  R$ {flight.originalPrice.toFixed(2).replace('.', ',')}
                </span>
              )}
              <span className="text-2xl font-bold text-[#FF776B]">
                R$ {flight.price.toFixed(2).replace('.', ',')}
              </span>
            </div>
            
            {childrenCount > 0 && (
              <div className="text-xs text-gray-500 mt-1">
                Total com {childrenCount} crianças: R$ {formattedTotalPrice}
              </div>
            )}
            
            <div className="text-sm mt-1 mb-3 text-gray-500">
              {flight.availableSeats <= 5 ? (
                <span className="text-[#FF776B]">Apenas {flight.availableSeats} lugares disponíveis!</span>
              ) : (
                <span>{flight.availableSeats} lugares disponíveis</span>
              )}
            </div>
            
            <Button
              onClick={handleSelectFlight}
              className="bg-gradient-to-r from-[#FF776B] to-[#FE2085] hover:opacity-90 transition-opacity"
            >
              Selecionar
            </Button>
          </div>
        </div>
        
        {flight.stops > 0 && flight.stopAirports && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="text-xs text-gray-500">
              <span className="font-medium">Escalas:</span> {flight.stopAirports.join(', ')}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlightCard;