import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Michel SG Alves",
    comment: "Cortes de qualidade, atendimento de primeira!",
    rating: 5,
    role: "Cliente fiel há 6 anos"
  },
  {
    name: "Luiz Eduardo",
    comment: "Ótimo atendimento e profissionalismo!",
    rating: 5,
    role: "Cliente fiel há 8 anos"
  },
  {
    name: "Estuarte Silvestre",
    comment: "Corta nota 10 , ainda saímos cheio pra Presença de Deus🙏",
    rating: 5,
    role: "Cliente fiel há 2 anos"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-yellow font-bold tracking-widest uppercase text-sm mb-2 block">Depoimentos</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">O QUE DIZEM NOSSOS <span className="text-white/40 italic">CLIENTES</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 relative group hover:border-brand-yellow/30 transition-colors"
            >
              <div className="absolute top-8 right-8 text-brand-yellow/20 group-hover:text-brand-yellow/40 transition-colors">
                <Quote className="w-10 h-10" />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-yellow text-brand-yellow" />
                ))}
              </div>

              <p className="text-white/70 italic mb-8 leading-relaxed">
                "{t.comment}"
              </p>

              <div>
                <h4 className="font-bold text-lg">{t.name}</h4>
                <p className="text-white/30 text-xs uppercase tracking-widest mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
