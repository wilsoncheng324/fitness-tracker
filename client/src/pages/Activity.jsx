import { useQuery } from '@apollo/client';
import { QUERY_PROFILES } from '../utils/queries';
import Activitieslog from '../components/Activitieslog';
import AddActivityCard from '../components/AddActivitycard';
import AuthService from '../utils/auth';

const Activity = () => {
  const loggedIn = AuthService.loggedIn();
  if (!loggedIn) {
    return <p className="text-center text-2xl text-gray-900 dark:text-white " style={{ color: 'white' }}>Please log in first</p>;
  } 

  const getProfile = AuthService.getProfile();
  
  const { loading, error, data } = useQuery(QUERY_PROFILES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const currentUserId = getProfile.data._id;

  const userProfile = data.users.find(currentUser => currentUser._id === currentUserId);

  return (
    
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <div>
          
          
           <Activitieslog userProfile={userProfile} />
           
      </div>
      <div>
          <AddActivityCard />
      </div>
    </div>
  );

  };

  export default Activity;