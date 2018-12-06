import { Button, Icon, Tooltip } from "antd";
import * as React from "react";

import { Item, ItemType } from "./FileListItem";
import FileManager from "./FileManager";

import EditText from "./EditText";

interface Resources {
    file: string;
    folder: string;
}

const images: Resources = {
    file: "https://raw.githubusercontent.com/exced/react-file-manager/master/public/images/file.png",
    folder: "https://raw.githubusercontent.com/exced/react-file-manager/master/public/images/folder.png",
};

interface FileManagerWrapperProps {
    rootId: string;
    map: {[id: string]: Item};
    internalScroll: boolean;

    renderPreview?(item: Item, index: number): React.ReactElement<{}>;
    renderItem?(item: Item, index: number): React.ReactElement<{}>;
}

export default class FileManagerWrapper extends React.PureComponent<FileManagerWrapperProps> {

    constructor(props: FileManagerWrapperProps) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <FileManager
                map={this.props.map}
                rootId={this.props.rootId}
                renderItem={this.props.renderItem ? this.props.renderItem : this.renderItem}
                renderPreview={this.props.renderPreview ? this.props.renderPreview : this.renderPreview}
                internalScroll={this.props.internalScroll}
            />
        );
    }

    private renderItem(item: Item): JSX.Element {
        return  <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ flex: 1 }}>
                <img
                    src={item.type === ItemType.DIR ? images.folder : images.file}
                    alt={item.title}
                    style={{ width: 22, height: 22, float: "left" }}
                />
            </div>
            <div style={{ flex: 5 }}>
                <span
                    style={{
                        width: 150,
                        textAlign: "left",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                    }}
                >
                    {item.title}
                </span>
            </div>
            <div style={{ flex: 1 }}>
                {item.type === ItemType.DIR && <Icon style={{ float: "right" }} type="right" />}
            </div>
        </div>;
    }

    // tslint:disable-next-line
    private renderPreview(item: Item): JSX.Element {
        // folder
        if (item.type === ItemType.DIR) {
            if (item.id === "0") {
                return (
                    <div
                        style={{
                            textAlign: "center",
                            margin: "auto",
                            marginTop: 170,
                            width: 200,
                            height: 200,
                            border: "1px solid",
                            borderRadius: 6,
                            borderColor: "#ccc",
                        }}
                    >
                        <img
                            src={images.folder}
                            alt={item.title}
                            style={{ width: 70, height: 70, margin: "auto", display: "block", marginTop: 40 }}
                        />
                        <span>{item.title}</span>
                        <div style={{ marginTop: 10 }}>
                            <Button.Group>
                                <Tooltip title="New folder">
                                    <Button onClick={null} icon="folder-add" />
                                </Tooltip>
                                <Tooltip title="New file">
                                    <Button onClick={null} icon="file-add" />
                                </Tooltip>
                            </Button.Group>
                        </div>
                    </div>
                );
            }
            return (
                <div
                    style={{
                        textAlign: "center",
                        margin: "auto",
                        marginTop: 170,
                        width: 200,
                        height: 200,
                        border: "1px solid",
                        borderRadius: 6,
                        borderColor: "#ccc",
                    }}
                >
                    <img
                        src={images.folder}
                        alt={item.title}
                        style={{ width: 70, height: 70, margin: "auto", display: "block", marginTop: 40 }}
                    />
                    <EditText
                        value={item.title}
                        onChange={null}
                        size="small"
                        placeholder="Title"
                    />
                    <div style={{ marginTop: 10 }}>
                        <Button.Group>
                            <Tooltip title="New folder">
                                <Button onClick={null} icon="folder-add" />
                            </Tooltip>
                            <Tooltip title="New file">
                                <Button onClick={null} icon="file-add" />
                            </Tooltip>
                            <Tooltip title="Remove folder">
                                <Button onClick={null} type="danger" icon="delete" />
                            </Tooltip>
                        </Button.Group>
                    </div>
                </div>
            );
        // file
        } else {
            return (
                <div
                    style={{
                        textAlign: "center",
                        margin: "auto",
                        marginTop: 170,
                        width: 200,
                        height: 200,
                        border: "1px solid",
                        borderRadius: 6,
                        borderColor: "#ccc",
                    }}
                >
                    <img
                        src={images.file}
                        alt={item.title}
                        style={{ width: 70, height: 70, margin: "auto", display: "block", marginTop: 40 }}
                    />
                    <EditText
                        value={item.title}
                        onChange={null}
                        size="small"
                        placeholder="Title"
                    />
                    <div style={{ marginTop: 10 }}>
                        <Button.Group>
                            <Tooltip title="Remove file">
                                <Button onClick={null} type="danger" icon="delete" />
                            </Tooltip>
                        </Button.Group>
                    </div>
                </div>
            );
        }
    }
}
