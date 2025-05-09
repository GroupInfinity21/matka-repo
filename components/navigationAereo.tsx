"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function NavigationAreo() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "glass-effect py-2" : "bg-transparent py-4"
        }`}
        style={{backgroundColor:'#ff2085'}}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/aereo" 
              className="text-white font-bold text-2xl hover:text-primary transition-colors"
            >
              <Image
                src={'/logo matka brancapng.png'}
                width={120}
                height={120}
                alt={""}            
                />
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#tab" scroll={true} className="text-white font-bold transition-colors">
                Semanas Matka
              </Link>
              <Link href="#tab" scroll={true} className="text-white  font-bold  transition-colors">
                Aéreo e Diárias avulsas
              </Link>
              <Link href="#ofertas" scroll={true} className="text-white  font-bold  transition-colors">
                Ofertas
              </Link>
              <Link href="#duvidas" scroll={true} className=" text-white  font-bold  transition-colors">
                Dúvidas
              </Link>
              <Link href="#duvidas" scroll={true} className="text-white  font-bold  transition-colors">
                Contato
              </Link>
              <Link href="/sobrenos" scroll={true} className="text-white  font-bold  transition-colors">
                Sobre nós
              </Link>
            </div>
            
            <button 
              className="md:hidden text-white p-2"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed inset-0 z-40 bg-black/95 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <Link 
                href="#tab" scroll={true}
                className="text-white text-2xl hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Semanas Matka
              </Link>
              <Link 
                href="#tab" scroll={true}
                className="text-white text-2xl hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Aéreo e Diárias avulsas
              </Link>
              <Link 
                href="#ofertas" scroll={true}
                className="text-white text-2xl hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Ofertas
              </Link>
              <Link 
                href="#duvidas" scroll={true} 
                className="text-white text-2xl hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dúvidas
              </Link>
              <Link 
               href="#duvidas" scroll={true} 
                className="text-white text-2xl hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                 Contato
              </Link>
              <Link 
               href="/sobrenos" scroll={true} 
                className="text-white text-2xl hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                 Contato
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}