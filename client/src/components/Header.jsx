import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

function Header() {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };

    return(
        <div> 
            
            <div>           
                <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Fitness Trackers</span>    <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Achieving Optimal Performance</span></h1>
                <p className="text-slate-100 md:text-2xl">
                    Embark on your journey towards better health and fitness with our cutting-edge fitness trackers. Powered by advanced technology and AI, our trackers offer scalable solutions tailored to your needs. Track your progress, set goals, and optimize your workouts for maximum efficiency. 
                    Experience the future of fitness with us at Flowbite, where innovation meets performance.
                </p>
                
            </div>
            
            <div> 
            {Auth.loggedIn() ? (
                
                <>

                <Link className="btn btn-lg btn-info m-2" to="/">
                        Homepage
                    </Link>

                <button className="btn btn-lg btn-light m-2" onClick={logout}>
                    Logout
                </button>
                </>
                ) : (
                <>  

                    
                </>
                )}
            </div> 
        </div> 
    )
}

export default Header;