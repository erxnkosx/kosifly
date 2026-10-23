"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { EASE } from "@/components/motion/presets";
import { services } from "@/lib/services";
import NavIcon0 from "./services/art/NavIcon0";
import NavIcon1 from "./services/art/NavIcon1";
import NavIcon2 from "./services/art/NavIcon2";
import NavIcon3 from "./services/art/NavIcon3";
import NavIcon4 from "./services/art/NavIcon4";
import { BtnArrow } from "@/components/ui/BtnArrow";
const icons = [NavIcon0, NavIcon1, NavIcon2, NavIcon3, NavIcon4];

export function Navbar({ active, tone = "dark" }: { active: string; tone?: "dark" | "light" }) {
  const [open, setOpen] = useState(false),
    [mobile, setMobile] = useState(false);
  const ref = useRef<HTMLElement>(null),
    trigger = useRef<HTMLButtonElement>(null),
    mobileTrigger = useRef<HTMLButtonElement>(null),
    pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  // De glaslaag wordt bij scrollen iets donkerder, zodat de navigatie leesbaar blijft.
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    const update = () => {
      document.documentElement.style.setProperty(
        "--nav-offset",
        `${ref.current?.offsetHeight ?? 0}px`,
      );
    };
    update();
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
      document.documentElement.style.removeProperty("--nav-offset");
    };
  }, []);
  useEffect(() => {
    setOpen(false);
    setMobile(false);
  }, [pathname]);
  useEffect(() => {
    const close = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
        setMobile(false);
      }
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, []);
  useEffect(() => {
    if (!window.matchMedia) return;
    const query = window.matchMedia("(max-width: 1099px)");
    const reset = () => {
      setMobile(false);
      setOpen(false);
    };
    query.addEventListener("change", reset);
    return () => query.removeEventListener("change", reset);
  }, []);
  return (
    <header
      ref={ref}
      className={[
        "site-header",
        `site-header-${tone}`,
        scrolled && "is-scrolled",
        mobile && "is-menu-open",
      ]
        .filter(Boolean)
        .join(" ")}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setOpen(false);
          setMobile(false);
          if (mobile) mobileTrigger.current?.focus();
          else trigger.current?.focus();
        }
      }}
    >
      <div className="nav-inner">
        <Link className="site-logo" href="/" aria-label="Kosifly — home">
          <Image src="/brand/wing.png" alt="" width={58} height={31} priority />
          <Image
            src="/brand/kosifly-logo-text.png"
            alt="Kosifly"
            width={217}
            height={26}
            priority
          />
        </Link>
        <button
          ref={mobileTrigger}
          type="button"
          className="mobile-toggle"
          aria-expanded={mobile}
          aria-controls="main-navigation"
          onClick={() => {
            setMobile(!mobile);
            setOpen(false);
          }}
        >
          <span>{mobile ? "Sluiten" : "Menu"}</span>
          <span className="mobile-toggle-icon" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
        <nav
          onClick={(e) => {
            if ((e.target as HTMLElement).closest("a")) {
              setMobile(false);
              setOpen(false);
            }
          }}
          id="main-navigation"
          aria-label="Hoofdnavigatie"
          className={mobile ? "nav-links mobile-open" : "nav-links"}
        >
          <Link href="/" aria-current={active === "Home" ? "page" : undefined}>
            Home
          </Link>
          <div
            className="services-menu"
            onMouseEnter={() => {
              if (window.matchMedia("(min-width: 1100px) and (hover:hover)").matches) setOpen(true);
            }}
            onMouseLeave={() => {
              if (window.matchMedia("(min-width: 1100px) and (hover:hover)").matches)
                setOpen(false);
            }}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
            }}
          >
            <button
              ref={trigger}
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="services-dropdown"
              className={active === "Services" ? "nav-active" : ""}
            >
              Diensten <span className="services-chevron" aria-hidden="true" />
            </button>
            <AnimatePresence>
              {open && (
                <motion.div
                  className="services-dropdown"
                  id="services-dropdown"
                  initial={{ opacity: 0, y: -10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.99, transition: { duration: 0.14 } }}
                  transition={{ duration: 0.24, ease: EASE }}
                  style={{ transformOrigin: "50% 0" }}
                >
                  <div className="service-menu-items">
                    {services.map((s, i) => {
                      const Icon = icons[i];
                      return (
                        <Link
                          key={s.slug}
                          href={"/diensten/" + s.slug}
                          aria-current={pathname === "/diensten/" + s.slug ? "page" : undefined}
                        >
                          <Icon />
                          <span>
                            <strong>{s.label}</strong>
                            <small>{s.description}</small>
                          </span>
                          <span className="menu-arrow">→</span>
                        </Link>
                      );
                    })}
                  </div>
                  <aside>
                    <span className="tiny-label">TWIJFEL JE NOG?</span>
                    <h2>Niet zeker wat je nodig hebt?</h2>
                    <p>In een gesprek van 30 minuten zoeken we samen wat het meeste oplevert.</p>
                    <Link href="/contact" className="button white">
                      Plan een gesprek <BtnArrow />
                    </Link>
                  </aside>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link href="/projecten" aria-current={active === "Projects" ? "page" : undefined}>
            Projecten
          </Link>
          <Link href="/prijzen" aria-current={active === "Pricing" ? "page" : undefined}>
            Prijzen
          </Link>
          <Link href="/over-ons" aria-current={active === "About" ? "page" : undefined}>
            Over ons
          </Link>
          <Link href="/contact" aria-current={active === "Contact" ? "page" : undefined}>
            Contact
          </Link>
          {/* Enkel zichtbaar in het opengeklapte mobiele menu. */}
          <Link href="/website-audit" className="button primary nav-menu-cta">
            Vraag je gratis audit aan <BtnArrow />
          </Link>
        </nav>
        <Link className="button nav-cta" href="/website-audit">
          Gratis audit <BtnArrow />
        </Link>
      </div>
    </header>
  );
}
