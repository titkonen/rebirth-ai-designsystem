import { useEffect, useId, useState, type ChangeEventHandler, type InputHTMLAttributes } from "react";

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

export interface StepperProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "defaultValue" | "max" | "min" | "onChange" | "step" | "type" | "value"> {
  label: string;
  hint?: string;
  error?: string;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  value?: number;
  variant?: "default" | "compact";
  onValueChange?: (value: number) => void;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export function Stepper({ label, hint, error, min = 0, max, step = 1, defaultValue = min, value, variant = "default", id, className = "", onValueChange, onChange, disabled, ...props }: StepperProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const messageId = `${inputId}-${error ? "error" : "hint"}`;
  const [currentValue, setCurrentValue] = useState(value ?? defaultValue);
  const displayedValue = value ?? currentValue;
  useEffect(() => { if (value !== undefined) setCurrentValue(value); }, [value]);
  const updateValue = (nextValue: number) => {
    const boundedValue = Math.min(max ?? nextValue, Math.max(min, nextValue));
    setCurrentValue(boundedValue);
    onValueChange?.(boundedValue);
  };
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const nextValue = Number(event.target.value);
    if (!Number.isNaN(nextValue)) updateValue(nextValue);
    onChange?.(event);
  };
  return <div className={`rb-field rb-stepper rb-stepper--${variant} ${className}`.trim()}>
    <label className="rb-label" htmlFor={inputId}>{label}</label>
    <div className="rb-stepper__control"><button className="rb-stepper__button" type="button" aria-label={`Decrease ${label}`} onClick={() => updateValue(displayedValue - step)} disabled={disabled || displayedValue <= min}>-</button><input id={inputId} className="rb-stepper__input" type="number" min={min} max={max} step={step} value={displayedValue} aria-invalid={Boolean(error)} aria-describedby={hint || error ? messageId : undefined} disabled={disabled} onChange={handleChange} {...props}/><button className="rb-stepper__button" type="button" aria-label={`Increase ${label}`} onClick={() => updateValue(displayedValue + step)} disabled={disabled || (max !== undefined && displayedValue >= max)}>+</button></div>
    {error ? <span id={messageId} className="rb-error">{error}</span> : hint ? <span id={messageId} className="rb-hint">{hint}</span> : null}
  </div>;
}