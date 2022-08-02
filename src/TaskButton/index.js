import React from "react";
import "./TaskButton.css";

function TaskButton(props) {
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
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