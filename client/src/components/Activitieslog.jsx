
import { useQuery } from '@apollo/client';
import { QUERY_PROFILES} from '../utils/queries';
import AuthService from '../utils/auth';


function Activitieslog() {
    const getProfile = AuthService.getProfile();
    const { loading, error, data } = useQuery(QUERY_PROFILES);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    const currentUserId = getProfile.data._id;
    // Find the user profile based on the provided email
    const userProfile = data.users.find(user => user._id === currentUserId);
    if (!userProfile) return <p>User profile not found within the data.</p>;
    const activities = userProfile.activities;
    console.log(activities.map(activity => activity._id));
    const totalActivitiesCompleted = activities.length;
    return (
        <div style={{ maxWidth: '450px', margin: '0 auto' }} className="max-w-m p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h2 className="text-center text-2xl text-gray-900 dark:text-white ">Activities Log</h2>
            <p className="text-center font-semibold text-gray-500 dark:text-gray-400">Total Workouts: {totalActivitiesCompleted}</p>
            <ol className="pt-5 relative border-s border-gray-200 dark:border-gray-700">
                {activities.slice().reverse().map((activity, index) => (
                    <li className="mb-10 ms-6" key={`activity._id-${index}`}>                       
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </span>                        
                        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
                            <div className="items-center justify-between mb-3 sm:flex">                           
                                <time className="mb-1 text-xs font-bold text-gray-400 sm:order-last sm:mb-0">{activity.dateCreated}</time>
                                <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">
                                    <span className="font-bold text-gray-900 ">Activity: {activity.name}</span> 
                                </div>
                            </div>
                            <div className="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                                <p className="text-base font-semibold text-gray-500 dark:text-gray-400">Reps: {activity.reps}</p>
                                <p className="text-base font-semibold text-gray-500 dark:text-gray-400">Workout Duration: {activity.workoutDuration} Min</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Activitieslog;