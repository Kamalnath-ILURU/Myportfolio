import React, { useState } from 'react';
import { Edit2 } from 'lucide-react';

interface Props {
  value: string;
  onChange: (newValue: string) => void;
  className?: string;
  multiline?: boolean;
}

export default function EditableText({ value, onChange, className = '', multiline = false }: Props) {
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    const Component = multiline ? 'textarea' : 'input';
    return (
      <Component
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => setIsEditing(false)}
        autoFocus
        className={`w-full p-2 border rounded ${className}`}
      />
    );
  }

  return (
    <div className="group relative">
      <div className={className}>{value}</div>
      <button
        onClick={() => setIsEditing(true)}
        className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Edit2 className="w-4 h-4" />
      </button>
    </div>
  );
}