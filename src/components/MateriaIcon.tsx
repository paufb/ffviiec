import { Materia } from '../models/Materia.ts';

interface MateriaIconProps {
  materia: Materia;
  className?: string;
  lazy?: boolean;
}

export function MateriaIcon({ materia, className, lazy = false }: MateriaIconProps) {
  const url = materia.id ? new URL(`../assets/materia/${materia.id}.png`, import.meta.url).href : undefined;
  return (
    <img
      className={className}
      loading={lazy ? 'lazy' : undefined}
      src={url}
      alt=""
    />
  );
}
