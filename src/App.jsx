import "./App.css";
import TaskColumn from "./components/TaskColumn";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div className="app">
      <TaskForm />
      <main className="app_main">
        <TaskColumn />
        <TaskColumn />
        <TaskColumn />
      </main>
    </div>
  );
}

export default App;
