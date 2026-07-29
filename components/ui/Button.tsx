import Link from "next/link";
import { forwardRef } from "react";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "onDark";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium " +
  "transition-[background-color,color,border-color,transform] duration-200 ease-out " +
  "min-h-[44px] select-none active:translate-y-px";

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-[15px]",
  lg: "px-7 py-3.5 text-[17px]",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-primary-press)] text-[var(--color-primary-fg)] " +
    "hover:bg-[var(--color-primary-strong)]",
  secondary:
    "bg-transparent text-[var(--color-primary-press)] " +
    "border border-[var(--color-primary)] hover:bg-[var(--color-primary-soft)]",
  ghost:
    "bg-transparent text-[var(--color-muted)] hover:text-[var(--color-primary-press)]",
  onDark:
    "bg-[var(--color-amber)] text-[var(--color-amber-fg)] hover:bg-[var(--color-amber-strong)]",
};

function classes(variant: Variant, size: Size, className?: string) {
  return [base, sizes[size], variants[variant], className].filter(Boolean).join(" ");
}

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type ButtonProps = CommonProps & Omit<ComponentProps<"button">, "className" | "children">;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", className, children, ...rest },
  ref
) {
  return (
    <button ref={ref} className={classes(variant, size, className)} {...rest}>
      {children}
    </button>
  );
});

type LinkButtonProps = CommonProps &
  Omit<ComponentProps<typeof Link>, "className" | "children"> & { external?: boolean };

export function LinkButton({
  variant = "primary",
  size = "md",
  className,
  children,
  external,
  href,
  ...rest
}: LinkButtonProps) {
  const cls = classes(variant, size, className);
  if (external) {
    return (
      <a
        href={typeof href === "string" ? href : "#"}
        className={cls}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}
