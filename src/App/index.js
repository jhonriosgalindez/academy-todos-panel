import React from "react";
import { TaskProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

function App() {
    return (
        <TaskProvider>
            <AppUI />
        </TaskProvider>
    );
}

export default App;