function TaskList() {
    const tasks = [
      { name: 'Task 1', completed: false },
      { name: 'Task 2', completed: true },
      { name: 'Task 3', completed: false },
    ];
  
    return (
      <ul>
        {tasks.map(task => (
          <li key={task.name}>
            {task.name} - {task.completed ? 'Completed' : 'Incomplete'}
          </li>
        ))}
      </ul>
    );
  }
  
  export default TaskList;