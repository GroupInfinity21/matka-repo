import { Plane, Clock, Hotel, Mountain } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Plane,
    title: "Viagem Segura",
    description: "Todas as nossas viagens são cobertas por seguro completo",
    color: "bg-gradient-to-br from-purple-500 to-indigo-600"
  },
  {
    icon: Clock,
    title: "Suporte 24/7",
    description: "Assistência personalizada durante toda sua viagem",
    color: "bg-gradient-to-br from-pink-500 to-rose-500"
  },
  {
    icon: Hotel,
    title: "Hotéis Premium",
    description: "Selecionamos apenas os melhores hotéis 5 estrelas",
    color: "bg-gradient-to-br from-blue-500 to-cyan-600"
  },
  {
    icon: Mountain,
    title: "Experiências Únicas",
    description: "Roteiros exclusivos e personalizados para você",
    color: "bg-gradient-to-br from-amber-400 to-orange-500"
  }
];

export function Features() {
  return (
    <section className="pb-[96px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <Badge variant="outline" className="px-4 py-1 mb-4 bg-white shadow-sm font-medium text-[#ff2085]">
            Benefícios exclusivos
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Por que escolher a <span className="text-[#fe387e]">Matka</span>?
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#6e2a43] to-[#fe387e] rounded-full mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group"
              >
                <div className={`${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" stroke-width={1.5} />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-[#1A1F2C] group-hover:text-[#ff2085] transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}