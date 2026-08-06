import { useId, type InputHTMLAttributes } from "react";
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> { label?: string; hint?: string; error?: string; }
export function Input({ label, hint, error, id, className = "", ...props }: InputProps) {
  const generatedId = useId(); const inputId = id ?? generatedId;
  return <label className="rb-field" htmlFor={inputId}>{label && <span className="rb-label">{label}</span>}<input id={inputId} className={`rb-input ${error ? "rb-input--error" : ""} ${className}`.trim()} aria-invalid={Boolean(error)} aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined} {...props}/>{error ? <span id={`${inputId}-error`} className="rb-error">{error}</span> : hint ? <span id={`${inputId}-hint`} className="rb-hint">{hint}</span> : null}</label>;
}
