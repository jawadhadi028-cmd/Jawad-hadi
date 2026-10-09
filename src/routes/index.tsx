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
  Boxes,
  Map,
  BarChart3,
  HardHat,
  CheckCircle2,
  X,
  Menu,
} from "lucide-react";
import profile from "@/assets/profile.jpg";

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
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Skills", "skills"],
  ["Education", "education"],
  ["Certificates", "certificates"],
  ["Hire Me", "hire"],
];

const skillCategories = [
  { title: "CAD & BIM modeling", icon: Boxes, skills: ["AutoCAD · submission & basic drawings", "Architectural layouts", "Autodesk Revit · 3D models", "Capstone & freelance models", "BIM concepts & fundamentals"] },
  { title: "Engineering & analysis", icon: BarChart3, skills: ["IBM SPSS · quantitative analysis", "Standard deviation & variance", "ArcGIS / ArcMap · spatial processing"] },
  { title: "Programming & geotechnical", icon: HardHat, skills: ["Python · civil engineering scripts", "Soil classification mini-apps", "Soil classification", "Geotechnical principles"] },
  { title: "Construction management", icon: Briefcase, skills: ["Construction scheduling · Coursera certified", "Construction project management · Columbia specialization in progress", "Cost estimation", "Quantity takeoffs"] },
  { title: "Productivity & languages", icon: Map, skills: ["Microsoft Excel · expert", "Microsoft Word · expert", "Microsoft PowerPoint · expert", "English · fluent", "Urdu · native", "Balti · expert"] },
] as const;

type Project = { number: string; title: string; category: string; description: string; tools: string[]; img: string };

const projects: Project[] = [
  { number: "01", title: "BCDF Resource Center — Revit 3D Model", category: "BIM & Architectural Modeling", img: "/assets/revit-bcdf-model.jpg", description: "Prepared comprehensive architectural and structural 3D models in Autodesk Revit for the BCDF Resource Center first-floor construction project. Focused on spatial coordination, precise layouts, and functional flow.", tools: ["Autodesk Revit", "BIM", "AutoCAD"] },
  { number: "02", title: "5-Marla Residential House Design", category: "CAD & Architectural Planning", img: "/assets/5-marla-house-plan.jpg", description: "Designed 2D working floor plans, elevations, and detailed technical submission drawings adhering to local zoning regulations and structural design constraints.", tools: ["AutoCAD", "Drafting"] },
  { number: "03", title: "Scan-to-BIM Attic & Truss Modeling", category: "Advanced BIM", img: "/assets/scan-to-bim-attic.jpg", description: "Linked laser point cloud scan data into Autodesk Revit to reconstruct accurate 3D structural models of complex roof attics, rafters, and timber trusses.", tools: ["Revit", "Point Cloud", "Scan-to-BIM"] },
  { number: "04", title: "Skardu District GIS Road Spatial Analysis", category: "GIS & Infrastructure", img: "/assets/skardu-gis-roads.jpg", description: "Processed spatial road networks for District Skardu using ArcMap. Executed georeferencing, attribute table management, and calculated segment lengths.", tools: ["ArcMap", "GIS", "Python Scripts"] },
];

type Cert = { title: string; by: string; img: string };
type Preview = { title: string; subtitle: string; img: string };

const certs: Cert[] = [
  { title: "BIM Fundamentals for Engineers", by: "L&T EduTech · Coursera", img: "/assets/bim-fundamental.jpg" },
  { title: "AutoCAD 2023 Masterclass", by: "Packt · Coursera", img: "/assets/autocad.jpg" },
  { title: "Construction Scheduling", by: "Coursera", img: "/assets/construction-scheduling.jpg" },
  { title: "Construction Project and Management", by: "Coursera · Columbia University", img: "/assets/construction-management.jpg" },
  { title: "Fire Response of RCC", by: "UET Taxila · Seminar Certificate", img: "/assets/fire-response-rcc.jpg" },
  { title: "Verbal Communications and Presentation Skills", by: "Coursera · Starweaver", img: "/assets/verbal-communication.jpg" },
  { title: "ICTQual Level 3 Award in Fire Safety", by: "Neon Institute of Business and Technology", img: "/assets/ictqual-fire-safety.jpg" },
];

function FiverrIcon() {
  return <span className="font-bold tracking-tight">fi</span>;
}

function Index() {
  const [selectedPreview, setSelectedPreview] = useState<Preview | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.01, rootMargin: "0px 0px 160px 0px" },
    );
    revealElements.forEach((el) => io.observe(el));
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
    if (!selectedPreview) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedPreview(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedPreview]);

  useEffect(() => {
    if (!showSuccess) return;
    const timeout = window.setTimeout(() => setShowSuccess(false), 3000);
    return () => window.clearTimeout(timeout);
  }, [showSuccess]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const send = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    setSubmitError("");
    setShowSuccess(false);
    if (!accessKey) {
      setSubmitError("The contact form is not configured yet. Please email me directly.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          subject: formData.get("subject") || "Portfolio project inquiry",
          message: formData.get("message"),
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Message could not be sent. Please try again.");
      }
      form.reset();
      setShowSuccess(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
                href="#projects"
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

      <Section id="projects" eyebrow="01 — Selected work" title="Engineering in practice">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.number} className="reveal group overflow-hidden rounded-xl border bg-card transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
              <button type="button" onClick={() => setSelectedPreview({ title: project.title, subtitle: project.category, img: project.img })} aria-label={`Zoom project preview: ${project.title}`} className="relative block aspect-[16/9] w-full overflow-hidden bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary">
                <img src={project.img} alt={`${project.title} project preview`} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
                <span className="absolute bottom-4 right-4 rounded-full bg-background/90 px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm">Click to zoom preview</span>
              </button>
              <div className="p-6 sm:p-7">
                <div className="flex items-start gap-4"><span className="font-display text-3xl text-primary/35">{project.number}</span><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{project.category}</p><h3 className="mt-2 text-2xl">{project.title}</h3></div></div>
                <p className="mt-4 leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">{project.tools.map((tool) => <span key={tool} className="rounded-full border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">{tool}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" eyebrow="02 — Experience" title="Leadership & community" muted>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Committee Head",
              subtitle: "Team Research & Innovation, ASCE UET Taxila Chapter",
              img: "/assets/asce-certificate.jpg",
              points: ["Coordinated technical activities during a two-month active tenure", "Contributed to civil drawings and initial cost estimations"],
            },
            {
              title: "GB Representative",
              subtitle: "Gilgit Baltistan Student Organization, Punjab",
              img: "/assets/gbso-certificate.jpg",
              points: ["Represented GB students in Punjab", "Advocacy and student welfare"],
            },
            {
              title: "Community Service",
              subtitle: "BCDF · Jul – Aug 2025",
              img: "/assets/bcdf-certificate.jpg",
              points: ["Supervised first-floor construction of BCDF Resource Center", "Prepared architectural drawings in Revit", "Managed office data in Word & Excel", "Glacier Grafting project dialogue"],
            },
          ].map(({ title, subtitle, img, points }) => (
            <div
              key={title}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedPreview({ title, subtitle, img })}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelectedPreview({ title, subtitle, img });
                }
              }}
              aria-label={`View certificate for ${title}`}
              className="reveal group cursor-zoom-in overflow-hidden rounded-xl border bg-card transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <img src={img} alt={`${title} certificate`} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
                <span className="absolute bottom-3 right-3 rounded-full bg-background/90 px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm">Click to zoom preview</span>
              </div>
              <div className="p-6 sm:p-7">
                <span className="grid h-11 w-11 place-items-center rounded-md bg-primary text-primary-foreground"><Briefcase size={20} /></span>
                <h3 className="mt-5 text-xl sm:text-2xl">{title}</h3>
                <p className="mt-1 text-sm font-semibold text-primary">{subtitle}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 h-1 w-3 shrink-0 bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" eyebrow="03 — Skills" title="Technical expertise" muted>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map(({ title, icon: Icon, skills }) => (
            <article key={title} className="reveal rounded-xl border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary"><Icon size={21} /></div>
              <h3 className="mb-4 text-xl">{title}</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">{skills.map((skill) => <li key={skill} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{skill}</li>)}</ul>
            </article>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" eyebrow="04 — Education" title="Academic foundation">
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

      {/* Certificates */}
      <Section id="certificates" eyebrow="05 — Certificates" title="Credentials & achievements">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {certs.map((c) => (
            <button key={c.title} type="button" onClick={() => setSelectedPreview({ title: c.title, subtitle: c.by, img: c.img })} aria-label={`Preview certificate: ${c.title}`} className="reveal group overflow-hidden rounded-xl border bg-card text-left transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              <div className="relative grid aspect-[4/3] place-items-center overflow-hidden bg-muted">
                <div className="flex flex-col items-center gap-3 text-primary/70"><Award size={36} strokeWidth={1.5} /><span className="text-xs font-semibold uppercase tracking-[0.18em]">Certificate</span></div>
                <img src={c.img} alt={`${c.title} certificate`} loading="lazy" onError={(event) => { event.currentTarget.style.display = "none"; }} className="absolute inset-0 h-full w-full object-contain p-2 transition duration-500 group-hover:scale-[1.04]" />
                <span className="absolute bottom-3 right-3 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground shadow-sm">Click to preview</span>
              </div>
              <div className="min-h-28 p-5">
                <h3 className="text-lg leading-snug">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.by}</p>
              </div>
            </button>
          ))}
        </div>
      </Section>

      {/* Hire */}
      <section id="hire" className="blueprint bg-navy pb-8 pt-24 text-navy-foreground">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-2">
          <div className="reveal">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              06 — Contact
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
                <label htmlFor="phone" className="sr-only">
                  Your phone number (optional)
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Your phone number (optional)"
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
            {submitError && <p role="alert" className="text-sm text-destructive">{submitError}</p>}
            <button disabled={isSubmitting} className="w-full rounded-md bg-primary py-3 font-semibold text-primary-foreground transition hover:opacity-90 disabled:cursor-wait disabled:opacity-60">
              {isSubmitting ? "Sending…" : "Send Message"}
            </button>
          </form>
        </div>
        <p className="mt-12 text-center text-xs text-navy-muted">
          © {new Date().getFullYear()} Jawad Hadi · Civil Engineering, UET Taxila
        </p>
      </section>

      {selectedPreview && (
        <div role="dialog" aria-modal="true" aria-label={`${selectedPreview.title} image preview`} onClick={() => setSelectedPreview(null)} className="fixed inset-0 z-[60] grid place-items-center bg-navy/95 p-4 backdrop-blur-sm sm:p-8">
          <button type="button" onClick={() => setSelectedPreview(null)} aria-label="Close image preview" className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 sm:right-7 sm:top-7"><X size={22} /></button>
          <div onClick={(event) => event.stopPropagation()} className="flex max-h-full w-full max-w-6xl flex-col items-center gap-4">
            <img src={selectedPreview.img} alt={`${selectedPreview.title} preview`} className="max-h-[78vh] max-w-full rounded-lg object-contain shadow-2xl" />
            <div className="text-center text-white"><h2 className="text-xl sm:text-2xl">{selectedPreview.title}</h2><p className="mt-1 text-sm text-white/70">{selectedPreview.subtitle}</p></div>
          </div>
        </div>
      )}

      {showSuccess && (
        <div role="status" aria-live="polite" className="fixed inset-0 z-[70] grid place-items-center bg-navy/65 p-5 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-sm rounded-2xl border bg-card p-8 text-center text-card-foreground shadow-2xl animate-in zoom-in-95 duration-200">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-500/10 text-emerald-600"><CheckCircle2 size={32} /></span>
            <h2 className="mt-5 text-2xl">Message sent</h2>
            <p className="mt-2 text-sm text-muted-foreground">Thanks for reaching out. I’ll get back to you soon.</p>
          </div>
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
