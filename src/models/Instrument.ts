import {DEFAULT_MASS_ANALYZER, MassAnalyzer} from "./MassAnalyzer";
import {revert} from "../utilities/enums-reverter";

namespace IonSourceType {
    export const UNKNOWN: string = "UNKNOWN";
    export const MALDI: string = "MALDI";
    export const ESI: string = "ESI";
}

namespace IonSource {
    export const ionSources: {[key: string]: string} = {
        "UNKNOWN": IonSourceType.UNKNOWN,
        "MALDI/SELDI": IonSourceType.MALDI,
        "ESI(nano-spray)": IonSourceType.ESI
    };
    export function parse(name: string): string {
        return ionSources[name];
    }
    export function display(ionSourceType: string): string {
        return revert<string>(ionSources, ionSourceType).toString();
    }
}

interface Instrument {
    name: string;
    manufacturer: string;
    model: string;
    ionSource: string;
    massAnalyzers: {[key: string]: MassAnalyzer[]};
    lockMass: number;
    creatorId?: string;
    builtin?: boolean;
}

const DEFAULT_INSTRUMENT: Instrument = {
    name: "",
    manufacturer: "",
    model: "",
    ionSource: IonSourceType.UNKNOWN,
    massAnalyzers: {
        "1": [DEFAULT_MASS_ANALYZER],
        "2": [DEFAULT_MASS_ANALYZER]
    },
    lockMass: -1,
    builtin: false
};

export {IonSourceType, Instrument, IonSource, DEFAULT_INSTRUMENT};
