import type { ValuesByOverboostLevel } from '../types';
import type { Sigil } from './Sigil';

interface CommandAbilityProps {
  id: number | null;
  name: string;
  atbCost: number;
  sigil: Sigil | null;
  description: string;
  valuesByOverboostLevel?: ValuesByOverboostLevel | null;
}

export class CommandAbility {
  #props: CommandAbilityProps;

  constructor(props: CommandAbilityProps) {
    this.#props = props;
  }

  get id() { return this.#props.id; }
  get name() { return this.#props.name; }
  get atbCost() { return this.#props.atbCost; }
  get sigil() { return this.#props.sigil; }
  get description() { return this.#props.description; }

  getDescription(overboostLevel: number) {
    return this.#props.description.replace(/\{\{(\w+)\}\}/g, (_, key) => this.#props.valuesByOverboostLevel![key][overboostLevel]);
  }
}
