import Link from "next/link";
import "./error.css";

export default function NotFound() {
  return (
    <main className="errorPage">
      <section className="errorPanel">
        <h1>Page not found</h1>
        <p>The requested Aptixon page does not exist.</p>
        <Link href="/" className="errorLink">Return home</Link>
      </section>
    </main>
  );
}