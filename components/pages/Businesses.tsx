import { SiteFooter, SiteHeader } from "./SiteChrome";

export function BusinessesPage() {
  return (
    <>
      <SiteHeader />
      <main className="pageContent innerPage">
        <p className="eyebrow">Our Businesses</p>
        <h1>Three divisions. One connected vision.</h1>
        <div className="featureGrid">
          <article><h2>Aptixon Infotech</h2><p>Technology solutions and digital transformation services.</p></article>
          <article><h2>Sports and Games Ventures</h2><p>Sports operations, leagues, tournaments and community development.</p></article>
          <article><h2>Aptixon EVENTRA</h2><p>Complete event planning, ticketing and operational technology.</p></article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
