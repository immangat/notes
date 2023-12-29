import React from 'react';
import {TimeContainer} from "./time.styles";


type TimePropsType = {
    time: string
}

type AbbreviatedMonths = {
    [key: number]: string;
}

const abbreviatedMonths: AbbreviatedMonths = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec",
};

const Time = ({time}: TimePropsType) => {

    const updateDate = new Date(time)
    const formattedDate = `Edited ${abbreviatedMonths[updateDate.getUTCMonth()]} ${updateDate.getDate()}, ${updateDate.getFullYear()}`

    return (
        <TimeContainer>
            {formattedDate}
        </TimeContainer>
    );
};

export default Time;