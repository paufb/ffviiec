import { useEffect, useRef } from 'react';
import styles from './Modal.module.css';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  title: string;
  width: string;
  height: string;
  onClose: Function;
}

export function Modal({ children, isOpen, onClose, title, width, height }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const handleClick = (e: MouseEvent) => {
    if ((e.target as HTMLDialogElement).nodeName === 'DIALOG') {
      e.stopPropagation();
      onClose();
    }
  };
  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen) {
      dialog.addEventListener('click', handleClick);
      dialog.addEventListener('contextmenu', handleContextMenu, { once: true });
      setTimeout(() => dialog.showModal(), 0);
    } else {
      dialog.removeEventListener('click', handleClick);
      dialog.setAttribute('closing', '');
      dialog.addEventListener('animationend', () => {
        dialog.removeAttribute('closing');
        dialog.close();
        onClose();
      }, { once: true });
    }
  }, [isOpen]);

  return (
    <dialog ref={dialogRef} style={{ width: width, height: height }} className={styles['modal']}>
      <header className={styles['header']}>
        {title}
        <svg className={styles['close']} onClick={() => onClose()} height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
        </svg>
      </header>
      <div className={styles['body']}>
        {children}
      </div>
    </dialog>
  );
}
