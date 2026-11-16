import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { title: site.title, description: site.description, url: "/", type: "website" },
};

const experience = [
  {
    role: "Senior Systems Associate",
    period: "Oct 2023 — Mar 2024",
    points: [
      "Reviewed code to support consistent standards and maintain code quality.",
      "Resolved issues across connected components and helped teammates troubleshoot problems.",
      "Supported teammates through collaboration and knowledge sharing.",
    ],
  },
  {
    role: "Systems Associate",
    period: "Jan 2023 — Oct 2023",
    points: [
      "Developed and maintained REST APIs.",
      "Helped troubleshoot issues across components and reviewed code for quality and consistency.",
    ],
  },
  {
    role: "Operations Executive",
    period: "May 2022 — Jan 2023",
    points: [
      "Designed and developed client-focused REST APIs with Java and Spring Boot for a telecommunications project.",
      "Deployed code with Jenkins and collaborated with cross-functional teams using Jira.",
    ],
  },
  {
    role: "Operations Executive Trainee",
    period: "Mar 2022 — May 2022",
    points: [
      "Built foundations in Java, Spring Boot, REST API development, and MySQL.",
      "Contributed to core features for an e-commerce backend and collaborated with Git and GitHub.",
    ],
  },
];

const projects = [
  {
    number: "01",
    name: "Anime Discussion App",
    kind: "Backend · Java",
    description:
      "A REST API backend for anime discussions, with secure user authentication and authorization, documented endpoints, and a MySQL data model for user-generated content.",
    stack: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "MySQL", "Swagger"],
    source: "https://github.com/ajayanuragi/anime-discussion-app",
  },
  {
    number: "02",
    name: "Library Management System",
    kind: "Backend · Java",
    description:
      "A library management backend with REST endpoints and CRUD operations for books, users, and borrowing records, including book search.",
    stack: ["Java", "Spring Boot", "REST APIs"],
    source: "https://github.com/ajayanuragi/library-management",
  },
  {
    number: "03",
    name: "Eir",
    kind: "Personal app · Weight tracking",
    description:
      "A weight-tracking app for recording progress and visualizing a personal journey over time.",
    stack: [],
    demo: "https://eir-mu.vercel.app/",
  },
  {
    number: "04",
    name: "Kibisis",
    kind: "Web app · Smart URL classifier",
    description:
      "An external memory for the web: save links in one place so they’re easier to keep and find later.",
    stack: [],
    source: "https://github.com/ajayanuragi/kibisis",
    demo: "https://kibisis.vercel.app/",
  },
  {
    number: "05",
    name: "Imagify",
    kind: "Full stack · AI image generation",
    description:
      "A text-to-image app with account sign-up, sign-in, and image downloads, built with a React interface and an Express, Node.js, and MongoDB backend.",
    stack: ["React", "Express", "MongoDB", "JWT"],
    source: "https://github.com/ajayanuragi/imagify",
    demo: "https://imagify-virid-xi.vercel.app/",
  },
];

const certificates = [
  "Java Programming I",
  "Java Programming II",
  "Full Stack Open: TypeScript",
  "Full Stack Open: Next.js",
];

const skills = [
  { heading: "Languages", items: "Java · JavaScript · TypeScript · SQL · HTML · CSS" },
  { heading: "Backend", items: "Spring Boot · Spring Security · Spring Data JPA · Node.js · Express · REST APIs" },
  { heading: "Frontend", items: "React · Vite · React Router · Tailwind CSS · Bootstrap" },
  { heading: "Databases", items: "MySQL · MongoDB" },
  { heading: "Developer tools", items: "Git · GitHub · Jenkins · Maven · Postman · Swagger" },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="/" aria-label={`${site.name} home`}>{site.name}<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#certificates">Certificates</a>
          <a href="https://github.com/ajayanuragi" target="_blank" rel="noreferrer">GitHub ↗</a>
        </nav>
      </header>
      <main id="main">
        <section className="intro" aria-labelledby="intro-title">
          <p className="eyebrow">Full-stack & backend development</p>
          <h1 id="intro-title">Hi, I’m {site.name}<span>.</span></h1>
          <p className="description">I build full-stack web apps and backend services, from React interfaces to Java and Spring Boot APIs.</p>
          <a className="text-link" href="#projects">Explore selected work <span aria-hidden="true">↓</span></a>
          <p className="availability">Based on my experience at Infosys and independent projects.</p>
        </section>

        <section id="projects" className="content-section" aria-labelledby="projects-title">
          <div className="section-heading">
            <p className="eyebrow">01 / Selected work</p>
            <h2 id="projects-title">Projects I’ve built.</h2>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-topline">
                  <span className="project-number">{project.number}</span>
                  <span className="project-kind">{project.kind}</span>
                </div>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                {project.stack.length > 0 && (
                  <ul className="stack" aria-label={`${project.name} technologies`}>
                    {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
                  </ul>
                )}
                <div className="project-links">
                  <a href={project.source} target="_blank" rel="noreferrer">View source <span aria-hidden="true">↗</span></a>
                  {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo <span aria-hidden="true">↗</span></a>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="content-section" aria-labelledby="experience-title">
          <div className="section-heading">
            <p className="eyebrow">02 / Experience</p>
            <h2 id="experience-title">Where I’ve worked.</h2>
          </div>
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-item" key={item.role}>
                <div className="experience-heading">
                  <div><h3>{item.role}</h3><p className="company">Infosys</p></div>
                  <p className="period">{item.period}</p>
                </div>
                <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="content-section about" aria-labelledby="about-title">
          <div className="section-heading">
            <p className="eyebrow">03 / About</p>
            <h2 id="about-title">Technologies I use.</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="skill-item" key={skill.heading}>
                <h3>{skill.heading}</h3><p>{skill.items}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="certificates" className="content-section" aria-labelledby="certificates-title">
          <div className="section-heading">
            <p className="eyebrow">04 / Certificates</p>
            <h2 id="certificates-title">Continued learning.</h2>
          </div>
          <ul className="certificate-list">
            {certificates.map((certificate) => (
              <li className="certificate-item" key={certificate}>
                <span className="certificate-mark" aria-hidden="true">✓</span>
                <div><h3>{certificate}</h3><p>University of Helsinki · MOOC.fi</p></div>
              </li>
            ))}
          </ul>
        </section>

      </main>
      <footer>
        <span>{site.name} · Full-stack & Backend Developer</span>
        <a href="https://github.com/ajayanuragi" target="_blank" rel="noreferrer">GitHub ↗</a>
      </footer>
    </>
  );
}
