import { Link } from 'react-router-dom';
import userLogo from "../assets/user.png"

const Navbar = () => {
    return (
        <div className='flex items-center justify-between'>
            <div className="">

            </div>
            <nav className='flex gap-3 text-base'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/career'>Career</Link>
            </nav>
            <div className='flex gap-3 justify-center items-center'>
                <div>
                    <img src={userLogo} alt="" />
                </div>
                <Link to='/auth/login' className='btn btn-neutral rounded-none px-10 text-white text-base'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;