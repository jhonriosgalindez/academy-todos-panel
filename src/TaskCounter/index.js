import React from 'react';
import { TaskContext } from '../TodoContext';
import "./TaskCounter.css";

function TaskCounter() {
    const { taskCompleted, taskTotal } = React.useContext(TaskContext);

    return (
        <h2 className="TaskCounter">Tareas completadas {taskCompleted}/{taskTotal}</h2>
    );
}

export { TaskCounter };