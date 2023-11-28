import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure";
import useAxiosOpen from "./useAxiosOpen";



const useRole = () => {
    const { user } = useAuth();
    // const axiosSecure = useAxiosSecure();
    const axiosOpen = useAxiosOpen();
    const { data: userRole, isPending: userRoleLoading } = useQuery({
        queryKey: [user?.email, 'userRole'],
        queryFn: async () => {
            const res = await axiosOpen.get(`/users/role/${user.email}`);
            return res.data;
        }
    })
    return [userRole , userRoleLoading]
};

export default useRole;