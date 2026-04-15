import React, { useState, useEffect } from 'react';
import { Zap, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Serviços', href: '#servicos' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-primary/90 backdrop-blur-xl py-4 shadow-xl' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-secondary rounded-md flex items-center justify-center transform skew-x-[-12deg] transition-transform group-hover:scale-110">
            <Zap className="text-white fill-current transform rotate-12" size={24} />
          </div>
          <span className="text-xl md:text-2xl font-display font-extrabold tracking-tighter italic whitespace-nowrap">
            LUCAS<span className="text-secondary transition-colors group-hover:text-white">ENVELOPAMENTO</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] font-bold text-accent hover:text-secondary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5511945427696"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs uppercase tracking-widest px-8"
          >
            Orçamento
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 py-8 flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg uppercase tracking-widest font-bold text-slate-300 hover:text-secondary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/5511945427696"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full py-4 text-sm uppercase tracking-[0.2em] text-center"
              >
                Agendar Agora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
