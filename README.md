# 🐾 OngPets - Landing Page & Plataforma de Adoção Animal

Uma landing page moderna, fluida e acolhedora criada para a **OngPets**, conectando cães e gatos resgatados a lares cheios de amor e responsabilidade.

---

## ✨ Principais Funcionalidades

### 1. 🔍 Catálogo Interativo e Fluido de Pets
- **Busca em tempo real:** pesquise por nome, raça, cor (ex: *caramelo*, *frajola*, *laranja*) ou traços de personalidade.
- **Filtros completos:**
  - **Espécie:** Todos, Cães ou Gatos.
  - **Idade:** Filhotes (< 1 ano), Jovens (1 a 3 anos), Adultos (3 a 7 anos) e Idosos Sênior (7+ anos).
  - **Porte & Peso:** Pequeno, Médio e Grande.
  - **Cor da Pelagem:** Caramelo/Dourado, Preto/Frajola, Branco/Claro, Laranja/Ruivo, Tricolor/Mesclado.
  - **Sexo:** Machos e Fêmeas.
  - **Toggles Especiais:** "Apenas Favoritos" e "Ideal para Apartamento".
- **Ordenação:** Por relevância, idade (menor ou maior) e nível de energia.

### 2. 🔬 Análise Aprofundada do Pet (Modal de Inspeção)
- **Análise de Idade & Ciclo:** explicação sobre a fase comportamental de acordo com a idade.
- **Análise de Cor & Pelagem:** descrição da pelagem, cor e cuidados de escovação.
- **Métricas Visuais de Temperamento (1 a 5):**
  - Nível de Energia ⚡
  - Nível de Afeto & Carinho 💖
  - Convivência com Crianças 👶
  - Sociabilidade com outros animais 🐕🐈
- **Prontuário de Saúde Garantido:** selos de Castração, Vacinação polivalente e antirrábica, Vermifugação e Microchip.
- **Histórico e Personalidade:** história real do resgate e manias do pet.

### 3. ⚖️ Comparador Lado a Lado
- Permite selecionar **2 pets** no catálogo e abrir uma tabela de comparação direta com fotos, idade, cor, pelagem, porte, energia e adequação ao imóvel.

### 4. 📝 Fluxo Completo de Adoção ("Adotar o Pet")
- Formulário multi-etapas interativo:
  - **Passo 1:** Dados do Tutor (Nome, WhatsApp, E-mail, Cidade/Bairro, Profissão).
  - **Passo 2:** Perfil do Lar & Rotina (Casa/Apartamento com telas, outros animais, rotina).
  - **Passo 3:** Termo de Posse Responsável e compromisso com o bem-estar.
- **Celebração:** Explosão de confetes ao confirmar o pedido.
- **Protocolo Exclusivo:** Geração de código rastreável (ex: `#ONG-PETS-4821`).
- **Botão Direto para o WhatsApp:** Envia mensagem pré-preenchida com o nome do pet e protocolo para a equipe da ONG agilizar a entrevista.

### 5. ❤️ Favoritos e Minhas Adoções
- Persistência em `localStorage` para salvar os pets preferidos e consultar o status das solicitações enviadas a qualquer momento no cabeçalho.

### 6. 🌟 Seções Institucionais Completas
- **Hero Interativo:** com seletor rápido integrado e chamada emocional.
- **Faixa de Estatísticas:** vidas salvas, taxa zero de adoção e índice de adaptação.
- **Como Funciona:** passo a passo visual em 4 etapas (Escolha, Formulário, Entrevista e Boas-Vindas).
- **Sobre a ONG:** 7 anos de atuação, medicina veterinária preventiva e suporte vitalício.
- **Finais Felizes:** depoimentos reais de famílias adotantes com fotos.
- **Como Ajudar / PIX:** botão de cópia de chave PIX com um clique para apoio financeiro e rações.
- **FAQ:** acordeão com as 6 dúvidas mais comuns de adotantes.
- **Rodapé:** contatos, redes sociais e compromisso com a proteção animal.

---

## 🚀 Como Executar o Projeto

Certifique-se de estar na pasta do projeto:
```bash
cd C:\Privado\Projetos\ong-pets
```

### Instalar dependências (caso necessário):
```bash
npm install
```

### Iniciar o servidor de desenvolvimento:
```bash
npm run dev
```
O Vite iniciará o servidor local (geralmente em `http://localhost:5173`). Abra o link no navegador para interagir com o site em tempo real!

### Gerar a build de produção:
```bash
npm run build
```
Os arquivos otimizados prontos para publicação serão gerados na pasta `dist/`.

### Pré-visualizar a build de produção:
```bash
npm run preview
```
### Ou usar o executável do vercel: [Clique aqui](https://ong-pets-tan.vercel.app/)
---

## 🛠️ Tecnologias Utilizadas
- **React 19**
- **TypeScript**
- **Vite 6**
- **Tailwind CSS v4** (com design tokens fluidos e tipografia moderna)
- **Lucide React** (ícones vetoriais modernos)
- **Canvas-Confetti** (efeito comemorativo na conclusão da adoção)
