import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Setup = () => {
    const [status, setstatus] = useState('');
    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const navigate = useNavigate()

    const handleStatusOnChange = function(event){
        setstatus(event.target.value)
    }
    const handleNameOnChange = (event) => {
        setName(event.target.value);
    };

    const handleJobOnChange = (event) => {
        setJob(event.target.value);
    };

    const handleSubmit = function(){
          const fromData = {
            name,
            status,
            job:status =='doing-job'? job:''
          };
          navigate('/profile', { state: { profileData: fromData } });
    }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Create Your Profile</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
                    Name:
                </label>
                <input
                    type="text"
                    value={name}
                    onChange={handleNameOnChange}
                    id="name"
                    name="name"
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>
            <div className="mb-4">
              <label htmlFor="status" className="block text-gray-700 text-sm font-medium mb-2">
                 Who you are:
               </label>
                 <select
                id="status"
                 name="status"
                 value={status}
                 onChange={handleStatusOnChange}
                 required
                 className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
                 <option value="">Select an option</option>
                 <option value="student">Student</option>
                 <option value="doing-job">Doing Job</option>
    </select>
</div>
{status === 'doing-job' && (
    <div className="mb-4">
        <label htmlFor="job" className="block text-gray-700 text-sm font-medium mb-2">
            What job:
        </label>
        <input
            type="text"
            onChange={handleJobOnChange}
            value={job}
            id="job"
            name="job"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
    </div>
)}

            <button 
                type="submit"
                className="w-full py-2 px-4 bg-orange-700 text-white font-bold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
                Submit
            </button>
        </form>
    </div>
</div>
  )
}

export default Setup