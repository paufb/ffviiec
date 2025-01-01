import { Weapon } from '../models/Weapon.ts';

interface WeaponIconLargeProps {
  weapon: Weapon;
  className?: string;
}

export function WeaponIconLarge({ weapon, className }: WeaponIconLargeProps) {
  const url = weapon.id ? new URL(`../assets/weapon_l/${weapon.id}.png`, import.meta.url).href : undefined;
  return (
    <img
      className={className}
      src={url}
      alt=""
    />
  );
}
