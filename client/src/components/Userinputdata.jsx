import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import AuthService from '../utils/auth';
import { UPDATE_PROFILE } from '../utils/mutations';
import { QUERY_PROFILES } from '../utils/queries';


export default function Userinputdata() {   
    
    const navigate = useNavigate();
    const getProfile = AuthService.getProfile(); 
    const userId = getProfile.data._id;
    console.log(userId);
    
    const [formState, setFormState] = useState({ 
        name: '',
        age: '',
        weight: '',
        height_feet: '',
        height_inch: ''
    });

    const [updateProfile] = useMutation
        (UPDATE_PROFILE, {
            refetchQueries: [
            QUERY_PROFILES,
            'updateProfile'
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
            await updateProfile({
                variables: { userId, ...formState }
            });
            
            setFormState({ 
                name: '',
                age: '',
                weight: '',
                height_feet: '',
                height_inch: ''
            });
            navigate('/dashboard');
            
        } catch (err) {
            console.error(err);
        }
    };
    return (
      
        <form onSubmit={handleSubmit}>
            <div style={{ maxWidth: '400px', margin: '0 auto' }} className="max-w-m p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                    <label className="pt-10 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formState.name} 
                        onChange={handleChange} 
                        placeholder="Your name" 
                        required 
                    />
                </div>
                <div>
                    <label className="pt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        type="text" 
                        id="age" 
                        name="age" 
                        value={formState.age} 
                        onChange={handleChange} 
                        placeholder="18" 
                        required 
                    />
                </div>
                <div>
                    <label className="pt-3 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight</label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        type="text" 
                        id="weight" 
                        name="weight" 
                        value={formState.weight} 
                        onChange={handleChange} 
                        placeholder="150" 
                        required />
                </div>
                <div>
                    <label className="pt-3 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Height Feet</label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        type="text" 
                        id="height_feet" 
                        name="height_feet" 
                        value={formState.height_feet} 
                        onChange={handleChange} 
                        placeholder="'" 
                        required />
                </div>
                <div>
                    <label className="pt-3 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Height Inches</label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        type="text" 
                        id="height_inch" 
                        name="height_inch" 
                        value={formState.height_inch} 
                        onChange={handleChange} 
                        placeholder='1"~12"' 
                        required />
                </div>
                <br />
            
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </div>
        </form>

  );
}


{/* <div class="mb-6">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
            </div>
            <div class="mb-6">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
            </div>
            <div class="mb-6">
                <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                <input type="password" id="confirm_password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
            </div> */}
            {/* <div class="flex items-start mb-6">
                <div class="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                </div>
                <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
            </div> */}