import { useEffect, useRef } from 'react';
import styles from './CharacterDiamond.module.css';
import { Character } from '../models/Character.ts';

interface CharacterDiamondProps {
  character: Character;
  width?: CSSStyleDeclaration['width'];
  height?: CSSStyleDeclaration['height'];
}

export function CharacterDiamond({ character, width, height }: CharacterDiamondProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const imageAspectRatio = 94 / 125;

  const calculatedWidth = width ? width : parseFloat(height as string) * imageAspectRatio;
  const calculatedHeight = height ? height : parseFloat(width as string) / imageAspectRatio;

  useEffect(() => {
    const container = containerRef.current;
    const img = imageRef.current;
    if (container && img) {
      img.onload = () => {
        img.style.width = `${container.offsetWidth * 1.5}px`;
        img.style.height = `${container.offsetHeight * 1.15}px`;
        img.style.backgroundSize = `${container.offsetWidth}px ${container.offsetHeight}px`;
      };
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={styles['container']}
      style={{ width: calculatedWidth, height: calculatedHeight }}
    >
      <img
        ref={imageRef}
        src={new URL(`../assets/character_diamond/${character.id}.png`, import.meta.url).href}
        alt=""
      />
    </div>
  );
}
