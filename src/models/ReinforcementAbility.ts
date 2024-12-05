interface ReinforcementAbilityProps {
  id: number | null;
  name: string;
  effect: string;
  reqPts: number[];
  levelValues: { [key: string]: number[] };
}

export class ReinforcementAbility {
  #props: ReinforcementAbilityProps;

  constructor(props: ReinforcementAbilityProps) {
    this.#props = props;
  }

  get id() { return this.#props.id; }
  get name() { return this.#props.name; }
  get effect() { return this.#props.effect; }
  get reqPts() { return this.#props.reqPts; }
  get levelValues() { return this.#props.levelValues; }

  getEffect(level: number) {
    return this.#props.effect.replace(/\{\{(\w+)\}\}/g, (_, key) => String(this.#props.levelValues[level - 1][key]));
  }
}
