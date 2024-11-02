import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InputFieldProps {
  label: string;
  icon?: LucideIcon;
  type: 'number' | 'text';
  value: number | string;
  onChange: (value: any) => void;
  min?: number;
  max?: number;
  step?: string;
  suffix?: string;
}

export function InputField({
  label,
  icon: Icon,
  type,
  value,
  onChange,
  min,
  max,
  step,
  suffix
}: InputFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        <div className="flex items-center gap-2">
          {Icon && <Icon className="w-4 h-4" />}
          {label}
          {suffix && <span className="text-gray-500">({suffix})</span>}
        </div>
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(type === 'number' ? Number(e.target.value) : e.target.value)}
        min={min}
        max={max}
        step={step}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
  );
}