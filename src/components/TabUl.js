import TabLi from "./TabLi";

const TabUl =(props) => {
  return ( 
    <div className="TabUl">
      <ul>
        {props.tablist.map((tab) =>{
            return <TabLi
                key = {tab.id}
                tab = {tab}
                deleteHandler = {props.deleteHandler}
            ></TabLi>
         })}
      </ul>
    </div>
  )
}

export default TabUl;