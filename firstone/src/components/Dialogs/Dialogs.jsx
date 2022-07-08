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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='User1' id='1' />
                <DialogItem name='User2' id='2' />
                <DialogItem name='User3' id='3' />
                <DialogItem name='User4' id='4' />
                <DialogItem name='User5' id='5' />
            </div>
            <div className={s.messages}>
                <Message message='hi' />
                <Message message='goodbye' />
                <Message message='ok' />
                <Message message='see u soon' />
                <Message message='ok' />
            </div>
        </div>
    )
};


export default Dialogs;