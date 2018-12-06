import * as React from "react";
import styled from "./type"; //tslint:disable-line

import FileListItem from "./FileListItem";

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

interface FileListProps {}

export default class FileList extends React.PureComponent<FileListProps> {

    public render(): JSX.Element {
        const {
            ignoreContainerClipping,
            internalScroll,
            isDropDisabled,
            listId,
            listType,
            dropBackgroundColor,
            style,
        } = this.props;

        return <Wrapper style={style}>
            {internalScroll ? (
                <ScrollContainer>
                    {this.renderList(dropProvided)}
                </ScrollContainer>
                ) : (
                    this.renderList(dropProvided)
                )}
        </Wrapper>;
    }

    private renderList(dropProvided): JSX.Element {
        const {
            listId,
            listType,
            data,
            selectedId,
            onClickItem,
            itemSelectedColor,
            renderItem,
            onOutsideDrop,
            dropzoneConfig,
        } = this.props

        return <div>
            <FileListItem
                key={item.id}
                index={index}
                item={item}
                isDragging={dragSnapshot.isDragging}
                provided={dragProvided}
                autoFocus={this.props.autoFocusId === item.id}
                selected={selectedId && selectedId === item.id}
                onClick={() => onClickItem(item, index)}
                itemSelectedColor={itemSelectedColor}
                renderItem={renderItem}
            />
                {dragProvided.placeholder}
        </div>;
    }
}
