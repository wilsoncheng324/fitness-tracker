import Userprofilecard from "../components/Userprofilecard";
import Userinputdata from '../components/Userinputdata';
import CompletedWO from "../components/CompletedWO";
import Activitieslog from "../components/Activitieslog";

import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_PROFILES, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";
import { useAuth } from "../contexts/AuthContext";

const Profile = () => { 

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
                <Userprofilecard />
            </div>
            <div>
                <CompletedWO />
            </div>   
        </div>
    );
}

export default Profile;


