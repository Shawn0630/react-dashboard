import * as React from "react";
import { Breadcrumb, Button } from "react-bootstrap";
import { com } from "~models/example";
import * as styles from "./FileBrowser.scss";
import IFileNode = com.example.dto.IFileNode;

interface DataNavProps {
    path: IFileNode[];

    onClick(item: IFileNode): void;
}

export default function DataNav(props: DataNavProps): JSX.Element { // tslint:disable-line
    return <Breadcrumb className={styles.dataNav}>
        {
            props.path.map((item: IFileNode, index: number) =>
                <Breadcrumb.Item active={index === props.path.length - 1}>
                    <Button bsSize="xsmall" onClick={onClick(item)}>{item.filename}</Button>
                </Breadcrumb.Item>)
        }
    </Breadcrumb>;

    function onClick(item: IFileNode): (event: React.MouseEvent<Button>) => void {
        return (event: React.MouseEvent<Button>): void => {
            props.onClick(item);
        };
    }
}
