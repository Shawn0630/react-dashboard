import * as React from "react";
import { com } from "~models/example";
import IFileNode = com.example.dto.IFileNode;
import DataNav from "./DataNav";
import DataList from "./DataList";
import { Source } from "./DataItem";
import { Panel } from "react-bootstrap";

interface FileBrowserWrapperProps {
    root: IFileNode;
}

interface FileBrowserWrapperStates {
    cur: IFileNode;
    path: IFileNode[];
    selected: IFileNode[];
}

export default class FileBrowserPage extends React.PureComponent<FileBrowserWrapperProps, FileBrowserWrapperStates> {
    constructor(props: FileBrowserWrapperProps) {
        super(props);

        this.state = {
            cur: props.root,
            path: [props.root],
            selected: []
        };

        this.openDir = this.openDir.bind(this);
        this.selectItem = this.selectItem.bind(this);
        this.toNode = this.toNode.bind(this);
    }

    public render(): JSX.Element {
        return <Panel>
            <Panel.Body>
                <DataList root={this.state.cur} source={Source.LOCAL} openDir={this.openDir} selectItem={this.selectItem}
                      selected={this.state.selected}/>
            </Panel.Body>
            <Panel.Footer>
                <DataNav path={this.state.path} onClick={this.toNode} />
            </Panel.Footer>
        </Panel>;
    }

    private openDir(item: IFileNode): void {
       this.setState({
           cur: item,
           path: this.state.path.concat(item),
           selected: []
       });
    }

    private selectItem(item: IFileNode): void {
        this.setState({
            selected: this.state.selected.indexOf(item) < 0 ?
                      this.state.selected.concat(item) : this.state.selected.filter((selected: IFileNode) => selected !== item)
        });
    }

    private toNode(item: IFileNode): void {
        this.setState({
            cur: item,
            path: this.state.path.slice(0, this.state.path.indexOf(item) + 1)
        });
    }
}
