import { SigilType, ValuesByOverboostLevel } from '../types.ts';

interface CommandAbilityProps {
  id: number | null;
  name: string;
  atbCost: number;
  sigil: SigilType;
  description: string;
  valuesByOverboostLevel?: ValuesByOverboostLevel | null;
}

export class CommandAbility {
  #id: number | null;
  #name: string;
  #atbCost: number;
  #sigil: SigilType;
  #description: string;
  #valuesByOverboostLevel: ValuesByOverboostLevel | null

  constructor({ id, name, atbCost, sigil, description, valuesByOverboostLevel = null }: CommandAbilityProps) {
    this.#id = id;
    this.#name = name;
    this.#atbCost = atbCost;
    this.#sigil = sigil;
    this.#description = description;
    this.#valuesByOverboostLevel = valuesByOverboostLevel;
  }

  get id() { return this.#id; }
  get name() { return this.#name; }
  get atbCost() { return this.#atbCost; }
  get sigil() { return this.#sigil; }
  get description() { return this.#description; }

  getDescription(overboostLevel: number) {
    return this.#description.replace(/\{\{(\w+)\}\}/g, (_, key) => this.#valuesByOverboostLevel![key][overboostLevel]);
  }
}
