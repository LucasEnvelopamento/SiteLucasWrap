# Lucas Envelopamento - Estética Automotiva Premium

Este é o repositório oficial do site da **Lucas Envelopamento**, uma oficina especializada em estética automotiva de alto padrão localizada em São Paulo. O projeto foi desenvolvido com foco em performance, design premium e conversão.

## 🚀 Tecnologias Utilizadas

- **React.js**: Biblioteca principal para a interface.
- **Vite**: Build tool extremamente rápida para desenvolvimento moderno.
- **Tailwind CSS**: Framework CSS utilitário para um design responsivo e customizado.
- **Framer Motion**: Biblioteca de animações para transições fluidas e interações premium.
- **Supabase**: Backend-as-a-Service utilizado para a Galeria de Trabalhos dinâmicos (Storage).
- **Lucide React**: Conjunto de ícones minimalistas e modernos.

## ✨ Funcionalidades Principais

- **Galeria Dinâmica**: As fotos da seção "Trabalhos Recentes" são carregadas diretamente do Supabase Storage.
- **Design System Customizado**: Paleta de cores baseada em tons de Carbono (#0A0A0A) e Âmbar Dourado (#E79E00).
- **Responsividade Total**: Layout adaptado para todos os dispositivos, com tipografia fluida.
- **Integração WhatsApp**: Botão flutuante e formulários de orçamento integrados para conversão imediata.
- **SEO Otimizado**: Metatags configuradas para melhor visibilidade em motores de busca e redes sociais.

## 🛠️ Como Executar o Projeto Localmente

1. **Clone este repositório**:
   ```bash
   git clone https://github.com/LucasEnvelopamento/SiteLucasWrap.git
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**:
   Crie um arquivo `.env` na raiz do projeto e adicione suas chaves do Supabase:
   ```env
   VITE_SUPABASE_URL=sua_url_do_supabase
   VITE_SUPABASE_ANON_KEY=sua_chave_anon_do_supabase
   ```

4. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

## 📸 Estrutura da Galeria

O site busca imagens no bucket `trabalhos-recentes`. Para adicionar novas fotos, basta fazer o upload direto no painel do Supabase. O site cuidará do redimensionamento e exibição automática.

---

Desenvolvido com foco em excelência e sofisticação. 🏎️✨
