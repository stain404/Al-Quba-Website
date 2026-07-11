'use client'

import * as React from 'react'
import { Check, ChevronDown, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

/* -------------------------------------------------------------------------- */
/* Field wrapper — label, hint, error, consistent across all inputs           */
/* -------------------------------------------------------------------------- */

interface FieldWrapperProps {
  id: string
  label: string
  hint?: string
  error?: string
  required?: boolean
  children: React.ReactNode
  className?: string
}

export function FieldWrapper({ id, label, hint, error, required, children, className }: FieldWrapperProps) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <label htmlFor={id} className="text-body-sm font-medium text-text-primary">
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </label>
      {children}
      {hint && !error && (
        <p className="text-caption text-text-tertiary">{hint}</p>
      )}
      {error && (
        <p id={`${id}-error`} role="alert" className="flex items-center gap-1.5 text-caption text-error">
          <AlertCircle className="size-3.5" aria-hidden />
          {error}
        </p>
      )}
    </div>
  )
}

const fieldBaseClasses = [
  'w-full rounded-sm border bg-canvas-raised px-4 text-body-md text-text-primary',
  'placeholder:text-text-tertiary transition-colors duration-150 ease-institutional',
  'focus-visible:outline-none focus-visible:shadow-focus focus-visible:border-focus',
  'disabled:cursor-not-allowed disabled:opacity-50',
].join(' ')

/* -------------------------------------------------------------------------- */
/* Input                                                                       */
/* -------------------------------------------------------------------------- */

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, id, ...props }, ref) => (
    <input
      ref={ref}
      id={id}
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error` : undefined}
      className={cn(
        fieldBaseClasses,
        'h-12',
        error ? 'border-error' : 'border-border-strong hover:border-text-tertiary',
        className
      )}
      {...props}
    />
  )
)
Input.displayName = 'Input'

/* -------------------------------------------------------------------------- */
/* Textarea                                                                    */
/* -------------------------------------------------------------------------- */

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, id, rows = 5, ...props }, ref) => (
    <textarea
      ref={ref}
      id={id}
      rows={rows}
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error` : undefined}
      className={cn(
        fieldBaseClasses,
        'py-3 resize-y',
        error ? 'border-error' : 'border-border-strong hover:border-text-tertiary',
        className
      )}
      {...props}
    />
  )
)
Textarea.displayName = 'Textarea'

/* -------------------------------------------------------------------------- */
/* Select (native, styled)                                                    */
/* -------------------------------------------------------------------------- */

export interface SelectOption {
  label: string
  value: string
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: string
  options: SelectOption[]
  placeholder?: string
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, id, options, placeholder, ...props }, ref) => (
    <div className="relative">
      <select
        ref={ref}
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          fieldBaseClasses,
          'h-12 appearance-none pr-10',
          error ? 'border-error' : 'border-border-strong hover:border-text-tertiary',
          className
        )}
        defaultValue=""
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-text-tertiary"
        aria-hidden
      />
    </div>
  )
)
Select.displayName = 'Select'

/* -------------------------------------------------------------------------- */
/* Checkbox                                                                    */
/* -------------------------------------------------------------------------- */

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: React.ReactNode
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, id, label, ...props }, ref) => (
    <label htmlFor={id} className="group flex cursor-pointer items-start gap-3 text-body-sm text-text-secondary">
      <span className="relative mt-0.5 flex size-5 shrink-0">
        <input
          ref={ref}
          id={id}
          type="checkbox"
          className={cn('peer absolute inset-0 size-full cursor-pointer appearance-none', className)}
          {...props}
        />
        <span className="pointer-events-none flex size-5 items-center justify-center rounded-sm border border-border-strong bg-canvas-raised transition-colors duration-150 ease-institutional peer-checked:border-ink peer-checked:bg-ink peer-focus-visible:shadow-focus">
          <Check
            className="size-3.5 text-text-inverse opacity-0 transition-opacity duration-150 peer-checked:opacity-100 group-has-[:checked]:opacity-100"
            aria-hidden
          />
        </span>
      </span>
      <span>{label}</span>
    </label>
  )
)
Checkbox.displayName = 'Checkbox'
