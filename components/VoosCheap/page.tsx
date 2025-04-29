
import React from "react";
import { useToast } from "@/hooks/use-toast";

interface CheapestFlight {
  destination: string;
  price: number;
  imageUrl: string;
}

interface CheapestFlightsSectionProps {
  flights: CheapestFlight[];
}

const CheapestFlightsSection: React.FC<CheapestFlightsSectionProps> = ({ flights }) => {
  const { toast } = useToast();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-[#1A1F2C]">
          Melhores Ofertas de Passagens
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="border rounded-lg p-4 shadow-md flex flex-col">
            <h3 className="text-sm font-normal mb-0 text-[#1A1F2C]">Recomendado</h3>
            <p className="text-lg text-[#ff2085] font-bold ">
              R$ 2.000.00
            </p>
          </div>

          <div className="border rounded-lg p-4 shadow-md flex flex-col">
            <h3 className="text-sm font-normal text-[#1A1F2C]">Mais Barato</h3>
            <p className="text-lg text-[#ff2085] font-bold ">
              R$ 2.000.00
            </p>
          </div>

          <div className="border rounded-lg p-4 shadow-md flex flex-col">
            <h3 className="text-sm font-normal text-[#1A1F2C]">Mais Rápido</h3>
            <p className="text-lg text-[#ff2085] font-bold">
              R$ 4.021.00
            </p>
          </div>
        </div>
    </div>

  );
};

export default CheapestFlightsSection;