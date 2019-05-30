export interface SpectrumFilterParameters {
    maxFDR?: number;
    minPValue?: number;
    presentReferenceChannel?: boolean;
    quality?: number;
    minReporterIonIntensity?: number;
    minPresentChannelCount?: number;
}

export enum NormalizationMethodType {
    NO_NORMALIZATION = 0,
    MANUAL_NORMALIZATION = 1,
    SPIKE_NORMALIZATION = 2,
    AUTO_NORMALIZATION = 3
}

export interface ReporterIonQNormalization {
    normalizationMethod: NormalizationMethodType;
    manualExpectedRatios?: number[];
    spikedExpectedRatios?: number[];
    spikedProteinHitIdList?: string[];
}

export interface LfqSimpleProtein {
    accession?: string;
    id?: string;
}
