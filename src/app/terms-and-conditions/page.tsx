
const sections = [
  {
    title: "1. Eligibility",
    paragraphs: [
      "You must be at least the minimum legal age required in your jurisdiction to use the App.",
    ],
  },
  {
    title: "2. Account and Security",
    paragraphs: [
      "You may register using email/password or supported third-party authentication providers. You are responsible for account credentials and all activity under your account.",
    ],
  },
  {
    title: "3. Purpose of HEAL",
    paragraphs: [
      "HEAL offers wellness and self-help tools. It is not a provider of medical diagnosis, treatment, or emergency response.",
    ],
  },
  {
    title: "4. User Content",
    paragraphs: [
      "You retain ownership of content you submit. You grant the Company a non-exclusive, worldwide, royalty-free license to process and use content solely to operate, maintain, secure, and improve HEAL.",
      "You are responsible for ensuring your content is lawful and does not violate third-party rights.",
    ],
  },
  {
    title: "5. Prohibited Use",
    paragraphs: ["You agree not to:"],
    bullets: [
      "Use HEAL for unlawful purposes",
      "Interfere with app systems or security",
      "Attempt unauthorized access",
      "Upload malicious code or harmful content",
      "Misrepresent identity",
    ],
  },
  {
    title: "6. Notifications",
    paragraphs: [
      "If enabled, HEAL may send push notifications and service communications. You can manage notification preferences in device settings.",
    ],
  },
  {
    title: "7. Third Party Services",
    paragraphs: [
      "HEAL may integrate third-party services. Their terms and policies may apply to your use of those services.",
    ],
  },
  {
    title: "8. Intellectual Property",
    paragraphs: [
      "All rights in HEAL, excluding user-generated content, are owned by or licensed to the Company. You receive a limited, revocable, non-transferable license for personal, non-commercial use.",
    ],
  },
  {
    title: "9. Fees If Applicable",
    paragraphs: [
      "If paid features are introduced, pricing and billing terms will be shown before purchase.",
    ],
  },
  {
    title: "10. Suspension and Termination",
    paragraphs: [
      "We may suspend or terminate access for Terms violations, legal requirements, or security reasons. You may stop using HEAL at any time and request account deletion.",
    ],
  },
  {
    title: "11. Disclaimer of Warranties",
    paragraphs: [
      'To the fullest extent permitted by law, HEAL is provided "as is" and "as available," without warranties of any kind.',
    ],
  },
  {
    title: "12. Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by law, the Company is not liable for indirect, incidental, special, consequential, or punitive damages arising from use of HEAL. Total liability is limited to amounts paid by you for HEAL in the preceding 12 months, if any.",
    ],
  },
  {
    title: "13. Indemnification",
    paragraphs: [
      "You agree to indemnify and hold harmless the Company from claims and losses arising from your use of HEAL, your content, or your breach of these Terms.",
    ],
  },
  {
    title: "14. Privacy",
    paragraphs: ["Use of HEAL is also governed by the Privacy Policy."],
  },
  {
    title: "15. Changes to Terms",
    paragraphs: [
      "We may update these Terms from time to time. Continued use after updates take effect constitutes acceptance.",
    ],
  },
  {
    title: "16. Governing Law",
    paragraphs: [
      "These Terms are governed by the laws of [Jurisdiction], with disputes subject to courts in [Venue], unless mandatory law provides otherwise.",
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 pt-24 md:pt-32">

        <header className="glass-card rounded-3xl p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--brand-primary)]">Legal</p>
          <h1 className="mt-3 text-4xl tracking-[-0.03em] sm:text-5xl">Terms and Conditions</h1>
          <p className="mt-4 text-lg leading-8 text-foreground/80">
            By accessing or using HEAL, you agree to these Terms.
          </p>

          <div className="mt-6 grid gap-3 text-sm text-foreground/75 sm:grid-cols-2">
            <div className="rounded-2xl border border-[var(--edge)] bg-background px-4 py-3">
              <span className="font-semibold">App Name:</span> HEAL
            </div>
            <div className="rounded-2xl border border-[var(--edge)] bg-background px-4 py-3">
              <span className="font-semibold">Effective Date:</span> 2 April 2026
            </div>
            <div className="rounded-2xl border border-[var(--edge)] bg-background px-4 py-3 sm:col-span-2">
              <span className="font-semibold">Last Updated:</span> 2 April 2026
            </div>
          </div>
        </header>

        <section className="mt-8 space-y-4">
          {sections.map((section) => (
            <article key={section.title} className="panel-card rounded-3xl p-6 sm:p-8">
              <h2 className="text-3xl tracking-[-0.02em]">{section.title}</h2>

              <div className="mt-4 space-y-4 text-lg leading-8 text-foreground/80">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {section.bullets ? (
                <ul className="mt-4 space-y-3 text-lg leading-8 text-foreground/80">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}