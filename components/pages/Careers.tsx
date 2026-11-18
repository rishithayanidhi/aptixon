import Link from "next/link";
import { SiteFooter, SiteHeader } from "./SiteChrome";

export function CareersPage() {
  return (
    <>
      <SiteHeader />
      <main className="pageContent innerPage">
        <p className="eyebrow">Join our network</p>
        <h1>Be part of what we build.</h1>
        <p>Explore event crew opportunities, work with our teams and grow through real-world experiences.</p>
        <Link className="primaryButton" href="/login">Explore Crew Opportunities</Link>
      </main>
      <SiteFooter />
    </>
  );
}
