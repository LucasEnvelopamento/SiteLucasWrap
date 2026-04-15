import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Zap } from 'lucide-react';
import suvImg from '../../assets/suv_finished.webp';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-32 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Image Side */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)]"
            >
              <img src={suvImg} alt="Qualidade Lucas Envelopamento" className="w-full h-auto" />
            </motion.div>
            
            {/* Experience Badge */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute -bottom-10 -right-10 z-20 bg-secondary p-8 rounded-2xl transform rotate-3 shadow-2xl"
            >
              <span className="block text-4xl font-display font-black text-white">+15 ANOS</span>
              <span className="text-white/80 font-bold uppercase tracking-widest text-xs">DE EXTREMA EXPERIÊNCIA</span>
            </motion.div>

            {/* Decorative BG element */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary/10 blur-3xl -z-10"></div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <span className="text-secondary font-display font-bold tracking-[0.4em] uppercase text-xs">A LIDERANÇA</span>
              <h2 className="text-4xl md:text-6xl font-display font-black italic mt-4 mb-6">MAIS DO QUE <span className="text-secondary">PROTEÇÃO</span>, UMA ARTE.</h2>
              <p className="text-accent text-lg leading-relaxed">
                Na <span className="text-white font-bold">Lucas Envelopamento</span>, não apenas aplicamos películas. Nós elevamos o padrão do seu veículo através de processos artesanais e materiais de elite mundial.
              </p>
            </div>

            <div className="space-y-4">
              {[
                'Certificação internacional das melhores marcas',
                'Ambiente climatizado e livre de partículas',
                'Equipamentos de corte digital (Plotter) de alta precisão',
                'Foco total na satisfação e exclusividade'
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                    <CheckCircle2 size={16} className="text-secondary" />
                  </div>
                  <span className="text-white font-medium">{text}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                < Award className="text-secondary mb-3" size={30} />
                <h4 className="text-white font-black italic">QUALIDADE</h4>
                <p className="text-xs text-accent">Padrão internacional de acabamento.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                < Zap className="text-secondary mb-3" size={30} />
                <h4 className="text-white font-black italic">AGILIDADE</h4>
                <p className="text-xs text-accent">Prazos curtos sem perder o foco no detalhe.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
