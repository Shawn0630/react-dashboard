import { Input } from "antd";
import * as React from "react";
import styled from "./type"; //tslint:disable-line

const StyledInput = styled(Input) // tslint:disable-line
`
  color: ${props => props.color ? props.color : "#181919"};
  border-width: 1px;
  border-color: ${props => props.focused ? "#181919" : "transparent"};
  background-color: transparent;
  width: auto;
  height: auto;
  text-align: center;
`;

interface EditTextProps {
    value: string;
    size: string;
    placeholder: string;

    color?: string;
    focused?: boolean;

    onChange(value: string): void;

}

function EditText(props: EditTextProps): JSX.Element { //tslint:disable-line
    return <StyledInput
        onFocus={onFocus}
        onBlur={onBlur}
        onPressEnter={onBlur}
        size={props.size}
        value={props.value}
        onChange={onChange}
        placeholder={props.placeholder}
    />;

    function onFocus(event: React.FocusEvent<HTMLInputElement>): void {
        return event.target.select();
    }
    function onBlur(event: React.FocusEvent<HTMLInputElement>): void {
        return event.target.blur();
    }
    function onChange(event: React.ChangeEvent<HTMLInputElement>): void {
        return props.onChange(event.target.value);
    }
}

export default EditText;
