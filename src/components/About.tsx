import { ArrowUpRight } from "lucide-react";

export function About() {
  return (
    <section id="about" className="about-section section-space page-width">
      <div><p className="eyebrow">03 / BACKGROUND</p><h2>From models<br />to applications.</h2></div>
      <div className="about-content">
        <p className="about-intro">I manage acAIberry’s tech team, lead project delivery, and stay hands-on in the engineering.</p>
        <p>I own technical and infrastructure decisions and manage projects from ideation through delivery. My hands-on work spans system design, engine development, cloud infrastructure, CI/CD, and deployment. I led Omnio’s technical and translation-engine development, and the technology and infrastructure work for NEMPD, alongside the acAIberry team.</p>
        <dl className="background-list">
          <div><dt>Current role</dt><dd>Lead AI/ML Engineer <a href="https://acaiberry.io" target="_blank" rel="noopener noreferrer">acAIberry <ArrowUpRight size={14} /></a></dd></div>
          <div><dt>Fellowship</dt><dd>Fusemachines AI Fellowship <span>2024</span></dd></div>
          <div><dt>Education</dt><dd>Computer Engineering <span>Tribhuvan University, IOE</span></dd></div>
          <div><dt>Field work</dt><dd>Census Enumerator <span>National Population Census of Nepal · 2078 BS (2021)</span></dd></div>
        </dl>
      </div>
    </section>
  );
}
