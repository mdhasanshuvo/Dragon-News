import { Link } from 'react-router-dom';
import userLogo from "../assets/user.png"
import { useContext } from 'react';
import { AuthContext } from './AuthProvider/AuthProvider';
// import { useContext } from 'react';
// import { AuthContext } from './AuthProvider/AuthProvider';

const Navbar = () => {
    const { user , logout } = useContext(AuthContext);

    return (
        <div className='flex items-center justify-between'>
            <div className="">
                {user && user.email}
            </div>
            <nav className='flex gap-3 text-base'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/career'>Career</Link>
            </nav>
            <div className='flex gap-3 justify-center items-center'>
                <div>
                    {
                        user && user?.email ? (
                            <div className='mt-3'>
                                <img className='w-10 rounded-full' src={user?.photoURL} alt="" />
                                <p>{user?.displayName}</p>
                            </div>
                        ) :
                        (<img src={userLogo} alt="" />)
                    }
                </div>
                {
                    user ?
                        <Link onClick={logout} to='/' className='btn btn-neutral rounded-none px-10 text-white text-base'>Log out</Link> :
                        <Link to='/auth/login' className='btn btn-neutral rounded-none px-10 text-white text-base'>Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;