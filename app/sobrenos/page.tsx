import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";

export default function Page () {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="border-b border-gray-200 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <NavigationMenu className="max-w-full justify-start">
            <NavigationMenuList>
              <NavigationMenuItem>
               
              <Link
                 href={'/'}
                 scroll={true}
                 >
                  <span className="text-2xl font-bold text-[#9b87f5]">
                      <Image
                          src={'/MATLA LOGO VETOR 1.png'}
                          width={120}
                          height={120}
                          alt={""}            
                      />
                    </span>
                 </Link>
               
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="flex-1 py-8 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
          <h1 className="text-3xl font-bold text-center text-[#1A1F2C] mb-6">
            Matka Milhas: Transformando Sonhos em Viagens
          </h1>
          
          <p className="mb-6 text-gray-700">
            Bem-vindo à Matka Milhas, sua porta de entrada para experiências inesquecíveis ao redor do mundo! 
            Com o CNPJ 44.501.197/0001-18, somos uma empresa especializada em venda de passagens aéreas, 
            hospedagens e trocas de semanas para proprietários.
          </p>
          
          <h2 className="text-2xl font-semibold text-[#1A1F2C] mt-8 mb-4">
            Nossa Missão
          </h2>
          <p className="mb-6 text-gray-700">
            Na Matka Milhas, acreditamos que viajar é uma das melhores maneiras de criar memórias e explorar 
            novas culturas. Nossa missão é facilitar o acesso a essas experiências, oferecendo preços 
            competitivos e um serviço de qualidade que transforma seus sonhos de viagem em realidade.
          </p>
          
          <h2 className="text-2xl font-semibold text-[#1A1F2C] mt-8 mb-4">
            O que Fazemos
          </h2>
          <p className="mb-4 text-gray-700">
            <strong className="text-[#6e2a43]">Passagens Aéreas:</strong> Oferecemos uma ampla gama de opções de voos, 
            garantindo que você encontre a melhor tarifa e o trajeto que atende às suas necessidades.
          </p>
          <p className="mb-4 text-gray-700">
            <strong className="text-[#6e2a43]">Hospedagens:</strong> Trabalhamos com diversas plataformas para proporcionar 
            as melhores opções de hospedagem, desde hotéis de luxo até pousadas aconchegantes, sempre 
            com a qualidade e conforto que você merece.
          </p>
          <p className="mb-6 text-gray-700">
            <strong className="text-[#6e2a43]">Troca de Semanas:</strong> Para os proprietários que desejam maximizar suas férias, 
            oferecemos um serviço de troca de semanas, permitindo que você aproveite diferentes destinos sem complicações.
          </p>
          
          <h2 className="text-2xl font-semibold text-[#1A1F2C] mt-8 mb-4">
            Nossos Valores
          </h2>
          <p className="mb-2 text-gray-700">
            <strong className="text-[#6e2a43]">Transparência:</strong> Valorizamos a honestidade em todas as nossas interações. 
            Nossos clientes podem confiar que sempre receberão as informações corretas e claras.
          </p>
          <p className="mb-2 text-gray-700">
            <strong className="text-[#6e2a43]">Compromisso:</strong> Estamos comprometidos em oferecer a melhor experiência de viagem, 
            desde o primeiro contato até o retorno para casa.
          </p>
          <p className="mb-6 text-gray-700">
            <strong className="text-[#6e2a43]">Inovação:</strong> Buscamos constantemente novas maneiras de aprimorar nossos serviços e facilitar suas viagens.
          </p>
          
          <h2 className="text-2xl font-semibold text-[#1A1F2C] mt-8 mb-4">
            Nossa Equipe
          </h2>
          <p className="mb-6 text-gray-700">
            Nossa equipe é composta por profissionais apaixonados por viagens, prontos para ajudar você a planejar 
            a viagem dos seus sonhos. Com conhecimento do mercado e atendimento personalizado, estamos aqui para 
            garantir que sua experiência seja perfeita.
          </p>
          
          <h2 className="text-2xl font-semibold text-[#1A1F2C] mt-8 mb-4">
            Entre em Contato
          </h2>
          <p className="mb-6 text-gray-700">
            Se você tiver alguma dúvida ou precisar de assistência, não hesite em entrar em contato conosco. 
            Estamos aqui para ajudar!
          </p>
          
          <p className="text-center font-bold text-[#6e2a43] mt-12 mb-6">
            Matka Milhas – Onde Suas Viagens Começam!
          </p>
        </div>
      </main>
    </div>
  );
};
