import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { toast } from 'react-toastify';


import { FaFacebook } from 'react-icons/fa';

// image
import googleImg from '../assets/images/google.png';

const SocialLogin = () => {
    const { googleSignIn } = useAuth();

    // navigate
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const signInWithGoogle = () => {
        googleSignIn()
            .then((result) => {
                const loggedUser = result.user;
            })
            .catch(error => {
                toast.error(error.message, {
                    position: "top-right",
                    autoClose: 4000,
                    theme: "light",
                });
            })
    }
    return (
        <div className='flex items-center justify-center gap-6'>
            <button onClick={signInWithGoogle} className=''>
                <img className='w-12' src={googleImg} alt="google" />
            </button>

            <button onClick={signInWithGoogle} className=''>
                <FaFacebook className='text-5xl text-blue-500' />
            </button>
        </div>
    );
};

export default SocialLogin;