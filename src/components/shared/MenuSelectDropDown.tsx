import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import * as React from "react";

interface MenuSelectDropDownProps {
    id: string;
    defaultValue?: string;
    value?: string | string[] | number;
    label?: string;
    labelClassName?: string;
    className?: string;
    disabled?: boolean;
    labelStyle?: object;
    style?: object;
    maxRows?: number;
    helperMessage?: string;
    errorMessage?: string;
    errorStyle?: object;
    children?: any; //tslint:disable-line
    multiple?: boolean;
    onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
}

function MenuSelectDropDown(props: MenuSelectDropDownProps): JSX.Element { //tslint:disable-line
    return <FormControl className={props.className} disabled={props.disabled}>
        {
            props.label == null ? null :
            <InputLabel shrink htmlFor={`${props.id}-input-label`} error={props.errorMessage !== undefined && props.errorMessage !== ""}>
                {props.label}
            </InputLabel>
        }
        {
        <Select
            multiple={props.multiple != null && props.multiple === true }
            onChange={props.onChange}
            MenuProps={{
                style: {
                    maxHeight: 560,
                },
                getContentAnchorEl: null,
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left",
                }
            }}
            value={props.value}
            renderValue={props.multiple != null && props.multiple === true ?
                (values: string[]) => { return values.join(",") } : null} //tslint:disable-line
            input={<Input id={`${props.id}-input-label`} />}
            rowsMax={props.maxRows}
        >
            {props.children}
        </Select>
        }
        {
            <FormHelperText error={props.errorMessage !== undefined && props.errorMessage !== ""}>
                {props.helperMessage !== undefined ? props.helperMessage : props.errorMessage}
            </FormHelperText>
        }
    </FormControl>;
}

export { MenuSelectDropDown };
