import * as React from 'react';
import './UserTodo.css';

interface NewType {
    task: string;
    ischecked: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal;
}

function UserTodo(props: NewType): JSX.Element{

    const [check, setChecked] = React.useState(props.ischecked);

    function changeStatus() {
        setChecked(!check);
    }

    return(
        <>
            <div className='usertodo'>
                <span className={check ? 'checked' : ''}>{props.task}</span>
                <input className='checkbox'  defaultChecked={check ? true : false} type={'checkbox'} onClick={changeStatus}/>
            </div>
        </>
    );
}

export default UserTodo;