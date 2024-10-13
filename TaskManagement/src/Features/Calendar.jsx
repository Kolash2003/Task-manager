import { useState, useEffect, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { X } from 'lucide-react';
import DateTime from './DateTime';

const CalendarWithTime = ( {onClose} ) => {

  const calRef = useRef();

  const closeCal = (e) => {
    if(calRef.current === e.target){
      onClose();
    }
  }

  // show DateTime Popup 
  const [showDateTime, setShowDateTime] = useState(false)

  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Updates real-time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer
  }, []);

  // Format the current date
  const formattedDate = format(date, 'EEEE, MMMM do, yyyy');
  const formattedTime24 = format(date, 'HH:mm:ss'); // 24-hour format

  // Handler for changing the selected date
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  return (
    <div ref={calRef} onClick={closeCal} className="flex flex-col items-center justify-center min-h-screen fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm">
      <div>
        <button onClick={onClose} className='place-self-end'><X size={30} /></button>
      </div>
      <div className="bg-white  shadow-md rounded-3xl p-8 text-center">

        {/* Real-time clock */}
        <p className="text-xl mb-2 font-bold font-mono">{formattedDate}</p>
        <p className="text-3xl font-bold font-mono">{formattedTime24}</p>

        {/* Calendar to pick date */}
        <div className="mt-6">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="MMMM d, yyyy"
            inline
          />
        </div>

        <div className="mt-4">
          <p className="text-lg font-mono font-bold">Selected Date: {format(selectedDate, 'MMMM do, yyyy')}</p>
        </div>
        <div>
          <button onClick={() => {setShowDateTime(true)}} className='bg-blue-800 px-6 my-1 py-3 rounded-2xl'>Select Date</button>
          {showDateTime && <DateTime />}
        </div>
      </div>
    </div>
  );
};

export default CalendarWithTime;
