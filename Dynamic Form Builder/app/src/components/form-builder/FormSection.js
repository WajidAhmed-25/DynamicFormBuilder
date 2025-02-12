import React, { useState } from 'react';
import { Plus, Trash2, Settings } from 'lucide-react';
import { FIELD_TYPES } from '../../utils/fieldTypes';
import TextField from './fields/TextField';
import DropdownField from './fields/DropdownField';
import RadioField from './fields/RadioField';
import FileUploadField from './fields/FileUploadField';
import CheckboxField from './fields/CheckboxField';
import CountryField from './fields/CountryField';
import DatePickerField from './fields/DatePickerField';
// import PhoneField from './fields/PhoneField';

const FormSection = ({
  section,
  formData,
  errors,
  onUpdateField,
  onAddField,
  onRemoveField,
  onRemoveSection,
}) => {
  const [showFieldModal, setShowFieldModal] = useState(false);


  const handleUpdateField = (fieldId, newValue) => {
    onUpdateField(fieldId, newValue); // Correctly update the state with full value
  };
  
  const renderField = (field) => {
    
    const props = {
      field,
      value: formData?.[field.id] || "", 
      // onChange: (value) => onUpdateField(field.id, value),
      onChange: (value) => handleUpdateField(field.id, value),
      error: errors?.[field.id] || null, 
      onRemove: () => onRemoveField(field.id),
    };


    switch (field.type) {
      case FIELD_TYPES.TEXT:
        return <TextField key={field.id} {...props} />;
      case FIELD_TYPES.DROPDOWN:
        return <DropdownField key={field.id} {...props} />;
      case FIELD_TYPES.RADIO:
        return <RadioField key={field.id} {...props} />;
      case FIELD_TYPES.FILE:
        return <FileUploadField key={field.id} {...props} />;
      case FIELD_TYPES.CHECKBOX:
        return <CheckboxField key={field.id} {...props} />;
      case FIELD_TYPES.COUNTRY:
        return <CountryField key={field.id} {...props} />;
      case FIELD_TYPES.DATE:
        return <DatePickerField key={field.id} {...props} />;
      default:
        return null;
    }
  };
  
  

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setShowFieldModal(true)}
            className="flex items-center gap-1 px-3 py-1 text-white transition-colors bg-blue-500 rounded-md hover:bg-blue-600"
          >
            <Plus className="w-4 h-4" />
            Add Field
          </button>
          <button
            type="button"
            onClick={onRemoveSection}
            className="text-red-500 transition-colors hover:text-red-700"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="space-y-6">
      {Array.isArray(section.fields) && section.fields.map(renderField)}
      </div>

      {showFieldModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-white rounded-lg w-96">
            <h3 className="mb-4 text-lg font-semibold">Select Field Type</h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.values(FIELD_TYPES).map(type => (
                <button
                  key={type}
                  onClick={() => {
                    onAddField(type);
                    setShowFieldModal(false);
                  }}
                  className="px-4 py-2 capitalize transition-colors bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  {type}
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowFieldModal(false)}
              className="w-full px-4 py-2 mt-4 transition-colors bg-gray-200 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormSection;