# Estrutura de Banco de Dados: Lucas Envelopamento

Este documento define a estrutura de dados (mesmo que inicialmente o site seja estático, preparamos para futura expansão).

## 🗄️ Tabelas Sugeridas

### 1. `leads_contato`
Armazena solicitações de orçamento vindas do site.

| Coluna | Tipo | Descrição |
| :--- | :--- | :--- |
| `id` | UUID (PK) | Identificador único. |
| `cliente_nome` | VARCHAR(100) | Nome do cliente. |
| `cliente_whatsapp` | VARCHAR(20) | Número de contato. |
| `veiculo_modelo` | VARCHAR(100) | Modelo do carro. |
| `servico_interesse` | ENUM | (Wrapping, PPF, Film, Carbon). |
| `mensagem` | TEXT | Detalhes adicionais. |
| `data_solicitacao` | TIMESTAMP | Data/hora do pedido. |
| `status` | VARCHAR(20) | (Novo, Em Atendimento, Finalizado). |

### 2. `trabalhos_recentes`
Tabela que vincula as fotos do bucket com metadados personalizados.

| Coluna | Tipo | Descrição |
| :--- | :--- | :--- |
| `id` | UUID (PK) | Identificador único. |
| `titulo` | VARCHAR(255) | Título personalizado (Ex: BMW M4 - Envelopamento Bronze). |
| `url` | TEXT | URL pública da imagem. |
| `storage_path` | TEXT | Caminho interno no bucket. |
| `created_at` | TIMESTAMP | Data de criação. |

## 📐 Regras de Integridade
- Validar formato de WhatsApp antes da inserção.
- `cliente_nome` e `cliente_whatsapp` são obrigatórios.
- `status` padrão é 'Novo'.

## 🪣 Supabase Storage (Bucket)

### 1. Bucket: `trabalhos-recentes`
Este bucket armazena as fotos dos veículos finalizados para exibição na galeria.

**Configuração:**
- **Público:** Sim
- **Tamanho Máximo:** 5MB por arquivo
- **Tipos permitidos:** `image/webp`, `image/jpeg`, `image/png`

### 2. Políticas de Acesso (RLS)

Para garantir que apenas o administrador possa enviar fotos, mas todos possam ver, aplique os seguintes comandos SQL no editor do Supabase:

```sql
-- 1. Permitir que qualquer pessoa visualize as fotos
CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'trabalhos-recentes');

-- 2. Permitir que o proprietário (autenticado) faça upload
CREATE POLICY "Admin Upload" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'trabalhos-recentes' AND auth.role() = 'authenticated');

-- 3. Permitir que o proprietário (autenticado) delete fotos
CREATE POLICY "Admin Delete" ON storage.objects FOR DELETE USING (bucket_id = 'trabalhos-recentes' AND auth.role() = 'authenticated');
```
