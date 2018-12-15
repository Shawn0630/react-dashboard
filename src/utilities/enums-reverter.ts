/*
const enums: PeaksEnums = {
    activationMethods: Map<string, string>({
        "CID, CAD(y and b ions)": "CID",
        "high energy CID (y and b ions)": "HighCID",
        "ECD, ETD (c and z ions)": "ECD",
        "Alternative scan mode": "MIX",
        "IRMPD": "IRMPD",
        "PQD (pulsed Q collision induced dissociation)": "PQD"
    }),
    fastaIdPatterns: Map<string, string>({
        "NCBI_Accession": "^([A-Z0-9_]+\\.\\d+)",
        "UniProtKb": "^\\w+\\|(\\S+)",
        "NCBI_GI": "^(gi\\|[0-9]*)",
        "None": "^(\\S+)"
    }),
    fastaDescriptionPatterns: Map<string, string>({
        "NCBI_Accession": "^\\S+\\s+(.*)$",
        "UniProtKb": "^\\S+\\s+(.*)$",
        "NCBI_GI": "^\\S+\\s+(.*)$",
        "None": "^\\S+\\s+(.*)$"
    }),
    fastaTypes: Map<string, string>({
        "NCBI nr (GI)": "NCBI_GI",
        "NCBI nr (Accession)": "NCBI_Accession",
        "UniProtKB (Swiss-Prot, TrEMBL, ...)": "UniProtKb",
        "Other": "None"
    }),
    modificationTypes: Map<string, string>({
        "PTM": "PTM",
        "Mutation": "MUTATION",
        "Insertion": "INSERTION",
        "Deletion": "DELETION"
    }),
    modificationSources: Map<string, string>({
        "Peaks": "PEAKS",
        "Unimod": "UNIMOD",
        "User": "USER",
        "Unknown": "UNKNOWN"
    }),
    modificationCategories: Map<string, string>({
        "Artificial": "ARTIFICIAL",
        "Common": "COMMON",
        "Uncommon": "UNCOMMON",
        "Customized": "CUSTOMIZED"
    }),
    toleranceUnit: Map<string, string>({
        "ppm": "PPM",
        "Da": "DA",
    }),
    enzymeSpecificity: Map<string, string>({
        "Full": "Full",
        "Semi": "Semi",
        "None": "None",
    })
}
*/

function revert<T>(collection: {[key: string]: T}, value: T): string {
    for (const key of Object.keys(collection)) {
        if (collection[key] === value) {
            return key;
        }
    }

    return null;
}

export {revert};
