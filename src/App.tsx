import { useMemo } from "react";

type Testimonial = {
  name: string;
  text: string;
};
type Faq = { q: string; a: string };

const testimonials: Testimonial[] = [
  { name: "Amina L.", text: "En une séance, j’ai compris le nœud que je répétais depuis des années. Un soulagement immédiat." },
  { name: "Sarah M.", text: "Je suis repartie avec une clarté concrète et des pas simples à poser. Merci Valérie." },
  { name: "Nadia R.", text: "Je doutais… et j’ai eu un vrai déclic. Doux, puissant, lumineux." },
];

const reasons: string[] = [
  "Tu n’as pas à tout comprendre pour être soulagée.",
  "Tu peux vivre un déclic même si tu doutes de toi.",
  "Tu mérites de retrouver ton énergie et ta clarté.",
  "Tu n’es pas seule — je t’accompagne avec douceur.",
  "La guidance t’éclaire sur l’essentiel à poser maintenant.",
  "Tu peux avancer sans te juger, pas à pas.",
  "Tu gagnes du temps et de la paix intérieure.",
  "Parce que c’est le bon moment pour toi.",
];

const faqs: Faq[] = [
  { q: "Dois-je être spirituelle pour comprendre la séance ?", a: "Non. Je t’explique simplement, avec des mots clairs et concrets, sans jargon." },
  { q: "Est-ce que ça marche à distance ?", a: "Oui. Les lectures se font très bien en visio ; tu reçois la même qualité de guidance." },
  { q: "Combien de temps dure une guidance ?", a: "Environ 30 à 40 minutes, centrées sur ta question/situation du moment." },
  { q: "Puis-je offrir une séance à une amie ?", a: "Oui. Tu peux réserver à son nom ou demander un bon cadeau numérique." },
];

function SectionTitle({
  kicker,
  title,
  center,
}: {
  kicker?: string;
  title: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      {kicker && (
        <p className="uppercase tracking-widest text-brand-300/90 text-xs mb-2">
          {kicker}
        </p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl leading-tight">
        {title}
      </h2>
    </div>
  );
}

function Hero() {
  return (
    <header
      id="top"
      className="relative h-screen w-full overflow-hidden
                 bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat"
    >
      {/* Overlay pour fondu vers le bas */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0b1020]" />

      {/* Navigation */}
      <nav className="relative z-10 max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
        <div className="font-bold">VALÉRIE • Guidance</div>
        <a
          href="#book"
          className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 transition"
        >
          Réserver
        </a>
      </nav>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-2 pb-20 grid gap-8 sm:gap-15 md:grid-cols-2 items-end h-full">
        <div className="glass p-6 sm:p-8 shadow-glow self-center">
          <p className="text-sm uppercase tracking-widest text-brand-200/90 mb-3">
            Témoignage-style
          </p>
          <h1 className="font-display text-4xl sm:text-5xl leading-tight">
            « J’ai enfin compris pourquoi je répétais toujours les mêmes schémas. »
          </h1>
          <p className="mt-4 text-white/80">
            Guidance immédiate, soulagement rapide, clarté émotionnelle.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#how"
              className="px-5 py-3 rounded-full border border-white/30 hover:bg-white/10 transition"
            >
              Comment ça marche ?
            </a>
          </div>

          <div className="mt-6 flex items-center gap-4 text-sm text-white/70">
            <span className="inline-flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              Déjà +200 clientes accompagnées
            </span>
            <span>•</span>
            <span>Satisfaction 4.9/5</span>
          </div>
        </div>

        <div className="md:pb-12">{/* Place pour photo/illustration si besoin */}</div>
      </div>

      {/* Footer Hero */}
      <footer className="relative z-10 pb-6">
        <p className="text-center text-xs text-white/60">
          © 2024 │ HEINLY Académie - Tous droits réservés
        </p>
      </footer>

      {/* Chevron scroll-down */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white/70">
        <a href="#pas" aria-label="Scroll down">
          ▼
        </a>
      </div>
    </header>
  );
}



function PAS() {
  return (
    <section id="pas" className="max-w-6xl mx-auto px-4 py-16 sm:py-20">
      <SectionTitle
        kicker="Système PAS"
        title="Tu te sens perdue, tu tournes en rond, tu doutes…"
        center
      />
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        <div className="glass p-6">
          <h3 className="font-semibold text-lg">Problème</h3>
          <p className="mt-2 text-white/80">
            Tu sens que quelque chose bloque, tu répètes des schémas
            relationnels, tu n’arrives plus à écouter ton intuition.
          </p>
        </div>
        <div className="glass p-6">
          <h3 className="font-semibold text-lg">Agitation</h3>
          <p className="mt-2 text-white/80">
            Fatigue émotionnelle, isolement, anxiété… Tu aimerais enfin y voir
            clair et te sentir apaisée.
          </p>
        </div>
        <div className="glass p-6">
          <h3 className="font-semibold text-lg">Solution</h3>
          <p className="mt-2 text-white/80">
            La <strong>Guidance Akashique</strong> de Valérie — le
            <em> phare dans la brume</em> — pour éclairer ta situation et te
            redonner de l’élan tout de suite.
          </p>
          <a
            href="#book"
            className="mt-4 inline-flex px-4 py-2 rounded-full bg-brand-500 hover:bg-brand-600 transition"
          >
            Réserver une séance
          </a>
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section id="proof" className="max-w-6xl mx-auto px-4 py-14">
      <SectionTitle kicker="Avis" title="Elles en parlent le mieux" center />
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <figure key={i} className="glass p-6">
            <blockquote className="text-white/90">“{t.text}”</blockquote>
            <figcaption className="mt-4 text-sm text-white/70">— {t.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Reasons() {
  return (
    <section id="reasons" className="max-w-6xl mx-auto px-4 py-16 sm:py-20">
      <SectionTitle
        kicker="Pourquoi maintenant"
        title="8 raisons de passer à l’action"
        center
      />
      <ul className="mt-8 grid sm:grid-cols-2 gap-4">
        {reasons.map((r, i) => (
          <li key={i} className="glass p-4 flex gap-3">
            <span className="mt-1 size-2 rounded-full bg-amber-300 shadow-glow" />
            <span className="text-white/90">{r}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function VideoBlock() {
  return (
    <section id="video" className="max-w-5xl mx-auto px-4 py-14">
      <SectionTitle
        kicker="Vidéo"
        title="Je guide les femmes sensibles en quête de clarté"
        center
      />
      <div className="mt-8 aspect-video glass overflow-hidden">
        {/* Remplace la source par ta vidéo (YouTube/Vimeo ou <video>) */}
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
          title="Présentation de Valérie"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = useMemo(
    () => [
      { title: "Tu réserves ta séance en ligne.", desc: "Choisis un créneau qui te convient." },
      { title: "Tu poses ta question ou situation.", desc: "Nous ciblons précisément ce qui bloque." },
      { title: "Tu reçois une guidance claire.", desc: "Déclic immédiat & apaisement concret." },
    ],
    []
  );
  return (
    <section id="how" className="max-w-6xl mx-auto px-4 py-16">
      <SectionTitle kicker="Processus" title="En 3 étapes simples" center />
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <div key={i} className="glass p-6">
            <div className="text-4xl font-display text-amber-300">{i + 1}</div>
            <h3 className="mt-2 font-semibold">{s.title}</h3>
            <p className="text-white/80 mt-1">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function LogosStrip() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <div className="glass p-4 text-center text-white/70 text-sm">
        {/* Remplace par de vrais logos si tu en as */}
        <span className="opacity-80">Mentions • Bannières de citations • Partenaires</span>
      </div>
    </section>
  );
}

function Offer() {
  return (
    <section id="book" className="max-w-5xl mx-auto px-4 py-16">
      <SectionTitle kicker="Offre" title="Guidance éclairée — 27 €" center />
      <div className="mt-8 glass p-6 sm:p-8 grid md:grid-cols-2 gap-6">
        <ul className="space-y-3">
          <li>📖 <strong>Lecture Akashique</strong> — séance personnalisée centrée sur ta question.</li>
          <li>✨ <strong>Clarté & Réponses</strong> — vision limpide & pas concrets.</li>
          <li>🌿 <strong>Libération Énergétique</strong> — rééquilibrage subtil, allègement.</li>
          <li>🧭 <strong>Guidance Continue</strong> — conseils pratiques pour ton quotidien.</li>
        </ul>
        <div className="space-y-4">
          <p className="text-white/80">
            Low-ticket idéal pour un premier pas, avec une transformation immédiate.
          </p>
          <a
            href="https://calendly.com/valeriepatole/guidance-eclairee/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center px-6 py-4 rounded-xl bg-amber-300 text-black font-semibold hover:bg-amber-200 transition shadow-glow"
          >
            Je réserve ma séance à 27 €
          </a>

          <p className="text-xs text-white/60">Paiement sécurisé. Confirmation instantanée.</p>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="max-w-5xl mx-auto px-4 py-16">
      <SectionTitle kicker="FAQ" title="Questions fréquentes" center />
      <div className="mt-8 space-y-3">
        {faqs.map((f, i) => (
          <details key={i} className="glass p-5">
            <summary className="cursor-pointer font-semibold">{f.q}</summary>
            <p className="mt-2 text-white/80">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/70 text-sm">
        <div>© 2025 │ Guidance akashique - Tous droits réservés</div>
        <div className="flex gap-4">
          <a href="#top" className="hover:text-white">Haut de page</a>
          <a href="#book" className="hover:text-white">Réserver</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PAS />
      <SocialProof />
      <Reasons />
      <VideoBlock />
      <HowItWorks />
      <LogosStrip />
      <Offer />
      <FAQ />
      <Footer />
    </main>
  );
}
