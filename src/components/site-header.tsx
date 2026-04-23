import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Terms", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Help", href: "/help" },
];

export function SiteHeader({ showStoreButtons = true }: { showStoreButtons?: boolean }) {
  return (
    <header className="sticky top-3 z-30 mb-6 rounded-[1.8rem] border border-[var(--edge)] bg-[color:color-mix(in_srgb,var(--surface)_74%,#fff)] px-4 py-4 shadow-[var(--shadow-soft)] backdrop-blur-xl sm:px-5 lg:mb-10 lg:flex lg:items-center lg:justify-between lg:gap-5 lg:rounded-[2.2rem]">
      <Link href="/" className="inline-flex items-center self-start">
        <Image
          src="/brand/logo.png"
          alt="heal logo"
          width={170}
          height={62}
          priority
          className="h-auto max-h-14 w-[96px] object-contain sm:w-[112px]"
        />
      </Link>

      <nav className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-3 rounded-full border border-[var(--edge)] bg-background/80 px-4 py-2 text-sm font-medium text-foreground/85 sm:gap-x-7 lg:mt-0">
        {navItems.map((item) => (
          <Link key={item.label} href={item.href} className="rounded-full px-2 py-1 transition-colors hover:text-[var(--brand-primary)]">
            {item.label}
          </Link>
        ))}
      </nav>

      {showStoreButtons ? (
        <div className="mt-4 hidden lg:mt-0 lg:block">
          <StoreButtons compact />
        </div>
      ) : null}
    </header>
  );
}

export function StoreButtons({ compact = false }: { compact?: boolean }) {
  const appStoreWidth = compact ? 190 : 300;
  const playStoreWidth = compact ? 200 : 320;

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="inline-flex" aria-label="App Store badge">
        <Image
          src="/calai/app-store.svg"
          alt="Download on the App Store"
          width={appStoreWidth}
          height={90}
          priority={false}
        />
      </span>

      <span className="inline-flex" aria-label="Google Play badge">
        <Image
          src="/calai/google-play.png"
          alt="Get it on Google Play"
          width={playStoreWidth}
          height={90}
          priority={false}
        />
      </span>
    </div>
  );
}