import { useEffect, useState } from 'react';
import { Materia } from '../models/Materia.ts';
import { MateriaIcon } from '../components/MateriaIcon.tsx';
import { ATBBarCost } from '../components/ATBBarCost.tsx';
import { CommandAbilityIcon } from '../components/CommandAbilityIcon.tsx';
import { ElementIcon } from '../components/ElementIcon.tsx';
import { SigilIcon } from '../components/SigilIcon.tsx';
import styles from './MateriaPage.module.css';
import pageAnimations from './page-animations.module.css';

export function MateriaPage() {
  const [materia, setMateria] = useState<{ [key: number]: Materia }>({});

  useEffect(() => {
    import('../data/materiaData.ts').then((module) => {
      setMateria(module.materiaData);
    });
  }, []);

  return (
    <div className={styles['page']}>
      <div className={`${styles['decorated-container']} ${pageAnimations['fade-in-from-right']}`}>
        <div className={styles['grid']}>
          {Object.entries(materia).map(([_, materia]) => (
            <div className={styles['grid-entry']} key={materia.id}>
              <div className={styles['materia-img-container']}>
                <MateriaIcon materia={materia} />
              </div>
              <div className={styles['materia-info']}>
                {materia.name}
                <div className={styles['materia-icons']}>
                  <CommandAbilityIcon commandAbility={materia.commandAbility} />
                  <ElementIcon element={materia.element} />
                  <SigilIcon sigil={materia.commandAbility.sigil} />
                </div>
                <ATBBarCost cost={materia.commandAbility.atbCost} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
