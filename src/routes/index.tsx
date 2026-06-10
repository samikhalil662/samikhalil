import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Mail,
  Github,
  Linkedin,
  Phone,
  MapPin,
  Sparkles,
  Code2,
  Brain,
  Workflow,
  GraduationCap,
  Briefcase,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muhammad Sami — AI Developer & Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Muhammad Sami, an AI undergraduate building intelligent applications, ML models, and automation systems.",
      },
      { property: "og:title", content: "Muhammad Sami — AI Developer & Engineer" },
      {
        property: "og:description",
        content:
          "Portfolio of Muhammad Sami, an AI undergraduate building intelligent applications, ML models, and automation systems.",
      },
    ],
  }),
  component: Portfolio,
});

const projects = [
  {
    title: "Search Engine for Markdown Files",
    stack: ["Python", "TF-IDF", "BM25"],
    desc: "A focused search engine for Markdown documents with efficient indexing, ranking, and a clean web UI.",
    tag: "Information Retrieval",
  },
  {
    title: "Stock Predictor LSTM",
    stack: ["Python", "TensorFlow", "Deep Learning"],
    desc: "LSTM neural network for stock price forecasting, trained on historical market data with full preprocessing.",
    tag: "Deep Learning",
  },
  {
    title: "Ramzan Bot",
    stack: ["Python", "NLP", "Chatbot"],
    desc: "Rule-based chatbot answering Ramadan-related queries with structured conversational flows.",
    tag: "NLP",
  },
  {
    title: "DisasterConnect",
    stack: ["Python", "Open Source"],
    desc: "Contributor to a disaster response platform connecting resources with communities during emergencies.",
    tag: "Open Source",
  },
  {
    title: "Panda Chat",
    stack: ["TypeScript", "Realtime"],
    desc: "Social communication platform with real-time user interaction and modern frontend components.",
    tag: "Realtime",
  },
  {
    title: "Flatmate Expense Manager",
    stack: ["HTML", "CSS", "JavaScript"],
    desc: "Web app to track shared household expenses, split costs, and reconcile balances between flatmates.",
    tag: "Web App",
  },
];

const skillGroups = [
  {
    icon: Code2,
    label: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "Java", "R", "Julia", "SQL", "C++"],
  },
  {
    icon: Brain,
    label: "AI / ML",
    items: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Generative AI", "LLMs", "Prompt Engineering"],
  },
  {
    icon: Sparkles,
    label: "Frameworks",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "OpenCV", "Flask", "FastAPI"],
  },
  {
    icon: Workflow,
    label: "Web & Automation",
    items: ["React.js", "Next.js", "Node.js", "n8n", "OpenAI API", "Gemini API", "Ollama", "Whisper"],
  },
];

const stats = [
  { value: "10+", label: "Projects Shipped" },
  { value: "5+", label: "AI Domains" },
  { value: "2027", label: "Graduation" },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 font-display text-sm font-semibold tracking-tight">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-accent to-accent/40 text-accent-foreground font-bold">
              S
            </span>
            Muhammad Sami
          </a>
          <nav className="hidden gap-8 text-sm text-muted-foreground sm:flex">
            <a href="#work" className="transition-colors hover:text-foreground">Work</a>
            <a href="#about" className="transition-colors hover:text-foreground">About</a>
            <a href="#skills" className="transition-colors hover:text-foreground">Skills</a>
            <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
          </nav>
          <a
            href="mailto:muhammadsamif23@nutech.edu.pk"
            className="hidden items-center gap-1.5 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-medium transition-all hover:border-accent hover:bg-surface sm:inline-flex"
          >
            Hire me
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/60">
          <div className="absolute inset-0 grid-bg opacity-60" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "var(--gradient-hero)" }}
          />
          <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-28 sm:pt-32 sm:pb-36">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for freelance · Remote
            </div>

            <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
              AI developer
              <br />
              building{" "}
              <span className="text-gradient">useful, quiet</span>
              <br />
              software.
            </h1>

            <div className="mt-10 grid gap-10 sm:grid-cols-12">
              <p className="sm:col-span-7 text-base leading-relaxed text-muted-foreground sm:text-lg">
                I'm <span className="text-foreground font-medium">Muhammad Sami</span> — an
                Artificial Intelligence undergraduate at NUTECH, Islamabad. I design ML models,
                LLM-powered agents, and automation workflows that turn research-grade ideas into
                shipped, reliable applications.
              </p>
              <div className="sm:col-span-5 sm:col-start-8 flex flex-wrap items-start gap-3">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
                >
                  See my work
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="mailto:muhammadsamif23@nutech.edu.pk"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-5 py-2.5 text-sm font-medium transition-all hover:border-accent"
                >
                  Get in touch
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-6 border-t border-border/60 pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                    {s.value}
                  </div>
                  <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work */}
        <Section id="work" label="01 · Selected Work" title="Projects" subtitle="A sample of things I've built — from search engines and deep-learning models to chatbots and full-stack web apps.">
          <div className="grid gap-5 sm:grid-cols-2">
            {projects.map((p, i) => (
              <article
                key={p.title}
                className="group relative flex flex-col gap-4 rounded-2xl border border-border bg-surface/40 p-6 transition-all hover:border-accent hover:bg-surface/70"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                    {String(i + 1).padStart(2, "0")} / {p.tag}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </div>
                <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-border bg-background/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* About */}
        <Section id="about" label="02 · About" title="A bit about me" subtitle="Research, prototype, ship — I enjoy the full arc.">
          <div className="grid gap-10 sm:grid-cols-12">
            <div className="sm:col-span-7 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                I'm an AI undergraduate focused on building practical, intelligent software — from
                LLM-powered agents and NLP tools to computer vision and predictive analytics.
              </p>
              <p>
                Currently freelancing on Fiverr as an AI developer, designing automated workflows
                with <span className="text-foreground">n8n</span>, integrating LLMs and external
                APIs, and delivering AI-driven applications for clients around the world.
              </p>
              <p>
                Based in <span className="text-foreground">Islamabad, Pakistan</span> — open to
                remote roles, internships, and collaborations.
              </p>
            </div>
            <div className="sm:col-span-5 space-y-3">
              <Highlight icon={Briefcase} title="Freelance AI Developer" sub="Fiverr · Remote" />
              <Highlight icon={GraduationCap} title="BS Artificial Intelligence" sub="NUTECH · Islamabad" />
              <Highlight icon={Sparkles} title="Google AI Essentials" sub="Certified · Coursera" />
            </div>
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" label="03 · Experience" title="Where I've worked">
          <div className="space-y-10">
            <Entry
              role="Artificial Intelligence Developer"
              place="Fiverr · Freelance · Remote"
              period="Nov 2025 — Present"
              bullets={[
                "Built AI-driven applications and automation using Python, ML, and DL frameworks.",
                "Designed and deployed n8n workflows integrating LLMs and third-party APIs.",
                "Delivered solutions across NLP, computer vision, predictive analytics, and content generation.",
              ]}
            />
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" label="04 · Toolkit" title="Skills & tools" subtitle="The stack I reach for, day to day.">
          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map(({ icon: Icon, label, items }) => (
              <div
                key={label}
                className="rounded-2xl border border-border bg-surface/40 p-6 transition-colors hover:border-accent/60"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/15 text-accent">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="font-display text-sm font-semibold uppercase tracking-wider">
                    {label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((it) => (
                    <span
                      key={it}
                      className="rounded-md border border-border/80 bg-background/40 px-2.5 py-1 text-xs text-foreground/85"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section id="education" label="05 · Education" title="Studies">
          <div className="space-y-10">
            <Entry
              role="BS in Artificial Intelligence"
              place="National University of Technology (NUTECH) · Islamabad"
              period="Aug 2023 — Present"
            />
            <Entry
              role="HSSC, Computer Science"
              place="Govt Boy Degree College Aliabad · Hunza"
              period="Jun 2020 — May 2022"
            />
          </div>
          <div className="mt-12 rounded-2xl border border-border bg-surface/40 p-6">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-wider text-accent">
              Certifications
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center justify-between gap-4 border-b border-border/60 pb-3">
                <span>Google AI Essentials Specialization</span>
                <span className="font-mono text-xs text-muted-foreground">Google · Coursera</span>
              </li>
              <li className="flex items-center justify-between gap-4">
                <span className="text-muted-foreground">Google Data Analytics Professional Certificate</span>
                <span className="font-mono text-xs text-accent">In progress</span>
              </li>
            </ul>
          </div>
        </Section>

        {/* Contact */}
        <section id="contact" className="relative border-t border-border/60">
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              06 · Contact
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-6xl">
              Let's build something <span className="text-gradient">great together.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              I'm open to freelance projects, internships, and collaborations in AI and software
              engineering. The fastest way to reach me is email.
            </p>

            <div className="mt-12 grid gap-3 sm:grid-cols-2">
              <ContactCard icon={Mail} label="Email" value="muhammadsamif23@nutech.edu.pk" href="mailto:muhammadsamif23@nutech.edu.pk" />
              <ContactCard icon={Phone} label="Phone" value="+92 341 1840755" href="tel:+923411840755" />
              <ContactCard icon={Linkedin} label="LinkedIn" value="sami-khalil-29may" href="https://www.linkedin.com/in/sami-khalil-29may/" />
              <ContactCard icon={Github} label="GitHub" value="samikhalil662" href="https://github.com/samikhalil662" />
            </div>

            <div className="mt-10 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              Based in Islamabad, Pakistan
            </div>
          </div>
        </section>

        <footer className="border-t border-border/60">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} Muhammad Sami. Built with care.</p>
            <p className="font-mono">Designed & coded in Islamabad</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

function Section({
  id,
  label,
  title,
  subtitle,
  children,
}: {
  id: string;
  label: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="mb-14 grid gap-6 sm:grid-cols-12 sm:items-end">
          <div className="sm:col-span-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">{label}</p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              {title}
            </h2>
          </div>
          {subtitle && (
            <p className="sm:col-span-4 text-sm leading-relaxed text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

function Entry({
  role,
  place,
  period,
  bullets,
}: {
  role: string;
  place: string;
  period: string;
  bullets?: string[];
}) {
  return (
    <div className="grid grid-cols-12 gap-6 rounded-2xl border border-border bg-surface/30 p-6 transition-colors hover:border-accent/50 sm:p-8">
      <div className="col-span-12 sm:col-span-4">
        <p className="font-mono text-[11px] uppercase tracking-wider text-accent">{period}</p>
      </div>
      <div className="col-span-12 sm:col-span-8">
        <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">{role}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{place}</p>
        {bullets && (
          <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function Highlight({
  icon: Icon,
  title,
  sub,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  sub: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-surface/40 p-4 transition-colors hover:border-accent/60">
      <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/15 text-accent">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-muted-foreground">{sub}</p>
      </div>
    </div>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface/40 p-5 transition-all hover:border-accent hover:bg-surface/70"
    >
      <div className="flex items-center gap-4 min-w-0">
        <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
          <Icon className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            {label}
          </p>
          <p className="truncate text-sm font-medium">{value}</p>
        </div>
      </div>
      <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
    </a>
  );
}
