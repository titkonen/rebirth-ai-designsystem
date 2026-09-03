import { useId, type InputHTMLAttributes } from "react";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
  error?: string;
  variant?: "default" | "card";
}

export function Checkbox({ label, hint, error, variant = "default", id, className = "", ...props }: CheckboxProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const messageId = `${inputId}-${error ? "error" : "hint"}`;
  return <label className={`rb-choice rb-checkbox rb-checkbox--${variant} ${className}`.trim()} htmlFor={inputId}>
    <input id={inputId} className="rb-choice__input" type="checkbox" aria-invalid={Boolean(error)} aria-describedby={hint || error ? messageId : undefined} {...props} />
    <span className="rb-choice__indicator" aria-hidden="true" />
    <span className="rb-choice__content"><span className="rb-choice__label">{label}</span>{error ? <span id={messageId} className="rb-error">{error}</span> : hint ? <span id={messageId} className="rb-hint">{hint}</span> : null}</span>
  </label>;
}

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  hint?: string;
}

export function Radio({ label, hint, id, className = "", ...props }: RadioProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  return <label className={`rb-choice rb-radio ${className}`.trim()} htmlFor={inputId}>
    <input id={inputId} className="rb-choice__input" type="radio" {...props} />
    <span className="rb-choice__indicator" aria-hidden="true" />
    <span className="rb-choice__content"><span className="rb-choice__label">{label}</span>{hint ? <span className="rb-hint">{hint}</span> : null}</span>
  </label>;
}

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  hint?: string;
}

export function Switch({ label, hint, id, className = "", ...props }: SwitchProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  return <label className={`rb-switch ${className}`.trim()} htmlFor={inputId}>
    <input id={inputId} className="rb-switch__input" type="checkbox" role="switch" {...props} />
    <span className="rb-switch__track" aria-hidden="true"><span className="rb-switch__thumb" /></span>
    <span className="rb-choice__content"><span className="rb-choice__label">{label}</span>{hint ? <span className="rb-hint">{hint}</span> : null}</span>
  </label>;
}