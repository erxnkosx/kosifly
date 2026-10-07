"use client";

import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import { delayed, fadeUp, STAGGER } from "./presets";

const TAGS = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  header: motion.header,
  aside: motion.aside,
  ul: motion.ul,
  ol: motion.ol,
  li: motion.li,
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  span: motion.span,
  a: motion.a,
} as const;

type Tag = keyof typeof TAGS;

type RevealProps = Omit<HTMLMotionProps<"div">, "variants" | "initial" | "animate"> & {
  as?: Tag;
  variants?: Variants;
};

type RevealGroupProps = RevealProps & {
  /** Speel de animatie meteen af (hero) in plaats van bij het in beeld scrollen. */
  onMount?: boolean;
  stagger?: number;
  delay?: number;
};

/** Container die zijn `RevealItem`-kinderen na elkaar laat verschijnen. */
export function RevealGroup({
  as = "div",
  onMount = false,
  stagger = STAGGER,
  delay = 0,
  children,
  ...props
}: RevealGroupProps) {
  const Component = TAGS[as] as typeof motion.div;
  const variants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  return (
    <Component
      variants={variants}
      initial="hidden"
      {...(onMount
        ? { animate: "show" }
        : { whileInView: "show", viewport: { once: true, amount: 0.2 } })}
      {...props}
    >
      {children}
    </Component>
  );
}

/** Kind van een `RevealGroup`: schuift omhoog en verschijnt. */
export function RevealItem({ as = "div", variants = fadeUp, children, ...props }: RevealProps) {
  const Component = TAGS[as] as typeof motion.div;
  return (
    <Component variants={variants} {...props}>
      {children}
    </Component>
  );
}

type SingleRevealProps = RevealProps & {
  /** Speel de animatie meteen af (hero) in plaats van bij het in beeld scrollen. */
  onMount?: boolean;
  delay?: number;
};

/** Los element dat verschijnt wanneer het in beeld komt (of meteen, met `onMount`). */
export function Reveal({
  as = "div",
  variants = fadeUp,
  onMount = false,
  delay = 0,
  children,
  ...props
}: SingleRevealProps) {
  const Component = TAGS[as] as typeof motion.div;
  return (
    <Component
      variants={delay ? delayed(variants, delay) : variants}
      initial="hidden"
      {...(onMount
        ? { animate: "show" }
        : { whileInView: "show", viewport: { once: true, amount: 0.2 } })}
      {...props}
    >
      {children}
    </Component>
  );
}
