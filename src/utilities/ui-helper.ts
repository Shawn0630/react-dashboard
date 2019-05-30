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

export function parseNumbers(input: string[], defaultValue: number = null): number[] {
    return input.map((val: string) => {
        return parseNumber(val, defaultValue);
    });
}

export function renderOptions(start: number, end: number): { [key: string]: number } {
    if (start == null || end == null) {
        return {};
    }

    const options: { [key: string]: number } = {};
    for (let i: number = start; i < end; i = i + 1) {
        options[i.toString()] = i;
    }

    return options;
}

export function getOrDefault<P>(prop: P, defaultValue: P | string = ""): P | string {
    if (prop == null) {
        return defaultValue;
    } else {
        return prop;
    }
}
