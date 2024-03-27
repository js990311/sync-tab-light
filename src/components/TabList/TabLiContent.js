import { Fragment } from "react";

export default function TabLiContent({tab, deleteHandler}){
  return (
    <Fragment>
        <button onClick={deleteHandler}>
            삭제
        </button>
        <div>
            <a href={tab.url}>
            {tab.title}({tab.url})
            </a>
        </div>
    </Fragment>
  )
}