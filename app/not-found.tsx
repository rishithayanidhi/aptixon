import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24, background: "#f5f7fb" }}>
      <section style={{ maxWidth: 480, textAlign: "center" }}>
        <h1 style={{ color: "#071b3c" }}>Page not found</h1>
        <p style={{ color: "#667085" }}>The requested Aptixon page does not exist.</p>
        <Link href="/" style={{ color: "#249d22", fontWeight: 800 }}>Return home</Link>
      </section>
    </main>
  );
}