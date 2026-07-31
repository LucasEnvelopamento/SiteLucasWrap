import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { number: "1500", suffix: "+", label: "Veículos Transformados" },
  { number: "15", suffix: " Anos", label: "De Experiência" },
  { number: "99", suffix: "%", label: "Satisfação dos Clientes" },
  { number: "10", suffix: "+", label: "Técnicas Exclusivas" }
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-black border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="space-y-2"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-secondary italic">
                {/* Aqui poderíamos usar uma biblioteca de contador, mas faremos simples e elegante */}
                {stat.number}<span className="text-white text-3xl md:text-4xl lg:text-5xl">{stat.suffix}</span>
              </div>
              <div className="text-accent text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
