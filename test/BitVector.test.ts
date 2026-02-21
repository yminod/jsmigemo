import { BitVector } from "../src/BitVector";

describe('BitVector', () => {
    it('toString reads bits across 32-bit word boundary', () => {
        const words = new Uint32Array(2);
        words[1] = 1;
        const vector = new BitVector(words, 64);
        const expected = `${"0".repeat(32)}1${"0".repeat(31)} `;
        expect(vector.toString()).toBe(expected);
    });
});
