import { CharacterNameType } from '../types.ts';

interface CharacterProps {
  id: number;
  name: CharacterNameType;
}

export class Character {
  #id: number;
  #name: CharacterNameType;

  constructor({ id, name }: CharacterProps) {
    this.#id = id;
    this.#name = name;
  }

  get id() { return this.#id; }
  get name() { return this.#name; }
}
