import { CommandAbility } from '../models/CommandAbility.ts';

interface CommandAbilityIconProps {
  commandAbility: CommandAbility;
  className?: string;
  lazy?: boolean;
}

export function CommandAbilityIcon({ commandAbility, className, lazy = false }: CommandAbilityIconProps) {
  const url = commandAbility.id ? new URL(`../assets/activeskill/${commandAbility.id}.png`, import.meta.url).href : '';
  return (
    <img
      className={className}
      loading={lazy ? 'lazy' : undefined}
      src={url}
      alt=""
    />
  );
}
