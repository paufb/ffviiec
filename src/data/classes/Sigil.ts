interface SigilProps {
  name: string;
  icon: string;
}

export class Sigil {
  #props: SigilProps;

  constructor(props: SigilProps) {
    this.#props = props;
  }

  get name() { return this.#props.name; }
  get icon() { return this.#props.icon; }
}
