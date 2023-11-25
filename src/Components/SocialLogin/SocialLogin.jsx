
import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosOpen from "../../hooks/useAxiosOpen";



const SocialLogin = () => {
    const { logInWithGoogle } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const axiosOpen = useAxiosOpen();


    const handleLogInWithGoogle = () => {
        logInWithGoogle()
            .then(res => {
                console.log(res.user);

                const userInfo = {
                    email: res.user?.email,
                    name: res.user?.displayName
                }

                axiosOpen.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        swal("Good job!", "Request Successfully!", "success");
                        navigate(location.state ? location.state : '/');
                    })

            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <div className="divider"></div>
            <div className="flex justify-center">
                <button onClick={handleLogInWithGoogle} className="flex gap-2 items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    <img className="w-5" src="https://i.ibb.co/bQWtMgX/Google-G-Logo-svg-1-removebg-preview.png" alt="" />
                    <span>Continue with Google</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;