export function flatten<T>(nestedArray: (T|T[])[]): T[] {
    return [].concat(...nestedArray);
}

export function lastN<T>(array: T[], n?: number): T[] {
    if (array == null) {
        return [];
    }
    if (n == null) {
        return array;
    }
    return array.slice(Math.max(array.length - n, 0));
}
