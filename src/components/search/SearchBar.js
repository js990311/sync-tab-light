import { useState } from "react";


const SearchBar = ({query, setQuery})=>{
    const handleSearch = (e) => {
        console.log(e.target.value);
        setQuery(e.target.value);
    }

    return (
        <div>
            <input type="text" placeholder="검색" value={query} onChange={handleSearch}/>
        </div>
    )
    
};

export default SearchBar;