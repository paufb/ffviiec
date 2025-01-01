import { Gear } from '../models/Gear.tsx';

interface GearIconLargeProps {
  gear: Gear;
  className?: string;
}

export function GearIconLarge({ gear, className }: GearIconLargeProps) {
  const url = gear.id ? new URL(`../assets/costume/${gear.id}.png`, import.meta.url).href : undefined;
  return (
    <img
      className={className}
      src={url}
      alt=""
    />
  );
}
