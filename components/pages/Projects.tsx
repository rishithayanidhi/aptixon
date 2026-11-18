import Link from "next/link";
import { SiteFooter, SiteHeader } from "./SiteChrome";

export function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main className="pageContent innerPage">
        <p className="eyebrow">Aptixon platform</p>
        <h1>Built for the people behind every event.</h1>
        <p>Employees manage attendance and leave. Event Managers approve timesheets and expenses. Crew Workers discover paid shifts and track applications.</p>
        <Link className="primaryButton" href="/login">Access the Aptixon Portal</Link>
      </main>
      <SiteFooter />
    </>
  );
}
