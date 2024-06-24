import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

import TaskColumn from "./components/TaskColumn";
import TaskForm from "./components/TaskForm";

import "./App.css";
import { useState } from "react";

//각각의 3개의 컬럼에 맞는 타입의 데이터 전달
function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn title="할 일" icon={todoIcon} />
        <TaskColumn title="진행중" icon={doingIcon} />
        <TaskColumn title="완 료" icon={doneIcon} />
      </main>
    </div>
  );
}

export default App;
