
import type { Character, Element } from '../types';
import { CommandAbility } from './CommandAbility';
import { ReinforcementAbility } from './ReinforcementAbility';

interface WeaponProps {
  id: number | null;
  name: string;
  character: Character;
  element: Element | null;
  commandAbility: CommandAbility;
  maxRarityLevel: number;
  maxRarityStats: { pAtk: number; mAtk: number; heal: number; };
  reinforcementAbilities: ReinforcementAbility[];
}

export class Weapon {
  #props: WeaponProps;
  static #overboostLevelPAtkMultipliers = [0, 0.4, 0.3, 0.2, 0.1, 0.1, 0.1, 0.05, 0.05, 0.05, 0.05];
  static #overboostLevelMAtkMultipliers = [0, 0.4, 0.3, 0.2, 0.1, 0.1, 0.1, 0.05, 0.05, 0.05, 0.05];
  static #overboostLevelHealMultipliers = [0, 0.1, 0.05, 0.05, 0.04, 0.04, 0.04, 0.02, 0.02, 0.02, 0.02];

  constructor(props: WeaponProps) {
    this.#props = props;
  }

  get id() { return this.#props.id; }
  get name() { return this.#props.name; }
  get character() { return this.#props.character; }
  get element() { return this.#props.element; }
  get commandAbility() { return this.#props.commandAbility; }
  get maxRarityLevel() { return this.#props.maxRarityLevel; }
  get maxRarityStats() { return this.#props.maxRarityStats; }
  get reinforcementAbilities() { return this.#props.reinforcementAbilities; }

  getPAtk(overboostLevel: number) {
    const basePAtk = this.#props.maxRarityStats.pAtk;
    let additionalPAtk = 0;
    for (let i = 0; i <= overboostLevel; i++) {
      additionalPAtk += basePAtk * Weapon.#overboostLevelPAtkMultipliers[i];
    }
    return Math.floor(basePAtk + additionalPAtk);
  }

  getMAtk(overboostLevel: number) {
    const baseMAtk = this.#props.maxRarityStats.mAtk;
    let additionalMAtk = 0;
    for (let i = 0; i <= overboostLevel; i++) {
      additionalMAtk += baseMAtk * Weapon.#overboostLevelMAtkMultipliers[i];
    }
    return Math.floor(baseMAtk + additionalMAtk);
  }

  getHeal(overboostLevel: number) {
    const baseHeal = this.#props.maxRarityStats.heal;
    let additionalHeal = 0;
    for (let i = 0; i <= overboostLevel; i++) {
      additionalHeal += baseHeal * Weapon.#overboostLevelHealMultipliers[i];
    }
    return Math.floor(baseHeal + additionalHeal);
  }

  getCAbilityDescription(overboostLevel: number) {
    return this.#props.commandAbility.getDescription(overboostLevel);
  }
}
