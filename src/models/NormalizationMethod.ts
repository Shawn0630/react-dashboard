import { NormalizationMethodType } from "~models/Parameters";
import { getOrDefault } from "~utilities/ui-helper";
import { revert } from "~utilities/enums-reverter";

namespace NormalizationMethod {
    export const normalizationMethods: {[key: string]: NormalizationMethodType} = {
        "Use TIC": NormalizationMethodType.AUTO_NORMALIZATION,
        "Manual Input": NormalizationMethodType.MANUAL_NORMALIZATION,
        "Use Internal Standard Proteins": NormalizationMethodType.SPIKE_NORMALIZATION,
        "No normalization": NormalizationMethodType.NO_NORMALIZATION
    };
    export const reporterIonNormalizationMethods: { [key: string]: NormalizationMethodType } = {
        "No Normalization": NormalizationMethodType.NO_NORMALIZATION,
        "Auto Normalization": NormalizationMethodType.AUTO_NORMALIZATION,
        "Manual Input": NormalizationMethodType.MANUAL_NORMALIZATION,
        "Normalize to Spike": NormalizationMethodType.SPIKE_NORMALIZATION,
    };
    export function fromString(name: string): NormalizationMethodType {
        return normalizationMethods[name];
    }
    export function reporterIonQfromString(name: string): NormalizationMethodType {
        return reporterIonNormalizationMethods[name];
    }
    export function toString(normalizationMethodType: NormalizationMethodType): string {
        return revert<NormalizationMethodType>(normalizationMethods,
                                              (getOrDefault(normalizationMethodType, NormalizationMethodType.NO_NORMALIZATION)) as NormalizationMethodType) //tslint:disable-line
                                              .toString();
    }
    export function reporterIonQtoString(normalizationMethodType: NormalizationMethodType): string {
        return revert<NormalizationMethodType>(reporterIonNormalizationMethods,
            (getOrDefault(normalizationMethodType, NormalizationMethodType.NO_NORMALIZATION)) as NormalizationMethodType) //tslint:disable-line
            .toString();
    }
}

export {NormalizationMethod};
