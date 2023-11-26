import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import PropTypes from 'prop-types';
import Loader from "../Components/Shared/Loader/Loader";

const AdminRoute = ({ children }) => {

    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Loader></Loader>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

AdminRoute.propTypes = {
    children: PropTypes.object.isRequired
}

export default AdminRoute;