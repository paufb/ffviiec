import { Character } from './Character.ts';
import { ReinforcementAbility } from './ReinforcementAbility.ts';

interface GearProps {
  id: number | null;
  name: string;
  character: Character,
  reinforcementAbilities: ReinforcementAbility[];
  reinforcementAbilitiesPoints: number[];
}

export class Gear {
  #props: GearProps;

  constructor(props: GearProps) {
    this.#props = props;
  }

  get id() { return this.#props.id; }
  get name() { return this.#props.name; }
  get character() { return this.#props.character; }
  get reinforcementAbilities() { return this.#props.reinforcementAbilities; }
  get reinforcementAbilitiesPoints() { return this.#props.reinforcementAbilitiesPoints; }
}
