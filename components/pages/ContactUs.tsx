import { SiteFooter, SiteHeader } from "./SiteChrome";

export function ContactUsPage() {
  return (
    <>
      <SiteHeader />
      <main className="pageContent innerPage">
        <p className="eyebrow">Contact Aptixon</p>
        <h1>Let's build something better.</h1>
        <p>Reach out to our team for business, technology, sports and event enquiries.</p>
        <a className="primaryButton" href="mailto:hello@aptixon.com">Email Aptixon</a>
      </main>
      <SiteFooter />
    </>
  );
}
