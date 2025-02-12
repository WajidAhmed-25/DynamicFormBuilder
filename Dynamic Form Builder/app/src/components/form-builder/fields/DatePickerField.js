import React from 'react';
import { Trash2, Calendar } from 'lucide-react';

const DatePickerField = ({ field, value, onChange, error, onRemove }) => {
  return (
    <div className="relative border rounded-lg p-4 bg-white shadow-sm">
      <div className="flex justify-between items-start">
        <div className="flex-grow">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="date"
              value={value || ''}
              onChange={(e) => onChange(e.target.value)}
              min={field.minDate}
              max={field.maxDate}
              className={`block w-full rounded-md pl-10 sm:text-sm
                ${error 
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                  : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                }`}
            />
          </div>
        </div>
        <button
          type="button"
          onClick={onRemove}
          className="ml-4 text-gray-400 hover:text-red-500 transition-colors"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default DatePickerField;