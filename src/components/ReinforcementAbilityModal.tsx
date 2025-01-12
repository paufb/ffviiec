import { ReinforcementAbility } from '../models/ReinforcementAbility.ts';
import { Modal } from './Modal.tsx';
import { ReinforcementAbilityIcon } from './ReinforcementAbilityIcon.tsx';
import styles from './ReinforcementAbilityModal.module.css';

interface ReinforcementAbilityModalProps {
  isOpen: boolean;
  onClose: Function;
  reinforcementAbility: ReinforcementAbility | undefined;
}

export function ReinforcementAbilityModal({ isOpen, onClose, reinforcementAbility }: ReinforcementAbilityModalProps) {
  if (!reinforcementAbility) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="R. Ability Details" width="40rem" height="40rem">
      <div className={styles['container']}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <ReinforcementAbilityIcon
            reinforcementAbility={reinforcementAbility}
            style={{ width: '2.5rem', height: '2.5rem' }}
          />
          {reinforcementAbility.name}
        </div>
        <hr className={styles['ruler']} />
        {reinforcementAbility.reqPts.map((reqPt, index) => (
          <div className={styles['level']} key={index}>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', color: 'rgb(149, 199, 255)' }}>
              <div>{`Lv. ${index + 1}`}</div>
              <div>
                <span style={{ position: 'absolute', right: '6rem' }}>Req. pts</span>
                <span style={{ color: 'white' }}>{reqPt}</span>pts
              </div>
            </div>
            <hr className={styles['ruler']} />
            <div style={{ whiteSpace: 'pre-wrap' }}>
              {reinforcementAbility.getEffect(index + 1)}
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
}
