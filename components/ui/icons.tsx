type P = { className?: string; size?: number };
const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export const MailIcon = ({ className, size = 24 }: P) => (
  <svg {...base(size)} className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);
export const PhoneIcon = ({ className, size = 24 }: P) => (
  <svg {...base(size)} className={className}>
    <rect x="7" y="2" width="10" height="20" rx="2" />
    <path d="M12 18h.01" />
  </svg>
);
export const CalendarIcon = ({ className, size = 24 }: P) => (
  <svg {...base(size)} className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);
export const LockIcon = ({ className, size = 14 }: P) => (
  <svg {...base(size)} className={className}>
    <rect x="5" y="10" width="14" height="10" rx="2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
  </svg>
);
export const ArrowRight = ({ className, size = 20 }: P) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
    <path
      d="M4 10h12M11 5l5 5-5 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const CheckSmall = ({ className, size = 14 }: P) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <path
      d="m3.5 8.3 2.8 2.8L12.5 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const CheckCircle = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="9" fill="#E8334F" fillOpacity="0.22" />
    <path
      d="m5 9.3 2.6 2.6L13 6.5"
      stroke="#F24A63"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Chevron = ({ className }: { className?: string }) => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" className={className}>
    <path
      d="m8 10.5 4.5 4.5 4.5-4.5"
      stroke="#fff"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Instagram = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="#fff" stroke="none" />
  </svg>
);
export const LinkedIn = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="#fff">
    <path d="M3 3h18v18H3z" />
    <path
      d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 10v7"
      stroke="#000"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);
export const Facebook = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="#fff">
    <circle cx="12" cy="12" r="11" />
    <path
      d="M13.5 20v-6.2h2.1l.4-2.6h-2.5V9.6c0-.8.3-1.3 1.4-1.3H16V6.1c-.3 0-1.1-.1-2-.1-2 0-3.3 1.2-3.3 3.4v1.8H8.6v2.6h2.1V20z"
      fill="#000"
    />
  </svg>
);

export const ShieldCheck = ({ className, size = 24 }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
export const SparklesIcon = ({ className, size = 24 }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    <path d="M20 3v4M22 5h-4M4 17v2M5 18H3" />
  </svg>
);
export const MapPin = ({ className, size = 18 }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
export const Star = ({ size = 13 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#FFB400">
    <path d="m12 2.5 2.9 5.9 6.6 1-4.8 4.6 1.1 6.5L12 17.4l-5.8 3.1 1.1-6.5-4.8-4.6 6.6-1z" />
  </svg>
);
export const DashedArrow = () => (
  <svg width="64" height="12" viewBox="0 0 64 12" fill="none" className="shrink-0">
    <path d="M2 6h54" stroke="#E8334F" strokeWidth="2" strokeDasharray="4 4" />
    <path
      d="M54 2l6 4-6 4"
      stroke="#E8334F"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
