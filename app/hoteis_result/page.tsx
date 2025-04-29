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
import CheapestHotelSection from "@/components/hotelCheap/page";
import { NavigationAreo } from "@/components/navigationAereo";
import HotelCard from "@/components/HotelCard/page";

const hotels = [
  {
    id: 1,
    name: "Hotel Marina Bay",
    location: "Rio de Janeiro, Brasil",
    rating: 4.8,
    price: 350,
    currency: "R$",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800",
    amenities: ["Wi-Fi grátis", "Café da manhã", "Piscina", "Estacionamento"]
  },
  {
    id: 2,
    name: "Grand Resort & Spa",
    location: "São Paulo, Brasil",
    rating: 4.5,
    price: 290,
    currency: "R$",
    imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800",
    amenities: ["Spa", "Academia", "Restaurante", "Bar na piscina"]
  }
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
  
  const filteredFlights = hotels.filter(flight => {
   
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
            <CheapestHotelSection flights={cheapestFlights} />
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <h2 className="text-xl font-semibold mb-2 sm:mb-0">
                  {sortedFlights.length} resultados encontrados
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
                  sortedFlights.map((hotel) => (
                    <HotelCard key={hotel.id} name={hotel.name} location={hotel.location} rating={hotel.rating} price={hotel.price} currency={hotel.currency} imageUrl={hotel.imageUrl} amenities={hotel.amenities} />
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