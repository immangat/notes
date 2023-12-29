import React from 'react';
import EmptyMessage from "../../components/empty-message/empty-message.component";
import {BsBell} from 'react-icons/bs'

const Reminders = () => {
    return (
        <EmptyMessage
            Icon={BsBell}
            message={"Reminders are empty."}
        />
    );
};

export default Reminders;