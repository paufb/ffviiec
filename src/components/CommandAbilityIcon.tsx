import { CommandAbility } from '../models/CommandAbility.ts';

interface CommandAbilityIconProps {
  commandAbility: CommandAbility;
  className?: string;
  lazy?: boolean;
}

export function CommandAbilityIcon({ commandAbility, className, lazy = false }: CommandAbilityIconProps) {
  return (
    <img
      className={className}
      loading={lazy ? 'lazy' : undefined}
      src={new URL(`../assets/activeskill/${commandAbility.id}.png`, import.meta.url).href}
      alt=""
    />
  );
}
