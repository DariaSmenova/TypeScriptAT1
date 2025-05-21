import { isValidDate, containsEscapeChars, isValidCityName } from './validation';

describe('Date validation', () => {
  test('passes valid date format', () => {
    expect(isValidDate('31.12.2099')).toBe(true);
  });

  test('rejects special characters in date', () => {
    expect(isValidDate('22@04@2025')).toBe(false);
  });

  test('rejects letters in date', () => {
    expect(isValidDate('22.apr.2025')).toBe(false);
  });

  test('rejects date earlier than today', () => {
    expect(isValidDate('01.01.2000')).toBe(false);
  });
});

describe('City validation - escape characters', () => {
  test('detects escape characters', () => {
    expect(containsEscapeChars('<Paris>')).toBe(true);
  });

  test('validates city with exclamation or hyphen', () => {
    expect(isValidCityName('Saint-Louis-du-Ha! Ha!')).toBe(true);
  });

  test('validates city with special characters', () => {
    expect(isValidCityName('Ağrı')).toBe(true);
  });

  test('validates single-letter city name', () => {
    expect(isValidCityName('Ö')).toBe(true);
  });
});
