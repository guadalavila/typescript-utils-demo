import { isEmail } from '../email';

describe('Validate email', () => {
    test('email guadalupe@mail.com valid', () => {
        expect(isEmail('guadalupe@mail.com')).toBe(true);
    });

    test('Empty string not valid', () => {
        expect(isEmail('')).toBe(false);
    });

    test('No double @ in an email', () => {
        expect(isEmail('guadalupe@mail@.com')).toBe(false);
    });

    test('not trimmed email to be false', () => {
        expect(isEmail('guadalupe@mail.com ')).toBe(false);
    });
});
