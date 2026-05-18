import { Scissors, Instagram, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black/95 pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="bg-brand-yellow p-1.5 rounded-lg">
                <Scissors className="w-5 h-5 text-brand-black" />
              </div>
              <span className="text-2xl font-bold font-display tracking-tight text-white uppercase">
                Barbearia <span className="text-brand-yellow">GBCortes7</span>
              </span>
            </div>
            <p className="text-white/40 max-w-md leading-relaxed">
              Obrigado por escolher a GBCortes7. Estamos comprometidos com a excelência e com o seu estilo. Transformando vidas, um corte de cada vez.
            </p>
          </div>

          <div>
             <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Links Rápidos</h4>
             <ul className="space-y-4 text-white/50">
               <li><a href="#home" className="hover:text-brand-yellow transition-colors">Início</a></li>
               <li><a href="#team" className="hover:text-brand-yellow transition-colors">Equipe</a></li>
               <li><a href="#services" className="hover:text-brand-yellow transition-colors">Serviços</a></li>
               <li><a href="#subscriptions" className="hover:text-brand-yellow transition-colors">Assinaturas</a></li>
               <li><a href="#about" className="hover:text-brand-yellow transition-colors">História</a></li>
             </ul>
          </div>

          <div>
             <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Contato</h4>
             <ul className="space-y-4 text-white/50">
               <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-brand-yellow" /> (43) 99922-7226</li>
               <li className="flex items-center gap-3"><Instagram className="w-4 h-4 text-brand-yellow" /> @gbcortes7</li>
               <li className="flex items-start gap-3"><MapPin className="w-4 h-4 text-brand-yellow shrink-0 mt-1" /> Rua Tremembés, 1560 <br/> Jd Ideal - Londrina/PR</li>
             </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/30 font-medium">
          <p>© {new Date().getFullYear()} Barbearia GBCortes7. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
