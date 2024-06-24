import { useState } from "react";
import Tag from "./Tag";
import "./TaskForm.css";

export default function TaskForm() {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //submit 이벤트 중지
    console.log(taskData);
  };
  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          onChange={handleChange}
          className="task_input"
          placeholder="할일 입력..."
        />

        <div className="task_form_bottom_line">
          <div>
            <Tag tagName="HTML" />
            <Tag tagName="CSS" />
            <Tag tagName="JavaScript" />
            <Tag tagName="REACT" />
          </div>

          <div>
            <select
              name="status"
              value={taskData.status}
              onChange={handleChange}
              className="task_status"
            >
              <option value="todo">할일</option>
              <option value="doing">진행중</option>
              <option value="done">완료</option>
            </select>
            <button type="submit" className="task_submit">
              + 추가
            </button>
          </div>
        </div>
      </form>
    </header>
  );
}
