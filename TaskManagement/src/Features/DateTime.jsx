import { useState } from 'react'

function DateTime() {

    const [dateTime, setDateTime] = useState({
        time: ''
      });
    
    
      const handleTimeChange = (e) => {
        setDateTime(prev => ({ ...prev, time: e.target.value }));
      };

  return (
    <div className="p-4 bg-gray-300 mt-2 rounded-xl shadow-md max-w-sm mx-auto">
      <div className="mb-4">
        <label className="block mb-2">Time</label>
        <input 
          type="time" 
          value={dateTime.time} 
          onChange={handleTimeChange} 
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <p><strong>Selected Time:</strong> {dateTime.time}</p>
      </div>
    </div>
  )
}

export default DateTime
