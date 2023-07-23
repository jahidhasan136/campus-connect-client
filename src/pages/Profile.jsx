import { Link } from 'react-router-dom';

import { FaPencilAlt } from "react-icons/fa";
import useAuth from '../hooks/useAuth';

const Profile = () => {
    const { logOut, user } = useAuth();
    return (
        <div className="ml-4 relative z-[999] profile hidden md:block group">
            <div
                className="flex items-center py-3 cursor-pointer"
            >
                {
                    user?.photoURL ? <img
                        className="h-14 w-14 rounded-full object-cover shadow-lg group-hover:shadow-blue duration-300"
                        src={user?.photoURL}
                        alt="User avatar"
                    /> :
                        <p
                            className="h-14 w-14 bg-blue text-white text-3xl flex items-center justify-center font-bold rounded-full shadow-lg group-hover:shadow-blue duration-300"
                        >
                            {user?.displayName?.slice(0, 1)}
                        </p>
                }
            </div>

            {/* Dropdown */}
            <div
                className="absolute right-0 top-28 max-w-xs min-w-[200px] bg-white shadow-lg origin-top-right transition-all duration-300 ease-in-out group-hover:top-20 invisible group-hover:visible opacity-0 group-hover:opacity-100">

                <p
                    to="/"
                    className="relative block w-full px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 z-10"
                >
                    <Link to='/view_profile' className='block text-sm mb-2'>View Profile</Link>
                    <Link to='/view_profile'>{user?.displayName}</Link>
                    <Link to='/edit_profile' className='absolute top-0 right-0 bg-navy p-2 rounded-full z-40 m-1 hover:shadow-xl hover:shadow-blue transition-all duration-300 ease-in-out'>
                        <FaPencilAlt className='text-xs text-white' />
                    </Link>
                </p>

                {
                    user?.email && <p
                        to="/"
                        className="block px-4 text-sm text-gray-700 hover:bg-light-gray"
                    >
                        {user.email}
                    </p>
                }

                <button
                    className="w-full bg-red text-white font-medium py-2 mt-3"
                    onClick={() => logOut()}
                >
                    LogOut
                </button>
            </div>
        </div>
    );
};

export default Profile;