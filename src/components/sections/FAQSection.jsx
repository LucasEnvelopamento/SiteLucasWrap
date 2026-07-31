import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const faqs = [
  {
    question: "Qual a diferença entre Envelopamento e PPF?",
    answer: "O Envelopamento é focado em mudança estética (cor e textura), embora ofereça uma leve proteção. O PPF (Paint Protection Film) é uma película transparente de poliuretano focada 100% na proteção extrema contra pedras, riscos e impactos, possuindo até tecnologia de auto-regeneração."
  },
  {
    question: "O envelopamento danifica a pintura original?",
    answer: "Não. Se a pintura for original de fábrica ou repintura de alta qualidade (curada), o envelopamento até protege o verniz contra raios UV e pequenos arranhões. A remoção também não deixa resíduos se feita por profissionais dentro do prazo de garantia."
  },
  {
    question: "Qual a durabilidade dos serviços?",
    answer: "Depende do serviço e material. O Envelopamento premium dura em média de 3 a 5 anos. Já o nosso PPF de alta performance possui garantia de até 7 anos contra amarelamento e rachaduras, dependendo dos cuidados do proprietário."
  },
  {
    question: "Preciso alterar o documento do veículo?",
    answer: "Se o envelopamento alterar mais de 50% da área visível do veículo (sem contar os vidros) para uma cor diferente da que consta no documento, é necessário solicitar a atualização da cor no Detran."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-32 bg-primary relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionTitle 
          eyebrow="Tire suas dúvidas"
          title={<>PERGUNTAS <span className="text-secondary">FREQUENTES</span></>}
          align="center"
        />

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'border-secondary bg-white/5' : 'border-white/10 bg-transparent'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className={`font-display font-bold text-lg md:text-xl transition-colors ${isOpen ? 'text-secondary' : 'text-white'}`}>
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`text-accent transition-transform duration-300 ${isOpen ? 'rotate-180 text-secondary' : ''}`} 
                  />
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 text-slate-300 leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
