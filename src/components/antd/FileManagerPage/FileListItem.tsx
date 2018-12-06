import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "./type"; //tslint:disable-line

const Container = styled.div // tslint:disable-line
`
border-radius: 3px;
border: 1px solid grey;
background-color: white
/* cursor: grabbing is handled by app */
cursor: grab;
box-shadow: none
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

interface FileListItemProps {
    autoFocus: boolean;
}

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
        const { item, index, renderItem, provided, selected, onClick, itemSelectedColor } = this.props;

        return (
            <div onClick={onClick}>
                <Container
                    innerRef={provided.innerRef}
                    style={provided.draggableStyle}
                    selected={selected}
                    itemSelectedColor={itemSelectedColor}
                    {...provided.dragHandleProps}
                >
                    {renderItem(item, index)}
                </Container>
            </div>
        );
    }
}
