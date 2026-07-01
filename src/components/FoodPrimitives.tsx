import type { InputHTMLAttributes, ReactNode } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

type ChipProps = {
  children: ReactNode;
  active?: boolean;
  asButton?: boolean;
  className?: string;
  onClick?: () => void;
};

export function Chip({ children, active, asButton, className, onClick }: ChipProps) {
  const classes = cn("chip", active && "chip-primary", asButton && "tag-button", className);

  if (asButton) {
    return (
      <button type="button" className={classes} onClick={onClick}>
        {children}
      </button>
    );
  }

  return <span className={classes}>{children}</span>;
}

type SearchFieldProps = {
  value: string;
  placeholder: string;
  ariaLabel: string;
  className?: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "value">;

export function SearchField({
  value,
  placeholder,
  ariaLabel,
  className,
  onChange,
  onSubmit,
  ...props
}: SearchFieldProps) {
  return (
    <div
      className={cn(
        "flex min-w-0 flex-1 items-center gap-2 rounded-[var(--radius-md)] border border-[var(--food-line)] bg-[var(--food-card-muted)] px-4",
        className,
      )}
      role="search"
      aria-label={ariaLabel}
    >
      <Search className="h-5 w-5 shrink-0 text-[var(--food-text-muted)]" />
      <input
        {...props}
        className="search-input w-full min-w-0 border-0 bg-transparent px-0 py-4 outline-none"
        value={value}
        aria-label={ariaLabel}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            onSubmit?.();
          }
        }}
      />
    </div>
  );
}

type SectionHeadingProps = {
  title: string;
  description: string;
  eyebrow?: ReactNode;
  action?: ReactNode;
};

export function SectionHeading({ title, description, eyebrow, action }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="min-w-0">
        {eyebrow}
        <h2 className="food-h2 balanced-title text-[var(--food-text)]">{title}</h2>
        <p className="mt-3 max-w-2xl food-body text-[var(--food-text-muted)]">{description}</p>
      </div>
      {action ? <div className="flex items-center gap-2 self-start md:self-auto">{action}</div> : null}
    </div>
  );
}

export function RankNumber({ children }: { children: ReactNode }) {
  return <span className="rank-no shrink-0">{children}</span>;
}

export function ScoreBadge({ children }: { children: ReactNode }) {
  return <span className="score-badge shrink-0">{children}</span>;
}

export function Toast({ message }: { message: string }) {
  return (
    <div
      className={cn(
        "fixed bottom-6 left-1/2 z-[70] -translate-x-1/2 rounded-full border border-[var(--food-line-strong)] bg-[var(--food-bg-elevated)] px-5 py-3 text-sm font-semibold text-[var(--food-text)] shadow-[var(--shadow-float)] backdrop-blur transition-all duration-200",
        message ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
      role="status"
      aria-live="polite"
    >
      {message || "操作成功"}
    </div>
  );
}
