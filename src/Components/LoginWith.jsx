import { GrGithub, GrGoogle } from 'react-icons/gr';

const LoginWith = () => {
    return (
        <div>
            <h2 className='text-lg font-semibold mb-2'>Login</h2>
            <div className=' flex flex-col gap-2'>
                <button className="btn">
                    <GrGoogle></GrGoogle>
                    Login with Google
                </button>
                <button className="btn">
                    <GrGithub></GrGithub>
                    Login with Github
                </button>
            </div>
        </div>
    );
};

export default LoginWith;