import React from "react";
import { TaskContext } from "../TodoContext";
import "./TaskSearch.css";

function TaskSearch() {
    const { searchValue, setSearchValue } = React.useContext(TaskContext);
    
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