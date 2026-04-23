
const sections = [
  {
    title: "1. Information We Collect",
    paragraphs: ["We may collect the following categories of information:"],
    groups: [
      {
        title: "1. Personal Information",
        bullets: [
          "Name",
          "Email address",
          "Username",
          "Profile photo",
          "Preferred language",
          "Authentication identifiers from Apple Sign-In or Google Sign-In",
        ],
      },
      {
        title: "2. User Generated Content",
        bullets: [
          "Journal entries, including mood, title, and content",
          "Chat inputs/messages",
          "Onboarding responses and preferences",
          "Referral information (if provided)",
        ],
      },
      {
        title: "3. Technical Information",
        bullets: [
          "Device and app metadata",
          "Push notification token (for example, Firebase Cloud Messaging token)",
          "Log and diagnostic data for security and reliability",
        ],
      },
      {
        title: "4. Permission Based Information",
        paragraphs: ["With your permission, we may access:"],
        bullets: ["Camera", "Photo library", "Notifications"],
      },
    ],
  },
  {
    title: "2. How We Use Information",
    paragraphs: ["We use information to:"],
    bullets: [
      "Create and manage your account",
      "Authenticate sign-in and secure access",
      "Deliver app features and personalization",
      "Send push notifications (if enabled)",
      "Improve functionality, performance, and support",
      "Comply with legal obligations",
    ],
  },
  {
    title: "3. Sharing of Information",
    paragraphs: [
      "We do not sell personal information.",
      "We may share information with:",
    ],
    bullets: [
      "Service providers supporting app operation (including authentication, cloud messaging, hosting)",
      "Legal/regulatory authorities when required by law",
      "Successors in merger, acquisition, or restructuring events",
    ],
  },
  {
    title: "4. Third Party Services",
    paragraphs: [
      "HEAL may use third-party services, including Apple Sign-In, Google Sign-In, and Firebase services. Those services are governed by their own terms and privacy policies.",
    ],
  },
  {
    title: "5. Data Retention",
    paragraphs: [
      "We retain personal information only as long as needed for service delivery, legal compliance, security, and legitimate business purposes. We delete or anonymize data when no longer required, subject to applicable law.",
    ],
  },
  {
    title: "6. Your Rights",
    paragraphs: [
      "Depending on your location, you may have rights to:",
      "Submit requests to: [Contact Email]",
    ],
    bullets: [
      "Access your personal data",
      "Correct inaccurate data",
      "Request deletion",
      "Restrict or object to processing",
      "Withdraw consent (where applicable)",
      "Request data portability",
    ],
  },
  {
    title: "7. Account Deletion",
    paragraphs: [
      "You may request account deletion through available app functionality or by contacting [Contact Email]. We process deletion requests in accordance with applicable law.",
    ],
  },
  {
    title: "8. Children Privacy",
    paragraphs: [
      "HEAL is not intended for children under the applicable age threshold in your jurisdiction. We do not knowingly collect personal information from children below that age.",
    ],
  },
  {
    title: "9. Security",
    paragraphs: [
      "We apply reasonable technical and organizational safeguards to protect personal information. No method of transmission or storage is completely secure.",
    ],
  },
  {
    title: "10. International Transfers",
    paragraphs: [
      "Your information may be processed in countries other than your own. Where legally required, appropriate safeguards are implemented.",
    ],
  },
  {
    title: "11. Medical Disclaimer",
    paragraphs: [
      "HEAL provides wellness and self-help features and is not a medical device or emergency service. It does not replace licensed medical advice, diagnosis, or treatment.",
    ],
  },
  {
    title: "12. Policy Changes",
    paragraphs: [
      "We may update this Privacy Policy. Updates become effective when posted with a revised Last Updated date.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 pt-24 md:pt-32">

        <header className="glass-card rounded-3xl p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--brand-primary)]">Legal</p>
          <h1 className="mt-3 text-4xl tracking-[-0.03em] sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-lg leading-8 text-foreground/80">
            By using the App, you agree to this Privacy Policy.
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
                {section.paragraphs?.map((paragraph) => (
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

              {section.groups ? (
                <div className="mt-5 space-y-4">
                  {section.groups.map((group) => (
                    <div key={group.title} className="rounded-2xl border border-[var(--edge)] bg-background p-5">
                      <h3 className="text-2xl tracking-[-0.01em] text-foreground">{group.title}</h3>

                      {group.paragraphs?.map((paragraph) => (
                        <p key={paragraph} className="mt-3 text-lg leading-8 text-foreground/80">
                          {paragraph}
                        </p>
                      ))}

                      <ul className="mt-3 space-y-2 text-lg leading-8 text-foreground/80">
                        {group.bullets.map((bullet) => (
                          <li key={bullet}>• {bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
