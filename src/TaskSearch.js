import React from "react";
import "./TaskSearch.css";

function TaskSearch({ searchValue, setSearchValue }) {
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return (
        <input 
        className="TaskSearch" 
        placeholder="Tarea..." 
        onChange={onSearchValueChange}
        value={searchValue}
        />
    );
}

export { TaskSearch };