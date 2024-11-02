import React from 'react';
import { BookText } from 'lucide-react';

const formats = [
  { id: '5x8', name: '5" x 8" (Novel)', description: 'Perfect for novels and novellas' },
  { id: '6x9', name: '6" x 9" (Standard)', description: 'Common for textbooks and non-fiction' },
  { id: '8.5x11', name: '8.5" x 11" (Large)', description: 'Ideal for workbooks and manuals' }
];

interface FormatSelectorProps {
  selectedFormat: string;
  onChange: (format: string) => void;
}

export function FormatSelector({ selectedFormat, onChange }: FormatSelectorProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        <div className="flex items-center gap-2">
          <BookText className="w-4 h-4" />
          Book Format
        </div>
      </label>
      <div className="grid gap-3">
        {formats.map((format) => (
          <button
            key={format.id}
            onClick={() => onChange(format.id)}
            className={`flex items-start p-3 border rounded-lg transition-all ${
              selectedFormat === format.id
                ? 'border-indigo-500 bg-indigo-50 ring-2 ring-indigo-200'
                : 'border-gray-200 hover:border-indigo-200 hover:bg-indigo-50/50'
            }`}
          >
            <div className="flex-1 text-left">
              <div className="font-medium text-gray-900">{format.name}</div>
              <div className="text-sm text-gray-500">{format.description}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}