import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/services";
import { SITE } from "@/lib/site";
import { BtnArrow } from "@/components/ui/BtnArrow";
import { HeroBackdrop } from "@/components/ui/HeroBackdrop";

/** Shared footer from Figma node 232:455. */
export function Footer() {
  return (
    <footer className="site-footer hero-surface">
      <HeroBackdrop />
      <div className="footer-inner">
        <div className="footer-invitation">
          <span className="tiny-label">KLAAR OM TE GROEIEN?</span>
          <h2>
            Laten we een website bouwen die <span>voor jou werkt.</span>
          </h2>
          <p>
            Een gesprek van 30 minuten. Je vertelt wat je wil bereiken, wij zeggen wat het kost en
            hoe lang het duurt. Daarna beslis jij.
          </p>
          <div className="button-row">
            <Link className="button primary" href="/contact">
              Start je project <BtnArrow />
            </Link>
            <Link className="button outline" href="/contact">
              Plan een gesprek van 30 min
            </Link>
          </div>
          <strong>
            Gemiddeld antwoord binnen 24 uur ·{" "}
            <Link href="/website-audit">gratis website-audit</Link> · geen verplichtingen
          </strong>
        </div>
        <div className="footer-call">
          <div>
            <h3>Liever meteen iemand aan de lijn?</h3>
            <p>Je spreekt de persoon die je site ook effectief bouwt.</p>
          </div>
          <div className="button-row">
            <a href={SITE.phoneHref} className="button primary">
              Bel ons
            </a>
            <a href={SITE.phoneHref} className="button outline footer-call-number">
              {SITE.phone}
            </a>
          </div>
        </div>
        <div className="footer-columns">
          <div className="footer-brand">
            <span className="footer-brand-mark">
              <Image src="/brand/wing.png" alt="" width={58} height={31} />
              <Image src="/brand/kosifly-logo-text.png" alt="Kosifly" width={217} height={26} />
            </span>
            <img
              className="footer-brand-art"
              src="/figma/footer/43147.png"
              width="1536"
              height="1024"
              loading="lazy"
              alt=""
            />
            <p>
              Digitale oplossingen voor KMO’s.
              <br />
              Van website tot AI-automatisatie.
            </p>
          </div>
          <div>
            <h3>Navigatie</h3>
            <Link href="/">Home</Link>
            <Link href="/services">Diensten</Link>
            <Link href="/projecten">Projecten</Link>
            <Link href="/prijzen">Prijzen</Link>
            <Link href="/over-ons">Over ons</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div>
            <h3>Diensten</h3>
            {services.map((s) => (
              <Link key={s.slug} href={"/diensten/" + s.slug}>
                {s.short}
              </Link>
            ))}
          </div>
          <div className="footer-contact">
            <h3>Contact</h3>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <a href={SITE.phoneHref}>{SITE.phone}</a>
            <p>
              {SITE.locality}, {SITE.country}
            </p>
            <p>Ma–zo, 9–18u</p>
          </div>
          <div className="footer-legal-col">
            <h3>Juridisch</h3>
            <Link href="/algemene-voorwaarden">Algemene voorwaarden</Link>
            <Link href="/privacy">Privacybeleid</Link>
          </div>
          <div className="footer-follow">
            <h3>Volg ons</h3>
            <div className="footer-social">
              <span aria-label="Instagram">
                <img src="/figma/footer/f3cd6.svg" alt="" width="48" height="48" loading="lazy" />
              </span>
              <span aria-label="LinkedIn">
                <img src="/figma/footer/1eb49.svg" alt="" width="48" height="48" loading="lazy" />
              </span>
              <span aria-label="Facebook">
                <img src="/figma/footer/d3c6e.svg" alt="" width="48" height="48" loading="lazy" />
              </span>
            </div>
            <img
              className="footer-social-mark"
              src="/figma/footer/aaff3.svg"
              alt=""
              width="48"
              height="24"
              loading="lazy"
            />
          </div>
        </div>
        <div className="footer-bottom">
          <img
            className="footer-divider"
            src="/figma/footer/cb655.svg"
            width="1750"
            height="1"
            alt=""
            loading="lazy"
          />
          <span>
            <span className="sr-only">© {new Date().getFullYear()} Kosifly</span>
            <span aria-hidden="true">© {new Date().getFullYear()}　 K O S I F L Y</span>
          </span>
          <span className="footer-legal">
            <Link href="/algemene-voorwaarden">Algemene voorwaarden</Link>
            <Link href="/privacy">Privacy</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
