import Userprofilecard from "../components/Userprofilecard";
import CompletedWO from "../components/CompletedWO";
import Activitieslog from "../components/Activitieslog";

import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_PROFILES, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";

const Profile = () => { // get the id from the URL
    // const {username: userParam} = useParams(); // get the user data from the query
    // const { loading, data } = useQuery(userParam ? QUERY_PROFILES : QUERY_ME, { // if userParam exists, run the QUERY_PROFILES query, set the variables to the username from the URL
    //     variables: { username: userParam }, // otherwise, run the QUERY_ME query
    // });
    
    // const user = data?.user || {};
    // if (Auth.loggedIn() && Auth.getProfile().data._id === id) {
    //     return <Navigate to="/profile" />;
    // }
    
    // if (loading) {
    //     return <div>Loading...</div>;
    // }
    
    // if (!user?.username) {
    //     return <h4>No user found with this id</h4>;
    // }

    return (
        <div>
        {/* <Userprofilecard user={user} />
        <CompletedWO user={user} />
        <Activitieslog user={user} /> */}
        </div>
    );
}
    
    export default Profile;


