import { Gear } from '../models/Gear.tsx';
import { CharacterDiamond } from './CharacterDiamond';
import { GearIconLarge } from './GearIconLarge.tsx';
import { Modal } from './Modal.tsx';
import { OverboostStars } from './OverboostStars.tsx';
import { ReinforcementAbilityIcon } from './ReinforcementAbilityIcon.tsx';
import styles from './GearModal.module.css';

interface GearModalProps {
  isOpen: boolean;
  onClose: Function;
  gear: Gear | undefined;
}

export function GearModal({ isOpen, onClose, gear }: GearModalProps) {
  if (!gear) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Gear Details" width="80rem" height="40rem">
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
            <div className={styles['column-abilities-rability-container']}>
              <ReinforcementAbilityIcon reinforcementAbility={gear.reinforcementAbilities[0]} />
              {gear.reinforcementAbilities[0].name}
            </div>
            <div className={styles['column-abilities-rability-container']}>
              <ReinforcementAbilityIcon reinforcementAbility={gear.reinforcementAbilities[1]} />
              {gear.reinforcementAbilities[1].name}
            </div>
          </div>
        </div>
      </div>
      <div className={styles['column-img']}>
        <GearIconLarge gear={gear} />
      </div>
    </Modal>
  );
}
