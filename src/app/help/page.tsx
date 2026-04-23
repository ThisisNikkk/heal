
const resources = [
  {
    country: "France",
    lines: [
      { name: "SOS Amitie", value: "09 72 39 40 50", label: "Available 24/7" },
      { name: "Suicide Ecoute", value: "01 45 39 40 00", label: "Available 24/7" },
    ],
  },
  {
    country: "United States",
    lines: [{ name: "988 Suicide & Crisis Lifeline", value: "988", label: "Available 24/7" }],
  },
  {
    country: "United Kingdom",
    lines: [{ name: "Crisis Text Line", value: "Text SHOUT to 85258", label: "Available 24/7" }],
  },
];

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 pt-24 md:pt-32">

        <header className="glass-card rounded-3xl p-6 sm:p-8">
          <h1 className="text-4xl tracking-[-0.03em] sm:text-5xl">Help</h1>
          <p className="mt-2 text-lg text-foreground/75">We are here for you</p>
        </header>

        <section className="mt-8 rounded-3xl border border-[var(--brand-primary)]/35 bg-[var(--brand-primary)]/12 p-6 sm:p-8">
          <h2 className="text-3xl tracking-[-0.02em]">If you are in immediate danger</h2>
          <p className="mt-3 text-lg leading-8 text-foreground/80">
            Please call emergency services (911, 112, or your local emergency number) or go to your nearest emergency room.
          </p>
        </section>

        <section className="mt-8 space-y-6">
          {resources.map((resource) => (
            <div key={resource.country}>
              <h3 className="text-3xl tracking-[-0.02em]">{resource.country}</h3>
              <div className="mt-3 space-y-3">
                {resource.lines.map((line) => (
                  <article key={line.name} className="panel-card rounded-3xl p-5">
                    <div className="text-2xl tracking-[-0.01em]">{line.name}</div>
                    <div className="mt-1 text-base text-foreground/75">{line.label}</div>
                    <button className="mt-4 w-full rounded-2xl bg-[var(--brand-primary)] px-4 py-3 text-xl font-semibold text-white">
                      {line.value}
                    </button>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="mt-8 glass-card rounded-3xl p-6 sm:p-8">
          <h3 className="text-3xl tracking-[-0.02em]">Additional support</h3>
          <ul className="mt-4 space-y-3 text-lg text-foreground/80">
            <li>Online Crisis Chat Resources</li>
            <li>Find a Therapist Near You</li>
            <li>Mental Health First Aid</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
