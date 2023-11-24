
// import useAuth from "../../hooks/useAuth";
// import useAxiosPublic from "../../hooks/useAxiosPublic";
// import { useNavigate } from "react-router-dom";



const SocialLogin = () => {
    // const { logInWithGoogle } = useAuth();
    // const axiosPublic = useAxiosPublic();
    // const navigate = useNavigate()
    // const handleLogInWithGoogle = () => {
    //     logInWithGoogle()
    //         .then(res => {
    //             console.log(res.user);
    //             const userInfo = {
    //                 email: res.user?.email,
    //                 name: res.user?.displayName
    //             }
    //             axiosPublic.post('/users', userInfo)
    //                 .then(res => {
    //                     console.log(res.data);
    //                     navigate('/')
    //                 })
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }
    return (
        <div>
            <div className="divider"></div>
            <div className="flex justify-center">
                <button className="flex gap-2 items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    <img className="w-5" src="https://i.ibb.co/bQWtMgX/Google-G-Logo-svg-1-removebg-preview.png" alt="" />
                    <span>Continue with Google</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;