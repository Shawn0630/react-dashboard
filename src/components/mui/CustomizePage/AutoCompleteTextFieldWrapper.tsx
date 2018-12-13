import * as React from "react";
import AutoCompleteTextField, { Option } from "~/components/shared/AutoCompleteTextField";

const options: Option[] = [
    { value: "Oliver Hansen", label: "Oliver Hansen" },
    { value: "Van Henry", label: "Van Henry" },
    { value: "April Tucker", label: "April Tucker" },
    { value: "Ralph Hubbard", label: "Ralph Hubbard" },
    { value: "Omar Alexander", label: "Omar Alexander" },
    { value: "Carlos Abbott", label: "Carlos Abbott" },
    { value: "Miriam Wagner", label: "Miriam Wagner" },
    { value: "Bradley Wilkerson", label: "Bradley Wilkerson" },
    { value: "Virginia Andrews", label: "Virginia Andrews" },
    { value: "Kelly Snyder", label: "Kelly Snyder" },
];

export default function AutoCompleteTextFieldWrapper(): JSX.Element { // tslint:disable-line
    return <AutoCompleteTextField id="auto-complete" options={options}
                label="Names" fullWidth={true} placeholder="Select names" multi onChange={null}/>;
}
