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
            Termos de Uso
          </h1>

          <p className="mb-6 text-gray-700">
            Bem-vindo à Matka Milhas! Ao acessar e usar nosso site, você concorda com os seguintes termos e condições. Se você não concordar com estes termos, pedimos que não utilize nossos serviços.
          </p>

          <h2 className="text-2xl font-semibold text-[#1A1F2C] mt-8 mb-4">
            Aceitação dos Termos
          </h2>
          <p className="mb-6 text-gray-700">
            Ao utilizar nosso site, você declara que leu, entendeu e concorda em cumprir estes Termos de Uso, bem como nossa Política de Privacidade.
          </p>

          <h2 className="text-2xl font-semibold text-[#1A1F2C] mt-8 mb-4">
            Serviços
          </h2>
          <p className="mb-6 text-gray-700">
            A Matka Milhas oferece a venda de passagens aéreas, hospedagens e troca de semanas para proprietários. Todos os serviços estão sujeitos à disponibilidade e às condições específicas de cada fornecedor.
          </p>

          <h2 className="text-2xl font-semibold text-[#1A1F2C] mt-8 mb-4">
            Registro e Conta
          </h2>
          <p className="mb-6 text-gray-700">
            Para utilizar determinados serviços, você pode ser solicitado a criar uma conta. Você concorda em fornecer informações verdadeiras, precisas e completas. É sua responsabilidade manter a confidencialidade de sua senha e informações de conta.
          </p>

          <h2 className="text-2xl font-semibold text-[#1A1F2C] mt-8 mb-4">
            Uso do Site
          </h2>
          <p className="mb-6 text-gray-700">
            Você se compromete a usar nosso site apenas para fins legais e de acordo com todas as leis aplicáveis. É proibido:
          </p>
          <ul className="list-disc list-inside mb-6 text-gray-700">
            <li>Utilizar o site de forma a prejudicar outros usuários.</li>
            <li>Interferir no funcionamento do site ou violar a segurança de qualquer parte.</li>
            <li>Utilizar robôs, spiders ou qualquer outro meio automatizado para acessar o site.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#1A1F2C] mt-8 mb-4">
            Propriedade Intelectual
          </h2>
          <p className="mb-6 text-gray-700">
            Todo o conteúdo disponível em nosso site, incluindo texto, imagens, gráficos e logotipos, é protegido por direitos autorais e outras leis de propriedade intelectual. Você não pode reproduzir, distribuir ou modificar qualquer parte do conteúdo sem nossa autorização prévia por escrito.
          </p>

          <h2 className="text-2xl font-semibold text-[#1A1F2C] mt-8 mb-4">
            Limitação de Responsabilidade
          </h2>
          <p className="mb-6 text-gray-700">
            A Matka Milhas não se responsabiliza por danos diretos, indiretos, acidentais ou consequenciais decorrentes do uso ou da incapacidade de uso do nosso site ou serviços. Nossa responsabilidade é limitada ao máximo permitido pela legislação aplicável.
          </p>

          <h2 className="text-2xl font-semibold text-[#1A1F2C] mt-8 mb-4">
            Alterações nos Termos
          </h2>
          <p className="mb-6 text-gray-700">
            Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. Recomendamos que você revise esta página periodicamente. O uso contínuo do site após quaisquer alterações constitui sua aceitação das novas condições.
          </p>

          <h2 className="text-2xl font-semibold text-[#1A1F2C] mt-8 mb-4">
            Lei Aplicável
          </h2>
          <p className="mb-6 text-gray-700">
            Estes Termos de Uso são regidos pelas leis do Brasil. Qualquer disputa decorrente de ou relacionada a estes termos será resolvida nos tribunais competentes da cidade de João Pessoa, Paraíba, Brasil.
          </p>

          <h2 className="text-2xl font-semibold text-[#1A1F2C] mt-8 mb-4">
            Contato
          </h2>
          <p className="mb-6 text-gray-700">
            Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco:
          </p>
          <p className="mb-6 text-gray-700">
            Matka Milhas<br />
            CNPJ: 44.501.197/0001-18<br />
            contato@matkamilhas.com.br<br />
            (83) 9 98175-0099
          </p>

          <p className="text-center font-bold text-[#6e2a43] mt-12 mb-6">
            Matka Milhas – Onde Suas Viagens Começam!
          </p>
        </div>
      </main>
    </div>
  );
};
