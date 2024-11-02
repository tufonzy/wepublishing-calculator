import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ResultCardProps {
  label: string;
  value: string;
  icon?: LucideIcon;
  highlight?: boolean;
}

export function ResultCard({ label, value, icon: Icon, highlight = false }: ResultCardProps) {
  const baseClasses = "flex justify-between items-center p-4 rounded-lg shadow-sm";
  const colorClasses = highlight 
    ? "bg-indigo-600 text-white" 
    : "bg-white text-gray-600";

  return (
    <div className={`${baseClasses} ${colorClasses}`}>
      <span className={highlight ? "text-lg" : ""}>{label}</span>
      <span className={`font-semibold flex items-center gap-1 ${highlight ? "text-xl" : ""}`}>
        {Icon && <Icon className="w-4 h-4" />}
        {value}
      </span>
    </div>
  );
}