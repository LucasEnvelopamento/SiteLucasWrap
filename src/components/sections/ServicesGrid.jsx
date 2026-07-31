import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Wind, Aperture, Layers, Lock } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const services = [
  {
    icon: Layers,
    title: 'Envelopamento Completo',
    description: 'Mudança total de cor com películas premium (fosco, acetinado, brilho) das melhores marcas do mercado.',
    features: ['Proteção de Pintura', 'Acabamento Premium', 'Garantia de 5 anos']
  },
  {
    icon: Shield,
    title: 'PPF',
    description: 'Película de proteção de pintura transparente ultra-resistente contra impactos de pedras e raspões.',
    features: ['Regeneração Térmica', 'Invisível', '7 Anos de Garantia']
  },
  {
    icon: Wind,
    title: 'Insulfilm Profissional',
    description: 'Películas de alta performance para vidros, reduzindo calor e protegendo o interior contra raios UV.',
    features: ['Redução Térmica', 'Privacidade', 'Fator UV 99%']
  },
  {
    icon: Aperture,
    title: 'Fibra de Carbono',
    description: 'Personalização de peças específicas (teto, aerofólios, retrovisores) com textura de carbono real.',
    features: ['Visual Esportivo', 'Textura 3D', 'Alta Durabilidade']
  },
  {
    icon: Lock,
    title: 'Película Anti-Vandalismo',
    description: 'Aumente a resistência dos vidros contra impactos violentos, protegendo os ocupantes contra invasões.',
    features: ['Segurança Reforçada', 'Resistência a Impacto', 'Transparência']
  },
  {
    icon: Zap,
    title: 'Chrome Delete',
    description: 'Ocultação de detalhes cromados em black-out (preto brilho ou fosco) para um visual mais agressivo.',
    features: ['Visual Moderno', 'Removível', 'Precisão no Recorte']
  }
];

const ServicesGrid = () => {
  return (
    <section id="servicos" className="py-32 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionTitle 
          eyebrow="NOSSAS ESPECIALIDADES"
          title={<>O QUE FAZEMOS <span className="text-secondary">MELHOR</span></>}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden bg-white/5 border border-white/10 p-10 rounded-2xl hover:bg-white/10 transition-all duration-500"
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 group-hover:bg-secondary/20 transition-colors transform translate-x-12 -translate-y-12 rotate-45"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                  <service.icon size={28} className="text-secondary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-display font-extrabold italic mb-4 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-accent text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-white transition-colors">
                      <div className="w-1 h-1 bg-secondary rounded-full"></div>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
