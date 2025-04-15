import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";



export function Footer() {
  return (
    <footer id="duvidas" className="bg-[#6e2a43] border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Image
            src={'/logo matka brancapng.png'}
            width={100}
            height={50}
            alt={'Logo matka'}
            className = 'mb-2'
            />
            <p className="text-white">
              Sua agência de viagens de luxo, oferecendo experiências únicas e inesquecíveis.
            </p>
          </div>
        
          
          <div>
            <h3 className="text-white text-lg mb-4">Dúvidas</h3>
            <ul className="space-y-2">
              <li><Link href="/sobrenos" className="text-white hover:text-[#ff776a]">Sobre Nós</Link></li>
              <li><Link href="/termos" className="text-white hover:text-[#ff776a]">Termos e Condições</Link></li>
              <li><Link href="/cancelamento" className="text-white hover:text-[#ff776a]">Política de Cancelamento</Link></li>
              <li><Link href="/privacidade" className="text-white hover:text-[#ff776a]">Política de Privacidade</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg mb-4">Contanto</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white hover:text-primary">
                  <div className="text-white">
                    <div className="flex flex-col mb-2">
                      <div> Matka Hospedagens</div>
                      <div className="font-bold hover:hover:text-[#ff776a]">(83) 99400-8989</div>
                    </div>

                    <div className="flex flex-col">
                      <div>Matka Milhas</div>
                      <div className="font-bold hover:hover:text-[#ff776a]">(83) 98175-0099</div>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
            <a
                href="https://www.facebook.com/people/Matka-Travel/61563305510899/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#ff776a]"
              >
                <Facebook className="w-6 h-6" />
              </a>

                <a
                  href="https://www.instagram.com/matka.travel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#ff776a]"
                >
                  <Instagram className="w-6 h-6" />
                </a>

              <a
                href="https://www.linkedin.com/company/matka-travel/?originalSubdomain=br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#ff776a]"
              >
                   <Linkedin className="w-6 h-6" />
              </a>

            </div>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 text-center text-white">
          <p>&copy; 2024 Matka. Todos os direitos reservados. Desenvolvido por Matheus Duarte</p>
        </div>
      </div>
    </footer>
  );
}