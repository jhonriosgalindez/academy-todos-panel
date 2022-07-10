import React from "react";
import "./TaskItem.css";

function TaskItem(props) {
    return (
        <li className="TaskItem">
            <span className={`TaskItem-check ${props.completed && 'TaskItem-check--activa'}`}>✓</span>
            <p className={`TaskItem-text ${props.completed && 'TaskItem-text--completed'}`}>{props.text}</p>
            <span className="TaskItem-delete">X</span>
        </li>
    );
}

export { TaskItem };