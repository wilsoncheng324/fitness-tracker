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
    const activities = userProfile.activities;

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Activities Log</h2>
            <ol className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200">
                {activities.slice().reverse().map((activity, index) => ( // Display the activities in reverse order
                    <li key={activity._id}>
                        <span>{index + 1}.</span> {/* Display the order number */}
                        <span>Date: {activity.dateCreated}</span><br />
                        <span>Activity: {activity.name}</span><br />
                        <span>Reps: {activity.reps}</span><br />
                        <span>Workout Duration: {activity.workoutDuration}</span><br />
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Activitieslog;