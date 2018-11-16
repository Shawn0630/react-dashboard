import * as React from "react";
import * as styles from "./ActionButton.scss";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

interface ActionButtonProps<T> {
    data: T;
    title: string;
    icon: string;
    children?: any; //tslint:disable-line
    disabled?: boolean;
    style?: object;
    onClick(data: T): void;
}

function ActionButton<T>(props: ActionButtonProps<T>): JSX.Element { //tslint:disable-line
    function handleClick(event: React.SyntheticEvent<HTMLElement>): void {
        event.stopPropagation();
        props.onClick(props.data);
    }
    const disabled: boolean = props.disabled != null ? props.disabled : false;
    const style: object = props.style !== undefined ? props.style : {};

    return <IconButton disabled={disabled} className={styles.actionButton}
                       onClick={handleClick} title={props.title} style={style}>
        {props.children}
        <Icon>{props.icon}</Icon>
    </IconButton>;
}

export default ActionButton;
