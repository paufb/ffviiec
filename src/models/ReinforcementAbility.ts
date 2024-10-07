interface ReinforcementAbilityProps {
  id: number;
  name: string;
  effect: string;
  reqPts: number[];
  levelValues: { [key: string]: number[] };
}

export class ReinforcementAbility {
  #id: number;
  #name: string;
  #effect: string;
  #reqPts: number[];
  #levelValues: { [key: string]: number[] };

  constructor({ id, name, effect, reqPts, levelValues }: ReinforcementAbilityProps) {
    this.#id = id;
    this.#name = name;
    this.#effect = effect;
    this.#reqPts = reqPts;
    this.#levelValues = levelValues;
  }

  get id() { return this.#id; }
  get name() { return this.#name; }
  get effect() { return this.#effect; }
  get reqPts() { return this.#reqPts; }
  get levelValues() { return this.#levelValues; }

  getEffect(level: number) {
    return this.#effect.replace(/\{\{(\w+)\}\}/g, (_, key) => String(this.#levelValues[level - 1][key]));
  }
}
