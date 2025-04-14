import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import Image from "next/image";

export default function Page () {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="border-b border-gray-200 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <NavigationMenu className="max-w-full justify-start">
            <NavigationMenuList>
              <NavigationMenuItem>
               
                  <span className="text-2xl font-bold text-[#9b87f5]">
                    <Image
                        src={'/MATLA LOGO VETOR 1.png'}
                        width={120}
                        height={120}
                        alt={""}            
                    />
                </span>
               
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>



      
      <main className="flex-1 py-8 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
          <h1 className="text-3xl font-bold text-center text-[#1A1F2C] mb-6">
            Política de Cancelamento
          </h1>

          <p className="text-gray-700 mb-6">
            <strong>Matka (CNPJ: 44.501.197/0001-18)</strong>
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#1A1F2C]">1. Disposições Gerais</h2>
          <p className="mb-4 text-gray-700">
            Esta política regula o processo de desistência, reembolso e remarcação de passagens aéreas e hospedagens adquiridas através da Matka. Ao adquirir qualquer serviço em nosso site, você concorda com os termos abaixo.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#1A1F2C]">2. Cancelamento de Passagens Aéreas</h2>
          <h3 className="text-lg font-medium mt-4 mb-2 text-[#1A1F2C]">2.1. Cancelamento por Iniciativa do Cliente</h3>
          <p className="mb-2 text-gray-700">
            <strong>Prazo de Arrependimento (Art. 49 do CDC):</strong> o cliente pode cancelar a compra em até 7 dias corridos a partir da data da compra, desde que o bilhete não tenha sido utilizado.
          </p>
          <p className="mb-4 text-gray-700">
            <strong>Fora do Prazo:</strong> após os 7 dias, o cancelamento segue as regras tarifárias da companhia aérea, podendo haver multas ou ser não reembolsável.
          </p>

          <h3 className="text-lg font-medium mt-4 mb-2 text-[#1A1F2C]">2.2. Cancelamento pela Companhia Aérea</h3>
          <p className="mb-4 text-gray-700">
            O cliente tem direito ao reembolso integral ou à remarcação gratuita. A companhia deve oferecer assistência conforme a Resolução nº 400 da ANAC e o Código Brasileiro de Aeronáutica.
          </p>

          <h3 className="text-lg font-medium mt-4 mb-2 text-[#1A1F2C]">2.3. Remarcação</h3>
          <p className="mb-4 text-gray-700">
            Sujeita à disponibilidade, aplicação de multas, taxas administrativas e diferenças tarifárias conforme política da companhia aérea.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#1A1F2C]">3. Cancelamento de Hospedagens</h2>
          <h3 className="text-lg font-medium mt-4 mb-2 text-[#1A1F2C]">3.1. Por Parte do Cliente</h3>
          <p className="mb-2 text-gray-700">
            <strong>Até 48h antes do check-in:</strong> reembolso integral.
          </p>
          <p className="mb-4 text-gray-700">
            <strong>Menos de 48h:</strong> multa de até 100% da primeira diária, conforme o estabelecimento.
          </p>

          <h3 className="text-lg font-medium mt-4 mb-2 text-[#1A1F2C]">3.2. No-Show</h3>
          <p className="mb-4 text-gray-700">
            Cobrança integral da primeira diária. O restante da reserva poderá ser cancelado sem reembolso, conforme a política do local.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#1A1F2C]">4. Reembolso</h2>
          <p className="mb-2 text-gray-700">
            Os pedidos serão analisados e processados em até 30 dias corridos após a solicitação.
          </p>
          <p className="mb-2 text-gray-700">
            O reembolso será feito no mesmo meio de pagamento.
          </p>
          <p className="mb-4 text-gray-700">
            Reembolsos com multas terão deduções conforme encargos aplicáveis (multas, diferenças tarifárias etc.).
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#1A1F2C]">5. Casos Fortuitos ou de Força Maior</h2>
          <p className="mb-4 text-gray-700">
            Eventos como pandemias, desastres naturais ou outros poderão permitir cancelamentos ou alterações sem multa, conforme regras de fornecedores e autoridades competentes.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#1A1F2C]">6. Contato para Cancelamentos e Reembolsos</h2>
          <p className="mb-4 text-gray-700">
            Para solicitar cancelamentos, remarcações ou reembolsos, entre em contato pelos canais:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Matka Hospedagens: (83) 99400-8989</li>
            <li>Matka Milhas: E-mail: contato@matka.com.br</li>
          </ul>
        </div>
      </main>
    </div>
  );
};
