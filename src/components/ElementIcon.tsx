import { Elements } from '../types.tsx';

interface ElementIconProps {
  element: keyof Elements;
  className?: string;
}

export function ElementIcon({ element, className }: ElementIconProps) {
  const url = element ? new URL(`../assets/elements/${element}.webp`, import.meta.url).href : '';
  return (
    <img
      className={className}
      src={url}
      alt=""
    />
  );
}
