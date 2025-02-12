
import type { Character, Element } from '../types';
import { ReinforcementAbility } from './ReinforcementAbility';
import { UltimateCommandAbility } from './UltimateCommandAbility';
import { Weapon } from './Weapon';

interface UltimateWeaponProps {
  id: number | null;
  name: string;
  character: Character;
  element: Element | null;
  commandAbility: UltimateCommandAbility;
  maxRarityStats: { pAtk: number; mAtk: number; heal: number; };
  reinforcementAbilities: ReinforcementAbility[];
}

export class UltimateWeapon extends Weapon {
  constructor(props: UltimateWeaponProps) {
    super({ ...props, maxRarityLevel: 6 });
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
