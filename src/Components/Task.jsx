function Task(props) {
    return (
      <div>
        {props.name} - {props.completed ? 'Completed' : 'Incomplete'}
      </div>
    );
  }
  
  export default Task;
  