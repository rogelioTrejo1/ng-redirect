import { add } from '../src/add';

describe('Test a add fuction', () => {
    it('Add 2 + 2', () => {
        const result = add(2, 2);
        expect(result).toBe(4);
    });
});
