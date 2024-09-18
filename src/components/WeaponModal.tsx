import HPIcon from '../assets/stats/HP.webp';
import PATKIcon from '../assets/stats/PATK.webp';
import MATKIcon from '../assets/stats/MATK.webp';
import PDEFIcon from '../assets/stats/PDEF.webp';
import MDEFIcon from '../assets/stats/MDEF.webp';
import HEALIcon from '../assets/stats/HEAL.webp';
import { CommandAbility, Character, Weapon, Weapons } from '../types.ts';
import { useEffect, useState } from 'react';
import { ATBBarCost } from './ATBBarCost.tsx';
import { ElementIcon } from './ElementIcon.tsx';
import { OverboostStars } from './OverboostStars.tsx';
import { SigilIcon } from './SigilIcon.tsx';
import styles from './WeaponModal.module.css';

interface WeaponModalProps {
  weaponName: keyof Weapons | null;
  weapon: Weapon;
  character: Character;
  cAbility: CommandAbility;
  selectedOverboostLevel: number;
  selectedWeaponLevel: number;
  getWeaponPAtk: Function;
  getWeaponMAtk: Function;
  getWeaponHeal: Function;
  getWeaponCAbility: Function;
}

export function WeaponModal({ weaponName, weapon, character, cAbility, selectedOverboostLevel, selectedWeaponLevel, getWeaponPAtk, getWeaponMAtk, getWeaponHeal, getWeaponCAbility }: WeaponModalProps) {
  const [displayedOverboostLevel, setDisplayedOverboostLevel] = useState(selectedOverboostLevel);

  useEffect(() => {
    setDisplayedOverboostLevel(selectedOverboostLevel);
  }, [selectedOverboostLevel]);

  function closeModal() {
    const modal = document.querySelector('#weapon-modal') as HTMLDialogElement;
    if (modal) modal.close();
  }

  function renderCurrentTier() {
    return displayedOverboostLevel === 0  ? 'C. Ability Tier 1'    :
           displayedOverboostLevel === 6  ? 'C. Ability Tier 2'    :
           displayedOverboostLevel === 10 ? 'C. Ability Max. Tier' :
                                            '';
  }

  function decreaseTier() {
    setDisplayedOverboostLevel(prevState =>
      prevState === 0  ? 10 :
      prevState === 6  ? 0  :
      prevState === 10 ? 6  :
                         0
    );
  }

  function increaseTier() {
    setDisplayedOverboostLevel(prevState =>
      prevState === 0  ? 6  :
      prevState === 6  ? 10 :
      prevState === 10 ? 0  :
                         0
    );
  }

  return (
    <dialog id="weapon-modal" className={styles['modal']}>
      <header className={styles['modal-header']}>
        Weapon Details
        <svg className={styles['close-button']} onClick={closeModal} height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
      </header>
      <div className={styles['modal-body']}>
        <div className={styles['column-info']}>
          <div className={styles['column-info-header']}>
            <img src={character.icon} alt="" />
            <div className={styles['column-info-header-title']}>
              <div className={styles['column-info-header-title-name']}>
                {weaponName}
              </div>
              <div className={styles['column-info-header-title-overboost']}>
                <OverboostStars level={displayedOverboostLevel} size="1.5rem" />
              </div>
              <div className={styles['column-info-header-title-level']}>
                Lv. {selectedWeaponLevel}
              </div>
            </div>
          </div>
          <div className={styles['column-info-stats']}>
            Stats
            <hr />
            <div className={styles['column-info-stats-row']}>
              <div className={styles['column-info-stats-row-title']}>
                <img src={HPIcon} alt="" />
                HP
              </div>
              <div className={styles['column-info-stats-row-value']}>
                --
              </div>
            </div>
            <div className={styles['column-info-stats-row']}>
              <div className={styles['column-info-stats-row-title']}>
                <img src={PATKIcon} alt="" />
                PATK
              </div>
              <div className={styles['column-info-stats-row-value']}>
                {getWeaponPAtk(weapon, displayedOverboostLevel)}
              </div>
            </div>
            <div className={styles['column-info-stats-row']}>
              <div className={styles['column-info-stats-row-title']}>
                <img src={MATKIcon} alt="" />
                MATK
              </div>
              <div className={styles['column-info-stats-row-value']}>
                {getWeaponMAtk(weapon, displayedOverboostLevel)}
              </div>
            </div>
            <div className={styles['column-info-stats-row']}>
              <div className={styles['column-info-stats-row-title']}>
                <img src={PDEFIcon} alt="" />
                PDEF
              </div>
              <div className={styles['column-info-stats-row-value']}>
                --
              </div>
            </div>
            <div className={styles['column-info-stats-row']}>
              <div className={styles['column-info-stats-row-title']}>
                <img src={MDEFIcon} alt="" />
                MDEF
              </div>
              <div className={styles['column-info-stats-row-value']}>
                --
              </div>
            </div>
            <div className={styles['column-info-stats-row']}>
              <div className={styles['column-info-stats-row-title']}>
                <img src={HEALIcon} alt="" />
                HEAL
              </div>
              <div className={styles['column-info-stats-row-value']}>
                {getWeaponHeal(weapon, displayedOverboostLevel)}
              </div>
            </div>
          </div>
        </div>
        <div className={styles['column-middle']}>
          <div className={styles['column-middle-image']}>

          </div>
          <div className={styles['column-middle-controls']}>
            <div className={styles['column-middle-controls-previous']} onClick={decreaseTier}>
              <svg style={{ transform: 'scaleX(-1)' }} width="24" height="24" viewBox="0 0 24 24"><path d="M10.477 0h-8.977l12.024 12-12.024 12h8.977l12.023-12z"/></svg>
            </div>
            <div className={styles['column-middle-controls-tier']}>
              {renderCurrentTier()}
            </div>
            <div className={styles['column-middle-controls-next']} onClick={increaseTier}>
              <svg width="24" height="24" viewBox="0 0 24 24"><path d="M10.477 0h-8.977l12.024 12-12.024 12h8.977l12.023-12z"/></svg>
            </div>
          </div>
        </div>
        <div className={styles['column-abilities']}>
          <div className={styles['column-abilities-cability']}>
            C. Ability
            <hr />
            <div className={styles['column-abilities-cability-container']}>
              <div className={styles['column-abilities-cability-container-header']}>
                <div className={styles['column-abilities-cability-container-header-icons']}>
                  <img src="" alt="" className={styles['column-abilities-cability-container-header-icons-cability']} />
                  <ElementIcon element={weapon.element} className={styles['column-abilities-cability-container-header-icons-element']} />
                  <SigilIcon sigil={cAbility.sigil} className={styles['column-abilities-cability-container-header-icons-sigil']} />
                </div>
                {weapon.cAbility}
                <div className={styles['column-abilities-cability-container-header-atb']}>
                  <ATBBarCost cost={cAbility.atbCost} />
                </div>
              </div>
              <hr />
              <div className={styles['column-abilities-cability-container-description']}>
                {getWeaponCAbility(weapon, displayedOverboostLevel)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
