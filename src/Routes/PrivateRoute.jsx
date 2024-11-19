import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Components/Pages/Loading";


const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    
    console.log(location);

    if(loading){
        return <Loading></Loading>;
    }


    if (user && user.email) {
        return children;
    }
    return <Navigate state={location} to={`/auth/login`}></Navigate>
};

export default PrivateRoute;