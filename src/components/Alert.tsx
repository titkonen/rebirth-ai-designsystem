import type { HTMLAttributes, ReactNode } from "react";
export type AlertTone = "info" | "success" | "warning" | "danger";
export interface AlertProps extends HTMLAttributes<HTMLDivElement> { tone?: AlertTone; title?: string; children: ReactNode; }
export function Alert({ tone = "info", title, className = "", children, ...props }: AlertProps) { return <div className={`rb-alert rb-alert--${tone} ${className}`.trim()} role="alert" {...props}><div className="rb-alert__content"><div className="rb-alert__title">{title ?? tone[0].toUpperCase() + tone.slice(1)}</div><div className="rb-alert__body">{children}</div></div><button type="button" className="rb-alert__close" aria-label="Close alert"><span aria-hidden="true">×</span></button></div>; }
