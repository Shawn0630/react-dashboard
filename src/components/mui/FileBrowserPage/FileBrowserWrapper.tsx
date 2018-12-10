import * as React from "react";
import * as styles from "./FileBrowser.scss";
import { com } from "~models/example";
import IFileNode = com.example.dto.IFileNode;
import Type = com.example.dto.FileNode.Type;
import DataNav from "./DataNav";
import DataList from "./DataList";
import { Source } from "./DataItem";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search"; // tslint:disable-line:import-name
import { lastN } from "~/utilities/array-helper";

interface FileBrowserWrapperProps {
    root: IFileNode;
}
interface Node extends IFileNode {
    source?: Source;
}

interface FileBrowserWrapperStates {
    cur: Node;
    path: Node[];
    selected: Node[];
    disabled: Node[];
    searchPattern: string;
    selectAll: boolean;
    existingFiles: File[];
}

const BROWSER_UPLOAD: string = "Browser Upload";
export default class FileBrowserPage extends React.PureComponent<FileBrowserWrapperProps, FileBrowserWrapperStates> {
    constructor(props: FileBrowserWrapperProps) {
        super(props);

        this.state = {
            cur: props.root,
            path: [props.root],
            selected: [],
            disabled: [],
            searchPattern: "",
            selectAll: false,
            existingFiles: []
        };

        this.openDir = this.openDir.bind(this);
        this.selectItem = this.selectItem.bind(this);
        this.toNode = this.toNode.bind(this);
        this.addData = this.addData.bind(this);
        this.toParent = this.toParent.bind(this);
        this.changeSearchPattern = this.changeSearchPattern.bind(this);
        this.checkHeader = this.checkHeader.bind(this);
    }

    public render(): JSX.Element {
        return <React.Fragment>
                <DataNav path={this.state.path} onClick={this.toNode} />
                <div>
                    <FormControlLabel label="Select All" className={styles.selectAll}
                        control={
                            <Checkbox color="primary" onChange={this.checkHeader} checked={this.state.selectAll} />
                        } />
                    <FormControl className={styles.searchLegend}>
                        <Input
                            id="input-with-icon-adornment"
                            value={this.state.searchPattern}
                            onChange={this.changeSearchPattern}
                            startAdornment={
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </div>
            <Paper className={styles.filePanel}>
                <DataList root={this.state.cur} openDir={this.openDir} selectItem={this.selectItem} toParent={this.toParent}
                    selected={this.state.selected} disabled={this.state.disabled} addData={this.addData}
                    acceptLocal={this.state.cur === this.props.root || this.state.cur.source === Source.LOCAL}/>
            </Paper>
        </React.Fragment>;
    }

    private openDir(item: Node): void {
       this.setState({
           cur: item,
           path: this.state.path.concat(item),
           selected: [],
           selectAll: false
       });
    }

    private selectItem(item: Node): void {
        let fileCount: number = 0;
        this.state.cur.children.map((node: IFileNode) => node.type === Type.FILE ? fileCount = fileCount + 1 : null);
        const selected: IFileNode[] = this.state.selected.indexOf(item) < 0 ?
            this.state.selected.concat(item) : this.state.selected.filter((node: IFileNode) => node !== item);
        this.setState({
            selected: selected,
            selectAll: selected.length === fileCount
        });
    }

    private toNode(item: Node): void {
        this.setState({
            cur: item,
            path: this.state.path.slice(0, this.state.path.indexOf(item) + 1)
        });
    }

    private addData(items: FileList): void {
        const children: Node[] = this.state.existingFiles.map((file: File) => {
            return {
                filename: file.name,
                type: Type.FILE,
                source: Source.LOCAL,
                children: []
            };
        });
        const existingFiles: File[] = this.state.existingFiles;
        const existingFileNames: string[] = this.state.existingFiles.map((file: File) => file.name);
        for (let i: number = 0; i < items.length; i = i + 1) {
            if (existingFileNames.indexOf(items.item(i).name) < 0) {
                children.push({
                    filename: items.item(i).name,
                    type: Type.FILE,
                    source: Source.LOCAL,
                    children: []
                });
                existingFiles.push(items.item(i));
            }
        }
        const cur: Node = {
            filename: BROWSER_UPLOAD,
            type: Type.DIR,
            source: Source.LOCAL,
            children: children
        };
        this.setState({
            cur: cur,
            path: lastN(this.state.path, 1)[0].filename === BROWSER_UPLOAD ? this.state.path : this.state.path.concat(cur),
            existingFiles: existingFiles
        });
    }

    private toParent(item: Node): void {
        this.toNode(lastN(this.state.path, 2)[0]);
    }

    private changeSearchPattern(event: React.ChangeEvent<HTMLInputElement>): void {
        const disabled: Node[] = [];
        for (const node of this.state.cur.children) {
            if (node.filename.toUpperCase().indexOf(event.target.value.toUpperCase()) === -1) {
                disabled.push(node);
            }
        }
        let fileCount: number = 0;
        this.state.cur.children.map((node: Node) => node.type === Type.FILE ? fileCount = fileCount + 1 : null);
        const selected: Node[] = this.state.selected.filter((node: Node) => disabled.indexOf(node) < 0);
        this.setState({
            searchPattern: event.target.value,
            disabled: disabled,
            selected: selected,
            selectAll: selected.length === fileCount
        });
    }

    private checkHeader(event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void {
        this.setState({
            selectAll: checked
        });
        const selected: Node[] = [];
        if (checked) {
            for (const node of this.state.cur.children) {
                if (this.state.disabled.indexOf(node) < 0 && node.type === Type.FILE) {
                    selected.push(node);
                }
            }
        }
        this.setState({
            selectAll: checked,
            selected: selected
        });
    }
}

export { Node };
