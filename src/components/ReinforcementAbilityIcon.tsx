import { ReinforcementAbility } from '../models/ReinforcementAbility.ts';
import styles from './ReinforcementAbilityIcon.module.css';

interface ReinforcementAbilityIconProps {
  reinforcementAbility: ReinforcementAbility;
  className?: string;
  style?: React.CSSProperties;
  lazy?: boolean;
}

export function ReinforcementAbilityIcon({ reinforcementAbility, className, style, lazy = false }: ReinforcementAbilityIconProps) {
  const url = reinforcementAbility.id ? new URL(`../assets/passiveskill/${reinforcementAbility.id}.png`, import.meta.url).href : undefined;
  return (
    <img
      className={`${styles['reinforcement-ability-icon']} ${className || ''}`}
      style={style}
      loading={lazy ? 'lazy' : undefined}
      src={url}
      alt=""
    />
  );
}
