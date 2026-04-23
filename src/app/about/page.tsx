import Image from "next/image";
import Link from "next/link";
import { HeartHandshake, ShieldCheck, Sun, Users } from "lucide-react";

const values = [
  {
    title: "Care And Compassion",
    body: "A safe, judgment-free space for your emotional healing.",
    icon: HeartHandshake,
  },
  {
    title: "Privacy And Security",
    body: "Your data and journal remain completely private and secure.",
    icon: ShieldCheck,
  },
  {
    title: "Ethical Boundaries",
    body: "We are clear about our limits - this is not therapy.",
    icon: Sun,
  },
  {
    title: "Human Centered",
    body: "Built with respect for your journey and your autonomy.",
    icon: Users,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 pt-24 md:pt-32">

        <header className="glass-card rounded-3xl p-6 sm:p-8">
          <Image
            src="/brand/logo.png"
            alt="heal logo"
            width={220}
            height={80}
            className="h-auto max-h-16 w-[112px] object-contain sm:w-[124px]"
          />
          <h1 className="mt-6 text-4xl tracking-[-0.03em] sm:text-5xl">Your Safe Place</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-foreground/75">
            Your companion for emotional healing and personal reconstruction.
          </p>
        </header>

        <section className="mt-8 panel-card rounded-3xl p-6 sm:p-8">
          <h2 className="text-3xl tracking-[-0.02em]">Our Mission</h2>
          <p className="mt-4 text-lg leading-9 text-foreground/80">
            HEAL was created to accompany people going through breakups, emotional upheaval, or any difficult life transition.
            We believe everyone deserves a safe space to express their emotions, progress at their own pace, and rediscover their inner balance.
          </p>
          <p className="mt-4 text-lg leading-9 text-foreground/80">
            This app provides emotional support and guidance, but is not a medical or therapeutic service.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-3xl tracking-[-0.02em]">Our Values</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <article
                  key={value.title}
                  className="glass-card rounded-3xl p-5"
                >
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-background">
                    <Icon className="size-7 text-foreground/80" />
                  </div>
                  <h3 className="mt-4 text-2xl tracking-[-0.01em]">{value.title}</h3>
                  <p className="mt-2 text-base leading-7 text-foreground/75">{value.body}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-[var(--brand-primary)]/35 bg-[var(--brand-primary)]/12 p-6 sm:p-8">
          <h2 className="text-3xl tracking-[-0.02em]">Important: What HEAL Is Not</h2>
          <ul className="mt-4 space-y-3 text-lg leading-8 text-foreground/80">
            <li>• HEAL does not replace professional therapy or medical treatment.</li>
            <li>• HEAL is not for crisis intervention (please use SOS resources).</li>
            <li>• HEAL does not diagnose or treat mental health conditions.</li>
            <li>• HEAL does not guarantee specific healing outcomes.</li>
          </ul>
          <p className="mt-5 border-t border-[var(--brand-primary)]/30 pt-5 text-lg leading-8 text-foreground/80">
            If you need clinical support, please reach out to a licensed therapist or counselor.
          </p>
        </section>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <Link href="/" className="rounded-2xl border border-[var(--edge)] bg-[color:color-mix(in_srgb,var(--brand-secondary)_22%,#fff)] px-5 py-4 font-semibold">Website</Link>
          <Link href="/terms-and-conditions" className="rounded-2xl border border-[var(--edge)] bg-[color:color-mix(in_srgb,var(--brand-secondary)_22%,#fff)] px-5 py-4 font-semibold">Terms and Conditions</Link>
          <Link href="/privacy-policy" className="rounded-2xl border border-[var(--edge)] bg-[color:color-mix(in_srgb,var(--brand-secondary)_22%,#fff)] px-5 py-4 font-semibold">Privacy Policy</Link>
        </div>
      </div>
    </main>
  );
}
