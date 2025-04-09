import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import TravelCard, { TravelCardProps } from "./travelCardTemplate";

const destination: TravelCardProps[] = [
  {
    title: "Paris, França",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    price: "R$ 7.999",
    address: 'Av. Aurora Forti Neves, 1.030 - Santa Ifigênia, Olímpia - SP, 15400-000',
    duration: "4 camas, 1 banheiro, 6 visitantezs"
  },
  {
    title: "Dubai, EAU",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    price: "R$ 9.999",
    address: 'Av. Aurora Forti Neves, 1.030 - Santa Ifigênia, Olímpia - SP, 15400-000',
    duration: "4 camas, 1 banheiro, 6 visitantezs"
  },
  {
    title: "Maldivas",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    price: "R$ 12.999",
    address: 'Av. Aurora Forti Neves, 1.030 - Santa Ifigênia, Olímpia - SP, 15400-000',
    duration: "4 camas, 1 banheiro, 6 visitantezs"
  },
  {
    title: "Maldivas",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    price: "R$ 12.999",
    address: 'Av. Aurora Forti Neves, 1.030 - Santa Ifigênia, Olímpia - SP, 15400-000',
    duration: "4 camas, 1 banheiro, 6 visitantezs"
  },
  {
    title: "Maldivas",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    price: "R$ 12.999",
    address: 'Av. Aurora Forti Neves, 1.030 - Santa Ifigênia, Olímpia - SP, 15400-000',
    duration: "4 camas, 1 banheiro, 6 visitantezs"
  },
  {
    title: "Maldivas",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    price: "R$ 12.999",
    address: 'Av. Aurora Forti Neves, 1.030 - Santa Ifigênia, Olímpia - SP, 15400-000',
    duration: "4 camas, 1 banheiro, 6 visitantezs"
  },
  {
    title: "Maldivas",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    price: "R$ 12.999",
    address: 'Av. Aurora Forti Neves, 1.030 - Santa Ifigênia, Olímpia - SP, 15400-000',
    duration: "4 camas, 1 banheiro, 6 visitantezs"
  },
  {
    title: "Maldivas",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    price: "R$ 12.999",
    address: 'Av. Aurora Forti Neves, 1.030 - Santa Ifigênia, Olímpia - SP, 15400-000',
    duration: "4 camas, 1 banheiro, 6 visitantezs"
  },
  {
    title: "Maldivas",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    price: "R$ 12.999",
    address: 'Av. Aurora Forti Neves, 1.030 - Santa Ifigênia, Olímpia - SP, 15400-000',
    duration: "4 camas, 1 banheiro, 6 visitantezs"
  }
];

export function TravelCards() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Destinos Disponíveis</h2>
        
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destination.map((item, index) => (
              <TravelCard
                key={index}
                title={item.title}
                image={item.image}
                price={item.price}
                address={item.address}
                duration={item.duration}
              />
            ))}
          </div>
        </div>
    </div>
      </div>
    </section>
  );
}