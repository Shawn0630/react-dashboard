const patternRegex: RegExp = new RegExp("^[A,C-I,K-N,P-T,VWY]+$");
const allowedCharacters: string = "ACDEFGHIKLMNPQRSTVWY";

interface EnzymePattern {
    cutSet: string;
    restrictSet: string;
    cutSide: string;
}

interface Enzyme {
    name: string;
    patterns: EnzymePattern[];
    builtin?: boolean;
    creatorId?: string;
}

const DEFAULT_ENZYME: Enzyme = {
    name: "",
    patterns: [],
    builtin: false
};

const DEFAULT_PATTERN: EnzymePattern = {
    cutSet: "",
    cutSide: "",
    restrictSet: ""
};

export {Enzyme, EnzymePattern, patternRegex, allowedCharacters, DEFAULT_ENZYME, DEFAULT_PATTERN};
