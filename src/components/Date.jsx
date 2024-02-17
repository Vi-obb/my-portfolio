import React, { useState, useEffect } from "react";

const DateComponent = () => {
    const currentDate = new Date();

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const day = dayNames[currentDate.getDay()];
    const month = monthNames[currentDate.getMonth()];
    const dayOfMonth = currentDate.getDate();
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
   
    const ampm = hours >= 12 ? 'PM' : 'AM';

    const time = `${hours}:${minutes}:${ampm} GMT`;
    const today = `${day}, ${month} ${dayOfMonth}, ${year}`;

    return (
        <div>
            <p>&copy; {year}, Vincent Obbeng</p>
            <p>Accra, Ghana - {time}</p>
            <p>{today}</p>
        </div>
    );
};

export default DateComponent;
