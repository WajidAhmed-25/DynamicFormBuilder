import React from 'react';
import { Plus } from 'lucide-react';
import FormSection from './FormSection';
import DataDisplay from './display/DataDisplay';
import useFormBuilder from '../../hooks/useFormBuilder';

const FormBuilder = () => {
  const {
    sections,
    formData,
    errors,
    addSection,
    removeSection,
    updateField,
    addField,
    removeField
  } = useFormBuilder();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      console.log('Form data:', formData);
      // Handle form submission
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        {sections.map((section) => (
          <FormSection
            key={section.id}
            section={section}
            errors={errors}
            onUpdateField={(fieldId, value) => updateField(section.id, fieldId, value)}
            onAddField={(type) => addField(section.id, type)}
            onRemoveField={(fieldId) => removeField(section.id, fieldId)}
            onRemoveSection={() => removeSection(section.id)}
          />
        ))}

        <div className="flex space-x-4">
          <button
            type="button"
            onClick={addSection}
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Section
          </button>

          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Submit Form
          </button>
        </div>

        {Object.keys(errors).length > 0 && (
          <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            <p>Please fix the validation errors before submitting.</p>
          </div>
        )}
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Form Data Preview</h2>
        <DataDisplay data={formData} />
      </div>
    </div>
  );
};

export default FormBuilder;