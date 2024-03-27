import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TabLi from "./TabLi";

const TabUl =({tablist, deleteHandler}) => {
  return ( 
    <ul>
      {tablist.map((tab, idx) =>{
            return <TabLi
                key = {tab.id}
                index = {idx}
                tab = {tab}
                deleteHandler = {deleteHandler}
            ></TabLi>
        })}
    </ul>   
  )
}

export default TabUl;