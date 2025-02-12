import { UltimateWeapon } from './classes/UltimateWeapon.ts';
import { Weapon } from './classes/Weapon.ts';

export const sigils = ['circle', 'triangle', 'cross', 'rhombus', 'square'] as const;
export type Sigil = typeof sigils[number];

export interface Character {
  id: number;
  name: string;
  path: string;
}

export interface CommandAbility {
  id: number;
  atbCost: number;
  sigil: Sigil;
  description: string;
  valuesByOverboost?: { [key: string]: [string, string, string, string, string, string, string, string, string, string, string] };
}

export interface UltimateCommandAbility {
  id: number;
  sigil: Sigil;
  description: string;
}

export const elements = ['Non-elemental', 'Fire', 'Ice', 'Lightning', 'Earth', 'Water', 'Wind'] as const;
export type Element = typeof elements[number];

export interface CommandAbilities {
  [key: string]: CommandAbility | UltimateCommandAbility;
}

export interface Characters {
  [key: number]: Character;
}

export interface Weapons {
  [key: string]: Weapon | UltimateWeapon;
}

export interface ValuesByOverboostLevel {
  [key: string]: [string, string, string, string, string, string, string, string, string, string, string];
}

export type DisplayableOverboostLevel = 0 | 1 | 6 | 10;
