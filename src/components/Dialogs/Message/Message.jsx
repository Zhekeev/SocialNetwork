import dialogs from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Message = (props) => {
    return (
        <div>
            <div className={dialogs.message}>
                {props.message}
            </div>
        </div>
       
    )
}

export default Message;