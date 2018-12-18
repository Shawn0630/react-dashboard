import * as React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ArrowRightIcon from "@material-ui/icons/ArrowRight"; //tslint:disable-line:import-name
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"; //tslint:disable-line:import-name

type ListItemType = { text: string };

interface ExpandableDataItemProps<T extends ListItemType> {
    data: T;
    open: boolean;
    selected: boolean;
    children: React.ReactNode;

    onClick(item: T): void;
}

interface ExpandableDataItemStates {
    open: boolean;
}

export default class ExpandableDataItem<T extends ListItemType> extends React.PureComponent<ExpandableDataItemProps<T>,
ExpandableDataItemStates> {
    constructor(props: ExpandableDataItemProps<T>) {
        super(props);

        this.state = {
            open: this.props.open != null ? false : this.props.open
        };

        this.toggleMenu = this.toggleMenu.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    public render(): JSX.Element {
        return <React.Fragment>
            <ListItem button style={{paddingLeft: 0, paddingRight: 0}} onClick={this.onClick}>
                <ListItemIcon onClick={this.toggleMenu} style={{marginRight: 0}}>
                {
                    this.state.open ? <ArrowDropDownIcon fontSize="small" style={{ zIndex: 1000 }} /> :
                        <ArrowRightIcon fontSize="small" style={{ zIndex: 1000 }} />
                }
                </ListItemIcon>
                <ListItemText primary={this.props.data.text} style={{paddingLeft: 0}}/>
            </ListItem>
            <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                {this.props.children}
            </Collapse>
        </React.Fragment>;
    }

    private toggleMenu(): void {
        this.setState({
            open: !this.state.open
        });
    }

    private onClick(): void {
        this.props.onClick(this.props.data);
    }

}

export { ListItemType };
