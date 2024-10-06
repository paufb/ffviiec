import { Weapon } from '../models/Weapon.ts';

interface WeaponIconLargeProps {
  weapon: Weapon;
  className?: string;
}

export function WeaponIconLarge({ weapon, className }: WeaponIconLargeProps) {
  return (
    <img
      className={className}
      src={new URL(`../assets/weapon_l/${weapon.id}.png`, import.meta.url).href}
      alt=""
    />
  );
}
