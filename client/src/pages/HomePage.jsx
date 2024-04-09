import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useAuth } from '../contexts/AuthContext';
export default function HomePage ()  {
    const { isLoggedIn, logout } = useAuth();

    return (
        <>
        
            <h1>Home Page</h1>
        </>
    );
}

