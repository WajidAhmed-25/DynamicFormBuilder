import React from "react";
import { Trash2 } from "lucide-react";

const CheckboxField = ({ field, value, onChange, error, onRemove }) => {
  return (
    <div className="relative border rounded-lg p-4 bg-white shadow-sm">
      <div className="flex items-start space-x-3">
        <div className="flex h-6 items-center">
          <input
            type="checkbox"
            checked={value || false}
            onChange={(e) => onChange(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
        </div>
        <div className="flex-grow">
          {/* Show label only if field.label exists */}
          {field.label && (
            <label className="text-sm font-medium text-gray-900">
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
          )}
          {field.description && (
            <p className="text-sm text-gray-500">{field.description}</p>
          )}
        </div>
        <button
          type="button"
          onClick={onRemove}
          className="text-gray-400 hover:text-red-500 transition-colors"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default CheckboxField;
