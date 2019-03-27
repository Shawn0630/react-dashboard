import * as React from "react";
import DraggableItem from "./DraggableItem";
import { DragDropContext, DraggableLocation, Droppable, DropResult } from "react-beautiful-dnd";

interface List {
    id: string;
    items: Item[];
}

interface Item {
    id: string;
    content: string;
}

interface DroppableContainerProps {}

interface DroppableContainerStates {
    lists: List[];
}

const grid: number = 8;

export default class DroppableContainer extends React.Component<DroppableContainerProps, DroppableContainerStates> {
    constructor(props: DroppableContainerProps) {
        super(props);

        this.state = {
            lists: this.getItems(3, 4)
        };
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    // tslint:disable-next-line
    public render(): JSX.Element {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                {
                    this.state.lists.map((list: List, listIndex: number) => {
                    return <Droppable droppableId={`${list.id}`}>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={this.getListStyle(snapshot.isDraggingOver)}>
                        {
                            list.items.map((item: Item, itemIndex: number) => <DraggableItem item={item} index={itemIndex}/>)
                        }
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>;
                })};
            </DragDropContext>
        );
    }

    private getItems(listCount: number, itemCount: number): List[] {
        const lists: List[] = [];
        for (let i: number = 0; i < listCount; i = i + 1) {
            const items: Item[] = [];
            for (let j: number = 0; j < itemCount; j = j + 1) {
                items.push({
                    id: `list-${i}-item-${j}`,
                    content: `item ${j}`
                });
            }
            lists.push({
                id: `list-${i}`,
                items: items
            });
        }
        return lists;
    }
    private getList = (lists: List[], id: string): List => {
        const index: number = lists.map((list: List) => list.id).indexOf(id);
        if (index < 0) {
            return null;
        }

        return lists[index];
    }
    private reorder = (list: Item[], startIndex: number, endIndex: number): Item[] => {
        const result: Item[] = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    }
    private move = (source: Item[], destination: Item[],
                    droppableSource: DraggableLocation, droppableDestination: DraggableLocation): List[] => {
        const sourceClone: Item[] = Array.from(source);
        const destClone: Item[]  = Array.from(destination);
        const [removed] = sourceClone.splice(droppableSource.index, 1);

        destClone.splice(droppableDestination.index, 0, removed);

        const result: List[] = Array.from(this.state.lists); // tslint:disable-line:no-any
        this.getList(result, droppableSource.droppableId).items = sourceClone;
        this.getList(result, droppableDestination.droppableId).items = destClone;

        return result;
    }
    private getListStyle = (isDraggingOver: boolean) => ({
        background: isDraggingOver ? "lightblue" : "lightgrey",
        width: 250,
        padding: grid,
        display: "inline-block"
    })
    private onDragEnd(result: DropResult): void {
        const { source, destination } = result;

        if (!result.destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const items: Item[] = this.reorder(
                this.getList(this.state.lists, source.droppableId).items,
                source.index,
                destination.index
            );
            const lists: List[] = Array.from(this.state.lists);
            this.getList(lists, source.droppableId).items = items;

            this.setState({
                lists: lists
            });
        } else {
            const lists: List[] = this.move(
                this.getList(this.state.lists, source.droppableId).items,
                this.getList(this.state.lists, destination.droppableId).items,
                source,
                destination
            );

            this.setState({
                lists: lists
            });
        }
    }
}

export { Item };
