import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Preciso agendar horário?",
    answer: "Sim, trabalhamos com agendamento para garantir que você não pegue fila e receba atenção total. Mas se estiver passando por perto, pode consultar se há brechas!"
  },
  {
    question: "Quais as formas de pagamento?",
    answer: "Aceitamos Pix, cartões de crédito e débito das principais bandeiras e dinheiro."
  },
  {
    question: "Tem estacionamento no local?",
    answer: "Temos estacionamento para nossos clientes, vagas rotativas na frente da barbearia."
  },
  {
    question: "Quanto tempo dura um corte?",
    answer: "Em média 30 minutos. Se for o combo com barba, reserve cerca de 1h15 para uma experiência relaxante completa."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-brand-black/50 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-yellow font-bold tracking-widest uppercase text-sm mb-2 block">Dúvidas</span>
          <h2 className="text-4xl font-black tracking-tight uppercase">Perguntas <span className="text-brand-yellow">Frequentes</span></h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-white/10 rounded-2xl overflow-hidden bg-white/5"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-brand-yellow" />
                ) : (
                  <Plus className="w-5 h-5 text-brand-yellow" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-white/50 leading-relaxed border-t border-white/5 mt-0">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
