import * as React from "react";
import { ModificationHelper } from "~utilities/modification-helper";
import * as styles from "./PTMCell.scss";
import { com } from "~models/example";
import Typography from "@material-ui/core/Typography";
import ModificationType = com.example.dto.ModificationType;

interface SimplifiedModification {
    name?: string;
    abbreviation?: string;
    type?: (string | ModificationType);
}

interface PTMCellProps {
    modifications?: SimplifiedModification[];
}

class PTMCell extends React.PureComponent<PTMCellProps> {
    public render(): React.ReactNode {
        const ptms: SimplifiedModification[] = this.props.modifications != null ? this.props.modifications : [];

        return <div style={{display: "inline-block"}}>
            {ptms.length > 0 ? ptms.map((modi, index) => {
                const colorStyle: string = ModificationHelper.getColorStyleFromPTMInTable(modi.abbreviation);
                const spanStyle: string = ModificationHelper.isMutation(modi.type)
                    ? colorStyle.concat(" ").concat(styles.mutation) : colorStyle;
                return <span key={index} title={modi.name} className={spanStyle}>
                    <Typography variant="subheading">
                        {modi.abbreviation != null ? modi.abbreviation.charAt(0) : ""}
                    </Typography>
                </span>;
            }) : <p dangerouslySetInnerHTML={{__html: "&nbsp;"}}/> // tslint:disable-line
            }
        </div>;
    }
}

export {PTMCell, SimplifiedModification};
