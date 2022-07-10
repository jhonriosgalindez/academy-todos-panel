import React from "react";
import { TaskCounter } from "./TaskCounter";
import { TaskSearch } from "./TaskSearch";
import { TaskList } from "./TaskList";
import { TaskItem } from "./TaskItem";
import { TaskButton } from "./TaskButton";

const task = [
    { text: 'Construir la plantilla HTML', completed: true},
    { text: 'Crear los estilos', completed: false},
    { text: 'Tarea 3', completed: false},
    { text: 'Tarea 4', completed: false},
    { text: 'Tarea 5', completed: false},
];

function App() {
    return (
        <React.Fragment>
            <TaskCounter />

            <TaskSearch />

            <TaskList>
                {task.map(oneTask => (
                    <TaskItem key={oneTask.text} text={oneTask.text} completed={oneTask.completed} />
                ))}
            </TaskList>

            <TaskButton />
        </React.Fragment>
    );
}

export default App;