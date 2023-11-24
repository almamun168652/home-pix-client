import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Register = () => {
    const [isShow, setIsShow] = useState(false);

    return (
        <div>

            <div className="container mx-auto ">
                <div className=" my-20">
                    <div className="border p-5 w-full max-w-sm mx-auto space-y-3">
                        <h2 className="text-2xl font-bold">Register Now</h2>
                        <p>Enter your details to Register.</p>
                        {/* {error ? <p className="text-red-600 max-w-[400px] text-sm text-center relative -bottom-4">{error}</p> : ''}
                        onSubmit={handleRegister} */}
                        <form className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    id=""
                                    className="  border-b-2  border-gray-300 text-black text-sm  focus:border-b-2 focus:outline-none focus:border-black block w-full p-2.5  "
                                    placeholder="Name"

                                />
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="  border-b-2  border-gray-300 text-black text-sm  focus:border-b-2 focus:outline-none focus:border-black block w-full p-2.5  "
                                    placeholder="Email"

                                />
                                <div className="relative">
                                    <input
                                        type={isShow ? "password" : "text"}
                                        name="password"
                                        id=""
                                        className=" border-b-2  border-gray-300 text-black text-sm  focus:border-b-2 focus:outline-none focus:border-black block w-full p-2.5  "
                                        placeholder="Password"

                                    />
                                    <span onClick={() => setIsShow(!isShow)} className="absolute right-2 top-1/3 cursor-default">{isShow ? <AiFillEye /> : <AiFillEyeInvisible />}</span>
                                </div>
                                <input
                                    type="text"
                                    name="photo"
                                    id=""
                                    className=" border-b-2  border-gray-300 text-black text-sm  focus:border-b-2 focus:outline-none focus:border-black block w-full p-2.5  "
                                    placeholder="Photo URL"

                                />

                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-[#152475] hover:bg-[#152475] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center "
                            >
                                Register
                            </button>
                            <p className="text-center">
                                Already have an account? {" "}
                                <Link className="text-base text-[#152475] underline" to="/login">
                                    Log In
                                </Link>
                            </p>
                            <SocialLogin></SocialLogin>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;