import React from "react";
import { Trash2 } from "lucide-react";

const TextField = ({ field, value, onChange, error, onRemove }) => {
  return (
    <div className="relative border rounded-lg p-4 bg-white shadow-sm">
      <div className="flex justify-between items-start mb-2">
        <label htmlFor={field.id} className="block text-sm font-medium text-gray-700">
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

      <input
        type="text"
        id={field.id}
        name={field.id}
        value={value || ""} // Ensures it never becomes uncontrolled
        onChange={(e) => onChange(e)} // Pass full event to the parent
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm p-2"
        placeholder={field.placeholder || ""}
      />

      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default TextField;
