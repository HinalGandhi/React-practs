import axios from "axios";
import * as React from "react";
const baseUrl='https://simple-node-server-hinal.herokuapp.com/';
interface Todo {
  _id: string;
  key: number;
  task: string;
  isCompleted: boolean;
}
interface TodoFormProps {
  todos?: Todo[];
  setTodos?: (todos: Todo[]) => void;
}
//adding a task
function Addactivity({ todos, setTodos }: TodoFormProps): JSX.Element {
  const [task, setTitle] = React.useState("");
  const onSubmit = () => {
  
    if (task.length > 0) {
      axios.post(baseUrl+'add', { task: task })
        .then(res => {
          if (res.status === 201) {
            let todo = res.data.todo;
            setTodos([...todos, todo]);
            setTitle("");
          }
        });
    }
  }
  return (
    <form className='Form'  onSubmit={() => onSubmit()}>
      <div className="col-md-16 inp">
        <label htmlFor="validationDefault01" className="form-label">Add Activity</label>
        <input name="text" type="text" onChange={e => setTitle(e.target.value)} className="form-control col-lg-12" id="validationDefault01" placeholder="Enter Activity..." required value={task} />
        <button className='todo-button btn btn-primary my-2'>
          Add todo
        </button>
        <button type="reset" onClick={()=>location.reload()} className='todo-button btn btn-primary ml-2'>
          Cancel
        </button>
      </div>
    </form>
  )
}
export default Addactivity;
