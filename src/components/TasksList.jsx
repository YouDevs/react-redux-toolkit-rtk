// TasksList.js
import { useGetTasksQuery, useDeleteTaskMutation, useUpdateTaskMutation } from "../api/apiSlice"

const TasksList = () => {
  const { data: tasks, error, isLoading } = useGetTasksQuery()
  const [deleteTask] = useDeleteTaskMutation()
  const [updateTask] = useUpdateTaskMutation()

  if (isLoading) return <div>Loading...</div>
  else if (error) return <div>Error: {error.message}</div>

  return (
    <div>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <h3>{task.name}</h3>
              <p>task.description</p>
              <button
                onClick={() => { deleteTask(task.id) }}
              >
                delete
              </button>
              <input
                type="checkbox"
                id={task.id}
                checked={task.completed}
                onChange={(e) => {
                  updateTask({
                    ...task, 
                    completed: e.target.checked
                  })
                  console.log(e.target.checked)
                }}
              />
              <label htmlFor={task.id}>Completed</label>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default TasksList
