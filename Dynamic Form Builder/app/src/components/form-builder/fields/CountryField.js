import React from 'react';
import { Trash2 } from 'lucide-react';

const COUNTRIES = [
  { code: 'US', name: 'United States' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'CA', name: 'Canada' },
  { code: 'AU', name: 'Australia' },
  { code: 'DE', name: 'Germany' },
  { code: 'FR', name: 'France' },
  { code: 'IT', name: 'Italy' },
  { code: 'ES', name: 'Spain' },
  { code: 'JP', name: 'Japan' },
  { code: 'CN', name: 'China' }
];

const CountryField = ({ field, value, onChange, error, onRemove }) => {
  return (
    <div className="relative border rounded-lg p-4 bg-white shadow-sm">
      <div className="flex justify-between items-start">
        <div className="flex-grow">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>
          <select
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            className={`mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm
              ${error ? 'border-red-300' : 'border-gray-300'}`}
          >
            <option value="">Select a country</option>
            {COUNTRIES.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
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

export default CountryField;