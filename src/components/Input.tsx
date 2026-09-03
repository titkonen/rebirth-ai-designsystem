import { useId, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> { label?: string; hint?: string; error?: string; }
export function Input({ label, hint, error, id, className = "", ...props }: InputProps) {
  const generatedId = useId(); const inputId = id ?? generatedId;
  return <label className="rb-field" htmlFor={inputId}>{label && <span className="rb-label">{label}</span>}<input id={inputId} className={`rb-input ${error ? "rb-input--error" : ""} ${className}`.trim()} aria-invalid={Boolean(error)} aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined} {...props}/>{error ? <span id={`${inputId}-error`} className="rb-error">{error}</span> : hint ? <span id={`${inputId}-hint`} className="rb-hint">{hint}</span> : null}</label>;
}

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> { label?: string; hint?: string; error?: string; resize?: "vertical" | "none" | "both"; }
export function Textarea({ label, hint, error, resize = "vertical", id, className = "", ...props }: TextareaProps) {
  const generatedId = useId(); const textareaId = id ?? generatedId;
  return <label className="rb-field" htmlFor={textareaId}>{label && <span className="rb-label">{label}</span>}<textarea id={textareaId} className={`rb-textarea rb-textarea--${resize} ${error ? "rb-textarea--error" : ""} ${className}`.trim()} aria-invalid={Boolean(error)} aria-describedby={error ? `${textareaId}-error` : hint ? `${textareaId}-hint` : undefined} {...props}/>{error ? <span id={`${textareaId}-error`} className="rb-error">{error}</span> : hint ? <span id={`${textareaId}-hint`} className="rb-hint">{hint}</span> : null}</label>;
}
