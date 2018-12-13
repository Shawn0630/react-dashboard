export function isSame<T>(a: T, b: T): boolean {
    if (a == null && b == null) {
        return true;
    } else if (a != null && b != null) {
        const aJSON: string = JSON.stringify(a);
        const bJSON: string = JSON.stringify(b);
        return aJSON === bJSON;
    } else {
        return false;
    }
}
