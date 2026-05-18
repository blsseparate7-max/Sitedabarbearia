import { motion } from 'motion/react';
import { Instagram, Award, MoveLeft, MoveRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const team = [
  {
    name: "Gabriel Alexandre",
    role: "Proprietário & Master Barber",
	specialty: "Barbeiro Especialista",
    image: "/images/gb.jpeg",
    instagram: "@gbcortes7"
  },
  {
    name: "Henrique Alexandre",
    role: "Barbeiro",
    specialty: "Barbeiro Especialista",
    image: "/images/rick.jpeg",
    instagram: "@riickbarber04"
  },
  {
    name: "Luiz Miguel",
    role: "Barbeiro",
    specialty: "Barbeiro Especialista",
    image: "/images/miguel.jpeg",
    instagram: "@_043.lz"
  },
];

export default function Team() {
  const carousel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <section id="team" className="py-24 bg-brand-black overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-brand-yellow font-bold tracking-widest uppercase text-sm mb-2 block">Nossa Equipe</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">Profissionais da <span className="text-brand-yellow italic">GBCortes7</span></h2>
          </div>
          <div className="flex items-center gap-4 text-white/30 text-sm font-bold uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/5">
            <MoveLeft className="w-4 h-4 animate-pulse" />
            Arraste para o lado
            <MoveRight className="w-4 h-4 animate-pulse" />
          </div>
        </div>
      </div>

      <motion.div 
        ref={carousel} 
        className="cursor-grab active:cursor-grabbing px-6 max-w-[100vw]"
      >
        <motion.div 
          drag="x" 
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-8 w-max"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="w-[300px] md:w-[400px]"
            >
              <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-6 border border-white/10 group">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale transition-transform duration-700 hover:scale-110 pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent">
                  <div className="flex items-center gap-2 text-brand-yellow mb-2">
                    <Award className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">{member.specialty}</span>
                  </div>
                  <a 
                    href={`https://instagram.com/${member.instagram.replace('@', '')}`}
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    <span className="text-sm font-medium">{member.instagram}</span>
                  </a>
                </div>
              </div>

              <div className="text-left px-4">
                <h3 className="text-2xl font-bold uppercase mb-1 tracking-tight">{member.name}</h3>
                <p className="text-brand-yellow text-sm font-bold uppercase tracking-widest">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
