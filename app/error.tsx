"use client";

import "./error.css";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="errorPage">
      <section className="errorPanel">
        <h1>Something went wrong</h1>
        <p>
          We could not complete this request. Please try again.
        </p>
        <button
          type="button"
          onClick={reset}
          className="errorAction"
        >
          Try again
        </button>
      </section>
    </main>
  );
}