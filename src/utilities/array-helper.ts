export function flatten<T>(nestedArray: (T|T[])[]): T[] {
    return [].concat(...nestedArray);
}
