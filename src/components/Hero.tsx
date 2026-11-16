import { ArrowDown, ArrowUpRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="hero page-width">
      <div className="hero-copy">
        <p className="eyebrow"><span className="accent-dot" /> AI / ML ENGINEER · KATHMANDU, NEPAL</p>
        <h1>Atul<br /><span>Shreewastav.</span></h1>
        <p className="hero-intro">I build AI systems for live speech translation, document retrieval, and computer vision.</p>
        <p className="hero-role">Currently Lead AI/ML Engineer at <a href="https://acaiberry.io" target="_blank" rel="noopener noreferrer">acAIberry <ArrowUpRight size={14} /></a>.</p>
        <div className="hero-actions">
          <a className="primary-link" href="#projects">Explore my work <ArrowDown size={17} /></a>
          <a className="text-link" href="/Atul_Shreewastav_Resume.pdf" download>Download resume · PDF <Download size={17} /></a>
          <a className="text-link" href="mailto:atul.ai.dev@gmail.com">Say hello <ArrowUpRight size={17} /></a>
        </div>
      </div>
      <figure className="hero-portrait">
        <div className="portrait-frame"><img src="/Atul.jpeg" alt="Atul Shreewastav" width="420" height="500" fetchPriority="high" /></div>
        <figcaption><span>A little about me, through my work.</span><span aria-hidden="true">↙</span></figcaption>
      </figure>
      <div className="hero-footnote"><span>Speech & language / Document retrieval / Computer vision</span><a href="https://github.com/AtuLxCE" target="_blank" rel="noopener noreferrer">Find me on GitHub <ArrowUpRight size={15} /></a></div>
    </section>
  );
}
