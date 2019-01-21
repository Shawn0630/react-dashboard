import * as styles from "../styles/shared.scss";
import { com } from "~models/example";
import ModificationType = com.example.dto.ModificationType;
type CATEGORY = "ALL" | "RECENT" | "COMMON" | "CUSTOMIZED";

namespace ModificationHelper {
    function getHashCodeFromPTM(name: string, range: number): number {
        let hash: number = 0;

        if (name == null || name.length === 0) {
            return hash;
        }
        let i: number = 0;
        for (; i < name.length; i = i + 1) {
            // tslint:disable-next-line
            hash = ((hash << 5) - hash) + name.charCodeAt(i);
            // tslint:disable-next-line
            hash = hash & hash;

        }

        return Math.abs(hash % range);

    }
    export function isMutation(type: (string | ModificationType)): boolean {
        if (type == null) {
            return false;
        } else if (
            type === ModificationType.MUTATION ||
            type === ModificationType.INSERTION ||
            type === ModificationType.DELETION
        ) {
            return true;
        } else if (
            type === "MUTATION" ||
            type === "INSERTION" ||
            type === "DELETION"
        ) {
            return true;
        }

        return false;
    }
    export function getColorStyleFromPTMInCoverage(name: string): string {
        const colorCode: number = getHashCodeFromPTM(name, 9);
        let style: string;
        switch (colorCode) {
            case 0:
                style = styles.ptmInCoverageColorOne;
                break;
            case 1:
                style = styles.ptmInCoverageColorTwo;
                break;
            case 2:
                style = styles.ptmInCoverageColorThree;
                break;
            case 3:
                style = styles.ptmInCoverageColorFour;
                break;
            case 4:
                style = styles.ptmInCoverageColorFive;
                break;
            case 5:
                style = styles.ptmInCoverageColorSix;
                break;
            case 6:
                style = styles.ptmInCoverageColorSeven;
                break;
            case 7:
                style = styles.ptmInCoverageColorEight;
                break;
            case 8:
                style = styles.ptmInCoverageColorNine;
                break;
            default:
                style = null;
        }

        return style;
    }
    export function getColorStyleFromPTMInTable(name: string): string {
        const colorCode: number = getHashCodeFromPTM(name, 9);
        let style: string;
        switch (colorCode) {
            case 0:
                style = styles.ptmInTableColorOne;
                break;
            case 1:
                style = styles.ptmInTableColorTwo;
                break;
            case 2:
                style = styles.ptmInTableColorThree;
                break;
            case 3:
                style = styles.ptmInTableColorFour;
                break;
            case 4:
                style = styles.ptmInTableColorFive;
                break;
            case 5:
                style = styles.ptmInTableColorSix;
                break;
            case 6:
                style = styles.ptmInTableColorSeven;
                break;
            case 7:
                style = styles.ptmInTableColorEight;
                break;
            case 8:
                style = styles.ptmInTableColorNine;
                break;
            default:
                style = null;
        }

        return style;
    }
}

export {ModificationHelper, CATEGORY};
