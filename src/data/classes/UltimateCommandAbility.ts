import type { Sigil } from '../types';
import { CommandAbility } from './CommandAbility';

interface UltimateCommandAbilityProps {
  id: number | null;
  name: string;
  sigil: Sigil | null;
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
