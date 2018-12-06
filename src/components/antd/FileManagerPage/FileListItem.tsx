import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "./type"; //tslint:disable-line

interface Item {
    id: string;
    children: string[];
    parent: string;
    title: string;
    type: ItemType;
}

enum ItemType {
    FILE = "FILE",
    DIR = "DIR"
}

interface FileListItemProps {
    autoFocus: boolean;
    selected: boolean;
    index: number;
    item: Item;

    renderItem(item: Item, index: number): React.ReactElement<{}>;
    onClick(event: React.SyntheticEvent<HTMLElement>): void;
}

const Container = styled.div // tslint:disable-line
`
border-radius: 3px;
border: 1px solid grey;
background-color: white;
/* cursor: grabbing is handled by app */
cursor: grab;
box-shadow: none;
padding: 6px;
min-height: 40px;
margin-bottom: 6px;
user-select: none;
transition: background-color 0.1s ease;
/* anchor overrides */
color: black;
&:hover {
  color: black;
  text-decoration: none;
}
&:focus {
  outline: 2px solid purple;
  box-shadow: none;
}
`;

export default class FileListItem extends React.PureComponent<FileListItemProps> {
    public componentDidMount(): void {
        if (!this.props.autoFocus) {
            return;
        }
        // eslint-disable-next-line react/no-find-dom-node
        const node: HTMLElement = ReactDOM.findDOMNode(this) as HTMLElement;
        node.focus();
    }

    public render(): JSX.Element {
        return (
            <div onClick={this.props.onClick} role={"button"}>
            <Container>
                {this.props.renderItem(this.props.item, this.props.index)}
            </Container>
        </div>
        );
    }
}

export { Item, ItemType };
