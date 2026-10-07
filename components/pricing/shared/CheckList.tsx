import { CheckIcon, type CheckTone } from "./CheckIcon";

type CheckListProps = {
  items: readonly string[];
  tone: CheckTone;
  /** Breedte en tussenruimte van de lijst. */
  className: string;
  /** Maat en kleur van de tekst. */
  itemClassName: string;
};

/** Lijst met kenmerken, elk met een vinkje ervoor. */
export function CheckList({ items, tone, className, itemClassName }: CheckListProps) {
  return (
    <ul className={`flex flex-col ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-[12px]">
          <CheckIcon tone={tone} />
          <span className={`min-w-0 flex-1 font-inter ${itemClassName}`}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
