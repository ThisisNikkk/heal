import Image from "next/image";
import Link from "next/link";
import { StoreButtons } from "@/components/site-header";
import { Leaf, Star } from "lucide-react";

const showcaseImages = [
  {
    title: "Chat companion",
    note: "Gentle conversation support when you need to process emotions in real time.",
    image: "/brand/heal-chat.png",
  },
  {
    title: "Challenges",
    note: "Practical daily actions that help you rebuild calm, confidence, and momentum.",
    image: "/brand/daily.png",
  },
  {
    title: "Modules",
    note: "Structured healing paths with focused sessions for different life situations.",
    image: "/brand/module.png",
  },
  {
    title: "Daily challenges",
    note: "Short guided prompts designed to keep progress consistent and manageable.",
    image: "/brand/challenge.png",
  },
];

const features = [
  {
    title: "Guided Daily Check-ins",
    body: "Simple prompts help you understand what you feel and why, one day at a time.",
  },
  {
    title: "Private Reflection Space",
    body: "Capture thoughts, patterns, and wins in a calm place designed for clarity.",
  },
  {
    title: "Steady Growth Tools",
    body: "Track your mood and momentum with gentle structure and meaningful progress.",
  },
  {
    title: "Progress You Can Feel",
    body: "See emotional patterns and celebrate growth with weekly summaries.",
  },
];

const appFlows = [
  {
    title: "Onboarding Journey",
    description: "A guided first-time flow that personalizes support in minutes.",
    screens: [
      "What brings you here?",
      "How have you been feeling lately?",
      "What would you like to feel more of?",
      "How much time can you commit?",
      "Are you ready to start showing up for yourself?",
    ],
  },
  {
    title: "Daily Quotes And Liked Quotes",
    description: "Gentle, saveable quote moments to support daily emotional balance.",
    screens: [
      "Daily quote card",
      "Favorites collection",
      "Browse by date",
      "Save / share interactions",
    ],
  },
  {
    title: "Talk With AI Companion",
    description: "A safe conversational space with guided responses and premium upsell.",
    screens: [
      "Healy chat",
      "Companion messages",
      "Credit purchase modal",
      "Voice/text compose bar",
    ],
  },
  {
    title: "Journal And Mood Selection",
    description: "Structured journaling with mood tags, entries, and compassionate prompts.",
    screens: [
      "Journal home",
      "New entry",
      "Mood chips",
      "Personal notes area",
    ],
  },
  {
    title: "Calendar Path",
    description: "Progress visualization with monthly tracking and stage cards.",
    screens: [
      "Monthly view",
      "Path stages",
      "Milestone cards",
      "Support modal",
    ],
  },
  {
    title: "Challenges And Modules",
    description: "Actionable daily challenges and modular healing tracks by topic.",
    screens: [
      "Daily / weekly challenges",
      "Challenge detail steps",
      "Modules list",
      "Program progression",
    ],
  },
  {
    title: "Profile, Notifications & Privacy",
    description: "User controls for personal data, alerts, security, and FAQ support.",
    screens: [
      "Profile settings",
      "Notification controls",
      "Privacy & security",
      "Help & support FAQs",
    ],
  },
];

const journeyStages = [
  "Discover: identify your current emotional state",
  "Reflect: daily prompts and quotes for awareness",
  "Act: challenges, modules, and habits",
  "Track: mood and calendar-based progress",
  "Grow: AI companion and long-term support",
];

const testimonials = [
  "HEAL gave me structure, clarity, and honestly... relief.",
  "It helped me stop spiraling and start healing.",
  "The calm design makes me actually use it every day.",
  "I finally feel like my growth has direction.",
  "Daily prompts made reflection easier than ever.",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 pt-24 md:pt-32">

        <section className="relative grid items-center gap-8 pb-14 pt-4 md:gap-10 md:pb-18 lg:gap-14 lg:pb-24 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="max-w-2xl">
            <Image
              src="/brand/logo.png"
              alt="heal"
              width={220}
              height={80}
              className="h-auto max-h-20 w-[118px] object-contain sm:w-[138px]"
            />

            <h1 className="mt-5 text-5xl leading-[0.96] tracking-[-0.045em] text-foreground sm:text-6xl lg:text-7xl">
              Healing starts
              <span className="block font-medium">with you.</span>
            </h1>

            <p className="mt-6 text-xl leading-9 text-foreground/80">
              A structured space for clarity, growth and moving forward with intention.
            </p>

            <div className="mt-9 flex items-center gap-3 text-[var(--brand-secondary)]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="size-6 fill-current" />
              ))}
            </div>
            <p className="mt-5 max-w-lg rounded-[1.4rem] border border-[var(--edge)] bg-[color:color-mix(in_srgb,var(--surface)_70%,#fff)] px-5 py-4 text-lg leading-8 text-foreground/80 shadow-[var(--shadow-soft)]">
              HEAL gave me structure, clarity, and honestly... relief. It helped me stop spiraling and start healing.
            </p>

            <button className="mt-10 rounded-full bg-[var(--brand-primary)] px-10 py-4 text-xl font-semibold text-white shadow-[var(--shadow-strong)] transition-transform duration-300 hover:-translate-y-0.5">
              Get Started
            </button>
          </div>

          <div className="glass-card mx-auto w-full max-w-[680px] overflow-hidden rounded-[2.2rem] p-3 lg:max-w-none">
            <Image
              src="/brand/hero.png"
              alt="HEAL app preview across two phones"
              width={1024}
              height={768}
              priority
              className="h-auto w-full rounded-[1.5rem] object-contain"
            />
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20">
          <h2 className="text-center text-4xl tracking-[-0.03em] text-foreground sm:text-5xl">
            Inside the app experience <span className="text-[var(--brand-primary)]">👀</span>
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {showcaseImages.map((item) => (
              <article
                key={item.title}
                className="group panel-card relative overflow-hidden rounded-[2rem]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1368}
                  height={2828}
                  className="h-[29rem] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-x-4 bottom-4 rounded-[1.2rem] border border-white/30 bg-black/42 p-5 text-white backdrop-blur-md">
                  <div className="text-4xl leading-none text-[var(--brand-secondary)]">❝</div>
                  <div className="mt-1 text-[2rem] font-semibold leading-none tracking-[-0.02em]">{item.title}</div>
                  <p className="mt-2 text-[1.02rem] leading-7 text-white/90">{item.note}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid items-center gap-8 py-12 md:gap-10 lg:gap-12 lg:grid-cols-[0.9fr_1fr]">
          <div>
            <h2 className="text-4xl tracking-[-0.03em] text-foreground sm:text-5xl">
              What does HEAL include?
            </h2>
            <div className="mt-8 grid gap-4">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="panel-card rounded-[1.5rem] p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-2xl bg-[var(--brand-secondary)] text-foreground">
                      <Leaf className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-xl tracking-[-0.02em] text-foreground">{feature.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-foreground/80">{feature.body}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/brand/include.png"
              alt="HEAL include preview"
              width={520}
              height={980}
              className="h-auto w-full max-w-[320px] object-contain sm:max-w-[360px] md:max-w-[390px]"
            />
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20">
          <h2 className="text-center text-4xl tracking-[-0.03em] text-foreground sm:text-5xl">
            Why choose HEAL?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-foreground/80">
            Built for calm consistency, emotional clarity, and realistic daily growth.
          </p>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {[
              ["Find your emotional patterns", "Understand your triggers and steady your reactions with guided reflection."],
              ["Build supportive routines", "Use prompts and check-ins that are easy to continue even on busy days."],
              ["Move forward intentionally", "Turn awareness into small actions that create long-term healing."],
            ].map(([title, body]) => (
              <article
                key={title}
                className="panel-card rounded-[1.8rem] p-7"
              >
                <h3 className="text-2xl tracking-[-0.02em] text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-foreground/80">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20">
          <h2 className="text-center text-4xl tracking-[-0.03em] text-foreground sm:text-5xl">
            Inside the HEAL app
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-foreground/80">
            Every screen from your product flow is represented here: onboarding, quotes, AI companion, journal, challenges, modules, and settings.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {appFlows.map((flow) => (
              <article
                key={flow.title}
                className="panel-card rounded-[1.6rem] p-6"
              >
                <h3 className="text-2xl tracking-[-0.02em] text-foreground">{flow.title}</h3>
                <p className="mt-3 text-sm leading-7 text-foreground/80">{flow.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {flow.screens.map((screen) => (
                    <span
                      key={screen}
                      className="rounded-full border border-[var(--edge)] bg-background px-3 py-1 text-xs text-foreground"
                    >
                      {screen}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pb-16 pt-2">
          <div className="panel-card rounded-[2rem] p-7 sm:p-10">
            <h2 className="text-4xl tracking-[-0.03em] text-foreground sm:text-5xl">
              HEAL user journey
            </h2>
            <p className="mt-4 max-w-3xl text-foreground/80">
              This is the core progression your app now communicates clearly on the landing page.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {journeyStages.map((stage, index) => (
                <div
                  key={stage}
                  className="rounded-2xl border border-[var(--edge)] bg-background p-4"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-primary)]">
                    Step {index + 1}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-foreground">{stage}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section className="bg-[color:color-mix(in_srgb,var(--surface-strong)_62%,#fff)] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_420px] lg:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--brand-primary)]">New Feature</p>
            <h2 className="mt-4 text-4xl tracking-[-0.03em] text-foreground sm:text-5xl">
              Quiet Mode for a gentler healing journey.
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-foreground/80">
              A softer interface with reduced noise, nightly reflection cards, and calm visual focus.
            </p>
            <button className="mt-7 rounded-full bg-[var(--brand-primary)] px-8 py-3 text-lg font-semibold text-white shadow-[var(--shadow-strong)]">
              Explore Preview
            </button>
          </div>
          <Image
            src="/brand/welcome.png"
            alt="HEAL welcome preview"
            width={520}
            height={980}
            className="h-auto w-full max-w-[320px] object-contain sm:max-w-[360px] md:max-w-[390px]"
          />
        </div>
      </section>

      <section className="bg-foreground py-12 text-background sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="text-center text-4xl tracking-[-0.03em] sm:text-5xl">Thousands of users talk about us</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((quote) => (
              <article
                key={quote}
                className="rounded-[1.4rem] border border-white/18 bg-white/8 p-5"
              >
                <div className="flex items-center gap-2 text-[var(--brand-secondary)]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-background">&ldquo;{quote}&rdquo;</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <div className="flex justify-center gap-1 text-[var(--brand-secondary)]">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="size-6 fill-current" />
            ))}
          </div>
          <h2 className="mt-4 text-4xl tracking-[-0.03em] text-foreground sm:text-5xl">
            Over 100k 5 star ratings
          </h2>
          <p className="mt-3 text-foreground/80">4.8/5 on App Store • 4.7/5 on Google Play</p>
          <div className="mt-7 flex justify-center">
            <StoreButtons compact />
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--edge)] bg-[color:color-mix(in_srgb,var(--surface-strong)_55%,#fff)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 text-sm text-foreground/80 sm:px-8 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-10">
          <div>
            <Image
              src="/brand/logo.png"
              alt="heal logo"
              width={170}
              height={62}
              className="h-auto max-h-14 w-[96px] object-contain sm:w-[112px]"
            />
            <p className="mt-4 max-w-sm leading-7">
              A structured space for clarity, growth and moving forward with intention.
            </p>
          </div>

          <div>
            <div className="font-semibold text-foreground">Legal</div>
            <div className="mt-4 space-y-3">
              <Link href="/privacy-policy" className="block hover:text-[var(--brand-primary)]">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="block hover:text-[var(--brand-primary)]">Terms of Use</Link>
              <Link href="/help" className="block hover:text-[var(--brand-primary)]">Community Rules</Link>
            </div>
          </div>

          <div>
            <div className="font-semibold text-foreground">Company</div>
            <div className="mt-4 space-y-3">
              <Link href="/help" className="block hover:text-[var(--brand-primary)]">Contact</Link>
              <a href="#" className="block hover:text-[var(--brand-primary)]">Instagram</a>
              <a href="#" className="block hover:text-[var(--brand-primary)]">TikTok</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function PhonePreview({
  compact = false,
  dark = false,
}: {
  compact?: boolean;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto w-full max-w-xs rounded-[2.6rem] border-[12px] border-foreground/70 bg-foreground/70 p-2">
      <div
        className="overflow-hidden rounded-[2rem] p-6"
        style={{
          width: compact ? "100%" : "100%",
          height: compact ? 600 : 660,
          background: dark
            ? "color-mix(in srgb, var(--foreground) 88%, #000)"
            : "var(--background)",
        }}
      >
        <div className={dark ? "text-background" : "text-foreground"}>
          <div className="flex items-center justify-between text-3xl font-semibold">
            <span>9:41</span>
            <div className="h-3 w-14 rounded-full bg-black/80" />
          </div>
        </div>

        <Image
          src="/brand/logo.png"
          alt="heal"
          width={220}
          height={84}
          className="mx-auto mt-12 h-auto max-h-16 w-[116px] object-contain"
        />

        <div className="mt-10 text-center">
          <h3 className={dark ? "text-5xl leading-tight tracking-[-0.03em] text-background" : "text-5xl leading-tight tracking-[-0.03em] text-foreground"}>
            Healing starts
            <span className="block">with you.</span>
          </h3>
          <p className={dark ? "mx-auto mt-6 max-w-[250px] text-[1.2rem] leading-8 text-background/85" : "mx-auto mt-6 max-w-[260px] text-[1.2rem] leading-8 text-foreground/80"}>
            A structured space for clarity, growth and moving forward with intention.
          </p>

          <div className="mt-12 flex justify-center gap-2 text-[var(--brand-secondary)]">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="size-6 fill-current" />
            ))}
          </div>

          <button className="mt-12 w-full rounded-full bg-[var(--brand-primary)] py-4 text-3xl font-semibold tracking-[-0.02em] text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
