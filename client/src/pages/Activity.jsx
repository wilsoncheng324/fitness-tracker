import { useQuery } from '@apollo/client';
import { QUERY_PROFILES } from '../utils/queries';
import Activitieslog from '../components/Activitieslog';
import AddActivityCard from '../components/AddActivitycard';
import AuthService from '../utils/auth';

const Activity = () => {
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

  return (
    
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <div>
          
          {/* Render profile data */}
          
              {/* <h2>Profile Info</h2>
              <p>Name: {userProfile.name}</p>
              <p>Email: {userProfile.email}</p> */}
              {/* Render other profile information as needed */}
          
          {/* Render Activitieslog component */}
          
           <Activitieslog userProfile={userProfile} />
           
      </div>
      <div>
          <AddActivityCard />
      </div>
    </div>
  );

  };

  export default Activity;