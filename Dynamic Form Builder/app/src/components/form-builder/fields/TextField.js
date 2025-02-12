import React from "react";
import { Trash2 } from "lucide-react";

const TextField = ({ field, value, onChange, error, onRemove }) => {
  return (
    <div className="relative p-4 bg-white border rounded-lg shadow-sm">
      <div className="flex items-start justify-between mb-2">
        <label htmlFor={field.id} className="block text-sm font-medium text-gray-700">
          {field.label}
          {field.required && <span className="ml-1 text-red-500">*</span>}
        </label>
        <button
          type="button"
          onClick={onRemove}
          className="text-gray-400 transition-colors hover:text-red-500"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      <input
        type="text"
        id={field.id}
        name={field.id}
        // value={value || ""} // Ensures it never becomes uncontrolled
        // onChange={(e) => onChange(e.target.value)} // Send only value, not the event
        value={value || ""} // Ensures it never becomes uncontrolled
        onChange={(e) => onChange(e.target.value)} // Send only value, not the event
        className="block w-full p-2 mt-1 text-sm border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
        placeholder={field.placeholder || ""}
      />

      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default TextField;
