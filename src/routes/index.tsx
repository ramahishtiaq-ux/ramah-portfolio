import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBJWqMZVj1SBW7MVf5duKEHBnIieThM9pQ1pdMIRWXQ9gO4eSQXToOeFBwSN7KJb3gjXS5qUgEIlWWmfwT3FuBkMVNj7zRVmDRI-Jpe9do89BrPQDbNaLZYSw5MS_xpMJuPypQVOqAZPfL7aI58HGN4EzD2G6KUw5hxVfF9rUnYGh__ReUBxBoE9ncns63vjmpBCirbjXwRVPL5kpQ0SNIfS1t_hpGH0OdNw31GpxO0dI-oAAHpxFY";

const PROJECT_ONE_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDJ03yywb-z1pJHpdM21Heidku9rBafdRLPO3k5gCN1Zs7UYqlleAZYg73UECKzmL4x9pcwlkI5LHqi9dHhgJsKNVHTsLJPmitqGVbI9mSAlF9u67S_0tASeZ9XYINm1UQ03MkwzoTS1m8vNUbdNXjL0aB58awBecjFcz6ElhguHTZ_xbPy2M4O-yB4KtJfw906_tt89vAv88h9LW3bUecQKGIW_9qm7ZwURlnNNhJgnYWOT5WtBsQ";

const PROJECT_TWO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDODRHJWl86gU9dc9V5u3TD_XlTRgGTFZe_ECwB37APQOa8VXW1sJKzKXCLwxNiv4THrhwY-RGdzDX16qeVB_iuNrAiVg99XWb1ijQ2YD9IWlMzxRRRRAui0vMkhAEbpmre5d1ZG2enbnUeFVj4AaPRcn8BdU8I2-Ja6zjukgxdy3YmlhkXwAPXNV10Ogn6ErSTlqj9S_SL6duplR-lM770F7Z2vs4LIXjtADiRu4rgXh4tQUtcnlg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ramah Ishtiaq — E-commerce & Product Design Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Ramah Ishtiaq: elegant digital experiences, e-commerce growth on Amazon, eBay and TikTok Shop, UI/UX design and conversion optimization.",
      },
      { property: "og:title", content: "Ramah Ishtiaq — Portfolio" },
      {
        property: "og:description",
        content:
          "Crafting elegant digital experiences through thoughtful design and engineering, with deep e-commerce expertise.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: HERO_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: HERO_IMAGE },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
];

const SKILLS = [
  "UI/UX Design",
  "Prototyping",
  "Frontend Dev",
  "React / Vue",
  "Design Systems",
  "Tailwind CSS",
  "Conversion Rate Optimization",
  "Keyword Research",
  "Supply Chain Coordination",
];

const EXPERIENCE = [
  {
    role: "Senior E-commerce Manager",
    meta: "TechRetail Corp • 2021 - Present",
    points: [
      "Spearheaded multi-channel growth strategies across Amazon and TikTok Shop, resulting in a 35% YoY revenue increase.",
      "Optimized product listings and supply chain coordination to reduce fulfillment times by 20%.",
      "Managed a cross-functional team of designers and marketers to launch high-converting seasonal campaigns.",
      "Implemented advanced keyword research and SEO strategies to improve organic visibility.",
    ],
  },
  {
    role: "Digital Product Strategist",
    meta: "Nova Solutions • 2018 - 2021",
    points: [
      "Conducted comprehensive CRO audits and implemented tactics for B2B and B2C clients.",
      "Redesigned conversion funnels, leading to an average 22% uplift in customer acquisition.",
      "Collaborated with frontend developers to ensure pixel-perfect design and responsive implementation.",
    ],
  },
];

const PROJECTS = [
  {
    image: PROJECT_ONE_IMAGE,
    alt: "Aura Finance dashboard design shown on a tablet",
    title: "Aura Finance",
    subtitle: "FinTech Mobile App Design",
    body: "Redesigned the core dashboard to streamline financial tracking. The intuitive interface resulted in a 25% increase in daily active users and a 15% improvement in user retention within the first quarter.",
    tags: ["UI Design", "React Native"],
  },
  {
    image: PROJECT_TWO_IMAGE,
    alt: "Modern workspace used for the Maison e-commerce platform build",
    title: "Maison E-commerce",
    subtitle: "Premium Retail Platform",
    body: "Developed a premium shopping experience for a high-end retail brand. Strategic UX improvements and CRO tactics achieved a 40% increase in checkout conversions and reduced average page load time by 1.2 seconds.",
    tags: ["UX Research", "Webflow"],
  },
];

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="text-headline-md text-primary">{title}</h2>
    </div>
  );
}

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-x-hidden">
      <header className="fixed top-0 z-50 w-full border-b border-outline-variant/30 bg-surface/80 shadow-sm backdrop-blur-md transition-all duration-300 ease-in-out">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-margin-mobile md:px-margin-desktop">
          <a href="#hero" className="font-heading text-headline-md font-bold text-primary">
            RI
          </a>
          <nav className="hidden gap-8 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-label-md text-on-surface-variant transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="text-on-surface-variant transition-colors hover:text-primary focus:outline-none md:hidden"
          >
            <svg
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
        {open && (
          <nav className="flex flex-col border-t border-outline-variant/30 bg-surface px-margin-mobile py-4 md:hidden">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-label-md text-on-surface-variant transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main className="mx-auto flex max-w-[1280px] flex-col gap-16 px-margin-mobile pt-24 pb-20 md:gap-stack-lg md:px-margin-desktop">
        <section
          id="hero"
          className="flex flex-col items-center gap-8 pt-8 text-center md:pt-16"
        >
          <div className="h-32 w-32 overflow-hidden rounded-full border border-outline-variant/30 shadow-sm md:h-40 md:w-40">
            <img
              src={HERO_IMAGE}
              alt="Portrait of Ramah Ishtiaq"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-headline-sm text-primary md:text-display-lg">Ramah Ishtiaq</h1>
            <p className="mx-auto max-w-md text-body-lg text-on-surface-variant">
              Crafting elegant digital experiences through thoughtful design and engineering.
            </p>
            <p className="mt-2 text-label-md text-primary">
              Expertise in E-commerce platforms: Amazon, eBay, TikTok Shop
            </p>
          </div>
          <div className="mt-4 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <a
              href="#projects"
              className="rounded-lg bg-primary px-8 py-3 text-center text-label-md text-primary-foreground shadow-sm transition-colors hover:bg-secondary"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-outline-variant/50 bg-surface-container px-8 py-3 text-center text-label-md text-on-surface transition-colors hover:bg-surface-container-high"
            >
              Contact Me
            </a>
          </div>
        </section>

        <section id="about" className="flex flex-col gap-8">
          <SectionHeading eyebrow="Introduction" title="About Me" />
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col gap-4 md:col-span-2">
              <p className="text-on-surface-variant">
                I am a multi-disciplinary designer and developer passionate about creating
                meaningful digital products. With a focus on minimalism and high-end functional
                professionalism, I aim to bridge the gap between complex problems and elegant
                solutions.
              </p>
              <div>
                <h3 className="mb-2 text-[20px] font-semibold text-primary">
                  Results-Driven Approach
                </h3>
                <p className="text-on-surface-variant">
                  I focus on driving measurable growth through strategic planning and execution. By
                  analyzing market trends and user behavior, I implement solutions that increase
                  conversion rates and optimize operational workflows, ensuring a direct impact on
                  the bottom line.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { value: "5+", label: "Years Experience" },
                { value: "40+", label: "Projects Completed" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center rounded-xl border border-outline-variant/30 bg-surface-container-low p-6 shadow-elevated"
                >
                  <span className="text-headline-md font-bold text-primary">{stat.value}</span>
                  <span className="text-caption text-on-surface-variant">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="flex flex-col gap-8">
          <SectionHeading eyebrow="Expertise" title="Skills" />
          <div className="flex flex-wrap gap-3">
            {SKILLS.map((skill) => (
              <div
                key={skill}
                className="grow rounded-full border border-outline-variant/30 bg-surface-container-low px-4 py-2 text-center md:grow-0"
              >
                <span className="text-label-md text-on-surface-variant">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="flex flex-col gap-8">
          <SectionHeading eyebrow="Career History" title="Experience" />
          <div className="flex flex-col gap-8">
            {EXPERIENCE.map((job) => (
              <div key={job.role} className="flex flex-col gap-3 border-l-2 border-primary/20 pl-4">
                <h3 className="text-[20px] font-semibold text-primary">{job.role}</h3>
                <span className="text-label-md text-secondary">{job.meta}</span>
                <ul className="mt-2 flex list-disc flex-col gap-2 pl-5 text-on-surface-variant">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="flex flex-col gap-8">
          <SectionHeading eyebrow="Portfolio" title="Selected Work" />
          <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-gutter">
            {PROJECTS.map((project) => (
              <article key={project.title} className="group flex flex-col gap-4">
                <div className="aspect-video w-full overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div>
                  <h3 className="mb-1 text-headline-md text-primary">{project.title}</h3>
                  <p className="mb-2 text-sm font-medium text-on-surface-variant">
                    {project.subtitle}
                  </p>
                  <p className="mb-3 text-body-md text-on-surface-variant">{project.body}</p>
                  <div className="flex gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-secondary-container/30 px-2 py-1 text-[10px] font-bold tracking-wider text-secondary uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer
        id="contact"
        className="flex w-full flex-col items-center gap-6 border-t border-outline-variant bg-surface-container-lowest px-margin-mobile py-gutter text-center md:px-margin-desktop"
      >
        <div className="font-heading text-headline-md text-primary">RI</div>
        <div className="flex gap-6">
          {["LinkedIn", "Dribbble", "Email"].map((link) => (
            <a
              key={link}
              href="#contact"
              className="text-label-md text-on-surface-variant transition-colors hover:text-primary"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="text-caption text-on-surface-variant/70">
          © 2024 Ramah Ishtiaq. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
