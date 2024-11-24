import { Gear } from '../models/Gear.ts';

interface GearIconProps {
  gear: Gear;
  className?: string;
  lazy?: boolean;
}

export function GearIcon({ gear, className, lazy }: GearIconProps) {
  const url = gear.id ? new URL(`../assets/costume/${gear.id}.png`, import.meta.url).href : '';
  return (
    <img
      className={className}
      loading={lazy ? 'lazy' : undefined}
      src={url}
      alt=""
    />
  );
}
