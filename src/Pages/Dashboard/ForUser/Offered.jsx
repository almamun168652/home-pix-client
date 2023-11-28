import { useLoaderData } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Offered = () => {
    

    const { user } = useAuth();
    const { propertyTitle, propertyLocation, agentName } = useLoaderData();





    return (
        <div>
            
            offerred form

        </div>
    );
};

export default Offered;