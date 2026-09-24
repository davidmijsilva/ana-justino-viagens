import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  HeartHandshake,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Plane,
  ShieldCheck,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";
import { type FormEvent, useEffect, useState } from "react";
import { z } from "zod";

import anaPortrait from "@/assets/ana-justino.jpg";
import heroImage from "@/assets/hero-mediterraneo.jpg";
import coupleImage from "@/assets/viagem-a-dois.jpg";
import friendsImage from "@/assets/viagem-amigos.jpg";
import getawayImage from "@/assets/viagem-escapadinha.jpg";
import familyImage from "@/assets/viagem-familia.jpg";
import honeymoonImage from "@/assets/viagem-lua-de-mel.jpg";
import womenImage from "@/assets/viagem-mulheres.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT_EMAIL, SITE_URL, WHATSAPP_NUMBER, WHATSAPP_URL } from "@/config";

const WEB3FORMS_ACCESS_KEY = "a647ea37-bdf7-419f-856b-28aa92764002";

const formSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(30),
  tripType: z.string().max(80),
  destination: z.string().trim().max(150),
  dates: z.string().trim().max(100),
  people: z.coerce.number().int().min(1).max(100),
  budget: z.string().max(80),
  message: z.string().trim().max(1500),
  consent: z.literal("on"),
});

type SubmitState = "idle" | "sending" | "success" | "error";

const trips = [
  {
    title: "Lua de mel",
    description: "O início da vossa história, num destino à altura.",
    image: honeymoonImage,
    alt: "Casal em lua de mel a caminhar numa praia tropical ao pôr do sol",
  },
  {
    title: "Viagens a dois",
    description: "Tempo só vosso, longe da rotina.",
    image: coupleImage,
    alt: "Casal a passear numa vila mediterrânica junto ao mar",
  },
  {
    title: "Viagens com amigos",
    description: "As melhores histórias contam-se em grupo.",
    image: friendsImage,
    alt: "Grupo de amigos num miradouro com vista para o mar",
  },
  {
    title: "Viagens só para mulheres",
    description: "Descobrir o mundo com confiança e boa companhia.",
    image: womenImage,
    alt: "Grupo de mulheres a explorar uma rua colorida junto a um lago",
  },
  {
    title: "Férias em família",
    description: "Viagens pensadas para miúdos e graúdos.",
    image: familyImage,
    alt: "Família com crianças a desfrutar de umas férias na praia",
  },
  {
    title: "Escapadinhas",
    description: "Fins de semana e pausas curtas, sem complicações.",
    image: getawayImage,
    alt: "Esplanada e bicicleta numa cidade europeia luminosa",
  },
];

const steps = [
  {
    number: "01",
    title: "Contas-me o que procuras",
    text: "Destino, datas, orçamento e o tipo de viagem que imaginas. Se ainda não sabes para onde ir, ajudo-te a decidir.",
  },
  {
    number: "02",
    title: "Preparo a tua proposta",
    text: "Pesquiso e junto as melhores opções de voos, alojamento e experiências à tua medida.",
  },
  {
    number: "03",
    title: "Ajustamos juntos",
    text: "Afinamos cada detalhe até estar exatamente como queres.",
  },
  {
    number: "04",
    title: "Boa viagem!",
    text: "Tratas das malas, eu trato do resto.",
  },
];

const reasons = [
  {
    icon: UserRound,
    title: "Atendimento pessoal",
    text: "Falas sempre com a mesma pessoa, do início ao fim.",
  },
  {
    icon: Sparkles,
    title: "Planeado ao pormenor",
    text: "Cada viagem é pensada para ti, não tirada de um catálogo.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança de uma agência licenciada",
    text: "Trabalho com a rede iCliGo, agência registada com o RNAVT 3301.",
  },
  {
    icon: HeartHandshake,
    title: "Orçamento sem compromisso",
    text: "Pedes, comparas e só decides quando tiveres a certeza.",
  },
];

export { Wordmark };

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ana Justino Viagens | Consultora de viagens na Lousã" },
      {
        name: "description",
        content:
          "Viagens à medida, planeadas ao pormenor. Consultora de viagens iCliGo (RNAVT 3301) na Lousã, Coimbra. Pede o teu orçamento grátis.",
      },
      { property: "og:title", content: "Ana Justino Viagens | Consultora de viagens" },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
      { name: "twitter:title", content: "Ana Justino Viagens | Consultora de viagens" },
      {
        property: "og:description",
        content:
          "Viagens à medida, planeadas ao pormenor. Consultora de viagens iCliGo (RNAVT 3301) na Lousã, Coimbra. Pede o teu orçamento grátis.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
  }),
});

function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`wordmark ${compact ? "wordmark-compact" : ""}`} aria-label="Ana Justino Viagens">
      <span className="wordmark-main">anajustino</span>
      <span className="wordmark-sub">VIAGENS</span>
      <svg className="wordmark-plane" viewBox="0 0 96 42" aria-hidden="true">
        <path d="M2 34C20 35 24 8 55 13C69 15 70 30 84 22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeDasharray="3.5 4.5" />
        <path d="m82 17 12-7-5 13-3-4-4-2Z" fill="currentColor" />
      </svg>
    </span>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [formMessage, setFormMessage] = useState("");
  const formattedWhatsapp = `+${WHATSAPP_NUMBER.slice(0, 3)} ${WHATSAPP_NUMBER.slice(3, 6)} ${WHATSAPP_NUMBER.slice(6, 9)} ${WHATSAPP_NUMBER.slice(9)}`;

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("sending");
    setFormMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const parsed = formSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone") ?? "",
      tripType: formData.get("tripType"),
      destination: formData.get("destination") ?? "",
      dates: formData.get("dates") ?? "",
      people: formData.get("people"),
      budget: formData.get("budget"),
      message: formData.get("message") ?? "",
      consent: formData.get("consent"),
    });

    if (!parsed.success) {
      setSubmitState("error");
      setFormMessage("Confirma os campos obrigatórios e tenta novamente.");
      return;
    }

    const d = parsed.data;
    const orDash = (v: unknown) => (typeof v === "string" && v.trim() ? v.trim() : "—");
    const payload = new FormData();
    payload.append("access_key", WEB3FORMS_ACCESS_KEY);
    payload.append("subject", "Novo pedido de orçamento — site Ana Justino Viagens");
    payload.append("from_name", "Site Ana Justino Viagens");
    payload.append("name", String(d.name));
    payload.append("email", String(d.email));
    payload.append("replyto", String(d.email));
    payload.append("Telefone", orDash(d.phone));
    payload.append("Tipo de viagem", String(d.tripType));
    payload.append("Destino", orDash(d.destination));
    payload.append("Datas", orDash(d.dates));
    payload.append("Pessoas", String(d.people));
    payload.append("Valor por pessoa", String(d.budget));
    payload.append("Mensagem", orDash(d.message));
    payload.append("Privacidade aceite", "Sim");
    const botcheck = formData.get("botcheck");
    payload.append("botcheck", typeof botcheck === "string" ? botcheck : "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });
      const result = (await response.json()) as { success?: boolean; message?: string };
      if (!response.ok || !result.success) throw new Error(result.message || "Falha no envio");
      form.reset();
      setSubmitState("success");
      setFormMessage("Obrigada! Recebi o teu pedido e respondo-te em breve.");
    } catch {
      setSubmitState("error");
      setFormMessage("Não foi possível enviar agora. Tenta novamente ou fala comigo diretamente.");
    }
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="site-header">
        <div className="site-container flex h-[76px] items-center justify-between">
          <a href="#inicio" onClick={closeMenu} className="shrink-0" aria-label="Ana Justino Viagens — início">
            <Wordmark compact />
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
            <a className="nav-link" href="#sobre">Sobre mim</a>
            <a className="nav-link" href="#viagens">Viagens</a>
            <a className="nav-link" href="#como-funciona">Como funciona</a>
            <a className="nav-link" href="#contacto">Contacto</a>
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild className="hidden sm:inline-flex" size="lg">
              <a href="#contacto">Pedir orçamento</a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {menuOpen && (
          <nav id="mobile-menu" className="mobile-menu" aria-label="Navegação móvel">
            <a href="#sobre" onClick={closeMenu}>Sobre mim</a>
            <a href="#viagens" onClick={closeMenu}>Viagens</a>
            <a href="#como-funciona" onClick={closeMenu}>Como funciona</a>
            <a href="#contacto" onClick={closeMenu}>Contacto</a>
            <Button asChild size="lg" className="mt-2 w-full">
              <a href="#contacto" onClick={closeMenu}>Pedir orçamento</a>
            </Button>
          </nav>
        )}
      </header>

      <main>
        <section id="inicio" className="hero-section" aria-labelledby="hero-title">
          <img
            src={heroImage}
            alt="Costa mediterrânica banhada pela luz dourada do pôr do sol"
            className="hero-image"
            width={1600}
            height={1008}
            fetchPriority="high"
          />
          <div className="hero-overlay" />
          <div className="hero-inner site-container relative z-10 flex items-end pb-16 pt-32 md:items-center md:pb-24 md:pt-28">
            <div className="hero-content">
              <p className="eyebrow eyebrow-hero">Viagens desenhadas contigo</p>
              <h1 id="hero-title" className="hero-title">
                A tua viagem, planeada ao pormenor, pensada para ti.
              </h1>
              <p className="hero-copy">
                Sou a Ana, consultora de viagens. Trato de tudo — do voo ao último detalhe — para que só te preocupes em aproveitar.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-12 px-6 text-base">
                  <a href="#contacto">Pedir orçamento grátis <ArrowRight /></a>
                </Button>
                <Button asChild variant="heroOutline" size="lg" className="h-12 px-6 text-base">
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                    <MessageCircle /> Falar comigo no WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="section-pad scroll-mt-20">
          <div className="site-container grid items-center gap-12 md:grid-cols-[0.88fr_1.12fr] lg:gap-24">
            <div className="portrait-wrap" data-reveal>
              <img
                src={anaPortrait}
                alt="Ana Justino, consultora de viagens, na sua secretária na Lousã"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
                width={1254}
                height={1254}
              />
              <span className="portrait-caption">A tua viagem começa numa conversa.</span>
            </div>
            <div data-reveal>
              <p className="eyebrow">Sobre mim</p>
              <h2 className="section-title">Olá, sou a Ana</h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground md:text-lg">
                <p>Sempre acreditei que viajar é colecionar memórias. Por isso decidi fazer daquilo que mais gosto a minha profissão: ajudar-te a planear viagens à tua medida, com a atenção que só um atendimento pessoal consegue dar.</p>
                <p>Trabalho a partir da Lousã, mas organizo viagens para qualquer lado do mundo. Falas sempre comigo — do primeiro contacto até ao regresso a casa.</p>
              </div>
              <div className="trust-seal"><Check /> Consultora de viagens iCliGo · RNAVT 3301</div>
            </div>
          </div>
        </section>

        <section id="viagens" className="section-pad scroll-mt-20 bg-secondary/45">
          <div className="site-container">
            <div className="mb-10 text-center md:mb-14" data-reveal>
              <p className="eyebrow">O mundo à tua maneira</p>
              <h2 className="section-title">Viagens à tua medida</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {trips.map((trip, index) => (
                <article className="travel-card" data-reveal key={trip.title} style={{ transitionDelay: `${(index % 3) * 80}ms` }}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={trip.image} alt={trip.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={1200} height={800} />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-medium">{trip.title}</h3>
                    <p className="mt-2 leading-6 text-muted-foreground">{trip.description}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-10 text-center text-sm text-muted-foreground">E muito mais — conta-me a tua ideia.</p>
          </div>
        </section>

        <section id="como-funciona" className="section-pad scroll-mt-20">
          <div className="site-container">
            <div className="mb-12 max-w-xl" data-reveal>
              <p className="eyebrow">Simples e pessoal</p>
              <h2 className="section-title">Como funciona</h2>
            </div>
            <ol className="steps-grid">
              {steps.map((step, index) => (
                <li className="step-item" data-reveal key={step.number} style={{ transitionDelay: `${index * 70}ms` }}>
                  <span className="step-number">{step.number}</span>
                  <h3 className="mt-5 font-display text-2xl font-medium">{step.title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section-pad border-y border-border bg-surface" aria-labelledby="porque-title">
          <div className="site-container">
            <div className="mb-12 text-center" data-reveal>
              <p className="eyebrow">Viaja sem preocupações</p>
              <h2 id="porque-title" className="section-title">Porquê reservar comigo</h2>
            </div>
            <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <article className="reason-item" data-reveal key={reason.title} style={{ transitionDelay: `${index * 70}ms` }}>
                    <span className="reason-icon"><Icon /></span>
                    <h3 className="font-display text-2xl font-medium leading-tight">{reason.title}</h3>
                    <p className="mt-3 leading-7 text-muted-foreground">{reason.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Espaço de extensão: uma futura secção de testemunhos entra aqui. */}

        <section id="contacto" className="section-pad scroll-mt-20 bg-foreground text-background">
          <div className="site-container">
            <div className="mb-12 max-w-2xl" data-reveal>
              <p className="eyebrow text-primary">Vamos conversar</p>
              <h2 className="section-title text-background">Para onde vamos a seguir?</h2>
              <p className="mt-5 text-lg leading-8 text-background/70">
                Conta-me a tua ideia de viagem. O orçamento é gratuito e sem compromisso — respondo-te o mais depressa possível.
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20">
              <form className="contact-form" onSubmit={handleSubmit} noValidate data-reveal>
                <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                <div className="form-grid">
                  <FormField label="Nome" htmlFor="name" required>
                    <Input id="name" name="name" required maxLength={100} autoComplete="name" />
                  </FormField>
                  <FormField label="Email" htmlFor="email" required>
                    <Input id="email" name="email" type="email" required maxLength={255} autoComplete="email" />
                  </FormField>
                  <FormField label="Telemóvel" htmlFor="phone">
                    <Input id="phone" name="phone" type="tel" maxLength={30} autoComplete="tel" />
                  </FormField>
                  <FormField label="Tipo de viagem" htmlFor="tripType" required>
                    <select id="tripType" name="tripType" className="form-control" required defaultValue="">
                      <option value="" disabled>Seleciona uma opção</option>
                      <option>Lua de mel</option><option>Viagem a dois</option><option>Viagem com amigos</option><option>Viagem só para mulheres</option><option>Férias em família</option><option>Escapadinha</option><option>Outra</option>
                    </select>
                  </FormField>
                  <FormField label="Destino que imaginas" htmlFor="destination">
                    <Input id="destination" name="destination" maxLength={150} placeholder="Ainda não sei? Não faz mal!" />
                  </FormField>
                  <FormField label="Datas aproximadas" htmlFor="dates">
                    <Input id="dates" name="dates" maxLength={100} placeholder="Ex.: setembro de 2027" />
                  </FormField>
                  <FormField label="Número de pessoas" htmlFor="people" required>
                    <Input id="people" name="people" type="number" min={1} max={100} required defaultValue={2} />
                  </FormField>
                  <FormField label="Orçamento aproximado por pessoa" htmlFor="budget" required>
                    <select id="budget" name="budget" className="form-control" required defaultValue="">
                      <option value="" disabled>Seleciona uma opção</option>
                      <option>Até 500€</option><option>500€–1.000€</option><option>1.000€–2.000€</option><option>Mais de 2.000€</option><option>Ainda não sei</option>
                    </select>
                  </FormField>
                  <div className="sm:col-span-2">
                    <FormField label="Mensagem" htmlFor="message">
                      <Textarea id="message" name="message" rows={5} maxLength={1500} placeholder="Conta-me tudo o que já tens em mente…" />
                    </FormField>
                  </div>
                </div>
                <label className="mt-6 flex cursor-pointer items-start gap-3 text-sm leading-6 text-background/75">
                  <input name="consent" type="checkbox" required className="mt-1 size-4 shrink-0 accent-primary" />
                  <span>Li e aceito a <Link to="/privacidade" className="underline underline-offset-4 hover:text-primary">Política de Privacidade</Link></span>
                </label>
                <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <Button type="submit" size="lg" className="h-12 px-7 text-base" disabled={submitState === "sending"}>
                    {submitState === "sending" ? "A enviar…" : "Pedir orçamento grátis"}
                    {submitState !== "sending" && <ArrowRight />}
                  </Button>
                  {formMessage && (
                    <p role="status" className={`max-w-md text-sm leading-6 ${submitState === "success" ? "text-success" : "text-error"}`}>
                      {formMessage}
                    </p>
                  )}
                </div>
              </form>

              <aside className="contact-aside" data-reveal aria-label="Contactos diretos">
                <p className="font-display text-3xl">Preferes falar diretamente?</p>
                <div className="mt-8 space-y-6">
                  <a className="contact-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle /><span><small>WhatsApp</small>{formattedWhatsapp}</span></a>
                  <a className="contact-link" href={`mailto:${CONTACT_EMAIL}`}><Mail /><span><small>Email</small>{CONTACT_EMAIL}</span></a>
                  <a className="contact-link" href="https://www.instagram.com/anajustino0/" target="_blank" rel="noreferrer"><Instagram /><span><small>Instagram</small>@anajustino0</span></a>
                  <div className="contact-link"><MapPin /><span><small>Onde estou</small>Lousã, Coimbra<br />Atendimento online para todo o país</span></div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background py-10">
        <div className="site-container flex flex-col items-center gap-7 text-center md:flex-row md:justify-between md:text-left">
          <Wordmark compact />
          <p className="max-w-sm text-sm leading-6 text-muted-foreground">Ana Justino Viagens — Consultora de viagens iCliGo · RNAVT 3301<br />© 2026</p>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground md:items-end">
            <Link className="footer-link" to="/privacidade">Política de Privacidade</Link>
            <a className="footer-link" href="https://www.livroreclamacoes.pt" target="_blank" rel="noreferrer">Livro de Reclamações</a>
            <a className="footer-link" href="https://oteunegociodigital.pt" target="_blank" rel="noreferrer">Site criado por O teu negócio digital</a>
          </div>
        </div>
      </footer>

      <a className="whatsapp-float" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Falar com a Ana no WhatsApp" title="Falar no WhatsApp">
        <MessageCircle />
      </a>
    </div>
  );
}

function FormField({ label, htmlFor, required, children }: { label: string; htmlFor: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-background/85">
        {label}{required && <span className="text-primary"> *</span>}
      </label>
      {children}
    </div>
  );
}
