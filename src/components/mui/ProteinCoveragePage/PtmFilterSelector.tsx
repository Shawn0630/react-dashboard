import { Typography } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import * as React from "react";
import { MenuButton } from "~/components/shared/MenuButton";
import { ModificationHelper } from "~/utilities/modification-helper";
import { com } from "~models/example";

import * as styles from "./ProteinCoverage.scss";

import IAbbreviatedModification = com.example.dto.IAbbreviatedModification;
import ISupportPeptide = com.example.dto.ISupportPeptide;
import IPtmModification = com.example.dto.IPtmModification;
import IProteinPeptide = com.example.dto.IProteinPeptide;
interface PtmFilterSelectorProps {
    proteinPeptide: IProteinPeptide;
    ptmMap: { [k: string]: IPtmModification };
    selectedModifications: { [name: string]: boolean };
    updatePtm(value: string, checked: boolean): void;
}

interface PtmFilterSelectorState {
    modificationAnchorEl: HTMLElement;
}
export default class PtmFilterSelector extends React.PureComponent<PtmFilterSelectorProps, PtmFilterSelectorState> {
    constructor(props: PtmFilterSelectorProps) {
        super(props);

        this.state = {
            modificationAnchorEl: null,
        };
        this.handleClickPtmModification = this.handleClickPtmModification.bind(this);
        this.handleClosePtmModification = this.handleClosePtmModification.bind(this);
        this.handlePTMFilter = this.handlePTMFilter.bind(this);
    }
    public render(): React.ReactNode {
        const modifications: IAbbreviatedModification[] = [];
        if (this.props.proteinPeptide != null) {
            this.props.proteinPeptide.peptides.map((peptide: ISupportPeptide) => {
                const modisPerPeptide: IAbbreviatedModification[] =
                    ModificationHelper.getAbbrModiList(peptide.peptide.modifications, this.props.ptmMap);

                modisPerPeptide.map((modi: IAbbreviatedModification) => {
                    if (!this.checkIsExist(modifications, modi)) {
                        modifications.push(modi);
                    }
                });
            });
        }

        return <div className={styles.ptmFilterSelector}>
            <MenuButton id={"ptm-menu"} color="primary" variant="flat" buttonClassName={styles.legendButton}
                button={"PTM Filter"}>
                {modifications.map((modi: IAbbreviatedModification, index: number) => {
                    const colorStyle: string = ModificationHelper.getColorStyleFromPTMInTable(modi.abbreviation);
                    const spanStyle: string = ModificationHelper.isMutation(modi.type)
                        ? colorStyle.concat(" ").concat(styles.mutation) : colorStyle;
                    const ptm: JSX.Element = <div key={`checkbox-label-${index}`}>
                        <span title={modi.name} className={spanStyle}>
                            <Typography variant="subheading">
                                {modi.abbreviation.charAt(0)}
                            </Typography>
                        </span>
                        <span className={styles.ptmFilter}>
                            {`${modi.name}(${modi.monoMass > 0 ? "+" : ""}${modi.monoMass.toFixed(2)})`}
                        </span>
                    </div>;
                    return <FormControlLabel key={modi.name} label={ptm} value={modi.name}
                        onChange={this.handlePTMFilter} className={styles.ptmLabel}
                        control={<Checkbox color="primary" checked={this.props.selectedModifications[modi.name]}
                            disableRipple className={styles.ptmCheckbox} key={`checkbox-${index}`} />} />;
                })
                }
                </MenuButton>
        </div>;
    }
    private checkIsExist(modis: IAbbreviatedModification[], modification: IAbbreviatedModification): boolean {
        for (const modi of modis) {
            if (this.isSameModification(modi, modification)) {
                return true;
            }
        }

        return false;
    }
    private handlePTMFilter(event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void {
        this.props.updatePtm(event.target.value, checked);
    }
    private isSameModification(a: IAbbreviatedModification, b: IAbbreviatedModification): boolean {
        if (a.abbreviation === b.abbreviation && a.name === b.name && a.monoMass === b.monoMass) {
            return true;
        }
        return false;
    }
    private handleClickPtmModification(event: React.SyntheticEvent<HTMLElement>): void {
        this.setState({ modificationAnchorEl: event.currentTarget });
    }
    private handleClosePtmModification(): void {
        this.setState({ modificationAnchorEl: null });
    }
}
