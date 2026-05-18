import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scissors, Menu, X, Instagram, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Equipe', href: '#team' },
    { name: 'Serviços', href: '#services' },
    { name: 'Assinaturas', href: '#subscriptions' },
    { name: 'Sobre', href: '#about' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-brand-black/80 backdrop-blur-lg border-b border-white/10 py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="bg-brand-yellow p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
            <Scissors className="w-5 h-5 text-brand-black" />
          </div>
          <span className="text-xl font-bold font-display tracking-tight">
            GB<span className="text-brand-yellow">Cortes7</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-brand-yellow transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/5543999227226?text=Ol%C3%A1%2C%20quero%20agendar%20um%20hor%C3%A1rio."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-yellow text-brand-black px-5 py-2 rounded-full text-sm font-bold hover:bg-brand-gold transition-colors"
          >
            Agendar Agora
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-black/95 border-b border-white/10 p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-white/70 hover:text-brand-yellow"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/5543999227226?text=Ol%C3%A1%2C%20quero%20agendar%20um%20hor%C3%A1rio."
              className="bg-brand-yellow text-brand-black px-6 py-3 rounded-xl font-bold text-center mt-2"
              onClick={() => setIsOpen(false)}
            >
              Agendar Agora
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
