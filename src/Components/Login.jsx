import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";
import { useContext } from "react";

const Login = () => {

    const { signIn, setUser } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
            })
            .catch(error => {
                alert(error?.message);
                // console.log(error);
            })
    }

    return (
        <div className="min-h-screen flex justify-center items-center -mt-20">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="text-2xl font-semibold text-center">Login your account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Login</button>
                    </div>
                    <p className="text-center mt-6">
                        Dont’t Have An Account ? <Link className="text-red-500" to='/auth/register'>Register</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;