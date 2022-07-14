import React from 'react';
import "./TaskCounter.css";

function TaskCounter({ completed, total}) {
    return (
        <h2 className="TaskCounter">Tareas completadas {completed}/{total}</h2>
    );
}

export { TaskCounter };