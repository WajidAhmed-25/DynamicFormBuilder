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

  const renderField = (field) => {
    const props = {
      field,
      value: formData?.[field.id] || "", 
      onChange: (value) => onUpdateField(field.id, value),
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
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setShowFieldModal(true)}
            className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Field
          </button>
          <button
            type="button"
            onClick={onRemoveSection}
            className="text-red-500 hover:text-red-700 transition-colors"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="space-y-6">
      {Array.isArray(section.fields) && section.fields.map(renderField)}
      </div>

      {showFieldModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h3 className="text-lg font-semibold mb-4">Select Field Type</h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.values(FIELD_TYPES).map(type => (
                <button
                  key={type}
                  onClick={() => {
                    onAddField(type);
                    setShowFieldModal(false);
                  }}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md capitalize transition-colors"
                >
                  {type}
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowFieldModal(false)}
              className="mt-4 w-full px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
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