import { ArrowUpRight, FileText, ScanEye, MessageSquare, Camera, Presentation } from "lucide-react";

const projects = [
  {
    title: "Skinmate",
    category: "SKIN ANALYSIS / ACAIBERRY",
    description: "Skinmate analyzes a selfie to give people skin insights and skincare recommendations.",
    summary: "I built the image-processing pipeline and app, and now lead the project.",
    contribution: "I built the core image-processing pipeline and the initial codebase for the team, along with authentication, the website and UI/UX, and an Expo app for iOS, Android, and web. I now manage the project and lead the team.",
    tags: "Image processing / Authentication / Expo / Team leadership",
    url: "https://skinmate.ai",
    input: "Selfie",
    inputIcon: Camera,
    output: "Skin insights",
    icon: ScanEye,
    className: "vision-preview",
  },
  {
    title: "MyAbhiyan",
    category: "CAMPAIGN MANAGEMENT / ACAIBERRY",
    description: "MyAbhiyan is a campaign-management platform for Nepal.",
    summary: "I worked on the data, database, and AI assistant, and lead the team.",
    contribution: "I worked on data collection, processing, and analytics, designed the database, and worked on the AI chat assistant. I also lead the team building the platform.",
    tags: "Data analytics / Database design / AI assistant / Team leadership",
    url: "https://myabhiyan.com",
    input: "Campaign data",
    inputIcon: FileText,
    output: "Insights & answers",
    icon: MessageSquare,
    className: "chat-preview",
  },
  {
    title: "Presentify",
    category: "LANGUAGE & AUTOMATION / COLLEGE PROJECT",
    description: "Turn a research paper into a presentation. Presentify uses language models to take the paper’s content and assemble slides for an academic talk.",
    contribution: "",
    tags: "LLMs / NLP / Python",
    url: "https://youtu.be/pY7fP9XLudg",
    input: "Research paper",
    inputIcon: FileText,
    output: "Presentation",
    icon: Presentation,
    className: "paper-preview",
  },
  {
    title: "FuseNirikshak",
    category: "COMPUTER VISION / COLLEGE PROJECT",
    description: "Monitor online exams with computer vision. FuseNirikshak detects activity that may need a proctor’s attention during an exam.",
    contribution: "",
    tags: "Computer vision / Deep learning / Python",
    url: "https://youtu.be/KAetbDEn8IU",
    input: "Exam video",
    inputIcon: FileText,
    output: "Activity detection",
    icon: ScanEye,
    className: "vision-preview",
  },
  {
    title: "PDFConvo",
    category: "DOCUMENT RETRIEVAL / COLLEGE PROJECT",
    description: "Ask questions about a PDF. PDFConvo retrieves relevant passages and uses them as context for a language model’s answer.",
    contribution: "",
    tags: "RAG / LLMs / Vector database",
    url: "https://youtu.be/0QLXdarbhqw",
    input: "PDF + question",
    inputIcon: FileText,
    output: "Document-based answer",
    icon: MessageSquare,
    className: "chat-preview",
  },
];

const professionalProjects = [
  ...projects.filter((project) => project.contribution),
  {
    title: "NEMPD",
    category: "MEDICINAL-PLANT RESEARCH / ACAIBERRY",
    description: "A database of Nepal’s medicinal plants for research into antimicrobial activity and drug discovery.",
    summary: "I led software development and infrastructure with the acAIberry team.",
    contribution: "I led technical development and built the infrastructure for the Nepal Medicinal Plants Database. The research initiative brings together HEPHN and the University of Tokyo.",
    url: "https://nempd.org",
  },
];

export function Projects() {
  return (
    <section id="projects" className="work-section section-space">
      <div className="page-width">
        <div className="section-heading"><div><p className="eyebrow">01 / SELECTED WORK</p><h2>What I’ve built.</h2></div><p>My work with the acAIberry team,<br />alongside earlier college projects.</p></div>
        <article className="featured-project">
          <div className="featured-copy">
            <p className="eyebrow">FEATURED / TECHNICAL & ENGINE DEVELOPMENT LEAD</p>
            <h3>Omnio</h3>
            <p className="featured-summary">Live speech. Translated as people speak.</p>
            <p>I led technical development and helped build the engine. Omnio delivers live translated audio and captions to people’s own devices at events and meetings.</p>
            <div className="featured-links"><a className="primary-link" href="https://omnio1.acaiberry.io/attendee/c/CONFYZHZV3FT" target="_blank" rel="noopener noreferrer">Listen to the demo <ArrowUpRight size={17} /></a><a className="text-link" href="https://acaiberry.io/products/omnio" target="_blank" rel="noopener noreferrer">Explore Omnio <ArrowUpRight size={17} /></a><a className="text-link" href="https://acaiberry.io/resources/case-studies/when-400-people-share-one-conversation-omnio-at-the-global-pastoralist-gathering-mongolia" target="_blank" rel="noopener noreferrer">Read the event case study <ArrowUpRight size={16} /></a></div>
          </div>
          <figure className="featured-image"><img src="/omnio-mongolia.jpg" alt="Participants at the Global Pastoralist Gathering in Mongolia, where Omnio provided live translation" width="750" height="563" loading="lazy" /><figcaption>Global Pastoralist Gathering, Mongolia · Photo: acAIberry</figcaption></figure>
          <details className="featured-events"><summary>Used at UNCCD COP17 and international gatherings</summary><ul><li><a href="https://acaiberry.io/resources/articles/how-ai-broke-language-barriers-at-the-global-gathering-of-pastoralist-women-real-time-translation-with-omnio" target="_blank" rel="noopener noreferrer">Global Gathering of Pastoralist Women <ArrowUpRight size={14} /></a><span>ICIMOD · Kathmandu, Nepal</span></li><li><a href="https://acaiberry.io/resources/articles/omnio-or-real-time-multilingual-communication-platform" target="_blank" rel="noopener noreferrer">UNCCD COP17 <ArrowUpRight size={14} /></a><span>Mongolia</span></li><li><a href="https://acaiberry.io/resources/case-studies/when-400-people-share-one-conversation-omnio-at-the-global-pastoralist-gathering-mongolia" target="_blank" rel="noopener noreferrer">Global Pastoralist Gathering & Conference <ArrowUpRight size={14} /></a><span>Mongolia</span></li></ul></details>
        </article>
        <div className="project-grid compact-project-grid">
          {professionalProjects.map((project) => (
            <article className="project compact-project" key={project.title}>
              <p className="eyebrow">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-summary">{project.summary}</p>
              <details className="project-details">
                <summary>More details</summary>
                <p>{project.contribution}</p>
              </details>
              <a className="text-link project-demo" href={project.url} target="_blank" rel="noopener noreferrer">Visit {project.title} <ArrowUpRight size={16} /></a>
            </article>
          ))}
        </div>
        <details className="earlier-projects">
          <summary><span className="when-closed">Show earlier projects</span><span className="when-open">Hide earlier projects</span><span className="earlier-count">3 college projects</span></summary>
          <div className="project-grid">
            {projects.filter((project) => !project.contribution).map((project) => (
              <article className="project" key={project.title}>
                <a className={`project-preview ${project.className}`} href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Watch ${project.title} demo`}>
                  <div className="preview-top"><span>EARLIER PROJECT</span><ArrowUpRight size={18} /></div>
                  <div className="workflow" aria-hidden="true"><div className="workflow-input"><project.inputIcon size={24} /><span>{project.input}</span></div><span className="workflow-line" /><div className="workflow-output"><project.icon size={29} /><span>{project.output}</span></div></div>
                  <span className="preview-caption">WORKFLOW OVERVIEW</span>
                </a>
                <p className="eyebrow project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-tools">{project.tags}</p>
                <a className="text-link project-demo" href={project.url} target="_blank" rel="noopener noreferrer">Watch demo <ArrowUpRight size={16} /></a>
              </article>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
