import React from 'react';
import { motion } from 'framer-motion';

/**
 * SectionTitle — Componente reutilizável de cabeçalho de seção.
 * @param {string} eyebrow  - Texto pequeno acima do título (ex: "NOSSAS ESPECIALIDADES")
 * @param {string} title    - Título principal com suporte a JSX
 * @param {string} subtitle - Subtítulo/descrição opcional
 * @param {string} align    - 'center' | 'left' (padrão: 'center')
 */
const SectionTitle = ({ eyebrow, title, subtitle, align = 'center' }) => {
  const alignClass = align === 'left' ? 'text-left' : 'text-center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-16 md:mb-20 ${alignClass}`}
    >
      {eyebrow && (
        <span className="inline-block text-secondary font-display font-bold tracking-[0.4em] uppercase text-xs mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="text-4xl md:text-6xl font-display font-black italic text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-accent text-lg font-light max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
