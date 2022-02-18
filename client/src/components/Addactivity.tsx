import axios from "axios";
import * as React from "react";
interface Todo {
    _id:string;
    key: number;
    task: string;
    isCompleted: boolean;
  }
interface TodoFormProps {
    todos?: Todo[];
    setTodos?: (todos: Todo[]) => void;
  }
function Addactivity({todos, setTodos}: TodoFormProps): JSX.Element {
    const [task, setTitle] = React.useState("");
    const onSubmit = () => {
      if (task.length > 0) {
        axios.post('/add', {task: task})
          .then(res => {
            if (res.status === 201) {
              let todo = res.data.todo;
              console.log(todo);
              setTodos([...todos, todo]);
              setTitle("");
            }
          });
      }
    }
    let onkeyup=(e: { charCode: number; })=>{
    if (e.charCode === 13) {
        onSubmit();
      }
    }
    return (
        <form className='Form' >
            <div className="col-md-16 inp">
                <label htmlFor="validationDefault01" className="form-label">Add Activity</label>
                <input name="text" type="text" onChange={e => setTitle(e.target.value)} className="form-control col-lg-12" id="validationDefault01" placeholder="Enter Activity..." required value={task} />
                <button  onClick={() => onSubmit()} className='todo-button btn btn-primary my-2'>
            Add todo
          </button>
            </div>

        </form>
    )
}
export default Addactivity;

function e(e: any) {
    throw new Error("Function not implemented.");
}

