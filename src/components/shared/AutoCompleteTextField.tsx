import * as React from "react";
import Select from "react-select"; // tslint:disable-line
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";

interface Option {
    value: string;
    label: string;
}

interface AutoCompleteTextFieldProps {
    id: string;
    options: Option[];
    defaultValue?: Option[];
    label?: string;
    helperText?: string;
    errorText?: string;
    placeholder?: string;
    labelClassName?: string;
    className?: string;
    disabled?: boolean;
    labelStyle?: object;
    inputType?: string;
    fullWidth?: boolean;
    multi?: boolean;
    onChange?(values: Option[]): void;
}

const style: any = { // tslint:disable-line
    container: () => ({
        paddingTop: 20
    }),
    menu: () => ({
        position: "relative",
        height: 110
    }),
    menuList: () => ({
        maxHeight: 110,
        overflowY: "scroll"
    })
};

export default function AutoCompleteTextField(props: AutoCompleteTextFieldProps) { // tslint:disable-line
    return <FormControl disabled={props.disabled} fullWidth={props.fullWidth}
        className={props.className} id={`${props.id}-form-control`} style={{ height: 180 }}>
        <InputLabel disabled={props.disabled} className={props.labelClassName} shrink
            id={`${props.id}-label`} style={props.labelStyle} htmlFor={`${props.id}-select`}
            error={props.errorText !== undefined && props.errorText !== ""} disableAnimation>
            {props.label}
        </InputLabel>
        <Select
            styles={style}
            isDisabled={props.disabled}
            id={`${props.id}-select`}
            isMulti={props.multi}
            placeholder={props.placeholder}
            defaultValue={props.defaultValue}
            options={props.options}
            onChange={onChange} />
        {props.helperText !== undefined ?
            <FormHelperText disabled={props.disabled} id={`${props.id}-helper`}>{props.helperText}</FormHelperText> :
            <FormHelperText
                disabled={props.disabled && (props.errorText == null || props.errorText === "")}
                id={`${props.id}-error`}
                error={props.errorText !== undefined && props.errorText !== ""}>{props.errorText}</FormHelperText>
        }
    </FormControl>;

    function onChange(values: Option[]): void {
        if (props.onChange != null) {
            props.onChange(values);
        }
    }
}

export { Option };
