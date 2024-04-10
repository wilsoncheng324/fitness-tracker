import Userprofilecard from "../components/Userprofilecard";

import CompletedWO from "../components/CompletedWO";

import AuthService from '../utils/auth';
const Profile = () => { 
    const loggedIn = AuthService.loggedIn();
  if (!loggedIn) {
    return (<p className="text-center text-2xl text-gray-900 dark:text-white ">Please log in first</p>)
  } else if (loggedIn) {
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
}

export default Profile;


