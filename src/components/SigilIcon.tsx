import { SigilType } from '../types.tsx';

interface SigilIconProps {
  sigil: SigilType;
  className?: string;
}

export function SigilIcon({ sigil, className }: SigilIconProps) {
  function getFileName() {
    return `${sigil ? sigil : 'minus'}.png`;
  }

  return (
    <img
      className={className}
      src={new URL(`../assets/sigils/${getFileName()}`, import.meta.url).href}
      alt=""
    />
  );
}
