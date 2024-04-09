import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import HomePage from '../pages/HomePage';



function Header() {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };

    return(
        <div> 
            
            <div>           
                <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Fitness Trackers</span>  Achieving Optimal Performance</h1>
                <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                    Embark on your journey towards better health and fitness with our cutting-edge fitness trackers. Powered by advanced technology and AI, our trackers offer scalable solutions tailored to your needs. Track your progress, set goals, and optimize your workouts for maximum efficiency. 
                    Experience the future of fitness with us at Flowbite, where innovation meets performance.
                </p>
                
            </div>
            
            <div> 
            {Auth.loggedIn() ? (
                
                <>
                {/* <HomePage /> */}
                <Link className="btn btn-lg btn-info m-2" to="/">
                        Homepage
                    </Link>
                {/* <Link className="btn btn-lg btn-info m-2" to="/me">
                    {Auth.getProfile().data.name}'s profile
                </Link> */}
                <button className="btn btn-lg btn-light m-2" onClick={logout}>
                    Logout
                </button>
                </>
                ) : (
                <>  
                    
                    {/* <Link className="btn btn-lg btn-info m-2" to="/loginform">
                        Login
                    </Link>
                    <Link className="btn btn-lg btn-light m-2" to="/signupform">
                        Signup
                    </Link> */}
                    
                </>
                )}
            </div> 
        </div> 
    )
}

export default Header;