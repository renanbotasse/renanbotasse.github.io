interface SparkleProps {
  size?: number;
  className?: string;
  opacity?: number;
}

export default function Sparkle({ size = 20, className = "", opacity = 1 }: SparkleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      <path d="M12 2C12 2 12.8 7.2 14.8 9.2C16.8 11.2 22 12 22 12C22 12 16.8 12.8 14.8 14.8C12.8 16.8 12 22 12 22C12 22 11.2 16.8 9.2 14.8C7.2 12.8 2 12 2 12C2 12 7.2 11.2 9.2 9.2C11.2 7.2 12 2 12 2Z" />
    </svg>
  );
}
