import { UltimateWeapon } from './models/UltimateWeapon.ts';
import { Character } from './models/Character.ts';
import { Weapon } from './models/Weapon.ts';

export const sigils = ['circle', 'triangle', 'cross', 'rhombus', 'square'];
export type SigilType = typeof sigils[number] | null;

export const characterNames = ['Cloud', 'Barret', 'Tifa', 'Aerith', 'Red XIII', 'Yuffie', 'Cait Sith', 'Vincent', 'Zack', 'Sephiroth', 'Glenn', 'Matt', 'Lucia'];
export type CharacterNameType = typeof characterNames[number];

export interface CommandAbility {
  id: number;
  atbCost: number;
  sigil: SigilType;
  description: string;
  valuesByOverboost?: { [key: string]: [string, string, string, string, string, string, string, string, string, string, string] };
}

export interface UltimateCommandAbility {
  id: number;
  sigil: SigilType;
  description: string;
}

export interface Element {
  icon: string;
}

export interface CommandAbilities {
  [key: string]: CommandAbility | UltimateCommandAbility;
}

export interface Characters {
  [key: number]: Character;
}

export interface Elements {
  [key: string]: Element;
}

export interface Weapons {
  [key: string]: Weapon | UltimateWeapon;
}

export interface ValuesByOverboostLevel {
  [key: string]: [string, string, string, string, string, string, string, string, string, string, string];
}
