import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, MessageCircle, CheckCircle } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { supabase } from '../../lib/supabase';
import { STORE_PHONE, STORE_PHONE_DISPLAY, STORE_ADDRESS_SHORT } from '../../lib/constants';

const ContactSection = () => {
  const [formState, setFormState] = useState('idle'); // idle | loading | success
  const [phoneError, setPhoneError] = useState('');
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    servico: 'Envelopamento',
    mensagem: ''
  });

  const validatePhone = (val) => {
    const digits = val.replace(/\D/g, '');
    return digits.length >= 10 && digits.length <= 11;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePhone(formData.whatsapp)) {
      setPhoneError('Informe um número de WhatsApp válido (DDD + número).');
      return;
    }

    // Rate Limiting Anti-Spam (60 segundos)
    const lastSent = localStorage.getItem('lastLeadSent');
    if (lastSent && Date.now() - parseInt(lastSent) < 60000) {
      setPhoneError('Por favor, aguarde 1 minuto antes de enviar outra solicitação.');
      return;
    }

    setPhoneError('');
    setFormState('loading');

    try {
      const { error } = await supabase
        .from('leads_contato')
        .insert([
          {
            cliente_nome: formData.nome,
            cliente_whatsapp: formData.whatsapp,
            veiculo_modelo: 'Não informado',
            servico_interesse: formData.servico,
            mensagem: formData.mensagem,
            status: 'Novo'
          }
        ]);

      if (error) {
        console.error("Erro ao salvar lead no Supabase:", error);
      }
    } catch (err) {
      console.error("Exceção ao salvar lead:", err);
    }

    const text = `*NOVA SOLICITAÇÃO DE ORÇAMENTO*%0A%0A` +
                 `*Nome:* ${formData.nome}%0A` +
                 `*WhatsApp:* ${formData.whatsapp}%0A` +
                 `*Serviço:* ${formData.servico}%0A` +
                 `*Mensagem:* ${formData.mensagem}`;

    const whatsappUrl = `https://wa.me/${STORE_PHONE}?text=${text}`;

    setTimeout(() => {
      localStorage.setItem('lastLeadSent', Date.now().toString());
      window.open(whatsappUrl, '_blank');
      setFormState('success');
      setFormData({ nome: '', whatsapp: '', servico: 'Envelopamento', mensagem: '' });
    }, 800);
  };

  return (
    <section id="contato" className="py-32 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Info & Map */}
          <div className="space-y-10">
            <div className="mb-4">
              <SectionTitle 
                eyebrow="ONDE ESTAMOS"
                title={<>VISITE NOSSO <span className="text-secondary">ESTÚDIO</span></>}
                subtitle="Venha conhecer pessoalmente nosso padrão de qualidade e conversar sobre o seu projeto."
                align="left"
              />
            </div>

            {/* Google Maps Embed */}
            <div className="w-full h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.214878028782!2d-46.4172776!3d-23.5247959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce63f91572dbb7%3A0x6b8c6e7a2b0e6e7a!2sR.%20Jo%C3%A3o%20Batista%20de%20Godoy%2C%201068%20-%20Jardim%20das%20Oliveiras%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2008111-430!5e0!3m2!1spt-BR!2sbr!4v1713110000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Lucas Envelopamento"
              ></iframe>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                <MapPin className="text-secondary" />
                <span className="text-sm text-slate-300">
                  {STORE_ADDRESS_SHORT}
                </span>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                <MessageCircle className="text-secondary" />
                <span className="text-sm text-slate-300">
                  WhatsApp Oficial<br />{STORE_PHONE_DISPLAY}
                </span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm relative">
            <h3 className="text-2xl font-display font-black italic text-white mb-8 uppercase">
              SOLICITE UM <span className="text-secondary">ORÇAMENTO</span>
            </h3>

            {formState === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-secondary" size={40} />
                </div>
                <h4 className="text-3xl font-display font-black italic text-white">RECEBEMOS SEU PEDIDO!</h4>
                <p className="text-accent">Nossa equipe entrará em contato com você pelo WhatsApp em breve.</p>
                <button
                  onClick={() => setFormState('idle')}
                  className="btn-outline px-8 py-3 text-sm mt-6"
                >
                  Enviar outra mensagem
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Nome */}
                <div>
                  <label className="block text-xs font-bold text-accent uppercase tracking-widest mb-2">Seu Nome</label>
                  <input
                    required
                    type="text"
                    placeholder="Ex: João Silva"
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  />
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-xs font-bold text-accent uppercase tracking-widest mb-2">WhatsApp</label>
                  <input
                    required
                    type="tel"
                    placeholder="(11) 99999-9999"
                    className={`w-full bg-black/40 border rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-secondary outline-none transition-all ${
                      phoneError ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-secondary'
                    }`}
                    value={formData.whatsapp}
                    onChange={(e) => {
                      setFormData({ ...formData, whatsapp: e.target.value });
                      if (phoneError) setPhoneError('');
                    }}
                  />
                  {phoneError && (
                    <p className="mt-1 text-xs text-red-400 font-medium">{phoneError}</p>
                  )}
                </div>

                {/* Serviço */}
                <div>
                  <label className="block text-xs font-bold text-accent uppercase tracking-widest mb-2">Interesse Principal</label>
                  <div className="relative">
                    <select
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none appearance-none cursor-pointer transition-all"
                      value={formData.servico}
                      onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
                    >
                      <option className="bg-zinc-900" value="Envelopamento">Envelopamento Premium</option>
                      <option className="bg-zinc-900" value="PPF">PPF</option>
                      <option className="bg-zinc-900" value="Insulfilm">Insulfilm Profissional</option>
                      <option className="bg-zinc-900" value="Carbono">Carbono / Detalhes</option>
                    </select>
                    {/* Chevron customizado */}
                    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                      <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Mensagem */}
                <div>
                  <label className="block text-xs font-bold text-accent uppercase tracking-widest mb-2">Detalhes do Veículo / Mensagem</label>
                  <textarea
                    rows="4"
                    placeholder="Ex: BMW M4 2023 - Gostaria de um orçamento para PPF frontal."
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all resize-none"
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  disabled={formState === 'loading'}
                  className="btn-primary w-full py-4 text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  {formState === 'loading' ? (
                    <div className="spinner" />
                  ) : (
                    <>Enviar Solicitação <Send size={18} /></>
                  )}
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
