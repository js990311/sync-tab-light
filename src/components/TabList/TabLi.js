import { Fragment } from "react"
import { Draggable } from "react-beautiful-dnd"
import TabLiContent from "./TabLiContent"

export default function TabLi({tab, deleteHandler}){
  return (
    <li>
      <TabLiContent
        tab={tab}
        deleteHandler = {()=>{deleteHandler(tab.id)}}
      />
    </li>
  )
}