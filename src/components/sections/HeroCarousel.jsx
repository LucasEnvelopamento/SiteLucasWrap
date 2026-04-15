import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import ppfImg from '../../assets/ppf.webp';
import wrapImg from '../../assets/wrap.webp';
import tintImg from '../../assets/tint.webp';

const slides = [
  {
    image: ppfImg,
    title: 'PROTEÇÃO INVISÍVEL',
    subtitle: 'PPF (PAINT PROTECTION FILM)',
    description: 'A mais alta tecnologia em proteção de pintura contra riscos, pedras e detritos.',
    cta: 'Saiba Mais',
    link: '#servicos'
  },
  {
    image: wrapImg,
    title: 'ESTILO EXCLUSIVO',
    subtitle: 'ENVELOPAMENTO PREMIUM',
    description: 'Mude a cor e a textura do seu veículo com acabamentos únicos e fibra de carbono real.',
    cta: 'Ver Opções',
    link: '#servicos'
  },
  {
    image: tintImg,
    title: 'CONFORTO E SEGURANÇA',
    subtitle: 'INSULFILM PROFISSIONAL',
    description: 'Redução de calor, proteção UV e máxima privacidade com películas de alta performance.',
    cta: 'Solicitar Orçamento',
    link: 'https://wa.me/5511945427696?text=Olá, gostaria de solicitar um orçamento para Insulfilm Profissional.'
  }
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <section className="relative h-[100dvh] min-h-[650px] w-full overflow-hidden bg-primary">
      <AnimatePresence mode='wait'>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Main Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] scale-110"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          ></div>
          
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>
          <div className="absolute inset-0 bg-black/30"></div>
          
          {/* Content */}
          <div className="relative h-full max-w-7xl mx-auto px-6 sm:px-8 flex flex-col justify-end pb-28 sm:justify-center sm:pb-0 pt-24">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="max-w-2xl"
            >
              <h3 className="text-secondary font-display font-bold tracking-[0.4em] text-sm md:text-base mb-4 uppercase">
                {slides[current].subtitle}
              </h3>
              <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-display font-extrabold italic text-white leading-none mb-4 sm:mb-6">
                {slides[current].title}
              </h1>
              <p className="text-accent text-sm sm:text-lg md:text-xl font-light mb-8 max-w-lg">
                {slides[current].description}
              </p>
              
              <div className="flex flex-row flex-wrap gap-3 sm:gap-4">
                <a href={slides[current].link} className="btn-primary px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-base uppercase tracking-wider text-center">
                  {slides[current].cta}
                </a>
                <a href="#portfolio" className="btn-outline px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-base uppercase tracking-wider backdrop-blur-sm text-center">
                  Galeria
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute bottom-12 right-4 sm:right-12 flex gap-4 z-20">
        <button 
          onClick={prevSlide}
          className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-secondary hover:border-secondary transition-all group"
        >
          <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
        </button>
        <button 
          onClick={nextSlide}
          className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-secondary hover:border-secondary transition-all group"
        >
          <ChevronRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-12 left-4 sm:left-12 flex gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1 transition-all duration-500 rounded-full ${
              current === idx ? 'w-12 bg-secondary' : 'w-6 bg-white/20'
            }`}
          ></button>
        ))}
      </div>

      {/* Decorative Slide Counter */}
      <div className="absolute top-1/2 -right-8 transform -rotate-90 hidden lg:block">
        <span className="text-white/10 text-9xl font-display font-black tracking-tighter">
          0{current + 1}
        </span>
      </div>
    </section>
  );
};

export default HeroCarousel;
