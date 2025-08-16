/**
 * 配列ライクな構造に対して二分探索を実行します。
 * @param a 検索対象の配列ライクな構造
 * @param fromIndex 開始インデックス（含む）
 * @param toIndex 終了インデックス（含まない）
 * @param key 検索する値
 * @returns キーが見つかった場合はそのインデックス、見つからなかった場合は-(挿入位置 + 1)
 */
export function binarySearch<T>(a: ArrayLike<T>, fromIndex: number, toIndex: number, key: T): number {
    let low = fromIndex;
    let high = toIndex - 1;
    while (low <= high) {
        const mid = (low + high) >>> 1;
        const midVal = a[mid];
        if (midVal < key)
            low = mid + 1;
        else if (midVal > key)
            high = mid - 1;
        else
            return mid;
    }
    return -(low + 1);
}

/**
 * 32ビット整数内のセットされたビット数を数えます。
 * 効率的なカウントのためにビット操作技術を使用します。
 * @param i ビットを数える対象の整数
 * @returns セットされたビット数（0-32）
 */
export function bitCount(i: number): number {
    i = i - ((i >>> 1) & 0x55555555);
    i = (i & 0x33333333) + ((i >>> 2) & 0x33333333);
    i = (i + (i >>> 4)) & 0x0f0f0f0f;
    i = i + (i >>> 8);
    i = i + (i >>> 16);
    return i & 0x3f;
}

/**
 * 32ビット整数内の末尾の0ビット数を返します。
 * 入力が0の場合は64を返します。
 * @param i 分析する整数
 * @returns 末尾の0の数
 */
export function numberOfTrailingZeros(i: number): number {
    let x, y: number;
    if (i == 0) return 64;
    let n = 63;
    y = i; if (y != 0) { n = n -32; x = y; } else x = (i>>>32);
    y = x <<16; if (y != 0) { n = n -16; x = y; }
    y = x << 8; if (y != 0) { n = n - 8; x = y; }
    y = x << 4; if (y != 0) { n = n - 4; x = y; }
    y = x << 2; if (y != 0) { n = n - 2; x = y; }
    return n - ((x << 1) >>> 31);
}