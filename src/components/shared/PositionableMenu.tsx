import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuList from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import Popper, { PopperPlacementType } from "@material-ui/core/Popper";
import { DefaultStylings } from "../../Theme"; //tslint:disable-line
import * as React from "react";

interface PositionableMenuProps {
    open: boolean;
    id: string;
    placement?: PopperPlacementType;
    anchorEl?: null | HTMLElement | ((element: HTMLElement) => HTMLElement);
    children: React.ReactNode;
    style?: object;
    onClose(event: React.ChangeEvent<{}>): void;
}

function PositionableMenu(props: PositionableMenuProps): JSX.Element { //tslint:disable-line
    return <Popper id={props.id} open={props.open} anchorEl={props.anchorEl}
        placement={props.placement == null ? DefaultStylings.POPPER_AT_THE_BOTTOM : props.placement}
        style={props.style}
    >
    {({ TransitionProps, placement }) => (
        <Paper>
            <ClickAwayListener onClickAway={props.onClose}>
                <MenuList>
                    {props.children}
                </MenuList>
            </ClickAwayListener>
        </Paper>)
    }
    </Popper>;
}

export {PositionableMenu};
