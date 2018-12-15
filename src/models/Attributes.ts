import {Enzyme} from "./Enzyme";
import {Instrument} from "./Instrument";
import {revert} from "../utilities/enums-reverter";

namespace ActivationMethodType {
    export const CID: string = "CID";
    export const HIGH_CID: string = "HCD";
    export const ECD: string = "ETD";
    export const MIX: string = "MIX";
    export const IRMPD: string = "IRMPD";
    export const PQD: string = "PQD";
}

namespace ActivationMethod {
    export const activationMethods: {[key: string]: string} = {
        "CID, CAD(y and b ions)": ActivationMethodType.CID,
        "high energy CID (y and b ions)": ActivationMethodType.HIGH_CID,
        "ECD, ETD (c and z ions)": ActivationMethodType.ECD,
        "Alternative scan mode": ActivationMethodType.MIX,
        "IRMPD": ActivationMethodType.IRMPD,
        "PQD (pulsed Q collision induced dissociation)": ActivationMethodType.PQD
    };
    export function supportedActivationMethods(): {[key: string]: string} {
        const copy: {[key: string]: string} = {...activationMethods};
        delete copy["Alternative scan mode"];
        return copy;
    }
    export function parse(name: string): string {
        return activationMethods[name];
    }
    export function display(activationMethodType: string): string {
        return revert<string>(activationMethods, activationMethodType).toString();
    }
}

interface Attributes {
    srcFile: string;
    instrument: Instrument;
    enzyme: Enzyme;
    activationMethod: string;
}

export {Attributes, ActivationMethodType, ActivationMethod};
