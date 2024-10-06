import { Elements } from '../types.ts';
import { UltimateCommandAbility } from './UltimateCommandAbility.ts';
import { Weapon } from './Weapon.ts';

interface UltimateWeaponProps {
  id: number;
  name: string;
  characterId: number;
  element: keyof Elements;
  commandAbility: UltimateCommandAbility;
  maxRarityStats: { pAtk: number; mAtk: number; heal: number; };
}

export class UltimateWeapon extends Weapon {
  constructor({ id, name, characterId, element, commandAbility, maxRarityStats }: UltimateWeaponProps) {
    super({ id: id, name: name, characterId: characterId, element: element, commandAbility: commandAbility, maxRarityLevel: 6, maxRarityStats: maxRarityStats });
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
