import { useQuery } from '@apollo/client';
import { QUERY_PROFILES } from '../utils/queries';
import Activitieslog from '../components/Activitieslog';
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
      <div>
          
          {/* Render profile data */}
          <div>
              <h2>Profile Info</h2>
              <p>Name: {userProfile.name}</p>
              <p>Email: {userProfile.email}</p>
              {/* Render other profile information as needed */}
          </div>
          {/* Render Activitieslog component */}
          <Activitieslog userProfile={userProfile} />
      </div>
  );
  
    
  
  };

  export default Activity;