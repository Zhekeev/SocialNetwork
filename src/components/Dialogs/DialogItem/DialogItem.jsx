import dialogs from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={dialogs.dialogs + ' ' + dialogs.active}>
            <img src= {props.image}/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>

    )
}

export default DialogItem;