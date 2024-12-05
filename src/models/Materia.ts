import { Elements } from '../types.ts';
import { CommandAbility } from './CommandAbility.ts';

interface MateriaProps {
  id: number | null;
  name: string;
  element: keyof Elements;
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
