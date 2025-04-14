
import { useEffect, useState } from "react";
import TravelCard from "@/components/travelCardTemplate";
import { Features } from "@/components/Features";
import { PopularDestinations } from "@/components/PopularDestinations";
import DestinationModal from "@/components/DestinationModal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Plane, Hotel } from "lucide-react";

interface Destination {
  title: string;
  image: string;
  price: string;
  address: string;
  duration: string;
  type: "semanas" | "diarias" | "voos";
}

const TravelCards = () => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("semanas");

  const destinations: Destination[] = [
    {
      title: "Maldivas",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      price: "R$ 12.999",
      address: "Av. Aurora Forti Neves, 1.030 - Santa Ifigênia, Olímpia - SP, 15400-000",
      duration: "4 camas, 1 banheiro, 6 visitantes",
      type: "semanas"
    },
    {
      title: "Paris, França",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
      price: "R$ 7.999",
      address: "Av. Champs-Élysées, 1.030 - Paris, França",
      duration: "3 camas, 2 banheiro, 4 visitantes",
      type: "semanas"
    },
    {
      title: "Dubai, EAU",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      price: "R$ 9.999",
      address: "Sheikh Zayed Road, Dubai - Emirados Árabes Unidos",
      duration: "2 camas, 2 banheiro, 3 visitantes",
      type: "semanas"
    },
    {
      title: "Hotel Copacabana Palace",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      price: "R$ 1.200/diária",
      address: "Av. Atlântica, 1702 - Copacabana, Rio de Janeiro - RJ",
      duration: "1 cama, 1 banheiro, 2 visitantes",
      type: "diarias"
    },
    {
      title: "Resort All-Inclusive Cancún",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      price: "R$ 980/diária",
      address: "Zona Hoteleira, Cancún - México",
      duration: "2 camas, 1 banheiro, 4 visitantes",
      type: "diarias"
    },
    {
      title: "São Paulo - Nova York",
      image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      price: "R$ 3.999",
      address: "GRU → JFK, Ida e Volta",
      duration: "Duração: 10h, Econômica",
      type: "voos"
    },
    {
      title: "Rio de Janeiro - Lisboa",
      image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      price: "R$ 4.500",
      address: "GIG → LIS, Ida e Volta",
      duration: "Duração: 9h30, Econômica",
      type: "voos"
    }
  ];

  const handleCardClick = (destination: Destination) => {
    setSelectedDestination(destination);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const filteredDestinations = destinations.filter(
    (destination) => destination.type === activeTab
  );

  return (
    <div id="tab" className=" bg-white">
      <div className=" py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#1A1F2C] mb-4">Destinos Disponíves</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore destinos incríveis e planeje sua próxima aventura com nossos cartões de viagem detalhados.
            </p>
          </div>
          
          <Tabs  defaultValue="semanas" onValueChange={handleTabChange} className="mb-8">
            <div className="flex flex-col md:flex md:justify-center ">
              <TabsList className="mb-8">
                <TabsTrigger value="semanas" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Semanas Matka</span>
                </TabsTrigger>
                <TabsTrigger value="diarias" className="flex items-center gap-2">
                  <Hotel className="h-4 w-4" />
                  <span>Diárias Avulsas</span>
                </TabsTrigger>
                <TabsTrigger value="voos" className="flex items-center gap-2">
                  <Plane className="h-4 w-4" />
                  <span>Voos Matka</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="semanas">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDestinations.map((destination, index) => (
                  <TravelCard
                    key={`semanas-${index}`}
                    title={destination.title}
                    image={destination.image}
                    price={destination.price}
                    address={destination.address}
                    duration={destination.duration}
                    onClick={() => handleCardClick(destination)}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="diarias">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDestinations.map((destination, index) => (
                  <TravelCard
                    key={`diarias-${index}`}
                    title={destination.title}
                    image={destination.image}
                    price={destination.price}
                    address={destination.address}
                    duration={destination.duration}
                    onClick={() => handleCardClick(destination)}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="voos">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDestinations.map((destination, index) => (
                  <TravelCard
                    key={`voos-${index}`}
                    title={destination.title}
                    image={destination.image}
                    price={destination.price}
                    address={destination.address}
                    duration={destination.duration}
                    onClick={() => handleCardClick(destination)}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <DestinationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        destination={selectedDestination}
      />
    </div>
  );
};

export default TravelCards;
