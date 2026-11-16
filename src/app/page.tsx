import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { title: site.title, description: site.description, url: "/", type: "website" },
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a href="/" aria-label={`${site.name} home`}>{site.name}<span>.</span></a>
        <a href="#projects">Projects ↗</a>
      </header>
      <main id="main">
        <section className="intro" aria-labelledby="intro-title">
          <p className="eyebrow">Personal portfolio</p>
          <h1 id="intro-title">Hi, I’m {site.name}<span>.</span></h1>
          <p className="description">A space for my projects, ideas, and the things I’m working on.</p>
          <a className="text-link" href="#projects">Explore my work <span aria-hidden="true">↗</span></a>
        </section>
        <section id="projects" className="projects" aria-labelledby="projects-title">
          <p className="eyebrow">01 / Projects</p>
          <h2 id="projects-title">A work in progress.</h2>
          <p>I’m putting together a selection of my work. More coming soon.</p>
        </section>
      </main>
      <footer>{site.name} · Personal portfolio</footer>
    </>
  );
}
