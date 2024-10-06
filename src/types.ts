import { UltimateWeapon } from './models/UltimateWeapon.ts';
import { Weapon } from './models/Weapon.ts';

export const sigils = ['circle', 'triangle', 'cross', 'rhombus', 'square'];
export type SigilType = typeof sigils[number] | null;

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

export interface Character {
  id: number;
}

export interface Element {
  icon: string;
}

export interface WeaponType {
  id: number;
  character: keyof Characters;
  element: keyof Elements;
  cAbility: keyof CommandAbilities;
  fiveStarLevel120: {
    pAtk: number;
    mAtk: number;
    heal: number;
  }
}

export interface UltimateWeaponType {
  id: number;
  character: keyof Characters;
  element: keyof Elements;
  cAbility: keyof CommandAbilities;
  sixStarLevel120: {
    pAtk: number;
    mAtk: number;
    heal: number;
  }
}

export interface CommandAbilities {
  [key: string]: CommandAbility | UltimateCommandAbility
}

export interface Characters {
  [key: string]: Character
}

export interface Elements {
  [key: string]: Element
}

export interface Weapons {
  [key: number]: Weapon | UltimateWeapon
}

export interface ValuesByOverboostLevel {
  [key: string]: [string, string, string, string, string, string, string, string, string, string, string]
}
