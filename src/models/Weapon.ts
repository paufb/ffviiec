import { Elements } from '../types.ts';
import { CommandAbility } from './CommandAbility.ts';
import { ReinforcementAbility } from './ReinforcementAbility.ts';

interface WeaponProps {
  id: number;
  name: string;
  characterId: number;
  element: keyof Elements;
  commandAbility: CommandAbility;
  maxRarityLevel: number;
  maxRarityStats: { pAtk: number; mAtk: number; heal: number; };
  reinforcementAbilities: ReinforcementAbility[];
}

export class Weapon {
  #id: number;
  #name: string;
  #characterId: number;
  #element: keyof Elements;
  #commandAbility: CommandAbility;
  #maxRarityLevel: number;
  #maxRarityStats: { pAtk: number; mAtk: number; heal: number; };
  #reinforcementAbilities: ReinforcementAbility[];
  static #overboostLevelPAtkMultipliers = [0, 0.4, 0.3, 0.2, 0.1, 0.1, 0.1, 0.05, 0.05, 0.05, 0.05];
  static #overboostLevelMAtkMultipliers = [0, 0.4, 0.3, 0.2, 0.1, 0.1, 0.1, 0.05, 0.05, 0.05, 0.05];
  static #overboostLevelHealMultipliers = [0, 0.1, 0.05, 0.05, 0.04, 0.04, 0.04, 0.02, 0.02, 0.02, 0.02];

  constructor({ id, name, characterId, element, commandAbility, maxRarityLevel, maxRarityStats, reinforcementAbilities }: WeaponProps) {
    this.#id = id;
    this.#name = name;
    this.#characterId = characterId;
    this.#element = element;
    this.#commandAbility = commandAbility;
    this.#maxRarityLevel = maxRarityLevel;
    this.#maxRarityStats = maxRarityStats;
    this.#reinforcementAbilities = reinforcementAbilities;
  }

  get id() { return this.#id; }
  get name() { return this.#name; }
  get characterId() { return this.#characterId; }
  get element() { return this.#element; }
  get commandAbility() { return this.#commandAbility; }
  get maxRarityLevel() { return this.#maxRarityLevel; }
  get maxRarityStats() { return this.#maxRarityStats; }
  get reinforcementAbilities() { return this.#reinforcementAbilities; }

  getPAtk(overboostLevel: number) {
    const basePAtk = this.#maxRarityStats.pAtk;
    let additionalPAtk = 0;
    for (let i = 0; i <= overboostLevel; i++) {
      additionalPAtk += basePAtk * Weapon.#overboostLevelPAtkMultipliers[i];
    }
    return Math.floor(basePAtk + additionalPAtk);
  }

  getMAtk(overboostLevel: number) {
    const baseMAtk = this.#maxRarityStats.mAtk;
    let additionalMAtk = 0;
    for (let i = 0; i <= overboostLevel; i++) {
      additionalMAtk += baseMAtk * Weapon.#overboostLevelMAtkMultipliers[i];
    }
    return Math.floor(baseMAtk + additionalMAtk);
  }

  getHeal(overboostLevel: number) {
    const baseHeal = this.#maxRarityStats.heal;
    let additionalHeal = 0;
    for (let i = 0; i <= overboostLevel; i++) {
      additionalHeal += baseHeal * Weapon.#overboostLevelHealMultipliers[i];
    }
    return Math.floor(baseHeal + additionalHeal);
  }

  getCAbilityDescription(overboostLevel: number) {
    return this.#commandAbility.getDescription(overboostLevel);
  }
}
