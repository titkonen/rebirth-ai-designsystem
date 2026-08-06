import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { variant?: ButtonVariant; size?: ButtonSize; children: ReactNode; }
export function Button({ variant = "primary", size = "md", className = "", children, ...props }: ButtonProps) {
  return <button className={`rb-button rb-button--${variant} rb-button--${size} ${className}`.trim()} {...props}>{children}</button>;
}
