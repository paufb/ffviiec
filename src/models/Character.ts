import { CharacterNameType } from '../types.ts';

interface CharacterProps {
  id: number | null;
  name: CharacterNameType;
}

export class Character {
  #props: CharacterProps;

  constructor(props: CharacterProps) {
    this.#props = props;
  }

  get id() { return this.#props.id; }
  get name() { return this.#props.name; }
}
