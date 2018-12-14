import * as React from "react";
import * as styles from "./SpectrumView.scss";
import { ExperimentalSpectrum, SpectrumView, TheoreticalIonMatch } from "./SpectrumView";
import { IonHelpers } from "./ion-helpers";
import * as data from "../../../data/IonMatch.json";
import { com } from "~models/example";
import IFractionObservedIons = com.example.dto.IFractionObservedIons;
import IObservedIons = com.example.dto.IObservedIons;
import ITheoreticalIons = com.example.dto.ITheoreticalIons;
import TheoreticalIons = com.example.dto.TheoreticalIons;
import PsmIonMatch = com.example.dto.PsmIonMatch;
import IonType = com.example.dto.IonType;

export default class SpectrumViewPage extends React.PureComponent<null> {
    public render(): JSX.Element {
        const ionMatch: PsmIonMatch = PsmIonMatch.fromObject(data);
        // hack code to fetch data
        const fracObservedIons: IFractionObservedIons = ionMatch.fractionObservedIons["d64a7973-2e8c-432d-a87f-b175747c3e17"];
        const key: string = Object.keys(fracObservedIons.scanumObservedIons)[0];
        const observedIons: IObservedIons = fracObservedIons.scanumObservedIons[key];
        const theoreticalIons: ITheoreticalIons[] = ionMatch.theoreticalIons;
        const errorUnit: "da" | "ppm" = "da";
        const maxError: number = 0.5;
        const theoreticalIonMatch: TheoreticalIonMatch = {
            theoreticalIons:
                this.filterTheoreticalIons(theoreticalIons, ["#", "b", "b-H2O", "b-NH3", "b(2+)", "Seq", "y", "y-H2O", "y-NH3", "y(2+)"]) ,
            ions: observedIons.ions,
            sequence: ionMatch.sequence,
            maxError: maxError,
            errorUnit: errorUnit
        };
        const experimentalSpectrum: ExperimentalSpectrum = {
            mz: observedIons.spectrum.mz,
            intensity: observedIons.spectrum.intensity,
            basePeakIntensity: observedIons.spectrum.ms2Stats.basePeakIntensity
        };
        return <div className={styles.spectrumViewPage}>
            <SpectrumView id={"spectrumView-1"} showPercent
                    theoreticalIonMatch={theoreticalIonMatch} experimentalSpectrum={experimentalSpectrum} />
        </div>;
    }

    private filterTheoreticalIons(theoreticalIons: ITheoreticalIons[], columns: string[]): ITheoreticalIons[] {
        const filteredTheoreticalIons: ITheoreticalIons[] = [];
        const typeList: IonType[] = [];
        columns.map((column: string) => typeList.push(IonHelpers.nameToType(column)));
        theoreticalIons.map((theoreticalIon: ITheoreticalIons) => {
            let tempTheoreticalIon: ITheoreticalIons = theoreticalIon;
            if (typeof tempTheoreticalIon.type === "string") {
                tempTheoreticalIon = TheoreticalIons.fromObject(theoreticalIon);
            }
            if (typeList.indexOf(tempTheoreticalIon.type) !== -1) {
                filteredTheoreticalIons.push(tempTheoreticalIon);
            }
        });

        return filteredTheoreticalIons;
    }
}
