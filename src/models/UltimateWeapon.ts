import { Elements } from '../types.ts';
import { Character } from './Character.ts';
import { ReinforcementAbility } from './ReinforcementAbility.ts';
import { UltimateCommandAbility } from './UltimateCommandAbility.ts';
import { Weapon } from './Weapon.ts';

interface UltimateWeaponProps {
  id: number;
  name: string;
  character: Character;
  element: keyof Elements;
  commandAbility: UltimateCommandAbility;
  maxRarityStats: { pAtk: number; mAtk: number; heal: number; };
  reinforcementAbilities: ReinforcementAbility[];
}

export class UltimateWeapon extends Weapon {
  constructor({ id, name, character, element, commandAbility, maxRarityStats, reinforcementAbilities }: UltimateWeaponProps) {
    super({ id: id, name: name, character: character, element: element, commandAbility: commandAbility, maxRarityLevel: 6, maxRarityStats: maxRarityStats, reinforcementAbilities: reinforcementAbilities });
  }

  getPAtk() {
    return this.maxRarityStats.pAtk;
  }

  getMAtk() {
    return this.maxRarityStats.mAtk;
  }

  getHeal() {
    return this.maxRarityStats.heal;
  }
}
