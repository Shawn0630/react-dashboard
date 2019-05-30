import * as React from "react";
import * as styles from "./DropDownSelector.scss";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert"; // tslint:disable-line
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import { PositionableMenu } from "./PositionableMenu";

interface DropdownSelectorProps {
    label?: string;
    type?: string;
    helperText?: string;
    errorText?: string;
    className?: string;
    value: string | number;
    options: { [key: string]: string | number };
    disabled?: boolean;
    visible?: boolean;
    fullWidth?: boolean;
    onChange(value: string): void;
    handleClick?(event: React.SyntheticEvent<HTMLElement>): void;
    handleClose?(): void;
}

interface DropdownSelectorStates {
    menuOpen: boolean;
}

class DropdownSelector extends React.PureComponent<DropdownSelectorProps, DropdownSelectorStates> {
    private anchorEl: HTMLElement = null;
    constructor(props: DropdownSelectorProps) {
        super(props);

        this.state = {
            menuOpen: false
        };

        this.onFieldChange = this.onFieldChange.bind(this);
        this.onSelectChange = this.onSelectChange.bind(this);
        this.getButtonRef = this.getButtonRef.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    public render(): JSX.Element {
        if (this.props.visible != null && !this.props.visible) {
            return null;
        }

        console.log(this.props.disabled);
        return <div className={`${this.props.className} ${styles.dropdownWrapper}`}>
            <FormControl disabled={this.props.disabled} className={`${styles.newDropdownSelector}`}>
                <InputLabel disabled={this.props.disabled} shrink={true}
                    error={this.props.errorText !== undefined && this.props.errorText !== ""}>
                    {this.props.label}
                </InputLabel>
                <Input error={this.props.errorText !== undefined && this.props.errorText !== ""}
                    value={this.props.value} onChange={this.onFieldChange} fullWidth={this.props.fullWidth}
                    disabled={this.props.disabled != null ? this.props.disabled : false}
                    type={this.props.type} className={`${styles.txtDropdown}`}>
                </Input>
                {this.props.helperText !== undefined ?
                    <FormHelperText disabled={this.props.disabled}>{this.props.helperText}</FormHelperText> :
                    <FormHelperText disabled={this.props.disabled && (this.props.errorText == null || this.props.errorText === "")}
                        error={this.props.errorText !== undefined && this.props.errorText !== ""}>{this.props.errorText}
                    </FormHelperText>
                }
            </FormControl>
            <IconButton
                aria-owns={this.anchorEl != null ? "icon-menu" : null}
                aria-haspopup="true" disabled={this.props.disabled}
                buttonRef={this.getButtonRef}
                onClick={this.handleToggle}>
                <MoreVertIcon />
            </IconButton>
            <PositionableMenu id="icon-menu" anchorEl={this.anchorEl} style={{zIndex: 10000}}
                open={this.state.menuOpen} onClose={this.handleClose()}>
                {Object.keys(this.props.options).map((key: string, index: number) => {
                    const value: string | number = this.props.options[key];

                    return <MenuItem onClick={this.onSelectChange} key={index} value={value}>{key}</MenuItem>;
                })}
            </PositionableMenu>
        </div>;
    }
    private onFieldChange(event: React.ChangeEvent<HTMLInputElement>): void {
        this.props.onChange(event.currentTarget.value);
    }
    private onSelectChange(event: React.MouseEvent<HTMLSelectElement>): void {
        if (this.props.disabled) {
            return;
        }
        this.props.onChange(event.currentTarget.getAttribute("value"));
        this.setState({ menuOpen: false });
    }
    private handleClose(): (event: React.ChangeEvent<HTMLElement>) => void {
        return (event: React.ChangeEvent<HTMLElement>): void => {
            if (this.anchorEl.contains(event.target)) {
                return;
            }

            this.setState({ menuOpen: false });

            if (this.props.handleClose != null) {
                this.props.handleClose();
            }
        };
    }
    private getButtonRef(node: HTMLElement): void {
        this.anchorEl = node;
    }
    private handleToggle(event: React.SyntheticEvent<HTMLElement>): void {
        event.stopPropagation();
        this.setState(state => ({ menuOpen: !state.menuOpen }));
        if (this.props.handleClick != null) {
            this.props.handleClick(event);
        }
    }
}

export { DropdownSelector };
