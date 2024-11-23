import { SigilType } from '../types.ts';
import { CommandAbility } from './CommandAbility.ts';

interface UltimateCommandAbilityProps {
  id: number | null;
  name: string;
  sigil: SigilType;
  description: string;
}

export class UltimateCommandAbility extends CommandAbility {
  constructor(props: UltimateCommandAbilityProps) {
    super({ ...props, atbCost: 0 });
  }

  getDescription() {
    return this.description;
  }
}
