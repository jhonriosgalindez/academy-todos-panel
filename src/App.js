import React from "react";
import { TaskCounter } from "./TaskCounter";
import { TaskSearch } from "./TaskSearch";
import { TaskList } from "./TaskList";
import { TaskItem } from "./TaskItem";
import { TaskButton } from "./TaskButton";

const defaultTask = [
    { text: 'Construir la plantilla HTML', completed: false },
    { text: 'Crear los estilos', completed: false },
    { text: 'Tarea 3', completed: false },
    { text: 'Tarea 4', completed: false },
    { text: 'Tarea 5', completed: false },
];

function App() {
    const [tasks, setTask] = React.useState(defaultTask);
    const [searchValue, setSearchValue] = React.useState('');
    
    let searchedTask = [];
    
    if (tasks.length < 1) {
        searchedTask = tasks;
    } else {
        searchedTask = tasks.filter(task => {
            const taskText = task.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            
            return taskText.includes(searchText);
        });
    }
    
    const taskCompleted = tasks.filter(task => task.completed).length;
    
    const taskTotal = tasks.length;

    const completeTask = (text) => {
        const taskIndex = tasks.findIndex(task => task.text === text);
        const newTask = [...tasks];
        newTask[taskIndex].completed = true;
        setTask(newTask);
    }

    const deleteTask = (text) => {
        const taskIndex = tasks.findIndex(task => task.text === text);
        const newTask = [...tasks];
        newTask[taskIndex].completed = false;
        setTask(newTask);
    }
    
    return (
        <React.Fragment>
            <TaskCounter 
                completed={taskCompleted}    
                total={taskTotal}
            />

            <TaskSearch 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            <TaskList>
                {searchedTask.map(oneTask => (
                    <TaskItem 
                    key={oneTask.text} 
                    text={oneTask.text} 
                    completed={oneTask.completed}
                    onComplete={() => completeTask(oneTask.text)}
                    onDelete={() => deleteTask(oneTask.text)}
                    />
                ))}
            </TaskList>

            <TaskButton />
        </React.Fragment>
    );
}

export default App;