import React from 'react';
import { Zap, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-secondary rounded flex items-center justify-center transform skew-x-[-12deg]">
              <Zap className="text-white fill-current" size={18} />
            </div>
            <span className="text-lg md:text-xl font-display font-extrabold tracking-tighter italic text-white whitespace-nowrap">
              LUCAS<span className="text-secondary">ENVELOPAMENTO</span>
            </span>
          </div>
          <p className="text-accent text-sm leading-relaxed max-w-xs">
            Referência em estética automotiva premium. Especialistas em proteção, estilo e personalização exclusiva para veículos de alto padrão.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/lucasenvelopamento/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-accent hover:bg-secondary hover:text-white transition-all">
              <Instagram size={20} />
            </a>
            <a href="https://www.youtube.com/channel/UCXr4MK37RkTzTFWLZQuiqjw" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-accent hover:bg-secondary hover:text-white transition-all">
              <Youtube size={20} />
            </a>
            <a href="https://www.tiktok.com/@lucaswrap" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-accent hover:bg-secondary hover:text-white transition-all">
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Navegação</h4>
          <ul className="space-y-4 text-accent text-sm">
            <li><a href="#" className="hover:text-secondary transition-colors">Início</a></li>
            <li><a href="#servicos" className="hover:text-secondary transition-colors">Serviços</a></li>
            <li><a href="#portfolio" className="hover:text-secondary transition-colors">Portfólio</a></li>
            <li><a href="#sobre" className="hover:text-secondary transition-colors">Sobre Nós</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Serviços</h4>
          <ul className="space-y-4 text-accent text-sm">
            <li>Envelopamento Premium</li>
            <li>PPF</li>
            <li>Insulfilm Profissional</li>
            <li>Carbono e Personalização</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Contato</h4>
          <ul className="space-y-4 text-accent text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-secondary flex-shrink-0" />
              <span>Rua João Batista de Godoy, 1068<br/>Jardim das Oliveiras, São Paulo - SP</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-secondary flex-shrink-0" />
              <span>(11) 94542-7696</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-secondary flex-shrink-0" />
              <span>contato@lucasenvelopamento.com.br</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-accent/50">
        <p>© 2026 LUCAS ENVELOPAMENTO. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-accent transition-colors">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
