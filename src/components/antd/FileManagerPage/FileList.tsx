import * as React from "react";
import styled from "./type"; //tslint:disable-line

import FileListItem, { Item } from "./FileListItem";

const Wrapper = styled.div // tslint:disable-line
`
  background-color: white;
  opacity: inherit;
  padding: 8px;
  padding-bottom: 0;
  transition: background-color 0.1s ease, opacity 0.1s ease;
  user-select: none;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 100%;
`;

const ScrollContainer = styled.div // tslint:disable-line
`
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  max-height: 100%;
`;

interface FileListProps {
    internalScroll: boolean;
    autoFocusId: string;
    selectedId: string;
    items: Item[];
    style: React.CSSProperties;

    onClickItem(item: Item, index: number): (event: React.SyntheticEvent<HTMLElement>) => void;
    renderItem(item: Item, index: number): JSX.Element;
}

export default class FileList extends React.PureComponent<FileListProps> {

    public render(): JSX.Element {
        return <Wrapper style={this.props.style}>
            {this.props.internalScroll ? (
                <ScrollContainer>
                    {this.renderList()}
                </ScrollContainer>
                ) : (
                    this.renderList()
                )}
        </Wrapper>;
    }

    private renderList(): JSX.Element {
        return <React.Fragment>
            {
                this.props.items.map((item: Item, index: number) =>
                    <FileListItem
                        key={item.id}
                        index={index}
                        item={item}
                        autoFocus={this.props.autoFocusId === item.id}
                        selected={this.props.selectedId && this.props.selectedId === item.id}
                        onClick={this.props.onClickItem(item, index)}
                        renderItem={this.props.renderItem}
                    />)
            }
        </React.Fragment>;
    }
}
