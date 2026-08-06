import type { HTMLAttributes } from "react";
export type BadgeTone = "neutral" | "brand" | "success" | "warning" | "danger";
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> { tone?: BadgeTone; }
export function Badge({ tone = "neutral", className = "", ...props }: BadgeProps) { return <span className={`rb-badge rb-badge--${tone} ${className}`.trim()} {...props} />; }
