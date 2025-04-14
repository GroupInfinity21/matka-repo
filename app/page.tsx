"use client";

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import TravelCards  from "@/components/TravelCards";
import { PopularDestinations } from "@/components/PopularDestinations";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <TravelCards />
      <PopularDestinations />
      {/* <Testimonials /> */}
      {/* <Newsletter /> */}
      <Footer />
    </main>
  );
}