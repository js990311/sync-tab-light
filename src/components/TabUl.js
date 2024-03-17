import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TabLi from "./TabLi";

const TabUl =(props) => {

  const dragEndHandler = (result) => {
    if (!result.destination) return; 

    const changedTabList = Array.from(props.tablist);
    const [target] = changedTabList.splice(result.source.index, 1);
    changedTabList.splice(result.destination.index, 0, target);
    props.dropHandler(changedTabList);
  };

  return ( 
    <DragDropContext onDragEnd={dragEndHandler}>
      <Droppable droppableId={props.droppableId}>
        {
          (provided) => (
            <ul 
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {props.tablist.map((tab, idx) =>{
                    return <TabLi
                        key = {tab.id}
                        index = {idx}
                        tab = {tab}
                        deleteHandler = {props.deleteHandler}
                    ></TabLi>
                })}
              {provided.placeholder}
            </ul>   
          )
        }
      </Droppable>
    </DragDropContext>
  )
}

export default TabUl;