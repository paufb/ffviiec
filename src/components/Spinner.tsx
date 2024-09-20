interface SpinnerProps {
  width: CSSStyleDeclaration['width'];
  height: CSSStyleDeclaration['height'];
}

export function Spinner({ width, height }: SpinnerProps) {
  return (
    <img
      src={new URL('../assets/ui/animation/spinner.webp', import.meta.url).href}
      style={{ width: width, height: height }}
      alt=""
    />
  );
}
