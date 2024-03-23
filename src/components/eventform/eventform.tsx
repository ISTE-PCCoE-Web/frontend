import React from 'react'
import { useState } from 'react'
const eventform = () => {
    const [name, setname] = useState("");
    const [desc, setdesc] = useState("");
    const [date, setdate] = useState(new Date().toISOString().slice(0, 16));
     return (
        <div>
            <h1 className="text-center mt-8 font-bold text-4xl">Add Event</h1>
            <form className='flex align-center justify-center w-full h-full flex-col'>
                <div className='my-4'>
                    <label htmlFor="event_name" className="block text-gray-700">Event Name:</label>
                    <input name='event_name' onChange={(e) => { setname(e.target.value) }} type="text" className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
                <div className='my-4'>
                    <label htmlFor="event_desc" className="block text-gray-700">Event Description:</label>
                    <input name='event_desc' onChange={(e) => { setdesc(e.target.value) }} type="text" className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
                <div className='my-4'>
                    <label htmlFor="event_name" className="block text-gray-700">Date and Time for event:</label>
                    <input name='event_name' onChange={(e) => { setdate(e.target.value) }} type="datetime-local" className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500" />
                </div>

                <button className="p-4 mx-auto rounded-md font-bold text-white bg-green-500 hover:bg-green-600 " type='submit'>Add Event</button>
            </form>

        </div>
    )
}

export default eventform