
const faqs = [
  {
    q: "How does progress tracking work?",
    a: "Your evolution is tracked automatically through your activities: journal writing, completed challenges, and finished healing modules. You can see your progress in the Evolution section.",
  },
  { q: "Are my data secure?", a: "Yes. HEAL uses strong security practices and keeps your personal entries private." },
  { q: "How to use Mel, the virtual assistant?", a: "Open Chat from navigation and start typing how you feel. Mel responds with guided support." },
  { q: "What to do if I feel distressed?", a: "Use the Help page emergency resources and contact local crisis support when needed." },
  { q: "How to cancel my Premium subscription?", a: "You can manage subscription settings from your app store account page." },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 pt-24 md:pt-32">

        <header className="glass-card rounded-3xl p-6 sm:p-8">
          <h1 className="text-4xl tracking-[-0.03em] sm:text-5xl">FAQs</h1>
          <p className="mt-2 text-lg text-foreground/75">We are here for you</p>
        </header>

        <section className="mt-8 panel-card rounded-3xl p-6 sm:p-8">
          <h2 className="text-3xl tracking-[-0.02em]">Frequently asked questions</h2>
          <div className="mt-5 space-y-3">
            {faqs.map((item, i) => (
              <details key={item.q} className="rounded-3xl border border-[var(--edge)] bg-background p-5" open={i === 0}>
                <summary className="cursor-pointer text-xl tracking-[-0.01em]">{item.q}</summary>
                <p className="mt-4 text-lg leading-8 text-foreground/80">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-8 panel-card rounded-3xl p-6 sm:p-8">
          <h3 className="text-3xl tracking-[-0.02em]">Your feedback matters</h3>
          <p className="mt-3 text-lg leading-8 text-foreground/80">
            Help us improve Mel by sharing your suggestions and experience feedback.
          </p>
          <button className="mt-6 rounded-full bg-[var(--brand-primary)] px-8 py-4 text-xl font-semibold text-white">
            Send feedback
          </button>
        </section>
      </div>
    </main>
  );
}
