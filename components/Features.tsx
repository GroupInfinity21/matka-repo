import { Plane, Clock, Hotel, Mountain } from "lucide-react";

const features = [
  {
    icon: Plane,
    title: "Viagem Segura",
    description: "Todas as nossas viagens são cobertas por seguro completo"
  },
  {
    icon: Clock,
    title: "Suporte 24/7",
    description: "Assistência personalizada durante toda sua viagem"
  },
  {
    icon: Hotel,
    title: "Hotéis Premium",
    description: "Selecionamos apenas os melhores hotéis 5 estrelas"
  },
  {
    icon: Mountain,
    title: "Experiências Únicas",
    description: "Roteiros exclusivos e personalizados para você"
  }
];

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Por que escolher a Matka?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50 transition-colors">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-[#c23c6e]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}