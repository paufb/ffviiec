import { Elements } from '../types.ts';
import { CommandAbility } from './CommandAbility.ts';

interface MateriaProps {
  id: number;
  name: string;
  element: keyof Elements;
  commandAbility: CommandAbility;
}

export class Materia {
  #id: number;
  #name: string;
  #element: keyof Elements;
  #commandAbility: CommandAbility;

  constructor({ id, name, element, commandAbility }: MateriaProps) {
    this.#id = id;
    this.#name = name;
    this.#element = element;
    this.#commandAbility = commandAbility;
  }

  get id() { return this.#id; }
  get name() { return this.#name; }
  get element() { return this.#element; }
  get commandAbility() { return this.#commandAbility; }
}
