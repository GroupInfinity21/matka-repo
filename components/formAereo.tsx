"use client"

import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Calendar as CalendarIcon, Users, Search } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";


interface FlightSearchProps {
  onSearch: (searchParams: {
    origin: string;
    destination: string;
    departureDate: Date | undefined;
    returnDate: Date | undefined;
    passengers: number;
    class: string;
  }) => void;
}

export default function FlightSearchForm ({onSearch}:FlightSearchProps) {

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [passengers, setPassengers] = useState(1);
  const [flightClass, setFlightClass] = useState("Econômica");

  const handleSearch = () => {
    onSearch({
      origin,
      destination,
      departureDate,
      returnDate,
      passengers,
      class: flightClass,
    });
  };
    return(
        
    <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="backdrop-blur-xl bg-white/10 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 border border-gray-100/20">
      <h1 className="text-3xl font-bold text-white mb-8 bg-gradient-to-r from-[#1A1F2C] to-[#4B5563] bg-clip-text">
        Encontre sua próxima viagem
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-1">
        
        <div className="space-y-2 col-span-1">
          <label className="text-sm font-medium text-white">Origem</label>
          <Input
            placeholder="De onde você vai?"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="w-full h-[65px] rounded-r-none transition-all duration-300 hover:border-[#FF776B] focus:border-[#FF776B] focus:ring-2 focus:ring-[#FF776B]/20"
          />
        </div>

        <div className="space-y-2 col-span-1">
          <label className="text-sm font-medium text-white">Destino</label>
          <Input
            placeholder="Para onde quer ir?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full h-[65px] rounded-none transition-all duration-300 hover:border-[#FF776B] focus:border-[#FF776B] focus:ring-2 focus:ring-[#FF776B]/20"
          />
        </div>

        
            <div className="space-y-2 col-span-1">
                <label className="text-sm font-medium text-white">Ida</label>
                <Popover>
                    <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        className={cn(
                        "w-full justify-start h-[65px] rounded-none text-left font-normal transition-all duration-300 hover:border-[#FF776B]",
                        !departureDate && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4 text-[#FF776B]" />
                        {departureDate ? (
                        format(departureDate, "dd 'de' MMMM", { locale: ptBR })
                        ) : (
                        <span>Selecionar data</span>
                        )}
                    </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        mode="single"
                        selected={departureDate}
                        onSelect={setDepartureDate}
                        initialFocus
                        locale={ptBR}
                        className="pointer-events-auto rounded-lg border-0"
                    />
                    </PopoverContent>
            </Popover>
            </div>

                <div className="space-y-2 col-span-1">
                <label className="text-sm font-medium text-white">Volta</label>
                <Popover>
                    <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        className={cn(
                        "w-full justify-start h-[65px] rounded-none text-left font-normal transition-all duration-300 hover:border-[#FF776B]",
                        !returnDate && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4 text-[#FF776B]" />
                        {returnDate ? (
                        format(returnDate, "dd 'de' MMMM", { locale: ptBR })
                        ) : (
                        <span>Selecionar data</span>
                        )}
                    </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        mode="single"
                        selected={returnDate}
                        onSelect={setReturnDate}
                        initialFocus
                        locale={ptBR}
                        className="pointer-events-auto rounded-lg border-0"
                    />
                    </PopoverContent>
                </Popover>
                </div>

                <div className="space-y-2 col-span-1">
                <label className="text-sm font-medium text-white">Viajantes</label>
                <Popover>
                    <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full h-[65px] rounded-none justify-start transition-all duration-300 hover:border-[#FF776B]">
                        <Users className="mr-2 h-4 w-4 text-[#FF776B]" />
                        {passengers} {passengers === 1 ? "Adulto" : "Adultos"}
                    </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-52">
                    <div className="p-3 space-y-3">
                        <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Adultos</span>
                        <div className="flex items-center gap-3">
                            <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setPassengers(Math.max(1, passengers - 1))}
                            className="h-8 w-8 rounded-full p-0 transition-all duration-300 hover:border-[#FF776B]"
                            >
                            -
                            </Button>
                            <span className="w-4 text-center">{passengers}</span>
                            <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setPassengers(passengers + 1)}
                            className="h-8 w-8 rounded-full p-0 transition-all duration-300 hover:border-[#FF776B]"
                            >
                            +
                            </Button>
                        </div>
                        </div>
                    </div>
                    </PopoverContent>
                </Popover>
                </div>

            <div className="space-y-2 col-span-1">
            <label className="text-sm font-medium text-white">Classe</label>
            <Popover>
                <PopoverTrigger asChild>
                <Button variant="outline" className="w-full rounded-l-none h-[65px] justify-start transition-all duration-300 hover:border-[#FF776B]">
                    {flightClass}
                </Button>
                </PopoverTrigger>
                <PopoverContent className="w-52">
                <div className="p-2 space-y-1">
                    {["Econômica", "Executiva", "Primeira Classe"].map((c) => (
                    <Button
                        key={c}
                        variant="ghost"
                        className="w-full justify-start hover:bg-[#FF776B]/10 hover:text-[#FF776B]"
                        onClick={() => setFlightClass(c)}
                    >
                        {c}
                    </Button>
                    ))}
                </div>
                </PopoverContent>
            </Popover>
            </div>
      </div>

        <div className="mt-8">
            <Button
            className="w-full h-[65px] bg-gradient-to-r from-[#FF776B] to-[#FE2085] hover:opacity-90 transition-opacity text-white font-semibold py-6 text-lg rounded-xl shadow-lg hover:shadow-xl"
            onClick={handleSearch}
            >
            <Search className="mr-2 h-5 w-5" />
            Pesquisar Voos
            </Button>
        </div>
    </div>
  </div>
)
}