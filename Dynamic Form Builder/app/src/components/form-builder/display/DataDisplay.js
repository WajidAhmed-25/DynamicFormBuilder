import React from "react";

const DataDisplay = ({ data }) => {
  const renderValue = (value) => {
    if (value === null || value === undefined) return "Not set";
    if (typeof value === "boolean") return value ? "Yes" : "No";
    if (value instanceof File) return `File: ${value.name}`;
    
    // If the value is a string or number, return it directly
    if (typeof value === "string" || typeof value === "number") {
      return <span className="text-gray-700">{value}</span>;
    }

    if (typeof value === "object") {
      return (
        <div className="pl-4">
          {Object.entries(value).map(([key, val]) => (
            <div key={key} className="mb-2">
              <span className="font-medium">{key}: </span>
              {renderValue(val)}
            </div>
          ))}
        </div>
      );
    }
    
    return String(value);
  };

  return (
    <div className="bg-gray-50 rounded-lg p-4">
      {Object.entries(data).map(([sectionId, sectionData]) => (
        <div key={sectionId} className="mb-6 last:mb-0">
          <h3 className="text-lg font-semibold mb-2">Section: {sectionId}</h3>
          <div className="pl-4 border-l-2 border-gray-200">
            {renderValue(sectionData)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataDisplay;
