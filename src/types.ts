export type SigilType = 'circle' | 'triangle' | 'cross' | 'rhombus' | 'square' | null;

export interface CommandAbility {
  atbCost: number;
  sigil: SigilType;
  description: string;
  valuesByOverboost: { [key: string]: [string, string, string, string, string, string, string, string, string, string, string] };
}

export interface Character {
  icon: string;
}

export interface Element {
  icon: string;
}

export interface Weapon {
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
