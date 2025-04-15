"use client";

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import TravelCards  from "@/components/TravelCards";
import { PopularDestinations } from "@/components/PopularDestinations";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import  OffersSection  from "@/components/offerSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <OffersSection/>
      <TravelCards />
      <PopularDestinations />
      {/* <Testimonials /> */}
      {/* <Newsletter /> */}
      <Features />
      <Footer />
    </main>
  );
}