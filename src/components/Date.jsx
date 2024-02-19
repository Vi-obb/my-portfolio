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
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
   
    const ampm = hours >= 12 ? 'PM' : 'AM';

    const time = `${hours}:${minutes} ${ampm} GMT`
    const today = `${day}, ${month} ${dayOfMonth}, ${year}`

    return (
      <div className="flex text-sm flex-col w-3/5 md:w-1/2 text-white/50">
        <p>&copy; {year}, Vincent Obbeng</p>
        <p>Accra, Ghana - {time}</p>
        <p>{today}</p>
      </div>
    );
};

export default DateComponent;
