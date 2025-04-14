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
            Política de Privacidade da Matka
            </h1>

            <p className="text-gray-700 mb-6">
            <strong>Matka (CNPJ: 44.501.197/0001-18)</strong>
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#1A1F2C]">1. Informações que Coletamos</h2>
            <p className="mb-4 text-gray-700">
            Coletamos informações pessoais que você nos fornece diretamente, incluindo, mas não se limitando a:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Nome</li>
            <li>Endereço de e-mail</li>
            <li>Número de telefone</li>
            <li>Informações de pagamento</li>
            <li>Documentos de identificação (como RG ou CPF)</li>
            <li>Informações de viagem (datas, destinos, etc.)</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#1A1F2C]">2. Como Utilizamos Seus Dados</h2>
            <p className="mb-4 text-gray-700">
            Utilizamos suas informações para:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Processar suas reservas de passagens aéreas e hospedagens.</li>
            <li>Enviar confirmações e atualizações sobre suas reservas.</li>
            <li>Oferecer atendimento ao cliente.</li>
            <li>Melhorar nossos serviços e personalizar sua experiência.</li>
            <li>Enviar comunicações promocionais, caso você tenha consentido.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#1A1F2C]">3. Base Legal para o Tratamento de Dados</h2>
            <p className="mb-4 text-gray-700">
            A Matka realiza o tratamento de seus dados pessoais com base nas seguintes justificativas legais, conforme disposto na LGPD:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Execução de contrato: para processar suas reservas e fornecer os serviços solicitados (art. 7º, V).</li>
            <li>Consentimento: quando você nos fornece dados para receber comunicações promocionais (art. 7º, I).</li>
            <li>Cumprimento de obrigação legal: para cumprir com exigências legais e regulatórias (art. 7º, II).</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#1A1F2C]">4. Compartilhamento de Dados</h2>
            <p className="mb-4 text-gray-700">
            Seus dados podem ser compartilhados com:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Empresas parceiras que prestam serviços relacionados a suas reservas (companhias aéreas, hotéis, etc.).</li>
            <li>Autoridades legais, se necessário, para cumprir com obrigações legais, conforme estabelecido no Marco Civil da Internet.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#1A1F2C]">5. Segurança dos Dados</h2>
            <p className="mb-4 text-gray-700">
            Adotamos medidas técnicas e administrativas adequadas para proteger seus dados pessoais contra acesso não autorizado, vazamentos ou perdas, em conformidade com as disposições da LGPD (art. 46).
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#1A1F2C]">6. Direitos dos Titulares de Dados</h2>
            <p className="mb-4 text-gray-700">
            Você tem os seguintes direitos em relação aos seus dados pessoais, conforme disposto na LGPD (art. 18):
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Acesso: solicitar informações sobre quais dados pessoais estão sendo processados.</li>
            <li>Correção: solicitar a correção de dados incompletos, inexatos ou desatualizados.</li>
            <li>Exclusão: solicitar a exclusão de seus dados pessoais, quando aplicável.</li>
            <li>Portabilidade: solicitar a transferência de seus dados para outro fornecedor de serviço.</li>
            <li>Revogação do consentimento: a qualquer momento, você pode revogar seu consentimento para o tratamento de seus dados.</li>
            </ul>
            <p className="mb-4 text-gray-700">
            Para exercer esses direitos, entre em contato conosco através do e-mail: contato@matka.com.br
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#1A1F2C]">7. Cookies</h2>
            <p className="mb-4 text-gray-700">
            Utilizamos cookies e tecnologias semelhantes para melhorar a sua experiência em nosso site, conforme previsto no Marco Civil da Internet. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar a funcionalidade do site.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#1A1F2C]">8. Alterações nesta Política</h2>
            <p className="mb-4 text-gray-700">
            Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você a revise com frequência para estar ciente de quaisquer mudanças.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#1A1F2C]">9. Contato</h2>
            <p className="mb-4 text-gray-700">
            Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade, entre em contato conosco:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>E-mail: contato@matka.com.br</li>
            <li>Matka Hospedagens: (83) 99400-8989</li>
            <li>Matka Milhas: (83) 98175-0099</li>
            </ul>
            </div>
        </main>

    </div>
  );
};
