import { useQuery } from '@apollo/client';
import { QUERY_PROFILES } from '../utils/queries';
import AuthService from '../utils/auth';

function CompletedWO() {

    const getProfile = AuthService.getProfile();
    const { loading, error, data } = useQuery(QUERY_PROFILES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    const currentUserId = getProfile.data._id;
    // Find the user profile based on the provided email
    const userProfile = data.users.find(user => user._id === currentUserId);
    if (!userProfile) return <p>User profile not found within the data.</p>;
    const activities = userProfile.activities;
    const totalActivitiesCompleted = activities.length;

    return ( // this table shows completed workouts 

        <div style={{ maxWidth: '400px', margin: '0 auto', color: 'balck' }} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Total Workouts Completed: {totalActivitiesCompleted}</p>
            {/* <p className="font-normal text-gray-700 dark:text-gray-400">Total Workouts Completed this week </p>     */}
        </div>

    );
}

export default CompletedWO;