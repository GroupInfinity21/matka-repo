"use client";

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import TravelCards  from "@/components/TravelCards";
import { PopularDestinations } from "@/components/PopularDestinations";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import  OffersSection  from "@/components/offerSection";
import { CommunityOffers } from "@/components/communityOffers/page";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <OffersSection/>
      <TravelCards />
      <PopularDestinations />
      <CommunityOffers/>
      <Footer />
    </main>
  );
}