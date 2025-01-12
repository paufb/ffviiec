import { useState } from 'react';
import { Gear } from '../models/Gear.ts';
import { GearIcon } from '../components/GearIcon.tsx';
import { GearModal } from '../components/GearModal.tsx';
import { ReinforcementAbilityIcon } from '../components/ReinforcementAbilityIcon.tsx';
import styles from './GearPage.module.css';
import pageAnimations from '../pages/page-animations.module.css';

export function GearPage() {
  const [gear, setGear] = useState<{ [key: string]: Gear }>({});
  const [selectedGear, setSelectedGear] = useState<Gear>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  import('../data/gearData.ts').then((module) => setGear(module.gearData));

  function openModal(gear: Gear) {
    setSelectedGear(gear);
    setIsModalOpen(true);
  }

  return (
    <div className={styles['page']}>
      <div className={`${styles['decorated-container']} ${pageAnimations['fade-in-from-right']}`}>
        <div className={styles['grid']}>
          {Object.entries(gear).map(([_, gear]) => (
            <div className={styles['gear-entry']} key={gear.name}>
              <div className={styles['gear-img-container']} onClick={() => openModal(gear)}>
                <div>
                  <GearIcon gear={gear} lazy className={gear.character.name === 'Red XIII' ? styles['red-xiii'] : ''} />
                </div>
              </div>
              <div className={styles['gear-info']}>
                <span>{gear.name}</span>
                <div className={styles['reinforcement-abilities']}>
                  {gear.reinforcementAbilities.map((reinforcementAbility, index) => (
                    <div className={styles['reinforcement-ability']} key={index}>
                      <ReinforcementAbilityIcon reinforcementAbility={reinforcementAbility} lazy />
                      <span>{reinforcementAbility.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <GearModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        gear={selectedGear}
      />
    </div>
  );
}
