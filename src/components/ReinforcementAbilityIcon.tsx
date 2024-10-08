import { ReinforcementAbility } from '../models/ReinforcementAbility.ts';

interface ReinforcementAbilityIconProps {
  reinforcementAbility: ReinforcementAbility;
  className?: string;
  lazy?: boolean;
}

export function ReinforcementAbilityIcon({ reinforcementAbility, className, lazy = false }: ReinforcementAbilityIconProps) {
  return (
    <img
      className={className}
      loading={lazy ? 'lazy' : undefined}
      src={new URL(`../assets/passiveskill/${reinforcementAbility.id}.png`, import.meta.url).href}
      alt=""
    />
  );
}
