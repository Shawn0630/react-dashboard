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

export function parseNumber(input: string, defaultValue: any = null): number { //tslint:disable-line:no-any
    if (input == null) {
        return defaultValue;
    }
    const str: string = input.toString();
    if (str.trim().length === 0) {
        return defaultValue;
    } else {
        const num: number = Number(str);
        if (isNaN(num)) {
            return defaultValue;
        } else {
            return num;
        }
    }
}
