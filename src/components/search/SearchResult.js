import TabUl from "../tablist/TabUl";

const SearchResult = ({query, tablist, deleteHandler}) => { 
    const filteredData = tablist.filter(
        (tab)=>tab.title.toLowerCase().includes(query.toLowerCase())
    );
    
    return (
        <TabUl
            tablist={filteredData}
            deleteHandler={deleteHandler}
        />
    )
}

export default SearchResult;