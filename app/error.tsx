"use client";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24, background: "#f5f7fb" }}>
      <section style={{ maxWidth: 480, textAlign: "center" }}>
        <h1 style={{ color: "#071b3c", marginBottom: 12 }}>Something went wrong</h1>
        <p style={{ color: "#667085", marginBottom: 24 }}>
          We could not complete this request. Please try again.
        </p>
        <button
          type="button"
          onClick={reset}
          style={{ border: 0, borderRadius: 999, padding: "12px 20px", background: "#35c928", color: "#fff", fontWeight: 800, cursor: "pointer" }}
        >
          Try again
        </button>
      </section>
    </main>
  );
}