import { useState } from 'react';
import { motion } from 'framer-motion';
import { BadgePercent, Clock } from 'lucide-react';
import { Offer, offerBigOffer, offerData } from '@/data/Offers'; 
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import OfferCard from '@/components/OfferCard';
import OfferModal from '@/components/offerModal';

const OffersSection = () => {
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (offer: Offer) => {
    setSelectedOffer(offer);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [visibleCounts, setVisibleCounts] = useState<{ [key: string]: number }>(
    () => {
      const initial: { [key: string]: number } = {};
      Object.keys(offerData).forEach((category) => {
        initial[category] = 3;
      });
      return initial;
    }
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div id="offers" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#9b87f5]/10 px-4 py-1 rounded-full mb-4"
          >
            <BadgePercent className="w-4 h-4 text-[#c23c6e]" />
            <span className="text-sm font-medium text-[#c23c6e]">
              Ofertas por tempo limitado
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold text-[#1A1F2C] mb-4"
          >
            Promoções do dia
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Viaje mais gastando menos! Explore ofertas especiais em destinos
            incríveis com descontos exclusivos disponíveis apenas hoje.
          </motion.p>
        </div>

        {offerBigOffer.map((offer, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-16 bg-white rounded-2xl overflow-hidden shadow-xl"
          >
            <div
              onClick={() => handleCardClick(offer)}
              className="grid grid-cols-1 md:grid-cols-2"
            >
              <div className="relative h-72 md:h-auto overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent md:hidden"></div>
              </div>

              <div className="p-8 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1A1F2C] mb-3">
                  {offer.title}
                </h2>
                <p className="text-gray-500 mb-6">{offer.destination}</p>

                <div className="flex items-center mb-6">
                  <span className="text-[#c23c6e] font-bold text-3xl">
                    {offer.discountedPrice}
                  </span>
                </div>

                <div className="flex items-center text-sm text-gray-500 mb-8">
                  <Clock className="w-4 h-4 text-[#9b87f5] mr-2" />
                  <span>veja mais detalhes sobre as datas</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-[#c23c6e] text-white" size="lg">
                    Reservar agora
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#c23c6e] text-[#c23c6e]"
                  >
                    Ver detalhes
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        <Tabs defaultValue="hoteis" className="mb-8">
          {Object.keys(offerData).map((category) => (
            <TabsContent key={category} value={category}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {offerData[category]
                  .slice(0, visibleCounts[category])
                  .map((offer, index) => (
                    <motion.div
                      key={`${category}-${index}`}
                      variants={itemVariants}
                    >
                      <OfferCard
                        {...offer}
                        onClick={() => handleCardClick(offer)}
                      />
                    </motion.div>
                  ))}
              </motion.div>

              {offerData[category].length > visibleCounts[category] && (
                <div className="col-span-full flex justify-center mt-6">
                  <button
                    onClick={() =>
                      setVisibleCounts((prev) => ({
                        ...prev,
                        [category]: prev[category] + 3,
                      }))
                    }
                    className="px-6 py-2 rounded-xl border-2 border-[#c23c6e] text-gray-950 hover:bg-[#b1325f] hover:text-white transition-all"
                  >
                    Carregar mais
                  </button>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <OfferModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        offer={selectedOffer}
      />
    </div>
  );
};

export default OffersSection;
