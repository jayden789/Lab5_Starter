// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('valid phone number 1', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('valid phone number 2', () => {
    expect(isPhoneNumber('123-4567890')).toBe(true);
});

test('invalid phone number 1', () => {
    expect(isPhoneNumber('1234567890')).toBe(false);
});

test('invalid phone number 2', () => {
    expect(isPhoneNumber('123-456-789g')).toBe(false);
});


test('valid email 1', () => {
    expect(isEmail('abc@gmail.com')).toBe(true);
});

test('valid email 2', () => {
    expect(isEmail('abc@ucsd.edu')).toBe(true);
});

test('invalid email 1', () => {
    expect(isEmail('abcgmail.com')).toBe(false);
});

test('invalid email 2', () => {
    expect(isEmail('abc@ucsd')).toBe(false);
});


test('invalid password 1', () => {
    const password = 'ab1';
    expect(isStrongPassword(password)).toBe(false);
});

test('invalid password 2', () => {
    const password = '1abcdef';
    expect(isStrongPassword(password)).toBe(false);
});

test('valid password 1', () => {
    const password = 'abcdef1';
    expect(isStrongPassword(password)).toBe(true);
});

test('valid password 2', () => {
    const password = 'a1bcdef';
    expect(isStrongPassword(password)).toBe(true);
});


test('valid date 1', () => {
    const date = '1/1/2024';
    expect(isDate(date)).toBe(true);
});

test('valid date 2', () => {
    const date = '01/01/2024';
    expect(isDate(date)).toBe(true);
});

test('invalid date 1', () => {
    const date = '1/1/24';
    expect(isDate(date)).toBe(false);
});

test('invalid date 2', () => {
    const date = '01/01/24';
    expect(isDate(date)).toBe(false);
});


test('valid hex color 1', () => {
    const color = '012345';
    expect(isHexColor(color)).toBe(true);
});

test('valid hex color 2', () => {
    const color = '000';
    expect(isHexColor(color)).toBe(true);
});

test('invalid hex color 1', () => {
    const color = '000FFU';
    expect(isHexColor(color)).toBe(false);
});

test('invalid hex color 2', () => {
    const color = 'FFU';
    expect(isHexColor(color)).toBe(false);
});