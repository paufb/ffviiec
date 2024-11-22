import { Elements } from '../types.ts';
import { Character } from './Character.ts';
import { ReinforcementAbility } from './ReinforcementAbility.ts';
import { UltimateCommandAbility } from './UltimateCommandAbility.ts';
import { Weapon } from './Weapon.ts';

interface UltimateWeaponProps {
  id: number | null;
  name: string;
  character: Character;
  element: keyof Elements;
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
