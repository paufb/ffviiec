import { ReinforcementAbility } from '../models/ReinforcementAbility.ts';
import styles from './ReinforcementAbilityIcon.module.css';

interface ReinforcementAbilityIconProps {
  reinforcementAbility: ReinforcementAbility;
  className?: string;
  lazy?: boolean;
}

export function ReinforcementAbilityIcon({ reinforcementAbility, className, lazy = false }: ReinforcementAbilityIconProps) {
  const url = reinforcementAbility.id ? new URL(`../assets/passiveskill/${reinforcementAbility.id}.png`, import.meta.url).href : undefined;
  return (
    <img
      className={`${styles['reinforcement-ability-icon']} ${className || ''}`}
      loading={lazy ? 'lazy' : undefined}
      src={url}
      alt=""
    />
  );
}
