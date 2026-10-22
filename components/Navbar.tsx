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

/** Binnen deze afstand (px) van de top is de navbar de volle, transparante balk van de hero. */
const TOP_ZONE = 80;
/** Minimale scrollstap (px) voordat de richting telt, zodat kleine trillingen de balk niet laten flikkeren. */
const SCROLL_STEP = 6;

/**
 * Zwevende navbar. De navbar staat altijd vast bovenaan het venster en heeft drie toestanden:
 * - vol: bovenaan de pagina, de transparante navbar over de hero;
 * - verborgen: bij naar beneden scrollen schuift hij weg, zodat hij het lezen niet stoort;
 * - compact: bij omhoog scrollen komt hij terug als glazen balk.
 * Van compact naar vol (terug bovenaan) vervormt de balk vloeiend (CSS-transities op maat, glas en
 * afronding). Van vol naar compact gebeurt alleen terwijl hij verborgen is, dus onzichtbaar.
 * Zet --nav-offset op <html>, zodat sticky elementen (bv. de kop van de vergelijkingstabel op /prijzen) eronder schuiven.
 */
function useFloatingNav(keepVisible: boolean) {
  const [compact, setCompact] = useState(false);
  const [hidden, setHidden] = useState(false);
  // Eén frame zonder transities: compact maken terwijl de balk verborgen is, daarna pas inschuiven.
  const [instant, setInstant] = useState(false);
  const isCompact = useRef(false);
  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;
    const showCompact = () => {
      if (isCompact.current) return setHidden(false);
      isCompact.current = true;
      setInstant(true);
      setCompact(true);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          setInstant(false);
          setHidden(false);
        }),
      );
    };
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const delta = y - lastY;
      if (y <= TOP_ZONE) {
        isCompact.current = false;
        setCompact(false);
        setHidden(false);
        lastY = y;
        return;
      }
      if (Math.abs(delta) < SCROLL_STEP) return;
      lastY = y;
      if (delta > 0) setHidden(true);
      else showCompact();
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    // Pagina geladen halverwege (vernieuwen, anker): meteen de compacte balk.
    if (window.scrollY > TOP_ZONE) {
      isCompact.current = true;
      setCompact(true);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
  const visible = !hidden || keepVisible;
  return { compact, hidden: !visible, instant, visible };
}

export function Navbar({ active, tone = "dark" }: { active: string; tone?: "dark" | "light" }) {
  const [open, setOpen] = useState(false),
    [mobile, setMobile] = useState(false);
  const ref = useRef<HTMLElement>(null),
    trigger = useRef<HTMLButtonElement>(null),
    mobileTrigger = useRef<HTMLButtonElement>(null),
    pathname = usePathname();
  const [focused, setFocused] = useState(false);
  const nav = useFloatingNav(open || mobile || focused);
  // Hoogte van de zichtbare zwevende balk, voor sticky elementen eronder.
  useEffect(() => {
    // offsetHeight: de rusthoogte, niet de positie halverwege de inschuifanimatie.
    const offset = nav.visible && nav.compact && ref.current ? ref.current.offsetHeight + 8 : 0;
    document.documentElement.style.setProperty("--nav-offset", `${offset}px`);
  }, [nav.visible, nav.compact]);
  useEffect(
    () => () => {
      document.documentElement.style.removeProperty("--nav-offset");
    },
    [],
  );
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
    const query = window.matchMedia("(max-width: 760px)");
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
        // Compact altijd donker glas, ook op pagina's met een lichte navbar bovenaan.
        `site-header-${nav.compact ? "dark" : tone}`,
        nav.compact && "is-compact",
        nav.hidden && "is-hidden",
        nav.instant && "is-instant",
      ]
        .filter(Boolean)
        .join(" ")}
      onFocus={() => setFocused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocused(false);
      }}
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
          {mobile ? "Sluiten ×" : "Menu ☰"}
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
              if (window.matchMedia("(hover:hover)").matches) setOpen(true);
            }}
            onMouseLeave={() => {
              if (window.matchMedia("(hover:hover)").matches) setOpen(false);
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
                    {/* Enkel mobiel: de knop "Diensten" klapt open, dus het overzicht krijgt hier een eigen link. */}
                    <Link
                      href="/services"
                      className="menu-all"
                      aria-current={pathname === "/services" ? "page" : undefined}
                    >
                      Alle diensten bekijken <BtnArrow />
                    </Link>
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
