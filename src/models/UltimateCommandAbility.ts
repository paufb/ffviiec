import { SigilType } from '../types.ts';
import { CommandAbility } from './CommandAbility.ts';

interface UltimateCommandAbilityProps {
  id: number;
  name: string;
  sigil: SigilType;
  description: string;
}

export class UltimateCommandAbility extends CommandAbility {
  constructor({ id, name, sigil, description }: UltimateCommandAbilityProps) {
    super({ id: id, name: name, atbCost: 0, sigil: sigil, description: description });
  }

  getDescription() {
    return this.description;
  }
}
