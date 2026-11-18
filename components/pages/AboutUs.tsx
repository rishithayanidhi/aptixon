import { SiteFooter, SiteHeader } from "./SiteChrome";

export function AboutUsPage() {
  return (
    <>
      <SiteHeader />
      <main className="pageContent innerPage">
        <p className="eyebrow">One connected platform</p>
        <h1>People, events and operations — together.</h1>
        <p>Aptixon brings teams and event crew into one connected digital experience. Access the right tools based on your role, from workforce management to event opportunities.</p>
        <div className="featureGrid">
          <article><h2>Unified access</h2><p>One entry point for management, employees and crew workers.</p></article>
          <article><h2>Event operations</h2><p>Coordinate attendance, timesheets, applications and staffing.</p></article>
          <article><h2>Secure workflows</h2><p>Structured onboarding, identity verification and controlled approvals.</p></article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
