import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_PROFILES } from '../utils/queries';

const Activity = () => {
    const { userId } = useParams();
  
    const { loading, data } = useQuery(QUERY_PROFILES, {
      variables: { userId: userId },
    });
  
    const user = data?.user || {};
  
    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        
        <h2 className="card-header">
          {user.name}'s friends have endorsed these skills...
        </h2>
  
        {/* {profile.skills?.length > 0 && <SkillsList skills={profile.skills} />}
  
        <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
          <SkillForm profileId={profile._id} />
        </div> */}
      </div>
    );
  };

  export default Activity;