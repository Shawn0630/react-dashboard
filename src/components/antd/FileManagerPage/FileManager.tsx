import { Breadcrumb, Layout } from "antd";
import { Item } from "./FileListItem";
import * as React from "react";
import styled from "./type"; //tslint:disable-line

import FileList from "./FileList";

const { Footer, Content, Sider } = Layout;

const LayoutContainer = styled(Layout) //tslint:disable-line
`
  height: 100vh;
  overflow-y: hidden;
`;

const ContentContainer = styled.section //tslint:disable-line
`
  display: flex;
  background-color: white;
  width: 100%;
  min-width: 100%;
  height: 100%;
  max-height: 100%;
  overflow-y: hidden;
  overflow-x: auto;
  box-sizing: border-box;
`;

const ColumnContainer = styled.div //tslint:disable-line
`
  border-right: 1px solid #ccc;
  height: 100%;
  max-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  min-width: 250px;
`;

const StyledSider = styled(Sider) //tslint:disable-line
`
  background-color: white;
  border-left: 1px solid #ccc;
`;

const StyledFooter = styled(Footer )//tslint:disable-line
`
  border-top: 1px solid #ccc;
  background-color: white;
`;

interface FileManagerProps {
    map: {[id: string]: Item};
    rootId: string;
    internalScroll: boolean;
    style?: React.CSSProperties;
    renderPreview(item: Item, index: number): React.ReactElement<{}>;
    renderItem(item: Item, index: number): React.ReactElement<{}>;
}
interface FileManagerStates {
    nav: string[];
    itemSelectedId: string;
    itemSelectedIndex: number;
    autoFocusId: string;
}

export default class FileManager extends React.PureComponent<FileManagerProps, FileManagerStates> {
    constructor(props: FileManagerProps) {
        super(props);
        this.state = {
            nav: [this.props.rootId],
            itemSelectedId: null,
            itemSelectedIndex: null,
            autoFocusId: null,
        };

        this.onClickItem = this.onClickItem.bind(this);
    }

    public render(): JSX.Element {
        const {
            nav,
            autoFocusId,
            itemSelectedId,
            itemSelectedIndex,
        } = this.state;

        const preview: JSX.Element = (itemSelectedId) ? this.props.renderPreview(this.props.map[itemSelectedId], itemSelectedIndex) : null;

        return (
            <LayoutContainer>
                <Layout>
                    <Content>
                        <ContentContainer>
                                {nav.map(id => this.props.map[id].children &&
                                    <ColumnContainer key={`column-${id}`}>
                                        <FileList
                                            items={this.assemble(this.props.map, this.props.map[id].children)}
                                            style={this.props.style}
                                            autoFocusId={autoFocusId}
                                            selectedId={itemSelectedId}
                                            onClickItem={this.onClickItem}
                                            renderItem={this.props.renderItem}
                                            internalScroll={this.props.internalScroll}
                                        />
                                    </ColumnContainer>
                                )}
                        </ContentContainer>
                    </Content>
                    <StyledSider width={300}>
                        {preview}
                    </StyledSider>
                </Layout>
                <StyledFooter>
                    <Breadcrumb separator=">">
                        {nav.map((id: string) =>
                            <Breadcrumb.Item key={`breadcrumb-${id}`}>
                                <a onClick={this.onClickBreadcrumb(id)} role="button">{this.props.map[id].title}</a>
                            </Breadcrumb.Item>
                        )}
                    </Breadcrumb>
                </StyledFooter>
            </LayoutContainer>
        );
    }

    private onClickBreadcrumb(id: string): (event: React.SyntheticEvent<HTMLElement>) => void {
        return (event: React.SyntheticEvent<HTMLElement>): void => {
            const { nav } = this.state;
            const index: number = nav.indexOf(id);
            this.setState({ nav: nav.slice(0, index + 1), itemSelectedId: id });
        };
    }

    private onClickItem(item: Item, itemIndex: number): (event: React.SyntheticEvent<HTMLElement>) => void {
        return (event: React.SyntheticEvent<HTMLElement>): void => {
            const { nav } = this.state;
            const index: number = nav.indexOf(item.parent);
            this.setState({
                itemSelectedIndex: itemIndex,
                itemSelectedId: item.id,
                nav: [...nav.slice(0, index + 1), item.id]
            });
        };
    }

    private assemble(map: {[id: string]: Item}, ids: string[]): Item[] {
        return ids.map(id => map[id]);
    }

}
