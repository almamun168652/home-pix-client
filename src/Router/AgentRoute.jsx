import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from 'prop-types';
import Loader from "../Components/Shared/Loader/Loader";
import useAgent from "../hooks/useAgent";

const AgentRoute = ({ children }) => {

    const { user, loading } = useAuth();
    const [isAgent, isAgentLoading] = useAgent();
    const location = useLocation();

    if (loading || isAgentLoading) {
        return <Loader></Loader>
    }

    if (user && isAgent) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

AgentRoute.propTypes = {
    children: PropTypes.object.isRequired
}

export default AgentRoute;