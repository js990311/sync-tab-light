import { Draggable } from "react-beautiful-dnd"
import TabLi from "../TabLi"
import { Fragment } from "react"
import TabLiContent from "../TabLiContent"

export default function DTabLi(props){
  return (
    <Draggable
      key={props.index} draggableId={props.index.toString()}
      index={props.index}
    >
      {
        (provided) => (
            <li 
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
                <TabLiContent
                    deleteHandler={()=>{props.deleteHandler(props.tab.id)}}
                    tab={props.tab}
                />
            </li>
        )
      }
    </Draggable>
  )
}