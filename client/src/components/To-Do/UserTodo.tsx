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
    const messagesEndRef = React.useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  React.useEffect(() => {
    scrollToBottom()
  }, [props]);

    return(
        < >
            <div className='d-flex align-items-center justify-content-between usertodo'>
                <span className={check ? 'checked' : ''}>{props.task}</span>
                <input className='checkbox' defaultChecked={check ? true : false} type={'checkbox'} onClick={changeStatus}/>
            </div>
            <div ref={messagesEndRef} />
        </>
    );
}

export default UserTodo;