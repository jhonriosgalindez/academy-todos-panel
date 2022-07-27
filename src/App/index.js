import React from "react";
import { AppUI } from "./AppUI";

function useLocalStorage(itemName, initialValue) {
    
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItem] = React.useState(initialValue);
    
    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;
            
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                } 
                
                setItem(parsedItem);
                setLoading(false);
            } catch(error) {
                setError(error);
            }
        }, 2000);
    });

    const saveItem = (newItem) => {
        try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedItem);
            setItem(newItem);
        } catch(error) {
            setError(error);
        }
    }

    return {
        item,
        saveItem,
        loading,
        error,
    };
}

function App() {
    const { item: tasks, saveItem: saveTasks, loading, error } = useLocalStorage('TASKS_V1', []);
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
        saveTasks(newTask);
    }

    const deleteTask = (text) => {
        const taskIndex = tasks.findIndex(task => task.text === text);
        const newTask = [...tasks];
        // newTask[taskIndex].completed = false;
        newTask.splice(taskIndex, 1);
        saveTasks(newTask);
    }

    return (
        <AppUI 
            loading={loading}
            taskCompleted={taskCompleted}    
            taskTotal={taskTotal}     
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            searchedTask={searchedTask}
            completeTask={completeTask}
            deleteTask={deleteTask}
        />
    );
}

export default App;