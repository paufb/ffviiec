import { Weapon } from '../types.ts';

interface WeaponIconLargeProps {
  weapon: Weapon;
  className?: string;
}

export function WeaponIconLarge({ weapon, className }: WeaponIconLargeProps) {
  return (
    <img
      className={className}
      src={new URL(`../assets/weapons_l/${weapon.id}.png`, import.meta.url).href}
      alt=""
    />
  );
}
