import {ActivationMethodType} from "./Attributes";
import { com } from "./example";
import ActivationMethod = com.example.dto.ActivationMethod;

interface FractionInfo {
    instrument: string;
    enzyme: string;
    activationMethod: string;
    sourceFile?: string;
}

const DEFAULT_FRACTIONINFO: FractionInfo = {
    sourceFile: "",
    enzyme: "Trypsin",
    instrument: "Orbitrap (Orbi-Trap)",
    activationMethod: ActivationMethodType.CID
};

export function convertActionMethodToString(activationMethod: ActivationMethod): string {
    switch (activationMethod) {
        case ActivationMethod.UNDEFINED: return "Undefined";
        case ActivationMethod.PQD: return ActivationMethodType.PQD;
        case ActivationMethod.MIX: return ActivationMethodType.MIX;
        case ActivationMethod.IRMPD: return ActivationMethodType.IRMPD;
        case ActivationMethod.HCD: return ActivationMethodType.HIGH_CID;
        case ActivationMethod.ECD: return ActivationMethodType.ECD;
        case ActivationMethod.CID: return ActivationMethodType.CID;
        default:
            return "";
    }
}

export function convertStringToActionMehtod(activationMethod: string): ActivationMethod {
    switch (activationMethod) {
        case "Undefined": return ActivationMethod.UNDEFINED;
        case ActivationMethodType.PQD: return ActivationMethod.PQD;
        case ActivationMethodType.MIX: return ActivationMethod.MIX;
        case ActivationMethodType.IRMPD: return ActivationMethod.IRMPD;
        case ActivationMethodType.HIGH_CID: return ActivationMethod.HCD;
        case ActivationMethodType.ECD: return ActivationMethod.ECD;
        case ActivationMethodType.CID: return ActivationMethod.CID;
        default:
            return ActivationMethod.UNDEFINED;
    }
}

export {FractionInfo, DEFAULT_FRACTIONINFO};
