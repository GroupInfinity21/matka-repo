"use client"

import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowDown, ArrowUp, Filter, DollarSign } from "lucide-react";
import FlightCard from "@/components/FlightsCard/page";
import { useToast } from "@/hooks/use-toast";
import CheapestFlightsSection from "@/components/VoosCheap/page";
import { NavigationAreo } from "@/components/navigationAereo";


const mockFlights = [
  {
    id: "1",
    airline: "LATAM",
    departureTime: "08:30",
    departureAirport: "GRU",
    arrivalTime: "10:45",
    arrivalAirport: "SDU",
    duration: "2h 15m",
    stops: 0,
    price: 499.90,
    hasDiscount: true,
    originalPrice: 649.90,
    availableSeats: 12
  },
  {
    id: "2",
    airline: "GOL",
    departureTime: "10:15",
    departureAirport: "GRU",
    arrivalTime: "12:20",
    arrivalAirport: "SDU",
    duration: "2h 05m",
    stops: 0,
    price: 549.90,
    hasDiscount: false,
    availableSeats: 8
  },
  {
    id: "3",
    airline: "Azul",
    departureTime: "14:45",
    departureAirport: "VCP",
    arrivalTime: "17:30",
    arrivalAirport: "SDU",
    duration: "2h 45m",
    stops: 1,
    stopAirports: ["CNF"],
    price: 479.90,
    hasDiscount: true,
    originalPrice: 599.90,
    availableSeats: 5
  },
  {
    id: "4",
    airline: "LATAM",
    departureTime: "16:20",
    departureAirport: "GRU",
    arrivalTime: "18:15",
    arrivalAirport: "SDU",
    duration: "1h 55m",
    stops: 0,
    price: 629.90,
    hasDiscount: false,
    availableSeats: 3
  },
  {
    id: "5",
    airline: "GOL",
    departureTime: "19:40",
    departureAirport: "GRU",
    arrivalTime: "21:50",
    arrivalAirport: "SDU",
    duration: "2h 10m",
    stops: 0,
    price: 399.90,
    hasDiscount: true,
    originalPrice: 599.90,
    availableSeats: 15
  }
];

const cheapestFlights = [
  { destination: "Rio de Janeiro", price: 399.90, imageUrl: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1470&auto=format&fit=crop" },
  { destination: "Salvador", price: 449.90, imageUrl: "https://images.unsplash.com/photo-1548288242-d454d4648b55?q=80&w=1374&auto=format&fit=crop" },
  { destination: "Recife", price: 499.90, imageUrl: "https://images.unsplash.com/photo-1566309673725-03d87c409870?q=80&w=1374&auto=format&fit=crop" },
  { destination: "Florianópolis", price: 549.90, imageUrl: "https://images.unsplash.com/photo-1599174862687-81abf8d674d1?q=80&w=1374&auto=format&fit=crop" }
];

const FlightResults: React.FC = () => {
  const { toast } = useToast();
  const [priceRange, setPriceRange] = useState<number[]>([300, 800]);
  const [departureTimeRange, setDepartureTimeRange] = useState<number[]>([0, 24]);
  const [airlines, setAirlines] = useState<{ [key: string]: boolean }>({
    "LATAM": true,
    "GOL": true,
    "Azul": true
  });
  const [stopFilters, setStopFilters] = useState<{ [key: string]: boolean }>({
    "0": true,
    "1": true,
    "2+": true
  });
  const [childrenCount, setChildrenCount] = useState<number>(0);
  const [onlyDiscounts, setOnlyDiscounts] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>("price-asc");
  
  const filteredFlights = mockFlights.filter(flight => {
   
    if (flight.price < priceRange[0] || flight.price > priceRange[1]) return false;
    
    if (!airlines[flight.airline]) return false;
    
    const stopKey = flight.stops > 1 ? "2+" : flight.stops.toString();
    if (!stopFilters[stopKey]) return false;
    
    if (onlyDiscounts && !flight.hasDiscount) return false;
    
    return true;
  });
  
  const sortedFlights = [...filteredFlights].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "departure-asc":
        return a.departureTime.localeCompare(b.departureTime);
      case "duration-asc":
        return a.duration.localeCompare(b.duration);
      default:
        return a.price - b.price;
    }
  });

  const handleApplyFilters = () => {
    toast({
      title: "Filtros aplicados",
      description: `${sortedFlights.length} voos encontrados com os filtros selecionados.`,
    });
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <NavigationAreo/>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col mt-20 lg:flex-row gap-8">
          
          <div className="w-full lg:w-1/4 bg-white rounded-xl shadow-lg p-6 h-fit sticky top-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center">
                <Filter className="mr-2 h-5 w-5 text-[#FF776B]" />
                Filtros
              </h2>
              <Button variant="outline" size="sm" onClick={handleApplyFilters}>
                Aplicar
              </Button>
            </div>
            
            <Separator className="mb-4" />
            
            <Collapsible defaultOpen className="mb-6">
              <CollapsibleTrigger className="flex w-full justify-between items-center text-left font-medium">
                <div className="flex items-center">
                  <DollarSign className="mr-2 h-4 w-4 text-[#FF776B]" />
                  Preço
                </div>
                <ArrowUp className="h-4 w-4" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-2">
                <div className="space-y-4">
                  <Slider
                    defaultValue={[300, 800]}
                    min={100}
                    max={1500}
                    step={10}
                    value={priceRange}
                    onValueChange={(value) => setPriceRange(value)}
                    className="my-6"
                  />
                  <div className="flex justify-between">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Min:</span> R$ {priceRange[0]}
                    </div>
                    <div className="text-sm">
                      <span className="text-muted-foreground">Max:</span> R$ {priceRange[1]}
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
            
            <Collapsible defaultOpen className="mb-6">
              <CollapsibleTrigger className="flex w-full justify-between items-center text-left font-medium">
                <span>Companhias Aéreas</span>
                <ArrowUp className="h-4 w-4" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-2">
                <div className="space-y-2">
                  {Object.keys(airlines).map((airline) => (
                    <div key={airline} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`airline-${airline}`} 
                        checked={airlines[airline]}
                        onCheckedChange={(checked) => 
                          setAirlines({...airlines, [airline]: !!checked})
                        }
                      />
                      <label
                        htmlFor={`airline-${airline}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {airline}
                      </label>
                    </div>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
            
            <Collapsible defaultOpen className="mb-6">
              <CollapsibleTrigger className="flex w-full justify-between items-center text-left font-medium">
                <span>Escalas</span>
                <ArrowUp className="h-4 w-4" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-2">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="stop-0" 
                      checked={stopFilters["0"]}
                      onCheckedChange={(checked) => 
                        setStopFilters({...stopFilters, "0": !!checked})
                      }
                    />
                    <label
                      htmlFor="stop-0"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Voo direto
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="stop-1" 
                      checked={stopFilters["1"]}
                      onCheckedChange={(checked) => 
                        setStopFilters({...stopFilters, "1": !!checked})
                      }
                    />
                    <label
                      htmlFor="stop-1"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      1 escala
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="stop-2" 
                      checked={stopFilters["2+"]}
                      onCheckedChange={(checked) => 
                        setStopFilters({...stopFilters, "2+": !!checked})
                      }
                    />
                    <label
                      htmlFor="stop-2"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      2+ escalas
                    </label>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
            
            <Collapsible defaultOpen className="mb-6">
              <CollapsibleTrigger className="flex w-full justify-between items-center text-left font-medium">
                <span>Crianças</span>
                <ArrowUp className="h-4 w-4" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-2">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Número de crianças:</span>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 rounded-full p-0"
                        onClick={() => setChildrenCount(Math.max(0, childrenCount - 1))}
                      >
                        -
                      </Button>
                      <span className="w-4 text-center">{childrenCount}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 rounded-full p-0"
                        onClick={() => setChildrenCount(childrenCount + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
            
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-medium">Somente promoções</span>
              <Switch
                checked={onlyDiscounts}
                onCheckedChange={setOnlyDiscounts}
              />
            </div>
            
            <Separator className="mb-4" />
            
            <Button 
              variant="outline" 
              className="w-full border-dashed text-muted-foreground"
              onClick={() => {
                setPriceRange([300, 800]);
                setDepartureTimeRange([0, 24]);
                setAirlines({"LATAM": true, "GOL": true, "Azul": true});
                setStopFilters({"0": true, "1": true, "2+": true});
                setChildrenCount(0);
                setOnlyDiscounts(false);
              }}
            >
              Limpar filtros
            </Button>
          </div>
          
          <div className="w-full lg:w-3/4 space-y-8">
            <CheapestFlightsSection flights={cheapestFlights} />
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <h2 className="text-xl font-semibold mb-2 sm:mb-0">
                  {sortedFlights.length} voos encontrados
                </h2>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">Ordenar por:</span>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Ordenar por" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="price-asc">Menor preço</SelectItem>
                      <SelectItem value="price-desc">Maior preço</SelectItem>
                      <SelectItem value="departure-asc">Saída mais cedo</SelectItem>
                      <SelectItem value="duration-asc">Menor duração</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-4">
                {sortedFlights.length === 0 ? (
                  <div className="text-center py-10">
                    <p className="text-lg text-gray-500">Nenhum voo encontrado com os filtros selecionados.</p>
                    <Button
                      variant="link" 
                      onClick={() => {
                        setPriceRange([300, 800]);
                        setDepartureTimeRange([0, 24]);
                        setAirlines({"LATAM": true, "GOL": true, "Azul": true});
                        setStopFilters({"0": true, "1": true, "2+": true});
                        setOnlyDiscounts(false);
                      }}
                      className="mt-2"
                    >
                      Limpar filtros
                    </Button>
                  </div>
                ) : (
                  sortedFlights.map((flight) => (
                    <FlightCard key={flight.id} flight={flight} childrenCount={childrenCount} />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightResults;