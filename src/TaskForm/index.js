import React from "react";
import { TaskContext } from "../TodoContext";
import "./TaskForm.css";

function TaskForm() {
  const [newTaskValue, setNewTaskValue] = React.useState('');

  const {
    addTask,
    setOpenModal,
  } = React.useContext(TaskContext);

  const onChange = (event) => {
    setNewTaskValue(event.target.value);
  }

  const onCancel = () => {
    setOpenModal(false);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    addTask(newTaskValue);
    setOpenModal(false);
  }
  
  return (
    <form onSubmit={onSubmit}>
      <label>Crear tarea</label>
      <textarea 
        placeholder="Escribe tu nueva tarea"
        value={newTaskValue}
        onChange={onChange}
      />

      <div className="TaskForm__buttonContainer">
        <button onClick={onCancel} type='button' className="TaskForm__button TaskForm__button--cancel">
          Cancelar
        </button>
        <button onClick={onSubmit} type='submit' className="TaskForm__button TaskForm__button--add">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TaskForm };