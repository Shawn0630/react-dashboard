import { com } from "~models/example";
import IPSM = com.example.dto.IPSM;
import IPeptideSampleFraction = com.example.dto.IPeptideSampleFraction;
import ISupportPeptide = com.example.dto.ISupportPeptide;
import Peptide = com.example.dto.Peptide;

namespace PsmHelpers {
    export function getBestPSM(supportPeptide: ISupportPeptide): IPSM {
        let bestPsm: IPSM = null;
        let bestPsmScore: number = -1;
        for (const sample of supportPeptide.peptide.samples) {
            const key: string = Object.keys(sample.fractions)[0];
            if (sample.fractions[key] !== undefined) {
                const castedFrac: IPeptideSampleFraction = sample.fractions[key];
                if (castedFrac.psms !== null && castedFrac.psms !== undefined) {
                    for (const psm of castedFrac.psms) {
                        if (bestPsmScore < psm.pValue) {
                            bestPsm = psm;
                            bestPsmScore = bestPsm.pValue;
                        }
                    }
                }
            }
        }

        return bestPsm;
    }

    export function getBestFraction(supportPeptide: ISupportPeptide): string {
        let bestPsm: IPSM = null;
        let bestFraction: string;
        let bestPsmScore: number = -1;
        for (const sample of supportPeptide.peptide.samples) {
            const key: string = Object.keys(sample.fractions)[0];
            if (sample.fractions[key] !== undefined) {
                const castedFrac: IPeptideSampleFraction = sample.fractions[key];
                if (castedFrac.psms !== null && castedFrac.psms !== undefined) {
                    for (const psm of castedFrac.psms) {
                        if (bestPsmScore < psm.pValue) {
                            bestPsm = psm;
                            bestFraction = key;
                            bestPsmScore = bestPsm.pValue;
                        }
                    }
                }
            }
        }

        return bestFraction;
    }

    export function getBestPSMFromPeptide(peptide: Peptide): IPSM {
        for (const sample of peptide.samples) { //best psm is the first one that is found (b/c we query the server like that)
            for (const fraction of Object.keys(sample.fractions)) {
                for (const psm of sample.fractions[fraction].psms) {
                    return psm;
                }
            }
        }

        return null;
    }
}

export {PsmHelpers as PSMHelpers};
