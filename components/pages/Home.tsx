import Link from "next/link";
import { SiteFooter, SiteHeader } from "./SiteChrome";

export function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="heroSection">
          <div className="pageContent heroGrid">
            <div>
              <h1>Building the Future<br />Through <span>Innovation.</span></h1>
              <p>Aptixon is a diversified business group delivering technology solutions, developing sporting opportunities and creating innovative event experiences.</p>
              <div className="heroActions">
                <Link className="primaryButton" href="/businesses">Explore Our Businesses →</Link>
                <Link className="outlineButton" href="/about">About Aptixon</Link>
              </div>
            </div>
            <div className="heroVisual" aria-label="Technology, sports and live events">
              <div className="visualCard">💻<span>Technology</span></div>
              <div className="visualCard">⚽<span>Sports & Games</span></div>
              <div className="visualCard">🎤<span>Live Events</span></div>
            </div>
          </div>
        </section>
        <section className="pageContent businessSection">
          <p className="statement">A system built with smartness, precision, and advanced technology.</p>
          <div className="businessGrid">
            <article><h2>Aptixon Infotech</h2><p>Software development, web and mobile applications, IT consulting and digital transformation.</p><Link href="/businesses">Explore Infotech →</Link></article>
            <article><h2>Aptixon Sports</h2><p>Football league management, tournaments, youth development and sports partnerships.</p><Link href="/businesses">Explore Sports →</Link></article>
            <article><h2>Aptixon EVENTRA</h2><p>Event management, planning, registration, ticketing and event technology.</p><Link href="/businesses">Explore EVENTRA →</Link></article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
