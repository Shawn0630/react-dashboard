import * as React from "react";
import { disableCursorStyle } from "~/Theme";

interface InputFieldProps {
    value: string;
    index?: number;
    disabled?: boolean;
    type?: string;
    onChange(data: string, index: number): void;
}

function InputField(props: InputFieldProps): JSX.Element { //tslint:disable-line
    function handleChange(event: React.SyntheticEvent<HTMLInputElement>): void {
        props.onChange(event.currentTarget.value, props.index);
    }

    return <input autoFocus key={props.index} value={props.value} onBlur={handleChange}
                  onChange={handleChange} disabled={props.disabled} type={props.type}
                  style={props.disabled ? disableCursorStyle : null}/>;
}

export {InputField};
