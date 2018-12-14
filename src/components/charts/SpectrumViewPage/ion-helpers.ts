import {com} from "~models/example";
import IIon = com.example.dto.IIon;
import IonType = com.example.dto.IonType;
import ITheoreticalIons = com.example.dto.ITheoreticalIons;

namespace IonHelpers {
    function getBaseName(ion: IIon): string {
        switch (ion.type) {
            case 0:
            case 16:
            case 32:
            case 48:
                return "a";
            case 1:
            case 17:
            case 33:
            case 49:
                return "b";
            case 2:
            case 18:
            case 34:
            case 50:
            case 66:
                return "c";
            case 3:
            case 19:
            case 35:
            case 51:
                return "x";
            case 4:
            case 20:
            case 36:
            case 52:
                return "y";
            case 5:
            case 21:
            case 37:
            case 53:
                return "z";
            case 6:
            case 22:
            case 38:
            case 54:
                return "z'";
            case 7:
                return "IMMONIUM";
            case 8:
                return "PRECURSOR";
            default:
                return "";
        }
    }

    function getSubName(ion: IIon): string {
        switch (ion.type) {
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
                return "-H2O";
            case 32:
            case 33:
            case 34:
            case 35:
            case 36:
            case 37:
            case 38:
                return "-NH3";
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
                return "[2+]";
            case 66:
                return "-H";
            default:
                return "";
        }
    }

    /* tslint:disable: cyclomatic-complexity */
    export function nameToType(name: string): IonType {
        switch (name) {
            case "a": return IonType.A;
            case "a-H2O": return IonType.A_MINUS_H2O;
            case "a-NH3": return IonType.A_MINUS_NH3;
            case "a(2+)": return IonType.A_CHARGE2;
            case "b": return IonType.B;
            case "b-H2O": return IonType.B_MINUS_H2O;
            case "b-NH3": return IonType.B_MINUS_NH3;
            case "b(2+)": return IonType.B_CHARGE2;
            case "c": return IonType.C;
            case "c-H2O": return IonType.C_MINUS_H2O;
            case "c-NH3": return IonType.C_MINUS_NH3;
            case "c(2+)": return IonType.C_CHARGE2;
            case "x": return IonType.X;
            case "x-H2O": return IonType.X_MINUS_H2O;
            case "x-NH3": return IonType.X_MINUS_NH3;
            case "x(2+)": return IonType.X_CHARGE2;
            case "y": return IonType.Y;
            case "y-H2O": return IonType.Y_MINUS_H2O;
            case "y-NH3": return IonType.Y_MINUS_NH3;
            case "y(2+)": return IonType.Y_CHARGE2;
            case "z": return IonType.Z;
            case "z-H2O": return IonType.Z_MINUS_H2O;
            case "z-NH3": return IonType.Z_MINUS_NH3;
            case "z(2+)": return IonType.Z_CHARGE2;
            case "z'": return IonType.Z_PRIME;
            case "z'-H2O": return IonType.Z_PRIME_MINUS_H2O;
            case "z'-NH3": return IonType.Z_PRIME_MINUS_NH3;
            case "z'(2+)": return IonType.Z_PRIME_CHARGE2;
            case "C-H": return IonType.C_MINUS_H;
            case "Immonium": return IonType.IMMONIUM;
            default:
                return null;
        }
    }

    export function isCharge2Ion(ion: IIon): boolean {
        switch (ion.type) {
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
                return true;
            default:
                return false;
        }
    }

    export function isPrecursorIon(ion: IIon): boolean {
        return ion.type === IonType.PRECURSOR;
    }

    export function isImmoniumIon(ion: IIon): boolean {
        return ion.type === IonType.IMMONIUM;
    }

    export function isNIon(ion: IIon): boolean {
        if (ion.type === IonType.A || ion.type === IonType.B || ion.type === IonType.C ||
            ion.type === IonType.A_CHARGE2 || ion.type === IonType.A_MINUS_H2O || ion.type === IonType.A_MINUS_NH3 ||
            ion.type === IonType.B_CHARGE2 || ion.type === IonType.B_MINUS_H2O || ion.type === IonType.B_MINUS_NH3 ||
            ion.type === IonType.C_CHARGE2 || ion.type === IonType.C_MINUS_H || ion.type === IonType.C_MINUS_H2O ||
            ion.type === IonType.C_MINUS_NH3) {
            return true;
        } else {
            return false;
        }
    }

    export function isBIon(ion: IIon): boolean {
        return (ion.type === IonType.B || ion.type === IonType.B_CHARGE2 ||
                ion.type === IonType.B_MINUS_H2O || ion.type === IonType.B_MINUS_NH3);
    }

    export function isBIonBase(ion: IIon): boolean {
        return ion.type === IonType.B;
    }

    export function isBIonCharge2(ion: IIon): boolean {
        return ion.type === IonType.B_CHARGE2;
    }

    export function isYIonBase(ion: IIon): boolean {
        return ion.type === IonType.Y;
    }

    export function isYIonCharge2(ion: IIon): boolean {
        return ion.type === IonType.Y_CHARGE2;
    }

    export function isCIon(ion: IIon): boolean {
        return (ion.type === IonType.C || ion.type === IonType.C_CHARGE2 ||
                ion.type === IonType.C_MINUS_H || ion.type === IonType.C_MINUS_H2O ||
                ion.type === IonType.C_MINUS_NH3);
    }

    export function isZIon(ion: IIon): boolean {
        return (ion.type === IonType.Z || ion.type === IonType.Z_CHARGE2 ||
                ion.type === IonType.Z_MINUS_H2O || ion.type === IonType.Z_MINUS_NH3);
    }

    export function isYIon(ion: IIon): boolean {
        return (ion.type === IonType.Y || ion.type === IonType.Y_CHARGE2 ||
                ion.type === IonType.Y_MINUS_H2O || ion.type === IonType.Y_MINUS_NH3);
    }

    export function getIonPriority(ion: IIon, isECD: boolean): number {
        if (isECD) {
            if (isCIon(ion) || isZIon(ion)) {
                return 2;
            } else if (isBIon(ion) || isYIon(ion)) {
                return 0;
            } else {
                return 1;
            }
        } else {
            if (isBIon(ion) || isYIon(ion)) {
                return 2;
            } else if (isCIon(ion) || isZIon(ion)) {
                return 0;
            } else {
                return 1;
            }
        }
    }

    export function getIonName(ion: IIon, maxLength: number): string {
        if (isPrecursorIon(ion)) {
            return "pre[1+]";
        } else if (isNIon(ion)) {
            return `${getBaseName(ion)}${ion.pos + 1}${getSubName(ion)}`;
        } else {
            return `${getBaseName(ion)}${maxLength - ion.pos}${getSubName(ion)}`;
        }
    }

    export function isObservedIon(ions: IIon[], ionType: IonType, pos: number): boolean {
        for (const ion of ions) {
            if ((ion.pos === pos || (ion.pos === null && pos === 0)) && ion.type === ionType) {
                return true;
            }
        }

        return false;
    }

    export function getObservedIon(ions: IIon[], ionType: IonType, pos: number): IIon {
        for (const ion of ions) {
            if ((ion.pos === pos || (ion.pos === null && pos === 0)) && ion.type === ionType) {
                return ion;
            }
        }

        return null;
    }

    export function isNIonFromType(type: IonType): boolean {
        if (type === IonType.A || type === IonType.B || type === IonType.C ||
            type === IonType.A_CHARGE2 || type === IonType.A_MINUS_H2O || type === IonType.A_MINUS_NH3 ||
            type === IonType.B_CHARGE2 || type === IonType.B_MINUS_H2O || type === IonType.B_MINUS_NH3 ||
            type === IonType.C_CHARGE2 || type === IonType.C_MINUS_H || type === IonType.C_MINUS_H2O ||
            type === IonType.C_MINUS_NH3 || type === IonType.IMMONIUM) {
            return true;
        } else {
            return false;
        }
    }

    export function calculateError(ion: IIon, theoreticalIons: ITheoreticalIons[]): number {
        return calculateErrorDa(ion, theoreticalIons) / ion.mz * 1000000;
    }

    export function calculateErrorDa(ion: IIon, theoreticalIons: ITheoreticalIons[]): number {
        const ionPos: number = ion.pos === undefined ? 0 : ion.pos;

        let theoreticalMZ: number = -1;
        for (const theoreticalIon of theoreticalIons) {
            if (theoreticalIon.type === ion.type) {
                theoreticalMZ = theoreticalIon.mz[ionPos];
                break;
            }
        }
        if (theoreticalMZ === -1) {
            return 0;
        } else {
            return (theoreticalMZ - ion.mz);
        }
    }

    export function prepareSequence(sequence: string): string[] {
        const result: string[] = [];
        for (let i: number = 0; i < sequence.length; i += 1) {
            const curChar: string = sequence.charAt(i);
            if (/[a-z]/i.test(curChar)) {
                if (sequence.charAt(i + 1) === "(") {
                    if (sequence.slice(i + 2, i + 5) === "sub") {
                        result.push(curChar.toUpperCase());
                    } else {
                        result.push(curChar.toLowerCase());
                    }
                    while (sequence.charAt(i + 1) !== ")") {
                        i = i + 1;
                    }
                } else {
                    result.push(curChar.toUpperCase());
                }
            }
        }

        return result;
    }

    export function ionTableSequence(sequence: string): string[] {
        const result: string[] = [];
        let i: number = 0;
        while (i < sequence.length) {
            let j: number = i + 1;
            if (sequence[j] === "(") {
                while ((j < sequence.length && sequence[j] !== ")")
                    || (j + 1 < sequence.length && sequence[j + 1]  === "(")) {
                    j += 1;
                }
                j += 1;
            }
            const str: string = sequence.slice(i, j);
            result.push(str);
            i = j;
        }

        return result;
    }

    export function arrayMin(arr: number[]): number {
        let len: number = arr.length;
        let min: number = Infinity;
        while (len > 0) {
          if (arr[len] < min) {
            min = arr[len];
          }
          len = len - 1;
        }
        return min;
    }

    export function arrayMax(arr: number[]): number {
        let len: number = arr.length;
        let max: number = -Infinity;
        while (len > 0) {
          if (arr[len] > max) {
            max = arr[len];
          }
          len = len - 1;
        }
        return max;
    }
}

export {IonHelpers};
