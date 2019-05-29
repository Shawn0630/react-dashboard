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

export function groupBy<T>(key: string): (array: T[]) => {[key: string]: T[]} {
    return (array: T[]) : {[key: string]: T[]} => {
        return array.reduce(
            (objectsByKeyValue: {[key: string]: T[]}, obj: any) => { // tslint:disable-line:no-any
                const value: string = obj[key];
                objectsByKeyValue[value] = (objectsByKeyValue[value] == null ? [] : objectsByKeyValue[value]).concat(obj);
                return objectsByKeyValue;
            },
            {});
    };
}
