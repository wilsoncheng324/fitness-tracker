import Userprofilecard from "../components/Userprofilecard";
import CompletedWO from "../components/CompletedWO";
import Activitieslog from "../components/Activitieslog";

import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_PROFILES, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";

const Profile = () => { // get the id from the URL
    
    const { loading, data } = useQuery(QUERY_ME);

    const user = data?.currentUser || data?.user || {};
    console.log(user);
    // // navigate to dashboard page if username matches logged in user
    // if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    //     return <Navigate to="/me" />;
    // }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user?.username) {
        return <h4>No user found with this id</h4>;
    }

    return (
        <div>
            <Userprofilecard user={user} />
            <CompletedWO user={user} />
            <Activitieslog user={user} />
            123
        </div>
    );
}

export default Profile;


