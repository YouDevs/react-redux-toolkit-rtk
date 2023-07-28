// TasksList.js
import { useGetTasksQuery } from "../api/apiSlice"

const TasksList = () => {
  const { data: tasks, error, isLoading } = useGetTasksQuery()

  if (isLoading) return <div>Loading...</div>
  else if (error) return <div>Error: {error.message}</div>

  return (
    <div>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <h3>{task.name}</h3>
              <p>task.description</p>
              <button>delete</button>
              <input type="checkbox" id={task.id} />
              <label htmlFor={task.id}>Completed</label>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default TasksList
