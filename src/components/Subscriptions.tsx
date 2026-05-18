import { motion } from 'motion/react';
import { Check, ShieldCheck, Zap } from 'lucide-react';

const plans = [
  {
    name: "Cabelo",
    price: "R$ 84,99",
    period: "/mês",
    description: "Corte o cabelo quantas vezes você quiser no mês.",
    features: ["Cortes Ilimitados no mês", "10% de desconto em produtos", "10% de desconto em químicas"],
    recommended: false
  },
  {
    name: "Cabelo e Barba",
    price: "R$ 134,99",
    period: "/mês",
    description: "Corte e barba quantas vezes você quiser no mês",
    features: ["Cortes ilimitados", "Barbas Ilimitadas", "10% de desconto em produtos.", "10% de desconto em químicas"],
    recommended: true
  },
  {
    name: "Barba",
    price: "R$ 74,99",
    period: "/mês",
    description: "Faça a barba quantas vezes você quiser no mês.",
    features: ["Barbas Ilimitados", "10% de desconto em produtos.", "10% de desconto em químicas."],
    recommended: false
  }
];

export default function Subscriptions() {
  return (
    <section id="subscriptions" className="py-24 bg-brand-black/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-yellow font-bold tracking-widest uppercase text-sm mb-2 block">NOSSAS ASSINATURAS</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">GB <span className="text-brand-yellow">FLIX</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto mt-4">
            Faça parte do nosso clube e mantenha seu estilo impecável o mês inteiro com economia e praticidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-[2.5rem] border ${
                plan.recommended ? 'bg-brand-yellow/10 border-brand-yellow shadow-2xl shadow-brand-yellow/10' : 'bg-white/5 border-white/10'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-yellow text-brand-black text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  Full
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-black uppercase mb-2">{plan.name}</h3>
                <p className="text-white/40 text-sm">{plan.description}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-5xl font-black text-brand-yellow">{plan.price}</span>
                <span className="text-white/30 font-medium">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                    <Check className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/5543999227226?text=Ol%C3%A1%2C%20tenho%20interesse%20na%20assinatura%20"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-2xl font-black text-center transition-all flex items-center justify-center gap-2 ${
                  plan.recommended 
                    ? 'bg-brand-yellow text-brand-black hover:bg-brand-gold' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                ASSINAR AGORA
                <Zap className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
