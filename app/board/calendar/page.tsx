'use client'

import DatePicker from "./(components)/DatePicker";

function Calendar() {
    return (
        <div className='w-full h-screen flex items-start justify-center overflow-y-auto'>
            <div className="w-[96%] h-145 flex items-center justify-center">
            <DatePicker/>
            </div>
        </div>
    );
}

export default Calendar;