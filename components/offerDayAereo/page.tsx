import { Offer, offerData } from '@/data/Offers';
import { Tabs, TabsContent } from '@radix-ui/react-tabs';
import { motion } from 'framer-motion';
import { BadgePercent, Clock } from 'lucide-react';
import { useState } from 'react';
import OfferCard from '../OfferCard';

export const OfferDayAereo = () => {

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
    <div id="ofertas" className="pb-[4em] px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#9b87f5]/10 px-4 py-1 rounded-full mb-4"
          >
            <BadgePercent className="w-4 h-4 text-[#ff2085]" />
            <span className="text-sm font-medium text-[#ff2085]">
              Ofertas por tempo limitado
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold text-[#1A1F2C] mb-4"
          >
            Melhores Ofertas do dia
          </motion.h1>
        </div>

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
            </TabsContent>
          ))}
        </Tabs>
      </div>

    </div>
  );
};

export default OfferDayAereo;
