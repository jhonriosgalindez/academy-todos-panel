import React from "react";
import "./TaskButton.css";

function TaskButton() {
    const onClickButton = () => {
        alert('has agregado una tarea');
    }

    return (
        <button className="TaskButton"
        onClick={onClickButton}
        >
        +
        </button>
    );
}

export { TaskButton };