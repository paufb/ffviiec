import { Elements } from '../types.tsx';

interface ElementIconProps {
  element: keyof Elements;
  className?: string;
}

export function ElementIcon({ element, className }: ElementIconProps) {
  function getFileName() {
    return `${element}.webp`;
  }

  return (
    <img
      className={className}
      src={new URL(`../assets/elements/${getFileName()}`, import.meta.url).href}
      alt=""
    />
  );
}
