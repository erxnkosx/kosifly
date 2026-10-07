/**
 * Knoplabel met pijl. Inter maakt van "-->" een pijl (ligatuur), maar alleen binnen één tekstknoop en zonder
 * letterafstand. Geef de link daarom ook `aria-label={label}`, anders leest een schermlezer de losse tekens voor.
 */
export const withArrow = (label: string) => `${label} -->`;
