
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import AuthService from '../utils/auth';
import { ADD_ACTIVITY } from '../utils/mutations';
import { QUERY_PROFILES } from '../utils/queries';
function AddActivityCard() {
    const getProfile = AuthService.getProfile(); 
    const userId = getProfile.data._id;
    
    const [formState, setFormState] = useState({ 
        name: '',
        reps: '',
        workoutDuration: ''
    });

    const [addActivity] = useMutation
        (ADD_ACTIVITY, {
            refetchQueries: [
            QUERY_PROFILES,
            'getActivities'
            ]
        });

        const handleChange = (event) => {
            const { name, value } = event.target;
            setFormState({
                ...formState,
                [name]: value
            });
        };
    
        const handleSubmit = async (event) => {
            event.preventDefault();
            try {
                await addActivity({
                    variables: { userId, ...formState }
                });
                
                setFormState({ 
                    name: '',
                    reps: '',
                    workoutDuration: ''
                });
            } catch (err) {
                console.error(err);
            }
        };


    return (
        <div style={{ maxWidth: '400px', margin: '0 auto' }} className="max-w-m p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h3 className="text-center text-2xl text-gray-900 dark:text-white ">Add activity</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                <div >
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Activity:</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formState.name} 
                            onChange={handleChange} 
                            style={{ padding: '0.5rem', marginBottom: '1rem' }} 
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="reps" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Reps:</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"  
                            id="reps" 
                            name="reps" 
                            value={formState.reps} 
                            onChange={handleChange} 
                            style={{ padding: '0.5rem', marginBottom: '1rem' }} 
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="workoutDuration" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Duration:</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text" 
                            id="workoutDuration" 
                            name="workoutDuration" 
                            value={formState.workoutDuration} 
                            onChange={handleChange} 
                            style={{ padding: '0.5rem', marginBottom: '1rem' }} 
                            required 
                        />
                    </div>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    )
}

export default AddActivityCard;