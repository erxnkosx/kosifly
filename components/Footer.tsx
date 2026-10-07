import Link from "next/link";
import { services } from "@/lib/services";

/** Shared footer from Figma node 232:455. */
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-invitation">
          <span className="tiny-label">KLAAR OM TE GROEIEN?</span>
          <h2>
            Let's build a website that <span>works for you.</span>
          </h2>
          <p>
            Een gesprek van 30 minuten. Je vertelt wat je wil bereiken, wij zeggen wat het kost en
            hoe lang het duurt. Daarna beslis jij.
          </p>
          <div className="button-row">
            <Link className="button primary" href="/contact">
              Start your project →
            </Link>
            <Link className="button outline" href="/contact">
              Plan een gesprek van 30 min
            </Link>
          </div>
          <strong>
            Gemiddeld antwoord binnen 24 uur · gratis website-audit · geen verplichtingen
          </strong>
        </div>
        <div className="footer-call">
          <div>
            <h3>Liever meteen iemand aan de lijn?</h3>
            <p>Je spreekt de persoon die je site ook effectief bouwt.</p>
          </div>
          <div className="button-row">
            <Link href="/contact" className="button primary">
              Start your project →
            </Link>
            <a href="tel:+32483690426" className="button outline">
              +32 483 69 04 26
            </a>
          </div>
        </div>
        <div className="footer-columns">
          <div className="footer-brand">
            <img
              src="/figma/footer/43147.png"
              width="1536"
              height="1024"
              loading="lazy"
              alt="Kosifly"
            />
            <p>
              Digital solutions for KMO’s.
              <br />
              From website’s to AI automation.
            </p>
          </div>
          <div>
            <h3>Navigatie</h3>
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/projecten">Projects</Link>
            <Link href="/prijzen">Pricing</Link>
            <Link href="/over-ons">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div>
            <h3>Services</h3>
            {services.map((s) => (
              <Link key={s.slug} href={"/diensten/" + s.slug}>
                {s.short}
              </Link>
            ))}
          </div>
          <div className="footer-contact">
            <h3>Contact</h3>
            <a href="mailto:info@kosifly.com">info@kosifly.com</a>
            <a href="tel:+32483690426">+32 (0)483 69 04 26</a>
            <p>Puurs Sint-amands, België</p>
            <p>Ma–zo, 9–18u</p>
          </div>
          <div className="footer-follow">
            <h3>Volg ons</h3>
            <div className="footer-social">
              <span aria-label="Instagram">
                <img src="/figma/footer/f3cd6.svg" alt="" width="48" height="48" />
              </span>
              <span aria-label="LinkedIn">
                <img src="/figma/footer/1eb49.svg" alt="" width="48" height="48" />
              </span>
              <span aria-label="Facebook">
                <img src="/figma/footer/d3c6e.svg" alt="" width="48" height="48" />
              </span>
            </div>
            <img
              className="footer-social-mark"
              src="/figma/footer/aaff3.svg"
              alt=""
              width="48"
              height="24"
            />
          </div>
        </div>
        <div className="footer-bottom">
          <object
            className="footer-divider"
            data="/figma/footer/cb655.svg"
            type="image/svg+xml"
            width="1750"
            height="1"
            aria-hidden="true"
            tabIndex={-1}
          />
          <span>© 2026　 K O S I F L Y</span>
          <span className="footer-legal">
            <Link href="/algemene-voorwaarden">Algemene voorwaarden</Link>
            <Link href="/privacy">Privacy</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
