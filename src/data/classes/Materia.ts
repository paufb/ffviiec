import type { Element } from '../types';
import { CommandAbility } from './CommandAbility';

interface MateriaProps {
  id: number | null;
  name: string;
  element: Element;
  commandAbility: CommandAbility;
}

export class Materia {
  #props: MateriaProps;

  constructor(props: MateriaProps) {
    this.#props = props;
  }

  get id() { return this.#props.id; }
  get name() { return this.#props.name; }
  get element() { return this.#props.element; }
  get commandAbility() { return this.#props.commandAbility; }
}
