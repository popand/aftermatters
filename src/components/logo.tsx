export function AfterMattersLogo({
  size = "default",
}: {
  size?: "small" | "default" | "large";
}) {
  const sizeClasses = {
    small: "text-lg",
    default: "text-2xl",
    large: "text-4xl md:text-5xl",
  };

  const logoSizes = {
    small: "w-8 h-8",
    default: "w-12 h-12",
    large: "w-16 h-16",
  };

  const iconSizes = {
    small: "w-5 h-5",
    default: "w-7 h-7",
    large: "w-9 h-9",
  };

  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <div
          className={`${logoSizes[size]} bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg`}
        >
          <svg
            viewBox="0 0 24 24"
            className={`${iconSizes[size]} text-white`}
            fill="currentColor"
          >
            <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
            <path
              d="M12 16L13.09 22.26L22 23L13.09 23.74L12 30L10.91 23.74L2 23L10.91 22.26L12 16Z"
              opacity="0.6"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col">
        <span className={`font-semibold text-foreground ${sizeClasses[size]}`}>
          After<span className="text-primary">Matters</span>
        </span>
        {size !== "small" && (
          <span className="text-sm text-muted-foreground font-light">
            Compassionate guidance through difficult times
          </span>
        )}
      </div>
    </div>
  );
}
