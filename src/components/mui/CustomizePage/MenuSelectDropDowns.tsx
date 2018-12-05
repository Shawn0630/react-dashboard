import * as React from "react";
import { createStyles, StyledComponentProps, Theme, withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import { MenuSelectDropDown } from "~components/shared//MenuSelectDropDown";

const names: string[] = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
];
const menus: JSX.Element[] = names.map(name => (
    <MenuItem id={name} key={name} value={name}>
        <ListItemText primary={name}/>
    </MenuItem>
));

const styles: any = (theme: Theme) => createStyles({ //tslint:disable-line
    selectField: {
        minWidth: "270px",
        marginRight: "20px",

        "&hr :last-child": {
            display: "none"
        }
    },
    multiSelectField: {
        minWidth: "270px",
        marginRight: "20px",
        verticalAlign: "top",
        maxWidth: "560px",

        "&hr :last-child": {
            display: "none"
        }
    },
    root: {
        display: "flex",
        flexWrap: "wrap",
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
        maxWidth: 300,
    },
    chips: {
        display: "flex",
        flexWrap: "wrap",
    },
    chip: {
        margin: theme.spacing.unit / 4,
    },
    noLabel: {
        marginTop: theme.spacing.unit * 3,
    },
});

interface MenuSelectDropDownStates {
    names: string[];
}

export default withStyles(styles)(class MenuSelectDropDowns extends React.PureComponent<StyledComponentProps, MenuSelectDropDownStates> { //tslint:disable-line

    constructor(props: StyledComponentProps) {
        super(props);

        this.state = {
            names: []
        };
        this.selectNames = this.selectNames.bind(this);
    }

    public render(): JSX.Element {
        return <div>
            <MenuSelectDropDown id="precursor-unit-drop-down" className={this.props.classes.multiSelectField} multiple={true}
                labelStyle={{color: "black"}} style={{width: 120}} label="Names" onChange={this.selectNames}
                value={this.state.names}>
                {menus}
            </MenuSelectDropDown>
        </div>;
    }

    private selectNames(event: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({
            names: this.state.names.indexOf(event.currentTarget.getAttribute("data-value")) < 0 ?
                this.state.names.concat(event.currentTarget.getAttribute("data-value")) :
                this.state.names.filter(name => name !== event.currentTarget.getAttribute("data-value"))
        });
    }
});
