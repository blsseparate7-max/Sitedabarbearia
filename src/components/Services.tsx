import { motion } from 'motion/react';
import { Scissors, Zap, Award, Smile, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: "Corte de Cabelo",
    price: "R$ 35,00",
    description: "Do clássico ao degrade. Consultoria inclusa para o melhor perfil.",
    icon: Scissors
  },
  {
    title: "Barba",
    price: "R$ 25,00",
    description: "Toalha quente, barba tradicional com navalha..",
    icon: Scissors
  },
    {
    title: "Corte e Barba",
    price: "R$ 55,00",
    description: "Toalha quente, barba tradicional com navalha..",
    icon: Scissors
  },
    {
    title: "Cabelo, Barba e Sobrancelhas",
    price: "R$ 60,00",
    description: "Corte, Barba e Sobrancelhas. Uma experiência completa",
    icon: Scissors,
    recommended: true
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-brand-yellow font-bold tracking-widest uppercase text-sm mb-2 block">Nossos Serviços</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">EXPERIÊNCIA <span className="text-white/40 italic">ÚNICA</span></h2>
          </div>
          <p className="max-w-md text-white/50">
            Confira nosso serviços.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-3xl border transition-all group ${
                service.recommended 
                  ? 'bg-brand-yellow/10 border-brand-yellow shadow-2xl shadow-brand-yellow/10' 
                  : 'bg-white/5 border-white/10 hover:bg-brand-yellow/5 hover:border-brand-yellow/20'
              }`}
            >
              {service.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-yellow text-brand-black text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest flex items-center gap-1 z-10">
                  <ShieldCheck className="w-3 h-3" />
                  Full
                </div>
              )}
              <div className="bg-brand-yellow/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-black transition-colors">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-white/50 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-brand-yellow">{service.price}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-12 rounded-[2.5rem] bg-gradient-to-br from-brand-yellow/20 to-transparent border border-brand-yellow/20 text-center">
          <h3 className="text-3xl font-black mb-4">PRONTO PARA O PRÓXIMO NÍVEL?</h3>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Não perca tempo e garanta seu horário agora mesmo com um de nossos profissionais.
          </p>
          <a
            href="https://wa.me/5543999227226?text=Ol%C3%A1%2C%20quero%20agendar%20um%20hor%C3%A1rio."
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-block bg-brand-yellow text-brand-black px-12 py-4 rounded-2xl font-black hover:bg-brand-gold transition-transform hover:scale-105 active:scale-95"
          >
            AGENDAR VIA WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
}
