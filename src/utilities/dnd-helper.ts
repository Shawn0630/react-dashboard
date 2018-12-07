import { ContextComponentClass, DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend"; // tslint:disable-line

type DragDropType = <P>(componentClass: React.ComponentClass<P> | React.StatelessComponent<P>) => ContextComponentClass<P>;
const withDragDropContext: DragDropType = DragDropContext(HTML5Backend);

export { withDragDropContext };
