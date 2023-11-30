import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-[#152475] mb-4">Page Not Found</h1>
                <img className="mx-auto mb-4 w-1/2 md:w-2/3" src="https://i.ibb.co/5rjSc7f/7f1493a7128969e6a3a839fab5bbc02b.jpg" alt="" />

                <Link to='/'>
                    <p className="text-white inline-block bg-[#152475] hover:bg-white hover:text-[#152475] transition-all border hover:border-[#152475] px-6 py-2">BACK TO HOME</p>
                </Link>

            </div>
        </div>
    );
};

export default Error;