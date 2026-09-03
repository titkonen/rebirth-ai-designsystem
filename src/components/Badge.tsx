import type { HTMLAttributes } from "react";
export type BadgeTone = "neutral" | "brand" | "success" | "warning" | "danger";
export type BadgeVariant = "default" | "counter";
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> { tone?: BadgeTone; variant?: BadgeVariant; }
export function Badge({ tone = "neutral", variant = "default", className = "", ...props }: BadgeProps) { return <span className={`rb-badge rb-badge--${tone} rb-badge--${variant} ${className}`.trim()} {...props} />; }
