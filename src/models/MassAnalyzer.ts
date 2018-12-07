import {revert} from "../utilities/enums-reverter";

namespace MassAnalyzerType {
    export const UNKNOWN: string = "UNKNOWN";
    export const ION_TRAP: string = "IonTrap";
    export const LINEAR_TRAP: string = "LinearTrap";
    export const QUADRUPOLE: string = "Quadrupole";
    export const TOF: string = "TOF";
    export const FTORBI: string = "FTORBI";
    export const MIX: string = "MIX";
    export const TRIPLE_TOF: string = "TripleTOF";
}

interface MassAnalyzer {
    type: string;
    resolution: number;
    errorTolerance: number;
    ppm: boolean;
    centroided: boolean;
}

const DEFAULT_MASS_ANALYZER: MassAnalyzer = {
    type: MassAnalyzerType.UNKNOWN,
    resolution: null,
    errorTolerance: null,
    ppm: true,
    centroided: false
};

const massAnalyzerTypes: {[key: string]: string} = {
    "Unknown": MassAnalyzerType.UNKNOWN,
    "3D Ion Trap": MassAnalyzerType.ION_TRAP,
    "Linear Ion Trap": MassAnalyzerType.LINEAR_TRAP,
    "Quadrupole": MassAnalyzerType.QUADRUPOLE,
    "Time of Flight (TOF)": MassAnalyzerType.TOF,
    "FT-ICR/Orbitrap": MassAnalyzerType.FTORBI,
    "LIT/FT": MassAnalyzerType.MIX,
    "Triple TOF": MassAnalyzerType.TRIPLE_TOF
};

function parse(name: string): string {
    return massAnalyzerTypes[name];
}

function display(type: string): string {
    return revert<string>(massAnalyzerTypes, type).toString();
}

export {MassAnalyzerType, MassAnalyzer, DEFAULT_MASS_ANALYZER, massAnalyzerTypes, parse, display};
