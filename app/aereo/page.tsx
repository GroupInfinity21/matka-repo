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
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { NavigationAreo } from "@/components/navigationAereo";
import { HeroAreo } from "@/components/heroAereo";
import OfferDayAereo from "@/components/offerDayAereo/page";
import { Footer } from "@/components/Footer";
import { CommunityOffers } from "@/components/communityOffers/page";

// interface FlightSearchProps {
//   onSearch: (searchParams: {
//     origin: string;
//     destination: string;
//     departureDate: Date | undefined;
//     returnDate: Date | undefined;
//     passengers: number;
//     class: string;
//   }) => void;
// }

export default function Page ({}) {

  // const [origin, setOrigin] = useState("");
  // const [destination, setDestination] = useState("");
  // const [departureDate, setDepartureDate] = useState<Date>();
  // const [returnDate, setReturnDate] = useState<Date>();
  // const [passengers, setPassengers] = useState(1);
  // const [flightClass, setFlightClass] = useState("Econômica");

  // const handleSearch = () => {
  //   onSearch({
  //     origin,
  //     destination,
  //     departureDate,
  //     returnDate,
  //     passengers,
  //     class: flightClass,
  //   });
  // };
    return(
         
      <div className="min-h-screen">
        <NavigationAreo />
        <HeroAreo/>
        <OfferDayAereo/>
        <CommunityOffers/>
        <Footer/>
      </div>
        
    )
}