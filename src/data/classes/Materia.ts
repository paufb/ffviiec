import type { Element } from '../types';
import { CommandAbility } from './CommandAbility';

interface MateriaProps {
  id: number | null;
  name: string;
  element: Element;
  stars: 2 | 3 | 4 | 5;
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
  get stars() { return this.#props.stars; }
  get commandAbility() { return this.#props.commandAbility; }
}
