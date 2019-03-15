import * as styles from "../styles/shared.scss";
import { com } from "~models/example";
import ModificationType = com.example.dto.ModificationType;
import IPtmModification = com.example.dto.IPtmModification;
import IAbbreviatedModification = com.example.dto.IAbbreviatedModification;
import { PeptideLineModi } from "~components/mui/ProteinCoveragePage/CoverageCommonFunction";
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
    export function getColorFromPTMInCoverage(name: string): string {
        const colorCode: number = getHashCodeFromPTM(name, 9);
        let style: string;
        switch (colorCode) {
            case 0:
                style = "#F36D70";
                break;
            case 1:
                style = "#FFAD15";
                break;
            case 2:
                style = "#97A2FF";
                break;
            case 3:
                style = "#5ED3DD";
                break;
            case 4:
                style = "#DF8BCF";
                break;
            case 5:
                style = "#92E770";
                break;
            case 6:
                style = "#974806";
                break;
            case 7:
                style = "#31859B";
                break;
            case 8:
                style = "#944BC9";
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

    export function getPtmModiList(
        ptmMap: { [k: string]: IPtmModification }): IPtmModification[] {
        const ret: IPtmModification[] = [];
        if (ptmMap != null) {
            Object.keys(ptmMap).forEach((key) => {
                ret.push(ptmMap[key]);
            });
        }
        return ret;
    }
    export function getAbbrModiList(
        modiStringList: string[], ptmMap: { [k: string]: IPtmModification }): IAbbreviatedModification[] {
        const ret: IAbbreviatedModification[] = [];
        for (const modi of modiStringList) {
            const newModi: IAbbreviatedModification = {
                name: ptmMap[modi].name,
                abbreviation: ptmMap[modi].abbreviation,
                monoMass: ptmMap[modi].monoMass,
                type: ptmMap[modi].type
            };
            ret.push(newModi);
        }
        return ret;
    }
    export function getSimpleModiList(
        modiStringList: string[], ptmMap: { [k: string]: IPtmModification }): SimplifiedModification[] {
        const ret: SimplifiedModification[] = [];
        for (const modi of modiStringList) {
            const newModi: SimplifiedModification = {
                name: ptmMap[modi].name,
                abbreviation: ptmMap[modi].abbreviation,
                type: ptmMap[modi].type
            };
            ret.push(newModi);
        }
        return ret;
    }
    export function getPeptideAbbrModiList(
        modiStringList: string[], positionList: number[],
        ptmMap: { [k: string]: IPtmModification }): PeptideLineModi[] {
        const ret: PeptideLineModi[] = [];
        const length: number = modiStringList.length;
        for (let sub: number = 0; sub < length; sub += 1) {
            const position: number = positionList[sub];
            const newModi: IAbbreviatedModification = {
                name: ptmMap[modiStringList[sub]].name,
                abbreviation: ptmMap[modiStringList[sub]].abbreviation,
                monoMass: ptmMap[modiStringList[sub]].monoMass,
                type: ptmMap[modiStringList[sub]].type
            };

            if (positionList.indexOf(position) !== sub) {
                //check if there is another modification at the same position
                ret[positionList.indexOf(position)].modifications.push(newModi);
            } else {
                const modis: IAbbreviatedModification[] = [];
                modis.push(newModi);
                ret.push({
                    startX: 0,
                    startY: 0,
                    height: 0,
                    width: 0,
                    modifications: modis
                });
            }
        }
        return ret;
    }
}

export {ModificationHelper, CATEGORY};
