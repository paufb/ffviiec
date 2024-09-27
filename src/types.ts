export const sigils = ['circle', 'triangle', 'cross', 'rhombus', 'square'];
export type SigilType = typeof sigils[number] | null;

export interface CommandAbility {
  id: number;
  atbCost: number;
  sigil: SigilType;
  description: string;
  valuesByOverboost: { [key: string]: [string, string, string, string, string, string, string, string, string, string, string] };
}

export interface Character {
  id: number;
}

export interface Element {
  icon: string;
}

export interface Weapon {
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

export interface CommandAbilities {
  [key: string]: CommandAbility
}

export interface Characters {
  [key: string]: Character
}

export interface Elements {
  [key: string]: Element
}

export interface Weapons {
  [key: string]: Weapon
}
