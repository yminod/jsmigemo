export class BitList {
    words: Uint32Array;
    size: number;
    constructor(size?: number) {
        if (size == undefined) {
            this.words = new Uint32Array(8);
            this.size = 0;
        } else {
            this.words = new Uint32Array((size + 31) >> 5);
            this.size = size;
        }
    }
    add(value: boolean) {
        const pos = this.size;
        if (this.words.length < (pos + 1 + 31) >> 5) {
            const newWords = new Uint32Array(this.words.length * 2);
            newWords.set(this.words, 0);
            this.words = newWords;
        }
        this.size = pos + 1;
        this.set(pos, value);
    }

    set(pos: number, value: boolean) {
        if (0 > pos || pos >= this.size) {
            throw new RangeError();
        }
        if (value) {
            this.words[pos >> 5] |= 1 << (pos & 31);
        } else {
            this.words[pos >> 5] &= ~(1 << (pos & 31));
        }
    }

    get(pos: number): boolean {
        if (0 > pos || pos >= this.size) {
            throw new RangeError();
        }
        return ((this.words[pos >> 5] >> (pos & 31)) & 1) == 1;
    }
}
