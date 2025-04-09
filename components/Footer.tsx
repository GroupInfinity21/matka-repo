import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#6e2a43] border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg mb-4">Matka</h3>
            <p className="text-white">
              Sua agência de viagens de luxo, oferecendo experiências únicas e inesquecíveis.
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-lg mb-4">Destinos</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-white hover:text-primary">Europa</Link></li>
              <li><Link href="#" className="text-white hover:text-primary">Ásia</Link></li>
              <li><Link href="#" className="text-white hover:text-primary">Américas</Link></li>
              <li><Link href="#" className="text-white hover:text-primary">Oceania</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-white hover:text-primary">Sobre Nós</Link></li>
              <li><Link href="#" className="text-white hover:text-primary">Contato</Link></li>
              <li><Link href="#" className="text-white hover:text-primary">Blog</Link></li>
              <li><Link href="#" className="text-white hover:text-primary">Carreiras</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-primary">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-white hover:text-primary">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-white hover:text-primary">
                <Twitter className="w-6 h-6" />
              </Link>
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