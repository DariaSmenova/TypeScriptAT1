export const isValidDate = (dateStr: string): boolean => {
    const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
    if (!dateRegex.test(dateStr)) return false;
    
    const [day, month, year] = dateStr.split('.').map(Number);
    const date = new Date(year, month - 1, day);
    const now = new Date();
    return (
      date.getDate() === day &&
      date.getMonth() === month - 1 &&
      date.getFullYear() === year &&
      date >= now
    );
  };
  
  export const containsEscapeChars = (input: string): boolean => {
    const escapeCharsPattern = /[<>&"]/;
    return escapeCharsPattern.test(input);
  };
  
  export const isValidCityName = (name: string): boolean => {
    return !containsEscapeChars(name);
  };
  