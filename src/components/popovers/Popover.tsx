import { useEffect, useId, useRef, useState, type HTMLAttributes, type ReactNode } from "react";

export type PopoverPosition = "top" | "right" | "bottom" | "left";

export interface PopoverProps extends HTMLAttributes<HTMLSpanElement> {
  trigger: ReactNode;
  children: ReactNode;
  position?: PopoverPosition;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Popover({ trigger, children, position = "bottom", open, defaultOpen = false, onOpenChange, className = "", ...props }: PopoverProps) {
  const popoverRef = useRef<HTMLSpanElement>(null);
  const generatedId = useId();
  const contentId = props.id ?? generatedId;
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isOpen = open ?? internalOpen;

  const setOpen = (nextOpen: boolean) => {
    if (open === undefined) setInternalOpen(nextOpen);
    onOpenChange?.(nextOpen);
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleDocumentClick = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) setOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("click", handleDocumentClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return <span ref={popoverRef} className={`rb-popover rb-popover--${position} ${isOpen ? "rb-popover--open" : ""} ${className}`.trim()} {...props}>
    <button className="rb-popover__trigger" type="button" aria-expanded={isOpen} aria-controls={contentId} onClick={() => setOpen(!isOpen)}>{trigger}</button>
    <span id={contentId} className="rb-popover__content" role="dialog">{children}</span>
  </span>;
}
