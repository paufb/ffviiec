type ATBBarCostProps = {
  cost: number;
}

export function ATBBarCost({ cost }: ATBBarCostProps) {
  const backgroundColor = "rgb(63, 119, 175)";
  const foregroundColor = "rgb(9, 34, 59)";
  const segmentColor = "rgb(139, 226, 255)";
  const segmentColors = [...Array(5)].map((_, i) => cost >= i + 1 ? segmentColor : foregroundColor);

  return (
    <svg width="83px" height="16px" viewBox="0 0 83 16">
      <polygon points="0,16 10,0 83,0 73,16" fill={backgroundColor} />
      <polygon points="2,15 11,1 81,1 72,15" fill={foregroundColor} />
      <polygon points="4,14 12,2 24.2,2 16.2,14" fill={segmentColors[0]} />
      <polygon points="17.2,14 25.2,2 37.4,2 29.4,14" fill={segmentColors[1]} />
      <polygon points="30.4,14 38.4,2 50.6,2 42.6,14" fill={segmentColors[2]} />
      <polygon points="45.6,14 53.6,2 65.8,2 57.8,14" fill={segmentColors[3]} />
      <polygon points="58.8,14 66.8,2 79,2 71,14" fill={segmentColors[4]} />
    </svg>
  );
}
