import React from "react";

import { TaskCounter } from "../TaskCounter";
import { TaskSearch } from "../TaskSearch";
import { TaskList } from "../TaskList";
import { TaskItem } from "../TaskItem";
import { TaskButton } from "../TaskButton";


function AppUI({
  loading,
  error,
  completed,
  total,
  taskCompleted,
  taskTotal,
  searchValue,
  setSearchValue,
  searchedTask,
  completeTask,
  deleteTask,
}) {

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
      {loading && <p>Cargando...</p>}
      {error && <p>Tenemos un error</p>}
      {(!loading && !searchedTask.length) && <p>Crea tu primer tarea +</p>}

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

export { AppUI };

// Siguen los providers