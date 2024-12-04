import { ForwardedRef, forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { Gear } from '../models/Gear.tsx';
import { CharacterDiamond } from './CharacterDiamond';
import { GearIconLarge } from './GearIconLarge.tsx';
import { OverboostStars } from './OverboostStars.tsx';
import { ReinforcementAbilityIcon } from './ReinforcementAbilityIcon.tsx';
import styles from './GearModal.module.css';

interface GearModalProps {
  gear: Gear;
  closeGearModal: Function;
}

export function GearModal({ gear, closeGearModal }: GearModalProps, forwardedRef: ForwardedRef<HTMLDialogElement>) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(forwardedRef, () => modalRef.current as HTMLDialogElement);

  useEffect(() => {
    const modal = modalRef.current as HTMLDialogElement;
    modal.addEventListener('click', (e) => {
      if (e.target instanceof HTMLDialogElement && e.target.nodeName === 'DIALOG') {
        closeGearModal();
      }
    });
    modal.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      closeGearModal();
    })
  }, []);

  return (
    <dialog ref={modalRef} className={styles['modal']}>
      <header className={styles['modal-header']}>
        Gear Details
        <svg className={styles['close-button']} onClick={() => closeGearModal()} height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
      </header>
      <div className={styles['modal-body']}>
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
      </div>
    </dialog>
  );
}

export const GearModalForwardRef = forwardRef(GearModal);
