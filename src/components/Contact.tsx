import { ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="contact-section section-space">
      <div className="page-width">
        <p className="eyebrow">05 / CONTACT</p>
        <div className="contact-layout"><div><h2>Have something<br />in mind?</h2><p>For projects, workshops, or a conversation about AI,<br />send me a note.</p></div><a className="contact-email" href="mailto:atul.ai.dev@gmail.com">atul.ai.dev@gmail.com <ArrowUpRight size={25} /></a></div>
        <a className="text-link contact-whatsapp" href="https://wa.me/9779803311261" target="_blank" rel="noopener noreferrer">WhatsApp · +977 9803311261 <ArrowUpRight size={17} /></a>
        <div className="contact-bottom"><span>Kathmandu, Nepal</span><div><a href="https://github.com/AtuLxCE" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={15} /></a><a href="https://www.linkedin.com/in/atulxce" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={15} /></a></div></div>
      </div>
    </section>
  );
}
