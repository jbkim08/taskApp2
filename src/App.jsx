import "./App.css";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div className="app">
      <TaskForm />
      <main className="app_main">
        <section className="task_column">섹션 1</section>
        <section className="task_column">섹션 2</section>
        <section className="task_column">섹션 3</section>
      </main>
    </div>
  );
}

export default App;
