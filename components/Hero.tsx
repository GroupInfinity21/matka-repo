"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-[20s] hover:scale-110"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>
      
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="text-center max-w-5xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight"
          >
            Alugue sua semana de hospedagem com preço exclusivo em hotéis de luxo
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
          >
            Descubra destinos extraordinários e experiências únicas em hotéis 5 estrelas ao redor do mundo
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="transition-colors bg-[linear-gradient(145deg,_rgba(255,119,107,1)_26%,_rgba(254,32,133,1)_100%)] text-white px-10 py-4 rounded-full text-lg font-semibold hover:opacity-90 hover:scale-105 transition-all transform">
            <Link 
               href="#tab" scroll={true} 
                className="text-white text-1xl hover:text-white transition-colors"
              >
                 Explorar Destinos
              </Link>
            </button>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t to-transparent" />
    </div>
  );
}