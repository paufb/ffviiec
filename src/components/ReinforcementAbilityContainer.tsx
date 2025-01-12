import { ReinforcementAbility } from '../models/ReinforcementAbility';
import { ReinforcementAbilityIcon } from './ReinforcementAbilityIcon.tsx';
import styles from './ReinforcementAbilityContainer.module.css';

interface ReinforcementAbilityContainerProps {
  reinforcementAbility: ReinforcementAbility;
  onClick: Function;
}

export function ReinforcementAbilityContainer({ reinforcementAbility, onClick }: ReinforcementAbilityContainerProps) {
  return (
    <div className={styles['rability']} onClick={() => onClick()}>
      <ReinforcementAbilityIcon reinforcementAbility={reinforcementAbility} />
      {reinforcementAbility.name}
    </div>
  );
}
