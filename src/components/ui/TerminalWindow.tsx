interface TerminalWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  showDots?: boolean;
}

export default function TerminalWindow({
  title,
  children,
  className = "",
  showDots = true,
}: TerminalWindowProps) {
  return (
    <div
      className={`rounded-lg border border-[#30363D] bg-[#161B22] overflow-hidden ${className}`}
    >
      {/* Title bar */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-[#30363D] bg-[#21262D]">
        {showDots && (
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#FF7B72]" />
            <span className="w-3 h-3 rounded-full bg-[#E3B341]" />
            <span className="w-3 h-3 rounded-full bg-[#3FB950]" />
          </div>
        )}
        {title && (
          <span className="font-mono text-xs text-[#8B949E] ml-2">{title}</span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">{children}</div>
    </div>
  );
}
