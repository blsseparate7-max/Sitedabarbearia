import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-black/50 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Logo Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block pointer-events-none select-none"
          >
            <img 
              src="/images/logo.png" 
              alt="Logo Legado" 
              className="w-full max-w-[600px] h-auto grayscale" 
            />
          </motion.div>

          {/* Text Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <span className="text-brand-yellow font-bold tracking-widest uppercase text-sm mb-4 block">Nossa História</span>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight uppercase">O LEGADO DA <br/><span className="text-brand-yellow italic">GBCORTES7</span></h2>
            
            <div className="space-y-6 text-white/70 text-lg font-light leading-relaxed">
              <p>
                Minha jornada começou em 2015, aqui em Londrina, no Jardim Ideal. De um jeito simples, mas cheio de sonho e coragem, as primeiras tesouradas e cortes de cabelo aconteceram em um cenário muito especial: o quintal da minha avó, na Rua Jade, nº 76.Aquele espaço humilde era o ponto de encontro de amigos, vizinhos e dos primeiros clientes que acreditaram no meu talento. Cada atendimento ali debaixo do teto da vó carregava a vontade de construir algo grande, sempre prezando pela qualidade e pelo respeito.
              </p>
              <p>
                O tempo passou e Deus me abençoou além do que eu podia imaginar. Em 2021, essa benção divina se concretizou e consegui dar um grande passo: subi para a avenida, mudando para a Rua Tremembés, nº 1560. O que nasceu em um quintal cresceu e se transformou em uma barbearia de referência.Hoje, mantenho a mesma essência acolhedora do início, combinada com um ambiente moderno, lutando diariamente para oferecer o melhor atendimento e a melhor experiência da região. Mais do que cuidar do seu visual, meu objetivo é fazer você se sentir em casa, renovando sua autoestima.Seja bem-vindo à minha história. Venha me visitar no meu endereço na Rua Tremembés e faça parte do meu futuro!
              </p>
              
              <div className="pt-8 grid grid-cols-2 gap-4">
                <div className="bg-brand-black/40 border border-brand-yellow/30 p-6 rounded-2xl text-center">
                  <h4 className="font-black text-3xl text-brand-yellow mb-1 tracking-tighter">3k+</h4>
                  <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Clientes Atendidos</p>
                </div>
                <div className="bg-brand-black/40 border border-brand-yellow/30 p-6 rounded-2xl text-center">
                  <h4 className="font-black text-3xl text-brand-yellow mb-1 tracking-tighter">10 Anos+</h4>
                  <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">No Mercado</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative element background (mobile only or secondary) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-5 pointer-events-none select-none lg:hidden">
        <img 
          src="/images/logo.png" 
          alt="Logo Legado" 
          className="w-[300px] md:w-[500px] h-auto grayscale" 
        />
      </div>
    </section>
  );
}
