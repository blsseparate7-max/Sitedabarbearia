import { motion } from 'motion/react';
import { ChevronRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ backgroundImage: `url('/images/fundobarber.jpeg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent" />
        <div className="absolute inset-0 bg-brand-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-2 mb-6 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full border border-white/10">
            <Star className="w-4 h-4 text-brand-yellow fill-brand-yellow" />
            <span className="text-xs font-bold tracking-widest uppercase">Barbearia com 11 Anos no Mercado</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
            Barbearia <br />
            <span className="text-brand-yellow">GBCORTES7</span>
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-white/70 mb-10 font-light leading-relaxed">
            Na <span className="font-bold text-white uppercase italic">GBCortes7</span>, transformamos o seu visual com a arte da barbearia clássica aliada ao design moderno.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/5543999227226?text=Ol%C3%A1%2C%20quero%20agendar%20um%20hor%C3%A1rio."
              className="bg-brand-yellow text-brand-black px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-2 hover:bg-brand-gold transition-colors shadow-2xl shadow-brand-yellow/20"
            >
              AGENDAR MEU HORÁRIO
              <ChevronRight className="w-5 h-5" />
            </motion.a>
            
            <a
              href="#services"
              className="px-10 py-5 rounded-2xl font-bold border border-white/20 hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              VER SERVIÇOS
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative lines */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-yellow/30 to-transparent" />
    </section>
  );
}
