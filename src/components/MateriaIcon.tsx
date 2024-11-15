import { Materia } from '../models/Materia.ts';

interface MateriaIconProps {
  materia: Materia;
  className?: string;
  lazy?: boolean;
}

export function MateriaIcon({ materia, className, lazy = false }: MateriaIconProps) {
  return (
    <img
      className={className}
      loading={lazy ? 'lazy' : undefined}
      src={new URL(`../assets/materia/${materia.id}.png`, import.meta.url).href}
      alt=""
    />
  );
}
