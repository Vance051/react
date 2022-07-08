import React from "react";
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'


const DialogItem = (props) => {
    let path = (`/dialogs/${props.id}`);
    return (
        <div className={(`${s.dialog} ${s.active}`)}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    let dialogsData = [
        { id: 1, name: 'User1' },
        { id: 2, name: 'User2' },
        { id: 3, name: 'User3' },
        { id: 4, name: 'User4' },
        { id: 5, name: 'User5' },
    ]
    let messagesData = [
        { id: 1, message: 'hi' },
        { id: 2, message: 'goodbye' },
        { id: 3, message: 'no' },
        { id: 4, message: 'see u soon' },
        { id: 5, message: 'ok' },
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name='User3' id='3' />
                <DialogItem name='User4' id='4' />
                <DialogItem name='User5' id='5' />
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
                <Message message={messagesData[3].message} />
                <Message message={messagesData[4].message} />
            </div>
        </div>
    )
};


export default Dialogs;