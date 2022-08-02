import React, { useState, useSyncExternalStore } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TaskContext = React.createContext();

function TaskProvider(props) {
  const { 
    item: tasks, 
    saveItem: saveTasks, 
    loading, error 
  } = useLocalStorage('TASKS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);
  
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

  const addTask = (text) => {
      const newTask = [...tasks];
      newTask.push({
        completed: false,
        text,
      });
      saveTasks(newTask);
  }

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
    <TaskContext.Provider value={{
      error,
      loading,
      taskCompleted,    
      taskTotal,     
      searchValue,
      setSearchValue,
      searchedTask,
      completeTask,
      deleteTask,
      openModal,
      setOpenModal,
      addTask,
    }}>
      {props.children}
    </TaskContext.Provider>
  );
}

export { TaskContext, TaskProvider };

