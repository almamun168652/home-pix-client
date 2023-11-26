
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import useAuth from "../hooks/useAuth";
import Loader from "../Components/Shared/Loader/Loader";

const PrivateRoute = ({children}) => {

    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <Loader></Loader>
    }

    if (user) {
        return children;
    }
 
    return <Navigate state={location.pathname} to='/login'></Navigate>
    
};

PrivateRoute.propTypes = {
    children: PropTypes.object.isRequired
}

export default PrivateRoute;