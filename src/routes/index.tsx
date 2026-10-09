import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  ArrowRight,
  GraduationCap,
  Award,
  Briefcase,
  X,
  Menu,
} from "lucide-react";
import profile from "@/assets/profile.jpg";
import bcdf from "@/assets/bcdf.jpg";
import gpa from "@/assets/gpa.jpg";
import fire from "@/assets/firesafety.jpg";
import rcc from "@/assets/rcc.jpg";
import excel from "@/assets/excel.jpg";
import comms from "@/assets/comms.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jawad Hadi — Civil Engineer & Construction Project Manager" },
      {
        name: "description",
        content:
          "Portfolio of Jawad Hadi, Civil Engineering student at UET Taxila skilled in BIM, Revit, AutoCAD and site execution.",
      },
      { property: "og:title", content: "Jawad Hadi — Civil Engineer Portfolio" },
      {
        property: "og:description",
        content:
          "BIM, Revit, AutoCAD, scheduling and site execution. Available for hire on Fiverr.",
      },
    ],
  }),
  component: Index,
});

const LINKEDIN = "https://www.linkedin.com/in/jawad-hadi-1a439240a";
const FIVERR = "https://www.fiverr.com/pe/XLE9x4Z";
const nav = [
  ["Home", "home"],
  ["Education", "education"],
  ["Skills", "skills"],
  ["Certificates", "certificates"],
  ["Experience", "experience"],
  ["Hire Me", "hire"],
];

const skillCategories = {
  Frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS"],
  Backend: ["Python", "Java", "Node.js"],
  "Machine Learning & Data": [
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Machine Learning (Basics)",
    "Data Preprocessing",
    "Regression",
    "Classification",
  ],
  "Programming & CS": ["C++", "SQL", "OOP", "DSA", "Problem Solving"],
  Tools: ["Git", "GitHub", "Vercel", "Excel", "Canva"],
  "Soft Skills": [
    "Analytical Thinking",
    "Problem Solving",
    "Leadership",
    "Teamwork",
    "Time Management",
  ],
  Languages: ["English — Fluent", "Urdu — Native", "Balti — Expert"],
} as const;

type Cert = { img?: string; title: string; by: string };

const certs: Cert[] = [
  {
    img: bcdf,
    title: "Community Service — BCDF",
    by: "Baltistan Culture & Development Foundation",
  },
  { img: gpa, title: "Highest GPA Achievement", by: "GBSO — UET Taxila" },
  { img: fire, title: "Level 3 Award in Fire Safety", by: "ICTQual / Neon Institute of Business" },
  { img: rcc, title: "Fire Response of RCC", by: "CPD, UET Taxila" },
  {
    img: excel,
    title: "Excel for Beginners: Introduction to Spreadsheets",
    by: "Coursera Project Network",
  },
  { img: comms, title: "Verbal Communications & Presentation", by: "Starweaver · Coursera" },
  { title: "BIM Fundamentals for Engineers", by: "L&T EduTech · Coursera" },
  { title: "AutoCAD 2023 Masterclass", by: "Packt · Coursera" },
];

function FiverrIcon() {
  return <span className="font-bold tracking-tight">fi</span>;
}

function Index() {
  const [open, setOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setOpen(null);
        }
      };
      window.addEventListener("keydown", onKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKeyDown);
      };
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setMenuOpen(false);

  const send = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`;
    window.location.href = `mailto:engrjawadhadi@gmail.com?subject=${encodeURIComponent(String(f.get("subject") || "Project inquiry"))}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen">
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all ${scrolled ? "bg-navy/95 shadow-lg backdrop-blur" : "bg-transparent"}`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-display text-xl text-navy-foreground">
            Jawad<span className="text-accent">.</span>
          </a>
          <nav className="hidden gap-7 md:flex">
            {nav.map(([l, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="relative text-sm text-navy-muted transition-colors hover:text-navy-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
              >
                {l}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="md:hidden grid h-9 w-9 place-items-center rounded-md text-navy-foreground transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div
            className="fixed inset-0 bg-navy/80 backdrop-blur-sm transition-opacity"
            onClick={closeMenu}
            aria-hidden="true"
          />
          <nav
            className="relative z-10 flex-1 bg-navy p-6 overflow-y-auto"
            style={{ maxHeight: "calc(100vh - 4rem)" }}
          >
            <div className="flex items-center justify-between mb-8">
              <span className="font-display text-xl text-navy-foreground">
                Jawad<span className="text-accent">.</span>
              </span>
              <button
                type="button"
                className="grid h-9 w-9 place-items-center rounded-md text-navy-foreground transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Close menu"
                onClick={closeMenu}
              >
                <X size={24} />
              </button>
            </div>
            <ul className="space-y-4" role="list">
              {nav.map(([l, id]) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={closeMenu}
                    className="block text-lg font-medium text-navy-foreground transition-colors hover:text-accent"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      {/* Home */}
      <section
        id="home"
        className="blueprint relative overflow-hidden bg-navy pt-32 pb-24 text-navy-foreground"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-[1.3fr_1fr]">
          <div className="reveal">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Civil Engineer · UET Taxila
            </p>
            <h1 className="text-5xl leading-[1.05] md:text-7xl">
              Building the future, <em className="text-accent">one structure</em> at a time.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-navy-muted">
              I'm Jawad Hadi — a Civil Engineering student at UET Taxila with hands-on experience in
              BIM, Revit, AutoCAD and site execution, on the path to an MS in Construction Project
              Management at MIT.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={FIVERR}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground transition hover:-translate-y-0.5 hover:shadow-xl w-full sm:w-auto"
              >
                Hire Me on Fiverr <ArrowRight size={18} />
              </a>
              <a
                href="#certificates"
                className="inline-flex items-center justify-center rounded-md border border-navy-muted/40 px-6 py-3 font-semibold transition hover:border-navy-foreground w-full sm:w-auto"
              >
                View Work
              </a>
            </div>
            <div className="mt-10 grid gap-3 text-sm text-navy-muted sm:grid-cols-2">
              <a
                href="mailto:jawadhadi028@gmail.com"
                className="flex items-center gap-2 hover:text-accent break-words"
                aria-label="Email: jawadhadi028@gmail.com"
              >
                <Mail size={16} /> jawadhadi028@gmail.com
              </a>
              <a
                href="tel:03425577990"
                className="flex items-center gap-2 hover:text-accent"
                aria-label="Phone: 0342 557 7990"
              >
                <Phone size={16} /> 0342 557 7990
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-accent break-words"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={16} /> linkedin.com/in/jawad-hadi
              </a>
            </div>
          </div>
          <div className="reveal relative mx-auto overflow-hidden">
            <div className="absolute inset-0 rounded-full border border-accent/40" />
            <div className="absolute inset-0 rounded-full border border-navy-muted/15" />
            <img
              src={profile}
              alt="Jawad Hadi"
              className="relative h-72 w-72 rounded-full object-cover shadow-2xl md:h-96 md:w-96"
            />
          </div>
        </div>
      </section>

      {/* Education */}
      <Section id="education" eyebrow="01 — Education" title="Academic foundation">
        <div className="relative ml-3 sm:ml-4 border-l border-border">
          {[
            [
              "B.Sc. Civil Engineering",
              "UET Taxila",
              "Currently in 5th Semester · Highest GPA award (GBSO)",
            ],
            [
              "FSc (Pre-Engineering)",
              "Cadet College Skardu",
              "Grade A- · Leadership, Courage, Communication",
            ],
            ["Matriculation", "Public School and College Skardu", "Grade A"],
          ].map(([t, s, d]) => (
            <div key={t} className="reveal relative mb-10 pl-8 sm:pl-10 last:mb-0">
              <span className="absolute -left-[13px] top-1 grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground">
                <GraduationCap size={13} />
              </span>
              <h3 className="text-xl sm:text-2xl">{t}</h3>
              <p className="font-semibold text-primary">{s}</p>
              <p className="mt-1 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" eyebrow="02 — Skills" title="Technical expertise" muted>
        <div className="space-y-10">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="reveal">
              <h3 className="mb-4 text-lg font-semibold text-foreground">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full border bg-card px-3 py-1.5 text-sm text-muted-foreground transition hover:border-primary hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Certificates */}
      <Section id="certificates" eyebrow="03 — Certificates" title="Credentials & achievements">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c) => {
            const src = c.img;
            const body = (
              <>
                {src && (
                  <img
                    src={src}
                    alt={c.title}
                    loading="lazy"
                    className="w-full transition duration-500 group-hover:scale-[1.03]"
                  />
                )}
                <div className="p-4">
                  <div className="flex items-center gap-2 font-semibold">
                    <Award size={16} className="text-accent" /> {c.title}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{c.by}</p>
                </div>
              </>
            );
            const cls =
              "reveal group mb-5 block w-full max-w-full overflow-hidden rounded-lg border bg-card text-left transition hover:-translate-y-1 hover:shadow-xl";
            return src ? (
              <button key={c.title} onClick={() => setOpen(src)} className={cls}>
                {body}
              </button>
            ) : (
              <div key={c.title} className={cls}>
                {body}
              </div>
            );
          })}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" eyebrow="04 — Experience" title="Leadership & community" muted>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            [
              "Committee Head",
              "Team Research & Innovation, ASCE UET Taxila Chapter",
              [
                "Leads research & innovation initiatives",
                "Coordinates chapter technical activities",
              ],
            ],
            [
              "GB Representative",
              "Gilgit Baltistan Student Organization, Punjab",
              ["Represents GB students in Punjab", "Advocacy and student welfare"],
            ],
            [
              "Community Service",
              "BCDF · Jul – Aug 2025",
              [
                "Supervised first-floor construction of BCDF Resource Center",
                "Prepared architectural drawings in Revit",
                "Managed office data in Word & Excel",
                "Glacier Grafting project dialogue",
              ],
            ],
          ].map(([t, s, pts]) => (
            <div
              key={t as string}
              className="reveal rounded-lg border bg-card p-6 sm:p-7 transition hover:border-primary hover:shadow-lg"
            >
              <span className="grid h-11 w-11 place-items-center rounded-md bg-primary text-primary-foreground">
                <Briefcase size={20} />
              </span>
              <h3 className="mt-5 text-xl sm:text-2xl">{t as string}</h3>
              <p className="mt-1 text-sm font-semibold text-primary">{s as string}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {(pts as string[]).map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 h-1 w-3 shrink-0 bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Hire */}
      <section id="hire" className="blueprint bg-navy py-24 text-navy-foreground">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-2">
          <div className="reveal">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              05 — Hire Me
            </p>
            <h2 className="text-4xl md:text-5xl">Have a project in mind? Let's build it.</h2>
            <p className="mt-5 text-navy-muted">
              Revit models, AutoCAD drawings, quantity takeoffs, scheduling or data analysis — I
              deliver precise, on-time work.
            </p>
            <a
              href={FIVERR}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground transition hover:-translate-y-0.5"
            >
              Hire Me on Fiverr <ArrowRight size={18} />
            </a>
            <div className="mt-8 space-y-2 text-sm text-navy-muted">
              <p className="flex items-center gap-2">
                <Mail size={16} />{" "}
                <a
                  href="mailto:engrjawadhadi@gmail.com"
                  aria-label="Email: engrjawadhadi@gmail.com"
                >
                  engrjawadhadi@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} />{" "}
                <a href="tel:03425577990" aria-label="Phone: 0342 557 7990">
                  0342 557 7990
                </a>
              </p>
            </div>
          </div>
          <form
            onSubmit={send}
            className="reveal space-y-4 rounded-lg bg-card p-8 text-card-foreground shadow-2xl"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full rounded-md border bg-background px-4 py-3 outline-none focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Your email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                  className="w-full rounded-md border bg-background px-4 py-3 outline-none focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="subject" className="sr-only">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-md border bg-background px-4 py-3 outline-none focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Tell me about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project"
                  required
                  rows={5}
                  className="w-full rounded-md border bg-background px-4 py-3 outline-none focus:border-primary"
                />
              </div>
            </div>
            <button className="w-full rounded-md bg-primary py-3 font-semibold text-primary-foreground transition hover:opacity-90">
              Send Message
            </button>
          </form>
        </div>
        <p className="mt-20 text-center text-xs text-navy-muted">
          © {new Date().getFullYear()} Jawad Hadi · Civil Engineering, UET Taxila
        </p>
      </section>

      {open && (
        <div
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-50 grid place-items-center bg-navy/90 p-6"
        >
          <button aria-label="Close" className="absolute right-6 top-6 text-navy-foreground">
            <X />
          </button>
          <img
            src={open}
            alt="Certificate"
            className="max-h-[90vh] max-w-full rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  muted,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  muted?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-16 py-24 ${muted ? "bg-muted" : ""}`}>
      <div className="mx-auto max-w-6xl px-6">
        <p className="reveal mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          {eyebrow}
        </p>
        <h2 className="reveal mb-14 text-4xl md:text-5xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}
