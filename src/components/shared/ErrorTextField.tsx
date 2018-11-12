import * as React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";

interface ErrorTextFieldProps {
    id: string;
    value: string | number;
    label?: string;
    helperText?: string;
    errorText?: string;
    labelClassName?: string;
    className?: string;
    placeholder?: string;
    disabled?: boolean;
    labelStyle?: object;
    inputType?: string;
    fullWidth?: boolean;
    onChange?(data: string): void;
    onBlur?(): void;
}

function ErrorTextField(props: ErrorTextFieldProps): JSX.Element { //tslint:disable-line
    const handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (event: React.ChangeEvent<HTMLInputElement>): void => {
        props.onChange(event.target.value);
    };

    return <FormControl disabled={props.disabled} fullWidth={props.fullWidth}
            className={props.className} id={`${props.id}-form-control`}>
        <InputLabel onBlur={props.onBlur} disabled={props.disabled} className={props.labelClassName}
            shrink={true} id={`${props.id}-label`} style={props.labelStyle}
            error={props.errorText !== undefined && props.errorText !== ""}>
            {props.label}
        </InputLabel>
        <Input disabled={props.disabled} id={`${props.id}-input`} type={props.inputType}
            onChange={handleChange} error={props.errorText !== undefined && props.errorText !== ""}
            value={props.value} placeholder={props.placeholder}
        />
        {props.helperText !== undefined ?
        <FormHelperText disabled={props.disabled} id={`${props.id}-helper`}>{props.helperText}</FormHelperText> :
        <FormHelperText disabled={props.disabled && (props.errorText == null || props.errorText === "")} id={`${props.id}-error`}
                        error={props.errorText !== undefined && props.errorText !== ""}>{props.errorText}</FormHelperText>
        }
    </FormControl>;
}

export {ErrorTextField};
