import { useEffect, useState } from 'react';
import styles from './MateriaPage.module.css';
import { Materia } from '../models/Materia.ts';
import { MateriaIcon } from '../components/MateriaIcon.tsx';
import { ATBBarCost } from '../components/ATBBarCost.tsx';
import { CommandAbilityIcon } from '../components/CommandAbilityIcon.tsx';
import { ElementIcon } from '../components/ElementIcon.tsx';
import { SigilIcon } from '../components/SigilIcon.tsx';

export function MateriaPage() {
  const [materia, setMateria] = useState<{ [key: number]: Materia }>({});

  useEffect(() => {
    import('../data/materiaData.ts').then((module) => {
      setMateria(module.materiaData);
    });
  }, []);

  return (
    <div className={styles['page']}>
      <div className={styles['materia-grid']}>
        {Object.entries(materia).map(([_, materia]) => (
          <div className={styles['materia-entry']} key={materia.id}>
            <MateriaIcon materia={materia} className={styles['materia-img']} />
            <div className={styles['materia-info']}>
              {materia.name}
              <ATBBarCost cost={materia.commandAbility.atbCost} />
              <div className={styles['materia-icons']}>
                <CommandAbilityIcon commandAbility={materia.commandAbility} />
                <ElementIcon element={materia.element} />
                <SigilIcon sigil={materia.commandAbility.sigil} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
