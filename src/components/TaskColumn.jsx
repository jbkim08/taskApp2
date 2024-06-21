import Todo from "../assets/direct-hit.png";
import "./TaskColumn.css";

export default function TaskColumn() {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={Todo} alt="" />
        할일
      </h2>
    </section>
  );
}
