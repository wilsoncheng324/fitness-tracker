// export default function Activitieslog({ }) {

//     return ( // this is a table to show the user's activities history

        // <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        //     <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
        //         <div>
        //             <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
        //                 <svg className="w-3 h-3 text-gray-500 dark:text-gray-400 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        //                     <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
        //                 </svg>
        //                 Last 30 days
        //                 <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        //                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        //                 </svg>
        //             </button>
        //             {/* <!-- Dropdown menu --> */}
        //             <div id="dropdownRadio" className="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(522.5px, 3847.5px, 0px);">
        //                 <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
        //                     <li>
        //                         <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
        //                             <input id="filter-radio-example-1" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        //                                 <label htmlFor="filter-radio-example-1" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last day</label>
        //                         </div>
        //                     </li>
        //                     <li>
        //                         <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
        //                             <input checked="" id="filter-radio-example-2" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        //                                 <label htmlFor="filter-radio-example-2" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last 7 days</label>
        //                         </div>
        //                     </li>
        //                     <li>
        //                         <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
        //                             <input id="filter-radio-example-3" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        //                                 <label htmlFor="filter-radio-example-3" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last 30 days</label>
        //                         </div>
        //                     </li>
        //                     <li>
        //                         <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
        //                             <input id="filter-radio-example-4" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        //                                 <label htmlFor="filter-radio-example-4" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last month</label>
        //                         </div>
        //                     </li>
        //                     <li>
        //                         <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
        //                             <input id="filter-radio-example-5" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        //                                 <label htmlFor="filter-radio-example-5" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last year</label>
        //                         </div>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //         <label htmlFor="table-search" className="sr-only">Search</label>
        //         <div className="relative">
        //             <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
        //                 <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
        //             </div>
        //             <input type="text" id="table-search" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items"/>
        //         </div>
        //     </div>
        //     <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        //         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        //             <tr>
        //                 <th scope="col" className="p-4">
        //                     <div className="flex items-center">
        //                         <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        //                             <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
        //                     </div>
        //                 </th>
        //                 <th scope="col" className="px-6 py-3">
        //                     Date
        //                 </th>
        //                 <th scope="col" className="px-6 py-3">
        //                     Activity
        //                 </th>
        //                 <th scope="col" className="px-6 py-3">
        //                     Duration
        //                 </th>
        //                 <th scope="col" className="px-6 py-3">
        //                     Weight
        //                 </th>
        //                 <th scope="col" className="px-6 py-3">
        //                     Edit
        //                 </th>
        //             </tr>
        //         </thead>
             
        //     </table>
        // </div>

//     );
// }

import { useQuery } from '@apollo/client';
import { QUERY_PROFILES} from '../utils/queries';
import AuthService from '../utils/auth';


function Activitieslog() {
    const getProfile = AuthService.getProfile();
    const { loading, error, data } = useQuery(QUERY_PROFILES);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    const currentUserId = getProfile.data._id;
    // Find the user profile based on the provided email
    const userProfile = data.users.find(user => user._id === currentUserId);
    if (!userProfile) return <p>User profile not found within the data.</p>;
    const activities = userProfile.activities;
    console.log(activities.map(activity => activity._id));
    const totalActivitiesCompleted = activities.length;
    return (
        <div style={{ maxWidth: '450px', margin: '0 auto' }} className="max-w-m p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h2 className="text-center text-2xl text-gray-900 dark:text-white ">Activities Log</h2>
            <p className="text-center font-semibold text-gray-500 dark:text-gray-400">Total Workouts: {totalActivitiesCompleted}</p>
            <ol className="pt-5 relative border-s border-gray-200 dark:border-gray-700">
                {activities.slice().reverse().map((activity, index) => (
                    <li className="mb-10 ms-6" key={`activity._id-${index}`}>                       
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </span>                        
                        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
                            <div className="items-center justify-between mb-3 sm:flex">                           
                                <time className="mb-1 text-xs font-bold text-gray-400 sm:order-last sm:mb-0">{activity.dateCreated}</time>
                                <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">
                                    <span className="font-bold text-gray-900 ">Activity: {activity.name}</span> 
                                </div>
                            </div>
                            <div className="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                                <p className="text-base font-semibold text-gray-500 dark:text-gray-400">Reps: {activity.reps}</p>
                                <p className="text-base font-semibold text-gray-500 dark:text-gray-400">Workout Duration: {activity.workoutDuration} Min</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Activitieslog;