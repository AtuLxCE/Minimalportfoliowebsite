import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Workshops } from "./components/Workshops";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";
import { AnalyticsConsent } from "./components/AnalyticsConsent";
import "./styles/portfolio.css";

export default function App() {
  return (
    <div className="portfolio">
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Projects />
        <Workshops />
        <About />
        <Skills />
        <Contact />
      </main>
      <footer className="site-footer page-width">
        <p>© {new Date().getFullYear()} Atul Shreewastav</p>
        <a href="#top">Back to top ↑</a>
        <AnalyticsConsent />
      </footer>
    </div>
  );
}
