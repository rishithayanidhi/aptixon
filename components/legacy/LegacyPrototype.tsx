import { siteConfig } from "@/lib/config/site";

export function LegacyPrototype() {
  return (
    <main className="prototype">
      <iframe
        title="Aptixon unified web platform"
        src={siteConfig.legacyUrl}
        className="prototypeFrame"
        allow="camera; microphone; clipboard-read; clipboard-write"
        loading="eager"
      />
    </main>
  );
}
