// Minimale stand-in voor framer-motion in jsdom: er zijn geen animatieframes, dus componenten
// renderen als gewone elementen en `animate`/`inView` worden alleen geregistreerd.
const React = require("react");

const MOTION_PROPS = new Set([
  "initial",
  "animate",
  "exit",
  "variants",
  "whileInView",
  "whileHover",
  "whileTap",
  "whileFocus",
  "viewport",
  "transition",
  "layout",
  "custom",
  "onAnimationComplete",
]);

const calls = { animate: [], inView: [] };

const motion = new Proxy(
  {},
  {
    get: (_, tag) =>
      React.forwardRef(({ children, ...props }, ref) => {
        const dom = Object.fromEntries(
          Object.entries(props).filter(([key]) => !MOTION_PROPS.has(key)),
        );
        return React.createElement(tag, { ...dom, ref }, children);
      }),
  },
);

function animate(target, keyframes, options = {}) {
  calls.animate.push({ target, keyframes, options });
  if (typeof target === "number") {
    options.onUpdate?.(keyframes);
    options.onComplete?.();
  } else if (target?.style) {
    for (const [property, value] of Object.entries(keyframes)) {
      target.style.setProperty(property, String(Array.isArray(value) ? value.at(-1) : value));
    }
  }
  return { stop() {}, cancel() {} };
}

function inView(element, onStart, options) {
  const entry = { element, onStart, options, stopped: false };
  calls.inView.push(entry);
  return () => {
    entry.stopped = true;
  };
}

module.exports = {
  motion,
  animate,
  inView,
  AnimatePresence: ({ children }) => children,
  MotionConfig: ({ children }) => children,
  calls,
  reset() {
    calls.animate.length = 0;
    calls.inView.length = 0;
  },
};
