// hooks/useFormBuilder.js
import { useState } from 'react';

const useFormBuilder = () => {
  const [sections, setSections] = useState([]);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  // Add a new section
  const addSection = () => {
    const newSection = {
      id: Date.now(), // Unique ID for the section
      fields: [], // Fields in the section
    };
    setSections([...sections, newSection]);
  };

  // Remove a section by ID
  const removeSection = (id) => {
    setSections(sections.filter((section) => section.id !== id));
  };

  // Update a field's value in a section
  const updateField = (sectionId, fieldId, value) => {
    const updatedSections = sections.map((section) => {
      if (section.id === sectionId) {
        const updatedFields = section.fields.map((field) => {
          if (field.id === fieldId) {
            return { ...field, value };
          }
          return field;
        });
        return { ...section, fields: updatedFields };
      }
      return section;
    });
    setSections(updatedSections);
    setFormData((prevData) => ({
      ...prevData,
      [fieldId]: value,
    }));
  };

  // Add a new field to a section
  const addField = (sectionId, type) => {
    setSections((prevSections) =>
      prevSections.map((section) => {
        if (section.id === sectionId) {
          // Ensure fields array exists before adding a new field
          const updatedFields = section.fields ? [...section.fields] : [];
          const newField = {
            id: Date.now(), // Unique ID for the field
            type, // Field type (e.g., text, number, etc.)
            value: '', // Field value
          };
          return { ...section, fields: [...updatedFields, newField] };
        }
        return section;
      })
    );
  };

  // Remove a field from a section
  const removeField = (sectionId, fieldId) => {
    const updatedSections = sections.map((section) => {
      if (section.id === sectionId) {
        return {
          ...section,
          fields: section.fields.filter((field) => field.id !== fieldId),
        };
      }
      return section;
    });
    setSections(updatedSections);
    setFormData((prevData) => {
      const newData = { ...prevData };
      delete newData[fieldId];
      return newData;
    });
  };

  return {
    sections,
    formData,
    errors,
    addSection,
    removeSection,
    updateField,
    addField,
    removeField,
  };
};

export default useFormBuilder;