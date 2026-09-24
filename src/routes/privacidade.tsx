import { createFileRoute, Link } from "@tanstack/react-router";
import { WhatsappIcon } from "@/components/WhatsappIcon";

import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL, SITE_URL, WHATSAPP_URL } from "@/config";
import { Wordmark } from "./index";

const TITLE = "Política de Privacidade | Ana Justino Viagens";
const DESC =
  "Como a Ana Justino Viagens recolhe, usa e protege os teus dados pessoais, de acordo com o RGPD.";

export const Route = createFileRoute("/privacidade")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
      { property: "og:url", content: `${SITE_URL}/privacidade` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/privacidade` }],
  }),
});

const navItems = [
  { hash: "sobre", label: "Sobre mim" },
  { hash: "viagens", label: "Viagens" },
  { hash: "como-funciona", label: "Como funciona" },
  { hash: "contacto", label: "Contacto" },
];

function PrivacyPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="site-header">
        <div className="site-container flex h-[76px] items-center justify-between">
          <Link to="/" className="shrink-0" aria-label="Ana Justino Viagens, voltar ao início">
            <Wordmark compact />
          </Link>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
            {navItems.map((item) => (
              <Link key={item.hash} className="nav-link" to="/" hash={item.hash}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Button asChild size="lg">
            <Link to="/" hash="contacto">Pedir orçamento</Link>
          </Button>
        </div>
      </header>

      <main className="site-container max-w-3xl pb-24 pt-36">
        <p className="eyebrow">RGPD</p>
        <h1 className="section-title">Política de Privacidade</h1>
        <div className="mt-10 space-y-8 leading-7 text-muted-foreground">
          <section>
            <h2 className="mb-2 font-display text-2xl text-foreground">Quem sou</h2>
            <p>
              Chamo-me Ana Justino e sou consultora de viagens independente da rede iCliGo (RNAVT 3301), a
              trabalhar a partir da Lousã, Coimbra, com a marca Ana Justino Viagens. Sou a responsável pelo
              tratamento dos dados que me envias.
            </p>
          </section>
          <section>
            <h2 className="mb-2 font-display text-2xl text-foreground">Que dados recolho</h2>
            <p>
              Através do formulário de pedido de orçamento recolho o teu nome, email, telemóvel (opcional) e os
              detalhes da viagem que partilhas: tipo de viagem, destino, datas, número de pessoas, orçamento e mensagem.
            </p>
          </section>
          <section>
            <h2 className="mb-2 font-display text-2xl text-foreground">Para que servem</h2>
            <p>Uso estes dados apenas para responder ao teu pedido de orçamento e falar contigo sobre a tua viagem.</p>
          </section>
          <section>
            <h2 className="mb-2 font-display text-2xl text-foreground">Como é processado o formulário</h2>
            <p>
              O envio do formulário é processado pelo serviço Web3Forms, que apenas encaminha a tua mensagem para o
              meu email.
            </p>
          </section>
          <section>
            <h2 className="mb-2 font-display text-2xl text-foreground">Partilha de dados</h2>
            <p>Os teus dados não são vendidos nem partilhados com terceiros para fins de marketing.</p>
          </section>
          <section>
            <h2 className="mb-2 font-display text-2xl text-foreground">Durante quanto tempo</h2>
            <p>Guardo os teus dados apenas o tempo necessário para responder ao teu pedido.</p>
          </section>
          <section>
            <h2 className="mb-2 font-display text-2xl text-foreground">Cookies</h2>
            <p>
              Este site não utiliza cookies de rastreio, de análise ou de publicidade. Apenas é guardada
              temporariamente no teu navegador informação técnica necessária ao funcionamento da página (como a
              posição de scroll), que é apagada quando fechas o separador. As fontes tipográficas são alojadas no
              próprio site, sem ligações a serviços externos.
            </p>
          </section>
          <section>
            <h2 className="mb-2 font-display text-2xl text-foreground">Os teus direitos</h2>
            <p>
              Podes pedir a qualquer momento acesso, correção ou eliminação dos teus dados. Basta escreveres para{" "}
              <a className="footer-link text-foreground" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              Tens também o direito de apresentar reclamação à Comissão Nacional de Proteção de Dados (CNPD).
              {" "}Em caso de litígio, o consumidor pode recorrer a uma Entidade de Resolução Alternativa de Litígios de consumo. Mais informações no Portal do Consumidor:{" "}
              <a className="footer-link text-foreground" href="https://www.consumidor.gov.pt" target="_blank" rel="noreferrer">www.consumidor.gov.pt</a>
            </p>
          </section>
        </div>
      </main>

      <footer className="bg-background py-10">
        <div className="site-container flex flex-col items-center gap-7 text-center md:flex-row md:justify-between md:text-left">
          <Wordmark compact />
          <p className="max-w-sm text-sm leading-6 text-muted-foreground">Ana Justino Viagens · Consultora de viagens iCliGo · RNAVT 3301<br />© 2026</p>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground md:items-end">
            <Link className="footer-link" to="/privacidade">Política de Privacidade</Link>
            <a className="footer-link" href="https://www.livroreclamacoes.pt" target="_blank" rel="noreferrer">Livro de Reclamações</a>
            <a className="footer-link" href="https://oteunegociodigital.pt" target="_blank" rel="noreferrer">Site criado por O teu negócio digital</a>
          </div>
        </div>
        <p className="site-container mt-8 border-t pt-6 text-center text-xs leading-5 text-muted-foreground">
          Em caso de litígio, o consumidor pode recorrer a uma Entidade de Resolução Alternativa de Litígios de consumo. Mais informações no Portal do Consumidor:{" "}
          <a className="footer-link" href="https://www.consumidor.gov.pt" target="_blank" rel="noreferrer">www.consumidor.gov.pt</a>
        </p>
      </footer>

      <a className="whatsapp-float" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Fala comigo no WhatsApp" title="Fala comigo no WhatsApp">
        <WhatsappIcon />
      </a>
    </div>
  );
}
