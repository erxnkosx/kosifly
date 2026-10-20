"use client";

import { useRef, useState, type ReactNode } from "react";

export type ReviewItem = {
  title: string;
  text: string;
  name: string;
  company: string;
  initial: string;
};

/** Reviews als gelijke kaarten: rij van drie op desktop, swipebaar met meelopende bolletjes op mobiel. */
export function ReviewCarousel({
  reviews,
  topline,
}: {
  reviews: ReviewItem[];
  topline: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const go = (n: number) => {
    const el = ref.current;
    const card = el?.children[n] as HTMLElement | undefined;
    if (el && card) el.scrollTo({ left: card.offsetLeft - el.offsetLeft - 20, behavior: "smooth" });
  };

  return (
    <div className="review-carousel">
      <div
        ref={ref}
        className="review-carousel-track"
        role="region"
        aria-roledescription="carrousel"
        aria-label="Reviews"
        onScroll={(e) => {
          const el = e.currentTarget;
          const [first, second] = Array.from(el.children) as HTMLElement[];
          const step = second ? second.offsetLeft - first.offsetLeft : el.clientWidth;
          setActive(Math.max(0, Math.min(reviews.length - 1, Math.round(el.scrollLeft / step))));
        }}
      >
        {reviews.map((review) => (
          <figure key={review.name} className="review-carousel-card">
            <div className="testimonial-topline">{topline}</div>
            <blockquote>
              <strong>{review.title}</strong>
              <p>{review.text}</p>
            </blockquote>
            <figcaption className="testimonial-author">
              <span className="testimonial-avatar" aria-hidden="true">
                {review.initial}
              </span>
              <div>
                <strong>{review.name}</strong>
                <span>{review.company}</span>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="review-carousel-dots">
        {reviews.map((review, n) => (
          <button
            key={review.name}
            type="button"
            aria-label={`Toon review ${n + 1}`}
            aria-pressed={n === active}
            onClick={() => go(n)}
          />
        ))}
      </div>
    </div>
  );
}
