import { Draggable } from "react-beautiful-dnd"

export default function TabLi(props){
  return (
    <Draggable
      key={props.index} draggableId={props.index.toString()}
      index={props.index}
    >
      {
        (provided) => (
            <li 
              className='tabLi'
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              <button onClick={()=>{props.deleteHandler(props.tab.id)}}>
                삭제
              </button>
              <div>
                <a href={props.tab.url}>
                  {props.tab.title}({props.tab.url})
                </a>
              </div>
            </li>
        )
      }
    </Draggable>
  )
}