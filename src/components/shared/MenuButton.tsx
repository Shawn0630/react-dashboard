import Button from "@material-ui/core/Button";
import { PopperPlacementType } from "@material-ui/core/Popper";
import * as React from "react";

import { PositionableMenu } from "./PositionableMenu";
import { PropTypes } from "@material-ui/core";

interface MenuButtonProps {
    id: string;
    button: React.ReactNode;
    color?: PropTypes.Color;
    variant?: "text" | "flat" | "outlined" | "contained" | "raised" | "fab" | "extendedFab";
    buttonClassName?: string;
    children: React.ReactNode;
    menuClassName?: string;
    placement?: PopperPlacementType;
}

interface MenuButtonStates {
    open: boolean;
}

export class MenuButton extends React.PureComponent<MenuButtonProps, MenuButtonStates> {
    private anchorEl: HTMLElement = null;

    constructor(props: MenuButtonProps) {
        super(props);

        this.state = {
            open: false
        };

        this.getButtonRef = this.getButtonRef.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    public render(): JSX.Element {

        return <div>
            <Button
                color={this.props.color == null ? "primary" : this.props.color}
                variant={this.props.variant == null ? "fab" : this.props.variant}
                buttonRef={this.getButtonRef}
                aria-owns={open ? "button-menu" : undefined}
                aria-haspopup="true"
                onClick={this.handleToggle}
            >
                {this.props.button}
            </Button>
            <PositionableMenu id={`${this.props.id}-menu`}
                anchorEl={this.anchorEl} placement={this.props.placement}
                open={this.state.open}
                onClose={this.handleClose()} style={{ zIndex: 1200 }}>
                {this.props.children}
            </PositionableMenu>
        </div>;
    }

    private getButtonRef(node: HTMLElement): void {
        this.anchorEl = node;
    }

    private handleToggle(): void {
        this.setState(state => ({ open: !state.open }));
    }
    private handleClose(): (event: React.ChangeEvent<HTMLElement>) => void {
        return (event: React.ChangeEvent<HTMLElement>): void => {
            if (this.anchorEl.contains(event.target)) {
                return;
            }

            this.setState({ open: false });
        };
    }
}
