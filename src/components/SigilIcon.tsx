import { SigilType } from '../types.tsx';

interface SigilIconProps {
  sigil: SigilType;
  className?: string;
}

export function SigilIcon({ sigil, className }: SigilIconProps) {
  const url = new URL(`../assets/sigils/${sigil ? sigil : 'minus'}.png`, import.meta.url).href;
  return (
    <img
      className={className}
      src={url}
      alt=""
    />
  );
}
