import { CommandAbility } from '../models/CommandAbility.ts';

interface CommandAbilityIconProps {
  commandAbility: CommandAbility;
  className?: string;
}

export function CommandAbilityIcon({ commandAbility, className }: CommandAbilityIconProps) {
  return (
    <img
      className={className}
      src={new URL(`../assets/activeskill/${commandAbility.id}.png`, import.meta.url).href}
      alt=""
    />
  );
}
