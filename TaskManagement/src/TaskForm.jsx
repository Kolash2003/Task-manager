import React, {useState} from 'react'
import Calendar from './Features/Calendar';

function TaskForm() {

    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    } 

    const handleChangeTitle = (event) =>{
        setText(event.target.value);
    }

    const [showCalendar, setShowCalendar] = useState(false)


  return (
    <>
        <div className="flex space-x-4 justify-center mb-4  font-bold font-mono">
            <p className='font-bold font-mono pt-2'> Priority</p>
            <button className="bg-green-600 w-24 text-white px-4 py-2 rounded hover:bg-gray-600">
                Low
            </button>
            <button className="bg-orange-600 w-24 text-white px-4 py-2 rounded hover:bg-gray-600">
                Medium
            </button>
            <button className="bg-red-600 w-24 text-white px-4 py-2 rounded hover:bg-gray-600">
                High
            </button>
            <button className='bg-blue-800 w-44 text-white px-4 py-2 rounded hover:bg-gray-600 border-dotted border-4'
            onClick={() => setShowCalendar(true)}
            >Set Deadline</button>
            {showCalendar && <Calendar onClose={() => {setShowCalendar(false)}} />}
        </div>

        <div>
           <textarea value={text} onChange={handleChangeTitle} className='border-blue-950 shadow-lg border-solid border-4 mb-2' rows="2" cols="100" placeholder='Enter job title'>{text}</textarea> 
        </div>
        <div>
        <textarea className='border-blue-700 shadow-lg border-solid border-4' rows="5" cols="100" value={text} onChange={handleChange} placeholder='Enter your tasks here'> <p> {text} </p> </textarea>
        </div>
    </>
    
  )
}

export default TaskForm
