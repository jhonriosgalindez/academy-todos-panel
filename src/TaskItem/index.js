import React from "react";
import "./TaskItem.css";

function TaskItem(props) {
    return (
        <li className="TaskItem">
            <span className={`TaskItem-check ${props.completed && 'TaskItem-check--activa'}`}
            onClick={props.onComplete}
            >✓</span>

            <p className={`TaskItem-text ${props.completed && 'TaskItem-text--completed'}`}
            >{props.text}</p>

            <span className="TaskItem-delete"
            onClick={props.onDelete}
            >X</span>
        </li>
    );
}

export { TaskItem };