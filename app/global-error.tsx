"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, Helvetica, sans-serif" }}>
        <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24 }}>
          <section style={{ maxWidth: 480, textAlign: "center" }}>
            <h1 style={{ color: "#071b3c" }}>Aptixon is temporarily unavailable</h1>
            <p style={{ color: "#667085" }}>Please reload and try again.</p>
            <button type="button" onClick={reset}>Reload</button>
          </section>
        </main>
      </body>
    </html>
  );
}