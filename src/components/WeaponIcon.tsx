import { Weapon } from '../types.ts';

interface WeaponIconProps {
  weapon: Weapon;
  className?: string;
}

export function WeaponIcon({ weapon, className }: WeaponIconProps) {
  return (
    <img
      className={className}
      style={{ transform: 'scale(1.175)' }}
      src={new URL(`../assets/weapons/${weapon.id}.png`, import.meta.url).href}
      alt=""
    />
  );
}
