interface UltimateStarsProps {
  overlap?: boolean;
  size?: CSSStyleDeclaration['width'];
}

export function UltimateStars({ overlap = false, size = '1rem' }: UltimateStarsProps) {
  const numberOfStars = 6;

  return (
    <>
      {[...Array(numberOfStars)].map((_, i) =>
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 512 512"
          style={{
            filter: 'drop-shadow(2px 0 0 black)',
            ...(overlap && {
              marginLeft: i === 0 ? 0 : '-4px',
              zIndex: numberOfStars - i
            })
          }}
        >
          <polygon
            points="512,207.9 315.1,207.9 256,11 196.9,207.9 0,207.9 157.5,316.2 98.5,503.3 256,404.8 413.5,503.3 354.5,316.2 "
            fill="rgb(88, 211, 214)"
          />
        </svg>
      )}
    </>
  );
}
