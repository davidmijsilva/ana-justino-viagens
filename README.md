# Ana Justino Viagens

Cria um site de uma só página (one-page), em português de Portugal, para "Ana Justino Viagens" — consultora de viagens independente da rede iCliGo, que trabalha a partir da Lousã (Coimbra) para clientes em todo o país.

TOM: pessoal, caloroso, elegante e de confiança. Trata o visitante por "tu". Frases curtas. Nada de linguagem de agência genérica.

IDENTIDADE VISUAL
- Logótipo em texto (wordmark): "anajustino" em minúsculas, fonte sans-serif fina (Raleway Light), e por baixo "VIAGENS" em maiúsculas pequenas com letter-spacing largo. Um pequeno avião com linha tracejada curva a sair do wordmark (SVG simples, inline).
- Cores (define como tokens no design system/tailwind):
  - Fundo principal creme quente #F5EFE6
  - Texto e elementos escuros carvão #1F1F1F
  - Acento dourado suave #C49A5A (botões, linhas, detalhes)
  - Secundária verde-salva #7A8B6F (ícones e pormenores)
- Tipografia: títulos em Cormorant Garamond, corpo em Inter (Google Fonts).
- Estilo: muito espaço em branco, cantos ligeiramente arredondados, sombras suaves, animações de entrada subtis ao fazer scroll. Mobile-first, perfeito no telemóvel.

SECÇÕES (por esta ordem)

1. MENU FIXO NO TOPO
Wordmark à esquerda. Links âncora: Sobre mim · Viagens · Como funciona · Contacto. Botão dourado à direita: "Pedir orçamento" (faz scroll até ao formulário). Menu hambúrguer no telemóvel.

2. HERO
Imagem de fundo de um destino de viagem luminoso (Unsplash, ex.: praia tropical ao pôr do sol ou costa mediterrânica) com overlay escuro suave.
Título: "A tua viagem, planeada ao pormenor, pensada para ti."
Subtítulo: "Sou a Ana, consultora de viagens. Trato de tudo — do voo ao último detalhe — para que só te preocupes em aproveitar."
Botão principal dourado: "Pedir orçamento grátis" (scroll para o formulário)
Botão secundário (contorno): "Falar comigo no WhatsApp"

3. SOBRE MIM (id="sobre")
Duas colunas: à esquerda um espaço para a fotografia retrato da Ana (usa por agora uma imagem placeholder neutra com proporção quadrada, cantos arredondados, e um ficheiro src/assets/ana-justino.jpg fácil de substituir — vou carregar a foto real a seguir). À direita o texto.
Título: "Olá, sou a Ana"
Texto: "Sempre acreditei que viajar é colecionar memórias. Por isso decidi fazer daquilo que mais gosto a minha profissão: ajudar-te a planear viagens à tua medida, com a atenção que só um atendimento pessoal consegue dar.
Trabalho a partir da Lousã, mas organizo viagens para qualquer lado do mundo. Falas sempre comigo — do primeiro contacto até ao regresso a casa."
Pequeno selo por baixo: "Consultora de viagens iCliGo · RNAVT 3301"

4. VIAGENS À TUA MEDIDA (id="viagens")
Título: "Viagens à tua medida"
Grelha de 6 cartões (3x2 desktop, 1 coluna telemóvel), cada um com imagem Unsplash, título e uma linha, com leve zoom na imagem ao passar o rato:
- Lua de mel — "O início da vossa história, num destino à altura."
- Viagens a dois — "Tempo só vosso, longe da rotina."
- Viagens com amigos — "As melhores histórias contam-se em grupo."
- Viagens só para mulheres — "Descobrir o mundo com confiança e boa companhia."
- Férias em família — "Viagens pensadas para miúdos e graúdos."
- Escapadinhas — "Fins de semana e pausas curtas, sem complicações."
Por baixo, texto pequeno centrado: "E muito mais — conta-me a tua ideia."

5. COMO FUNCIONA (id="como-funciona")
4 passos numerados (horizontal no desktop, vertical no telemóvel), números grandes em dourado com Cormorant Garamond:
01 "Contas-me o que procuras" — Destino, datas, orçamento e o tipo de viagem que imaginas. Se ainda não sabes para onde ir, ajudo-te a decidir.
02 "Preparo a tua proposta" — Pesquiso e junto as melhores opções de voos, alojamento e experiências à tua medida.
03 "Ajustamos juntos" — Afinamos cada detalhe até estar exatamente como queres.
04 "Boa viagem!" — Tratas das malas, eu trato do resto.

6. PORQUÊ RESERVAR COMIGO
4 blocos com ícone lucide em verde-salva:
- "Atendimento pessoal" — Falas sempre com a mesma pessoa, do início ao fim.
- "Planeado ao pormenor" — Cada viagem é pensada para ti, não tirada de um catálogo.
- "Segurança de uma agência licenciada" — Trabalho com a rede iCliGo, agência registada com o RNAVT 3301.
- "Orçamento sem compromisso" — Pedes, comparas e só decides quando tiveres a certeza.

(Deixa o código estruturado para ser fácil acrescentar mais tarde uma secção de testemunhos entre esta secção e o formulário — não a cries agora.)

7. PEDIDO DE ORÇAMENTO (id="contacto", fundo carvão #1F1F1F, texto creme)
Título: "Para onde vamos a seguir?"
Texto: "Conta-me a tua ideia de viagem. O orçamento é gratuito e sem compromisso — respondo-te o mais depressa possível."
Formulário simples (campos arredondados, fundo creme):
- Nome (obrigatório)
- Email (obrigatório)
- Telemóvel (opcional)
- Tipo de viagem (select: Lua de mel, Viagem a dois, Viagem com amigos, Viagem só para mulheres, Férias em família, Escapadinha, Outra)
- Destino que imaginas (texto, placeholder "Ainda não sei? Não faz mal!")
- Datas aproximadas (texto)
- Número de pessoas (número)
- Orçamento aproximado por pessoa (select: Até 500€, 500€–1.000€, 1.000€–2.000€, Mais de 2.000€, Ainda não sei)
- Mensagem (textarea, opcional)
- Checkbox obrigatória: "Aceito que os meus dados sejam usados para responder a este pedido."
Botão dourado: "Pedir orçamento grátis"
Envio via Web3Forms (POST para https://api.web3forms.com/submit) com a access_key numa constante WEB3FORMS_ACCESS_KEY = "COLOCAR_CHAVE_AQUI" no topo do componente, subject "Novo pedido de orçamento — site Ana Justino Viagens", e campo honeypot anti-spam. Mostra estado de envio, mensagem de sucesso ("Obrigada! Recebi o teu pedido e respondo-te em breve.") e mensagem de erro.
Ao lado do formulário (desktop) ou por baixo (telemóvel), contactos diretos:
- WhatsApp: +351 900 000 000 (placeholder)
- Email: email@exemplo.pt (placeholder)
- Instagram: @anajustino0 → https://www.instagram.com/anajustino0/
- "Lousã, Coimbra — atendimento online para todo o país"

8. RODAPÉ
Wordmark · "Ana Justino Viagens — Consultora de viagens iCliGo · RNAVT 3301" · © 2026 · link "Livro de Reclamações" (https://www.livroreclamacoes.pt) · "Site criado por O teu negócio digital" com link para https://oteunegociodigital.pt

WHATSAPP
- Todos os botões de WhatsApp e um botão flutuante verde (canto inferior direito) apontam para https://wa.me/351900000000?text=Olá%20Ana%2C%20vi%20o%20teu%20site%20e%20gostava%20de%20pedir%20um%20orçamento. Define o número numa única constante WHATSAPP_NUMBER num ficheiro src/config.ts, junto com o email de contacto, para ser trivial trocar.

SEO
- <html lang="pt-PT">
- Title: "Ana Justino Viagens | Consultora de viagens na Lousã"
- Meta description: "Viagens à medida, planeadas ao pormenor. Consultora de viagens iCliGo (RNAVT 3301) na Lousã, Coimbra. Pede o teu orçamento grátis."
- Open Graph tags, alt descritivo em todas as imagens, HTML semântico, favicon com as iniciais "aj" em dourado sobre creme.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f37b456d-045d-4400-ab85-ea483d1b0eee).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
