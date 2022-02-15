import * as React from 'react';
import UserTodo from './UserTodo';


function TodoList(props: object): JSX.Element{

    const todolists = [
        {
            key: 1,
          description: 'Buy new sweatshirt',
          isComplete:true
        },
        {

            key:2,
          description: 'Bring promotional phase',
          isComplete:true
        },
        {
            key:3,
          description: 'Read an artical',
          isComplete:false
        },
        {
            key:4,
          description: 'Try not to fall asleep',
          isComplete:false
        },
        {
            key:5,
          description: "Watch Sherlock",
          isComplete:false
        },
        {
            key:6,
          description: 'Bring QA for the product',
          isComplete:false
        },
        {
            key:7,
          description: 'Go for a Walk',
          isComplete:false
        }
      ];

    return(
        <>
            {
            todolists.map((item) => {
                return <UserTodo key={item.key} task={item.description} ischecked={item.isComplete}/>
            })
            }
        </>
    );
}

export default TodoList;