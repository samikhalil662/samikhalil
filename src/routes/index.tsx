import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Github, Linkedin, Phone, MapPin } from "lucide-react";

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
    stack: "Python · TF-IDF · BM25",
    desc: "A focused search engine for Markdown documents with efficient indexing, ranking, and a clean web UI.",
  },
  {
    title: "Stock Predictor LSTM",
    stack: "Python · TensorFlow · Deep Learning",
    desc: "LSTM neural network for stock price forecasting, trained on historical market data with full preprocessing.",
  },
  {
    title: "Ramzan Bot",
    stack: "Python · NLP · Chatbot",
    desc: "Rule-based chatbot answering Ramadan-related queries with structured conversational flows.",
  },
  {
    title: "DisasterConnect",
    stack: "Python · Open Source",
    desc: "Contributor to a disaster response platform connecting resources with communities during emergencies.",
  },
  {
    title: "Panda Chat",
    stack: "TypeScript · Realtime",
    desc: "Social communication platform with real-time user interaction and modern frontend components.",
  },
  {
    title: "Flatmate Expense Manager",
    stack: "HTML · CSS · JavaScript",
    desc: "Web app to track shared household expenses, split costs, and reconcile balances between flatmates.",
  },
];

const skills = {
  Languages: ["Python", "JavaScript", "TypeScript", "Java", "R", "Julia", "SQL", "C++"],
  "AI / ML": [
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "Computer Vision",
    "Generative AI",
    "LLMs",
    "Prompt Engineering",
  ],
  Frameworks: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "OpenCV", "Flask", "FastAPI"],
  Web: ["React.js", "Next.js", "Node.js", "HTML5", "CSS3"],
  Automation: ["n8n", "OpenAI API", "Google Gemini API", "Ollama", "Whisper"],
  Tools: ["Git", "GitHub", "VS Code", "Jupyter", "Google Colab", "MySQL"],
};

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-sm font-medium tracking-tight">
            Muhammad Sami
          </a>
          <nav className="hidden gap-6 text-sm text-muted-foreground sm:flex">
            <a href="#work" className="transition-colors hover:text-foreground">Work</a>
            <a href="#about" className="transition-colors hover:text-foreground">About</a>
            <a href="#skills" className="transition-colors hover:text-foreground">Skills</a>
            <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-3xl px-6">
        {/* Hero */}
        <section className="pt-24 pb-20 sm:pt-32 sm:pb-28">
          <div className="mb-6 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Available for freelance
          </div>
          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight sm:text-7xl">
            Muhammad Sami.
            <br />
            <span className="text-muted-foreground">AI developer building useful, quiet software.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
            Artificial Intelligence undergraduate at NUTECH, Islamabad. I design ML models, LLM-powered agents,
            and automation workflows — turning research-grade ideas into shipped, reliable applications.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <a
              href="mailto:muhammadsamif23@nutech.edu.pk"
              className="group inline-flex items-center gap-2 border-b border-foreground pb-0.5 font-medium"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://github.com/samikhalil662"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/muhammadsami"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
          </div>
        </section>

        {/* Work */}
        <Section id="work" label="Selected Work" title="Projects">
          <ul className="divide-y divide-border">
            {projects.map((p) => (
              <li key={p.title} className="group grid grid-cols-12 gap-4 py-6">
                <div className="col-span-12 sm:col-span-5">
                  <h3 className="font-serif text-xl tracking-tight">{p.title}</h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {p.stack}
                  </p>
                </div>
                <p className="col-span-12 text-sm leading-relaxed text-muted-foreground sm:col-span-7">
                  {p.desc}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        {/* About */}
        <Section id="about" label="About" title="A bit about me">
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              I'm an AI undergraduate focused on building practical, intelligent software — from
              LLM-powered agents and NLP tools to computer vision and predictive analytics. I enjoy the
              full arc: research, prototype, ship.
            </p>
            <p>
              Currently freelancing on Fiverr as an AI developer, designing automated workflows with
              n8n, integrating LLMs and external APIs, and delivering AI-driven applications for clients
              around the world.
            </p>
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" label="Experience" title="Where I've worked">
          <div className="space-y-8">
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
        <Section id="skills" label="Toolkit" title="Skills & tools">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <dt className="mb-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {group}
                </dt>
                <dd className="text-sm leading-relaxed">{items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* Education */}
        <Section id="education" label="Education" title="Studies">
          <div className="space-y-8">
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
          <div className="mt-10">
            <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Certifications
            </p>
            <ul className="space-y-2 text-sm">
              <li>Google AI Essentials Specialization — Google & Coursera</li>
              <li className="text-muted-foreground">
                Google Data Analytics Professional Certificate — In progress
              </li>
            </ul>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" label="Contact" title="Let's build something">
          <p className="mb-10 max-w-lg text-base leading-relaxed text-muted-foreground">
            I'm open to freelance projects, internships, and collaborations in AI and software
            engineering. The fastest way to reach me is email.
          </p>
          <ul className="space-y-4 text-sm">
            <ContactRow icon={<Mail className="h-4 w-4" />} label="Email" value="muhammadsamif23@nutech.edu.pk" href="mailto:muhammadsamif23@nutech.edu.pk" />
            <ContactRow icon={<Phone className="h-4 w-4" />} label="Phone" value="+92 341 1840755" href="tel:+923411840755" />
            <ContactRow icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" value="linkedin.com/in/muhammadsami" href="https://linkedin.com/in/muhammadsami" />
            <ContactRow icon={<Github className="h-4 w-4" />} label="GitHub" value="github.com/samikhalil662" href="https://github.com/samikhalil662" />
            <ContactRow icon={<MapPin className="h-4 w-4" />} label="Based in" value="Islamabad, Pakistan" />
          </ul>
        </Section>

        <footer className="border-t border-border/60 py-10 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Muhammad Sami. Built with care.
        </footer>
      </main>
    </div>
  );
}

function Section({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-border/60 py-20">
      <div className="mb-10 flex items-baseline justify-between gap-4">
        <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">{title}</h2>
        <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      </div>
      {children}
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
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 sm:col-span-4">
        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{period}</p>
      </div>
      <div className="col-span-12 sm:col-span-8">
        <h3 className="font-serif text-xl tracking-tight">{role}</h3>
        <p className="mt-0.5 text-sm text-muted-foreground">{place}</p>
        {bullets && (
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-2 h-px w-3 flex-shrink-0 bg-muted-foreground/60" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center justify-between gap-4 border-b border-border/60 pb-3">
      <div className="flex items-center gap-3">
        <span className="text-muted-foreground">{icon}</span>
        <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      </div>
      <span className="text-right">{value}</span>
    </div>
  );
  return (
    <li>
      {href ? (
        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block transition-colors hover:text-accent">
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  );
}
