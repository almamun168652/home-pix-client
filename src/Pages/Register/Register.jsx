import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosOpen from "../../hooks/useAxiosOpen";
import Swal from "sweetalert2";


const Register = () => {

    const [isShow, setIsShow] = useState(false);
    const { createUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();

    const axiosOpen = useAxiosOpen();

    const { register, handleSubmit, reset, formState: { errors }, } = useForm();


    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                updateUserProfile(data.name, data.photo)
                    .then(() => {

                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            photo: data.photo,
                            role: 'user',
                        }
                        axiosOpen.post('/users' , userInfo)
                        .then(res => {
                            if(res.data?.insertedId){
                                reset();
                                Swal.fire({
                                    title: "Registered!",
                                    text: "User created Successfully.",
                                    icon: "success"
                                  });
                                  navigate('/')
                            }
                        })
                        
                        
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            })
            .catch(errors => {
                console.error(errors);
            })
    }

    return (
        <div>

            <div className="container mx-auto ">
                <div className=" my-20">
                    <div className="border p-5 w-full max-w-sm mx-auto space-y-3">
                        <h2 className="text-2xl font-bold">Register Now</h2>
                        <p>Enter your details to Register.</p>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                                <div>
                                    <input
                                        type="text"
                                        {...register("name", { required: true })}
                                        name="name"
                                        id=""
                                        className=" border-b-2  border-gray-300 text-black text-sm  focus:border-b-2 focus:outline-none focus:border-black block w-full p-2.5  "
                                        placeholder="Name"

                                    />
                                    {errors.name && <span className="text-red-600 relative -top-1 px-2.5 text-sm">Name is required</span>}
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        {...register("email", { required: true })}
                                        name="email"
                                        id="email"
                                        className="  border-b-2  border-gray-300 text-black text-sm  focus:border-b-2 focus:outline-none focus:border-black block w-full p-2.5  "
                                        placeholder="Email"
                                    />
                                    {errors.email && <span className="text-red-600 relative -top-1 px-2.5 text-sm">Email is required</span>}
                                </div>
                                <div className="relative">
                                    <input
                                        type={isShow ? "password" : "text"}
                                        {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                        })}
                                        name="password"
                                        id=""
                                        className=" border-b-2  border-gray-300 text-black text-sm  focus:border-b-2 focus:outline-none focus:border-black block w-full p-2.5  "
                                        placeholder="Password"
                                    />
                                    <span onClick={() => setIsShow(!isShow)} className="absolute right-2 top-3.5 cursor-default">{isShow ? <AiFillEye /> : <AiFillEyeInvisible />}</span>
                                    {errors.password?.type === 'pattern' && <span className="text-red-600 relative -top-1 px-2.5 text-sm">Password must have a capital letter, a special character, a number and a small letter</span>}
                                    {errors.password?.type === 'required' && <span className="text-red-600 relative -top-1 px-2.5 text-sm">Password is required</span>}
                                    {errors.password?.type === 'minLength' && <span className="text-red-600 relative -top-1 px-2.5 text-sm">Password must be 6 characters</span>}
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        {...register("photo", { required: true })}
                                        name="photo"
                                        id=""
                                        className=" border-b-2  border-gray-300 text-black text-sm  focus:border-b-2 focus:outline-none focus:border-black block w-full p-2.5  "
                                        placeholder="Photo URL"
                                    />
                                    {errors.photo && <span className="text-red-600 relative -top-1 px-2.5 text-sm">Photo URL is required</span>}
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-[#152475] hover:bg-[#152475] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center "
                            >
                                Register
                            </button>
                        </form>
                        <p className="text-center">
                            Already have an account? {" "}
                            <Link className="text-base text-[#152475] underline" to="/login">
                                Log In
                            </Link>
                        </p>
                        <SocialLogin></SocialLogin>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;