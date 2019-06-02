import * as React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Item } from "./DroppableContainer";

interface DraggableItemProps {
    item: Item;
    index: number;
}

const grid: number = 8;

export default function DraggableItem(props: DraggableItemProps): JSX.Element { //tslint:disable-line
    return <Draggable index={props.index} key={props.item.id} draggableId={props.item.id}>
        {// tslint:disable-next-line:no-shadowed-variable
            (provided, snapshot) => (
                <div>
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        style={getItemStyle(
                            provided.draggableProps.style,
                            snapshot.isDragging
                        )}
                        {...provided.dragHandleProps}
                    >
                        {props.item.content}
                    </div>
                    {provided.placeholder}
                </div>
            )}
    </Draggable>;

    function getItemStyle(draggableStyle: any, isDragging: boolean): any { //tslint:disable-line:no-any
        return {
            userSelect: "none",
            background: isDragging ? "lightgreen" : "grey",
            padding: grid * 2,
            margin: `0 0 ${grid}px 0`,
            ...draggableStyle
        };
    }
}
