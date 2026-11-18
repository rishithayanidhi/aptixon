import Link from "next/link";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/businesses", label: "Our Businesses" },
  { href: "/projects", label: "Projects" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact Us" },
] as const;

export function SiteHeader() {
  return (
    <header className="siteHeader">
      <Link className="siteBrand" href="/" aria-label="Aptixon home">
        <span className="brandMark" aria-hidden="true" />
        <span>
          <strong>Aptixon<sup>®</sup></strong>
          <small>Together We Build Better World</small>
        </span>
      </Link>
      <nav className="siteNav" aria-label="Primary navigation">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href}>{item.label}</Link>
        ))}
      </nav>
      <Link className="primaryButton headerButton" href="/login">Get in Touch</Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="footerGrid">
        <div>
          <strong>Aptixon</strong>
          <p>A diversified business group delivering technology solutions, sporting opportunities and innovative event experiences.</p>
        </div>
        <div>
          <h3>Explore</h3>
          <Link href="/about">About Us</Link>
          <Link href="/businesses">Our Businesses</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/careers">Careers</Link>
        </div>
        <div>
          <h3>Platform</h3>
          <Link href="/login">Unified Login</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
      </div>
      <p className="copyright">© 2026 Aptixon.com. All rights reserved.</p>
    </footer>
  );
}
