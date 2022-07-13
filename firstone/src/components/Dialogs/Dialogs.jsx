import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {
    // let dialogs = [
    //     { id: 1, name: 'User1' },
    //     { id: 2, name: 'User2' },
    //     { id: 3, name: 'User3' },
    //     { id: 4, name: 'User4' },
    //     { id: 5, name: 'User5' },
    // ]
    // let messages = [
    //     { id: 1, message: 'hi' },
    //     { id: 2, message: 'goodbye' },
    //     { id: 3, message: 'no' },
    //     { id: 4, message: 'see u soon' },
    //     { id: 5, message: 'ok' },
    // ]

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = props.messages.map(m => <Message message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}


                {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name='User3' id='3' />
                <DialogItem name='User4' id='4' />
                <DialogItem name='User5' id='5' /> */}
            </div>
            <div className={s.messages}>
            {messagesElements}
                {/* <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
                <Message message={messagesData[3].message} />
                <Message message={messagesData[4].message} /> */}
            </div>
        </div>
    )
};


export default Dialogs;