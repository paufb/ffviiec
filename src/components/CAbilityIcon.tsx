import { CommandAbility } from '../types.ts';

interface CAbilityIconProps {
  cAbility: CommandAbility;
  className?: string;
}

export function CAbilityIcon({ cAbility, className }: CAbilityIconProps) {
  return (
    <img
      className={className}
      src={new URL(`../assets/activeskill/${cAbility.id}.png`, import.meta.url).href}
      alt=""
    />
  );
}
