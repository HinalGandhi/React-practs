import * as React from 'react';
import UserTodo from './UserTodo';
import axios from "axios"
const baseUrl='http://localhost:5000';
function TodoList(props: object): JSX.Element {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);
  //getting tasks
  React.useEffect(() => {
    axios.get(baseUrl+'/getrecords')
      .then(function (response) {
        // handle success
        setIsLoaded(true);
        setItems(response.data);
      })
      .catch(function (error) {
        // handle error
        setIsLoaded(true);
        setError(error);
      })
      
    return () => {
      setItems([]);
    };

  }, [])
  //mapping them into a
  return (
    <>
      {
        items.map((item) => {
          return <UserTodo key={item._id} task={item.task} ischecked={item.isComplete} />
        })
      }
    </>
  );
}

export default TodoList;

