import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
export function Tabs({ children, ...props }: { children: ReactNode } & HTMLAttributes<HTMLDivElement>) { return <div className="rb-tabs" role="tablist" {...props}>{children}</div>; }
export interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> { selected?: boolean; }
export function Tab({ selected = false, className = "", ...props }: TabProps) { return <button className={`rb-tab ${className}`.trim()} role="tab" aria-selected={selected} tabIndex={selected ? 0 : -1} {...props} />; }
