import { WeaponType } from '../types.ts';

interface WeaponIconProps {
  weapon: WeaponType;
  className?: string;
}

export function WeaponIcon({ weapon, className }: WeaponIconProps) {
  return (
    <img
      className={className}
      style={{ transform: 'scale(1.175)' }}
      src={new URL(`../assets/weapon/${weapon.id}.png`, import.meta.url).href}
      alt=""
    />
  );
}
