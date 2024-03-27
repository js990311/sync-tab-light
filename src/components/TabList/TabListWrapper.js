import { Fragment } from "react";
import DTabUl from "./dragable/DTabUl";

/**
 * 주요 탭 리스트  
 */
const TabListWrapper = ({localTabList, dropHandler, deleteHandler}) => {
    return (
        <Fragment>   
        {
            localTabList.length === 0
              &&
            <h1>There is No Tab in local</h1>
        }
        {
            localTabList.length !== 0
              && 
            <DTabUl
              droppableId="localTab"
              dropHandler={dropHandler}
              tablist={localTabList}
              deleteHandler = {deleteHandler}
            ></DTabUl> 
        }  
        </Fragment>
    )
}

export default TabListWrapper;