import React from 'react';
import Navbar from './components/layout/Navbar';
import HeroCarousel from './components/sections/HeroCarousel';
import ServicesGrid from './components/sections/ServicesGrid';
import WorkGallery from './components/sections/WorkGallery';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const WHATSAPP_LINK = "https://wa.me/5511945427696";

  return (
    <div className="min-h-screen bg-primary selection:bg-secondary selection:text-white">
      <Navbar />
      
      <main>
        <HeroCarousel />
        <ServicesGrid />
        <WorkGallery />
        <AboutSection />
        <ContactSection />

        {/* CTA Section Final */}
        <section className="py-20 sm:py-32 bg-gradient-to-b from-primary to-black relative overflow-hidden">
          <div className="absolute inset-0 carbon-bg opacity-10"></div>
          
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-secondary font-display font-bold tracking-[0.5em] uppercase text-sm">
                TRANSFORMAÇÃO IMEDIATA
              </h2>
              <h3 className="text-[clamp(2rem,7vw,5rem)] font-display font-black italic text-white leading-tight uppercase">
                SEU CARRO MERECE <br className="hidden xs:block" /> O <span className="text-secondary">MELHOR</span> ACABAMENTO
              </h3>
              <p className="text-accent text-sm sm:text-lg md:text-xl font-light max-w-2xl mx-auto">
                Clique no botão abaixo e fale agora mesmo com o Lucas pelo WhatsApp para um orçamento exclusivo ou visite nossa loja.
              </p>
              
              <div className="pt-8">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-3 sm:gap-4 px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-xl uppercase tracking-widest shadow-[0_20px_50px_rgba(231,158,0,0.3)] hover:shadow-[0_20px_60px_rgba(231,158,0,0.5)] transition-all w-full sm:w-auto justify-center"
                >
                  <MessageCircle size={28} fill="currentColor" />
                  Solicitar Orçamento
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <motion.a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-transform"
      >
        <MessageCircle size={32} fill="currentColor" />
      </motion.a>
    </div>
  );
}

export default App;
