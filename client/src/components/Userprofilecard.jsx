import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import AuthService from '../utils/auth';
import { QUERY_PROFILES } from '../utils/queries';

export default function Userprofilecard() {
    const loggedIn = AuthService.loggedIn();
  if (!loggedIn) {
    return <p>Please log in first</p>;
  } 


  const getProfile = AuthService.getProfile();
  
  const { loading, error, data } = useQuery(QUERY_PROFILES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const currentUserId = getProfile.data._id;
  
  const userProfile = data.users.find(currentUser => currentUser._id === currentUserId);


    return (  // table show user's info 
        <div style={{ maxWidth: '400px', margin: '0 auto', color: 'balck' }} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Welcome, {userProfile.name}</h3>
                <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Profile</h6>
            </a>
            <br />
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Age: {userProfile.age}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Height: {userProfile.height_feet}' {userProfile.height_inch}"</p>            
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Weight: {userProfile.weight} lbs</p>
            <Link to="/Userinputdata" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Edit Profile
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </Link>
        </div>

    );
}
