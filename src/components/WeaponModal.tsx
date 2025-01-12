import HPIcon from '../assets/stats/HP.webp';
import PATKIcon from '../assets/stats/PATK.webp';
import MATKIcon from '../assets/stats/MATK.webp';
import PDEFIcon from '../assets/stats/PDEF.webp';
import MDEFIcon from '../assets/stats/MDEF.webp';
import HEALIcon from '../assets/stats/HEAL.webp';
import { useEffect, useState } from 'react';
import { ATBBarCost } from './ATBBarCost.tsx';
import { CharacterDiamond } from './CharacterDiamond.tsx';
import { CommandAbilityIcon } from './CommandAbilityIcon.tsx';
import { ElementIcon } from './ElementIcon.tsx';
import { Modal } from './Modal.tsx';
import { OverboostStars } from './OverboostStars.tsx';
import { ReinforcementAbilityContainer } from './ReinforcementAbilityContainer.tsx';
import { ReinforcementAbilityModal } from './ReinforcementAbilityModal.tsx';
import { SigilIcon } from './SigilIcon.tsx';
import { UltimateStars } from './UltimateStars.tsx';
import { WeaponIconLarge } from './WeaponIconLarge.tsx';
import { ReinforcementAbility } from '../models/ReinforcementAbility.ts';
import { Weapon } from '../models/Weapon.ts';
import { UltimateWeapon } from '../models/UltimateWeapon.ts';
import { DisplayableOverboostLevel } from '../types.ts';
import styles from './WeaponModal.module.css';

interface WeaponModalProps {
  isOpen: boolean;
  onClose: Function;
  weapon: Weapon | undefined;
  selectedOverboostLevel: DisplayableOverboostLevel;
  displayableOverboostLevels: DisplayableOverboostLevel[];
  selectedWeaponLevel: number;
}

export function WeaponModal({ isOpen, onClose, weapon, selectedOverboostLevel, displayableOverboostLevels, selectedWeaponLevel }: WeaponModalProps) {
  const [displayedOverboostLevel, setDisplayedOverboostLevel] = useState<DisplayableOverboostLevel>(selectedOverboostLevel);
  const [selectedReinforcementAbility, setSelectedReinforcementAbility] = useState<ReinforcementAbility>();
  const [isReinforcementAbilityModalOpen, setIsReinforcementAbilityModalOpen] = useState(false);

  useEffect(() => {
    setDisplayedOverboostLevel(selectedOverboostLevel);
  }, [selectedOverboostLevel]);

  function renderTierLabel() {
    const labels: Record<DisplayableOverboostLevel, string> = {
      0: 'C. Ability Tier 1',
      1: 'C. Ability Tier 2',
      6: 'C. Ability Tier 3',
      10: 'C. Ability Max. Tier'
    };
    return labels[displayedOverboostLevel];
  }

  function changeTier(direction: 'increase' | 'decrease') {
    setDisplayedOverboostLevel(prevState => {
      const offset = direction === 'increase' ? 1 : -1;
      const currentIndex = displayableOverboostLevels.indexOf(prevState);
      const nextIndex = (currentIndex + offset + displayableOverboostLevels.length) % displayableOverboostLevels.length;
      return displayableOverboostLevels[nextIndex];
    });
  }

  function openModal(reinforcementAbility: ReinforcementAbility) {
    setSelectedReinforcementAbility(reinforcementAbility);
    setIsReinforcementAbilityModalOpen(true);
  }

  if (!weapon) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Weapon Details" width="80rem" height="40rem">
      <div className={styles['container']}>
        <div className={styles['column-info']}>
          <div className={styles['column-info-header']}>
            <CharacterDiamond character={weapon.character} height="64px" />
            <div className={styles['column-info-header-title']}>
              <div className={styles['column-info-header-title-name']}>
                {weapon.name}
              </div>
              <div className={styles['column-info-header-title-overboost']}>
                {weapon instanceof UltimateWeapon ? (
                  <UltimateStars size="1.5rem" />
                ) : (
                  <OverboostStars level={displayedOverboostLevel} size="1.5rem" />
                )}
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
                {weapon.getPAtk(displayedOverboostLevel)}
              </div>
            </div>
            <div className={styles['column-info-stats-row']}>
              <div className={styles['column-info-stats-row-title']}>
                <img src={MATKIcon} alt="" />
                MATK
              </div>
              <div className={styles['column-info-stats-row-value']}>
                {weapon.getMAtk(displayedOverboostLevel)}
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
                {weapon.getHeal(displayedOverboostLevel)}
              </div>
            </div>
          </div>
        </div>
        <div className={styles['column-middle']}>
          <div className={styles['column-middle-image']}>
            <WeaponIconLarge weapon={weapon} />
          </div>
          <div className={styles['column-middle-controls']}>
            <div className={styles['column-middle-controls-previous']} onClick={() => changeTier('decrease')}>
              <svg style={{ transform: 'scaleX(-1)' }} width="24" height="24" viewBox="0 0 24 24"><path d="M10.477 0h-8.977l12.024 12-12.024 12h8.977l12.023-12z"/></svg>
            </div>
            <div className={styles['column-middle-controls-tier']}>
              {renderTierLabel()}
            </div>
            <div className={styles['column-middle-controls-next']} onClick={() => changeTier('increase')}>
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
                  <CommandAbilityIcon commandAbility={weapon.commandAbility} className={styles['column-abilities-cability-container-header-icons-cability']} />
                  <ElementIcon element={weapon.element} className={styles['column-abilities-cability-container-header-icons-element']} />
                  <SigilIcon sigil={weapon.commandAbility.sigil} className={styles['column-abilities-cability-container-header-icons-sigil']} />
                </div>
                {weapon.commandAbility.name}
                <div className={styles['column-abilities-cability-container-header-atb']}>
                  {!(weapon instanceof UltimateWeapon) && <ATBBarCost cost={weapon.commandAbility.atbCost} />}
                </div>
              </div>
              <hr />
              <div className={styles['column-abilities-cability-container-description']}>
                {weapon.getCAbilityDescription(displayedOverboostLevel)}
              </div>
            </div>
          </div>
          <div className={styles['column-abilities-rabilities']}>
            R. Abilities
            <hr />
            <div className={styles['column-abilities-rability-list']}>
              {weapon.reinforcementAbilities.map((reinforcementAbility) => (
                <ReinforcementAbilityContainer
                  reinforcementAbility={reinforcementAbility}
                  onClick={() => openModal(reinforcementAbility)}
                  key={reinforcementAbility.name}
                />
              ))}
            </div>
          </div>
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
