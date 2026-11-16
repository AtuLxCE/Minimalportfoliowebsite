export function Workshops() {
  return (
    <section id="workshops" className="workshops-section section-space page-width">
      <div className="section-heading">
        <div><p className="eyebrow">02 / TRAINING & WORKSHOPS</p><h2>Sharing what I know.</h2></div>
        <p>I’ve been teaching technology, AI,<br />and digital literacy since 2021.</p>
      </div>
      <div className="workshop-grid">
        <article className="workshop">
          <div className="workshop-photos">
            <img src="/workshops/bhutan-group.webp" alt="Digital Skilling Program participants gathered outdoors in Bhutan with their certificates" width="1400" height="1050" loading="lazy" />
            <img src="/workshops/bhutan-classroom.webp" alt="Participants in a Digital Skilling Program classroom in Thimphu" width="1400" height="1050" loading="lazy" />
          </div>
          <p className="eyebrow workshop-location">THIMPHU, BHUTAN · 2026</p>
          <h3>Digital Skilling Program</h3>
          <p className="workshop-organizer">iBest Institute in collaboration with GovTech Agency</p>
          <p>I was invited to Bhutan to teach a comprehensive digital-skills program covering computer and network fundamentals, cybersecurity, privacy, AI, and digital ethics.</p>
          <p>The training also covered everyday productivity tools: documents, spreadsheets, and presentations using Microsoft Office and Google Workspace.</p>
        </article>
        <article className="workshop">
          <div className="workshop-photos">
            <img src="/workshops/lalitpur-session.webp" alt="A trainer speaking to participants seated around a table during the Lalitpur AI and content creation training" width="1400" height="1050" loading="lazy" />
            <img src="/workshops/lalitpur-hands-on.webp" alt="A trainer working with participants around a table during the Lalitpur AI and content creation training" width="1400" height="1050" loading="lazy" />
          </div>
          <p className="eyebrow workshop-location">LALITPUR, NEPAL · 2026</p>
          <h3>AI & Content Creator Training for Youths</h3>
          <p className="workshop-organizer">Organized by Lalitpur Metropolitan City</p>
          <p>I taught AI fundamentals, practical AI tools, and content creation using AI, alongside AI ethics and the legal frameworks relevant to their use in Nepal.</p>
        </article>
      </div>
    </section>
  );
}
