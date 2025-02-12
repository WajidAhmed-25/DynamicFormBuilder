export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  export const validatePhone = (phone, countryCode) => {
    const regex = {
      US: /^\+1\s\(\d{3}\)\s\d{3}-\d{4}$/,
      UK: /^\+44\s\d{4}\s\d{6}$/,
      // Add more country-specific phone formats
    };
    return regex[countryCode] ? regex[countryCode].test(phone) : true;
  };
  
  export const validateRequired = (value) => {
    if (Array.isArray(value)) return value.length > 0;
    if (typeof value === 'boolean') return value;
    if (typeof value === 'number') return true;
    if (typeof value === 'string') return value.trim().length > 0;
    if (value instanceof File) return true;
    return !!value;
  };
  
  export const validateLength = (value, min, max) => {
    if (!value) return true;
    const length = value.toString().length;
    if (min && length < min) return false;
    if (max && length > max) return false;
    return true;
  };
  
  export const validateFile = (file, { maxSize, accept }) => {
    if (!file) return true;
    if (maxSize && file.size > maxSize) return false;
    if (accept && !accept.includes(file.type)) return false;
    return true;
  };
  
  export const validateDate = (date, { min, max }) => {
    if (!date) return true;
    const valueDate = new Date(date);
    if (min && valueDate < new Date(min)) return false;
    if (max && valueDate > new Date(max)) return false;
    return true;
  };