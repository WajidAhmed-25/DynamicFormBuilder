export const FIELD_TYPES = {
    TEXT: 'text',
    DROPDOWN: 'dropdown',
    RADIO: 'radio',
    FILE: 'file',
    CHECKBOX: 'checkbox',
    COUNTRY: 'country',
    DATE: 'date',

  };
  
  export const FIELD_LABELS = {
    [FIELD_TYPES.TEXT]: 'Text Field',
    [FIELD_TYPES.DROPDOWN]: 'Dropdown',
    [FIELD_TYPES.RADIO]: 'Radio Buttons',
    [FIELD_TYPES.FILE]: 'File Upload',
    [FIELD_TYPES.CHECKBOX]: 'Checkbox',
    [FIELD_TYPES.COUNTRY]: 'Country',
    [FIELD_TYPES.DATE]: 'Date Picker',

  };
  
  export const createField = (type) => ({
    id: Date.now().toString(),
    type,
    label: FIELD_LABELS[type],
    required: false,
    conditions: [],
    placeholder: `Enter ${FIELD_LABELS[type]}`,
    options: ['dropdown', 'radio'].includes(type) ? [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' }
    ] : undefined
  });