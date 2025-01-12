import { useState } from 'react';
import { Gear } from '../models/Gear.tsx';
import { ReinforcementAbility } from '../models/ReinforcementAbility.ts';
import { CharacterDiamond } from './CharacterDiamond';
import { GearIconLarge } from './GearIconLarge.tsx';
import { Modal } from './Modal.tsx';
import { OverboostStars } from './OverboostStars.tsx';
import { ReinforcementAbilityContainer } from './ReinforcementAbilityContainer.tsx';
import { ReinforcementAbilityModal } from './ReinforcementAbilityModal.tsx';
import styles from './GearModal.module.css';

interface GearModalProps {
  isOpen: boolean;
  onClose: Function;
  gear: Gear | undefined;
}

export function GearModal({ isOpen, onClose, gear }: GearModalProps) {
  const [selectedReinforcementAbility, setSelectedReinforcementAbility] = useState<ReinforcementAbility>();
  const [isReinforcementAbilityModalOpen, setIsReinforcementAbilityModalOpen] = useState(false);

  function openModal(reinforcementAbility: ReinforcementAbility) {
    setSelectedReinforcementAbility(reinforcementAbility);
    setIsReinforcementAbilityModalOpen(true);
  }

  if (!gear) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Gear Details" width="80rem" height="40rem">
      <div className={styles['container']}>
        <div className={styles['column-info']}>
          <div className={styles['column-info-header']}>
            <CharacterDiamond character={gear.character} height="64px" />
            <div className={styles['column-info-header-title']}>
              <div className={styles['column-info-header-title-name']}>
                {gear.name}
              </div>
              <div className={styles['column-info-header-title-overboost']}>
                <OverboostStars level={0} size="1.5rem" />
              </div>
            </div>
          </div>
          <div className={styles['column-info-stats']}>
            R. Abilities
            <hr />
            <div className={styles['column-abilities-rability-list']}>
              {gear.reinforcementAbilities.map((reinforcementAbility) => (
                <ReinforcementAbilityContainer
                  reinforcementAbility={reinforcementAbility}
                  onClick={() => openModal(reinforcementAbility)}
                  key={reinforcementAbility.name}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles['column-img']}>
          <GearIconLarge gear={gear} />
        </div>
      </div>
      <ReinforcementAbilityModal
        isOpen={isReinforcementAbilityModalOpen}
        reinforcementAbility={selectedReinforcementAbility}
        onClose={() => setIsReinforcementAbilityModalOpen(false)}
      />
    </Modal>
  );
}
