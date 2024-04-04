export default function CompletedWO({totalwocompelted, totalwothisweek}) {
    return (

        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

            <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Total Workouts Completed: {totalwocompelted}</p>
            <p className="font-normal text-gray-700 dark:text-gray-400">Total Workouts Completed this week {totalwothisweek}</p>
        </a>
    );
}