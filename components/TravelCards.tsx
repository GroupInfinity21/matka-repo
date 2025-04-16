import { useState } from "react";
import DestinationCard from "@/components/travelCardTemplate";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "lucide-react";
import destinations from "@/data/Destinatios";

export interface Destination {
  id: string;
  title: string;
  image: string;
  location: string;
  type: "nacionais" | "internacionais";
}

const TravelCards = () => {
  const [activeTab, setActiveTab] = useState<Destination["type"]>("nacionais");
  const [visibleCounts, setVisibleCounts] = useState<{ [key: string]: number }>({
    nacionais: 3,
    internacionais: 3,
  });

  const filteredDestinations = destinations.filter(
    (destination: Destination) => destination.type === activeTab
  );

  const loadMoreDestinations = (tab: Destination["type"]) => {
    setVisibleCounts((prev) => ({
      ...prev,
      [tab]: prev[tab] + 3,
    }));
  };

  return (
    <div id="tab" className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1A1F2C] mb-4">Destinos Disponíveis</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore destinos incríveis e planeje sua próxima aventura com nossos cartões de viagem.
          </p>
        </div>

        <Tabs defaultValue="nacionais" onValueChange={(value) => setActiveTab(value as Destination["type"])}>
          <div className="flex flex-col md:flex-row md:justify-center mb-8">
            <TabsList>
              <TabsTrigger value="nacionais" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Semanas Matka</span>
              </TabsTrigger>
              <TabsTrigger value="internacionais" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Aéreo e Diárias avulsas</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {["nacionais", "internacionais"].map((tab) => (
            <TabsContent key={tab} value={tab}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDestinations
                  .slice(0, visibleCounts[tab]) 
                  .map((destination: Destination) => (
                    <DestinationCard
                      key={destination.id}
                      id={destination.id}
                      image={destination.image}
                      title={destination.title}
                      location={destination.location}
                    />
                  ))}
              </div>

              {filteredDestinations.length > visibleCounts[tab] && (
                <div className="col-span-full flex justify-center mt-6">
                  <button
                    onClick={() => loadMoreDestinations(tab as "nacionais" | "internacionais")}
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
    </div>
  );
};

export default TravelCards;
