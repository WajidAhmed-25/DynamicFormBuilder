import React from 'react';
import { Trash2 } from 'lucide-react';

const RadioField = ({ field, value, onChange, error, onRemove }) => {
  return (
    <div className="relative border rounded-lg p-4 bg-white shadow-sm">
      <div className="flex justify-between items-start mb-2">
        <label className="block text-sm font-medium text-gray-700">
          {field.label}
          {field.required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <button
          type="button"
          onClick={onRemove}
          className="text-gray-400 hover:text-red-500 transition-colors"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-4">
        {field.options?.map((option) => (
          <div key={option.value} className="flex items-center">
            <input
              type="radio"
              id={`${field.id}-${option.value}`}
              name={field.id}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
              className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label
              htmlFor={`${field.id}-${option.value}`}
              className="ml-3 block text-sm font-medium text-gray-700"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
      
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default RadioField;