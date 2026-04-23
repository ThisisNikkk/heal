"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { useState, useMemo } from "react"
import { cn } from "@/lib/utils"

const MotionLink = motion.create(Link)

const navItems = [
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Terms", href: "/terms-and-conditions" },
  { name: "Privacy Policy", href: "/privacy-policy" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if (latest > previous && latest > 150) {
      setVisible(false)
      setIsMobileMenuOpen(false)
    } else {
      setVisible(true)
    }

    setScrolled(latest > 50)
  })

  // Lush, organic transition for high-end feel
  const sharedTransition = {
    type: "spring",
    stiffness: 220,
    damping: 26,
    mass: 1,
  } as const;

  const menuVariants = {
    hidden: {
      opacity: 0,
      pointerEvents: "none" as const
    },
    visible: {
      opacity: 1,
      pointerEvents: "auto" as const,
      transition: {
        opacity: { duration: 0.3 }
      }
    },
    exit: {
      opacity: 0,
      filter: "blur(4px)",
      pointerEvents: "none" as const,
      transition: {
        opacity: { duration: 0.15 },
        filter: { duration: 0.15 }
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        opacity: { duration: 0.3 },
        y: { type: "spring", stiffness: 300, damping: 30 }
      }
    },
    exit: {
      opacity: 0,
      y: 8,
      transition: { duration: 0.2 }
    }
  } as const;

  return (
    <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-6 pointer-events-none">
      <motion.nav
        layout
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: visible ? 0 : -120,
          opacity: visible ? 1 : 0,
        }}
        transition={sharedTransition}
        className={cn(
          "pointer-events-auto flex flex-col items-center border border-white/20 shadow-[0_12px_40px_-4px_rgba(58,33,16,0.12)] will-change-transform overflow-hidden",
          "backdrop-blur-xl",
          scrolled || isMobileMenuOpen ? "bg-white/90 border-white/40 shadow-[0_20px_50px_-12px_rgba(58,33,16,0.2)]" : "bg-white/40",
          isMobileMenuOpen
            ? "rounded-[2.5rem] p-6 max-w-sm w-full"
            : "p-1.5 rounded-full px-4 lg:px-8 py-2.5 min-w-[200px]"
        )}
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo Slot */}
          <MotionLink
            layout="position"
            href="/"
            className="flex items-center gap-2 px-2 lg:px-4 py-2 rounded-full hover:bg-white/50 transition-colors shrink-0"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Image
              src="/brand/logo.png"
              alt="Heal Logo"
              width={80}
              height={26}
              className="h-7 w-auto object-contain"
              priority
            />
          </MotionLink>

          {/* Desktop Nav Items */}
          <motion.div layout className="h-8 w-[1.5px] bg-foreground/10 mx-2 hidden md:block" />
          <div className="hidden md:flex items-center gap-1 relative group">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative px-3 lg:px-6 py-2.5 text-sm lg:text-base font-medium text-foreground/70 hover:text-foreground transition-colors z-10 whitespace-nowrap"
              >
                <motion.span layout="position">{item.name}</motion.span>
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="nav-pill"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    className="absolute inset-0 bg-white rounded-full -z-10 shadow-sm"
                  />
                )}
              </Link>
            ))}
          </div>

          <motion.div layout className="h-8 w-[1.5px] bg-foreground/10 mx-2 hidden md:block" />

          {/* Contact Button (Desktop) */}
          <Link
            href="/help"
            className="hidden md:block px-6 lg:px-8 py-3 lg:py-3.5 rounded-full bg-brand-primary text-white text-sm lg:text-base font-bold shadow-xl shadow-brand-primary/20 hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
          >
            Help
          </Link>

          {/* Mobile Divider */}
          <motion.div layout className="h-6 w-[1.5px] bg-foreground/10 mx-4 md:hidden" />

          {/* Mobile Toggle Button (Contact Capsule Style) */}
          <motion.button
            layout="position"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-14 h-11 rounded-full bg-brand-primary text-white shadow-xl shadow-brand-primary/20 z-50 active:scale-95 will-change-transform focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="flex flex-col items-center justify-center gap-1.5 overflow-hidden pointer-events-none">
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: "anticipate" }}
                className="w-6 h-0.5 bg-white rounded-full origin-center"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="w-6 h-0.5 bg-white rounded-full"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: "anticipate" }}
                className="w-6 h-0.5 bg-white rounded-full origin-center"
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu Content */}
        <AnimatePresence mode="popLayout">
          {isMobileMenuOpen && (
            <motion.div
              layout
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col gap-2 w-full pt-6 md:hidden will-change-[transform,opacity]"
            >
              {navItems.map((item) => (
                <motion.div key={item.name} variants={itemVariants} className="will-change-[transform,opacity]">
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between px-6 py-4 rounded-2xl bg-white/30 hover:bg-white/60 text-lg font-medium text-foreground/80 hover:text-foreground transition-all group overflow-hidden whitespace-nowrap"
                  >
                    {item.name}
                    <motion.span
                      initial={{ x: -5, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      className="text-brand-primary"
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={itemVariants} className="mt-4 will-change-[transform,opacity]">
                <Link
                  href="/help"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full py-5 rounded-2xl bg-brand-primary text-white text-lg font-bold shadow-xl shadow-brand-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Help Center
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}