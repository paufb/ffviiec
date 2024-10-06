interface OverboostStarsProps {
  level: number;
  overlap?: boolean;
  size?: string;
}

export function OverboostStars({ level, overlap = false, size = '1rem' }: OverboostStarsProps) {
  const numberOfStars = 5;
  const gold = '#d39e24';
  const red = '#ec373a';
  const purple = '#e3cdf9';

  let starColors = [];

  if (level <= numberOfStars) {
    for (let i = 0; i < level; i++) {
      starColors.push(red);
    }
    for (let i = level; i < numberOfStars; i++) {
      starColors.push(gold);
    }
  } else {
    for (let i = 0; i < level - numberOfStars; i++) {
      starColors.push(purple);
    }
    for (let i = level - numberOfStars; i < numberOfStars; i++) {
      starColors.push(red);
    }
  }

  return (
    <>
      {[...Array(numberOfStars)].map((_, i) =>
        <svg
          key={i}
          width={size}
          height={size}
          fill={starColors[i]}
          viewBox="0 0 512 512"
          style={{
            filter: 'drop-shadow(2px 0 0 black)',
            ...(overlap && {
              marginLeft: i === 0 ? 0 : '-4px',
              zIndex: numberOfStars - i
            })
          }}
        >
          <polygon points="512,207.9 315.1,207.9 256,11 196.9,207.9 0,207.9 157.5,316.2 98.5,503.3 256,404.8 413.5,503.3 354.5,316.2 "/>
        </svg>
      )}
    </>
  );
}
