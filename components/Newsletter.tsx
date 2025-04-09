"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail("");
  };

  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Receba Ofertas Exclusivas
          </h2>
          <p className="text-primary-foreground/90 mb-8">
            Inscreva-se em nossa newsletter e receba promoções especiais e novidades sobre destinos luxuosos.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white"
              required
            />
            <Button type="submit" variant="secondary" className="whitespace-nowrap">
              Quero Receber
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}