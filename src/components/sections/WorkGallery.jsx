import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../../lib/supabase';

const WorkGallery = () => {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        // Busca a lista de arquivos no bucket 'trabalhos-recentes'
        const { data, error } = await supabase.storage.from('trabalhos-recentes').list('', {
          limit: 12,
          offset: 0,
          sortBy: { column: 'name', order: 'desc' }
        });

        if (error) {
          console.error('Erro na listagem:', error);
          throw error;
        }

        if (data) {
          const list = data.filter(file => file.name !== '.emptyFolderPlaceholder').map(file => {
            const { data: { publicUrl } } = supabase.storage.from('trabalhos-recentes').getPublicUrl(file.name);
            return {
              image: publicUrl,
              title: file.name.split('.')[0].replace(/_/g, ' '),
              category: 'Portfólio'
            };
          });
          setWorks(list);
        }
      } catch (err) {
        console.error('Erro ao carregar galeria:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <section id="portfolio" className="py-32 bg-black overflow-hidden min-h-[600px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-20 text-center lg:text-left flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div>
          <span className="text-secondary font-display font-bold tracking-[0.4em] uppercase text-xs">NOSSA ARTE</span>
          <h2 className="text-4xl md:text-6xl font-display font-black italic mt-4 uppercase text-white">
            TRABALHOS <span className="text-secondary">RECENTES</span>
          </h2>
        </div>
        <p className="text-accent max-w-sm mb-2 text-slate-400">
          Cada projeto é tratado como exclusivo, unindo paixão automotiva e precisão milimétrica.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
        {loading ? (
          // Skeleton loader mais visível
          Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-[450px] bg-white/5 animate-pulse border border-white/10 flex items-center justify-center">
               <span className="text-white/10 text-xs uppercase tracking-widest italic">Carregando...</span>
            </div>
          ))
        ) : (
          <AnimatePresence mode="popLayout">
            {works.length > 0 ? (
              works.map((work, idx) => (
                <motion.div
                  key={work.image}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="group relative h-[450px] overflow-hidden cursor-pointer"
                >
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                    onLoad={(e) => e.target.style.opacity = 1}
                  />
                  
                  {/* Overlay gradiente mais denso */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
                  
                  {/* Conteúdo do Card */}
                  <div className="absolute inset-0 flex flex-col justify-end p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-secondary font-bold text-xs uppercase tracking-[0.3em] mb-3 block transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                      {work.category}
                    </span>
                    <h4 className="text-2xl md:text-3xl font-display font-black italic text-white uppercase leading-tight">
                      {work.title}
                    </h4>
                    
                    {/* Linha decorativa */}
                    <div className="w-12 h-1 bg-secondary mt-6 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-32 text-center bg-white/5 border-y border-white/5">
                <p className="text-accent italic text-lg">Nenhum trabalho recente encontrado no momento.</p>
              </div>
            )}
          </AnimatePresence>
        )}
      </div>

      <div className="mt-20 text-center text-accent/20 text-4xl sm:text-7xl lg:text-[10rem] font-display font-black italic tracking-tighter opacity-30 select-none pointer-events-none uppercase leading-none px-4">
        #QUALIDADE <br className="sm:hidden" /> LUCAS <br className="sm:hidden" /> ENVELOPAMENTO
      </div>
    </section>
  );
};

export default WorkGallery;
