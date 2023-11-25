import { FaConnectdevelop } from "react-icons/fa";
import { SiFuturelearn } from "react-icons/si";


const Banner = () => {
    return (
        <div className="my-10">
            <div className="bg-[url(https://i.ibb.co/fYTvpHB/banner.jpg)] bg-no-repeat bg-cover bg-center">
                <section className=" bg-[#00000086] flex items-center min-h-[80vh]">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

                        <h1 className="mb-4 text-xl md:text-4xl font-bold tracking-tight leading-none  lg:text-5xl text-white">Property Solution For Everyone.</h1>
                        <p className="my-8 text-sm md:text-md font-normal text-white sm:px-16 xl:px-48 ">Discover Your Dream Home! Explore a curated collection of stunning properties for sale on our real estate website. From cozy starter homes to luxurious estates, find the perfect property to suit your lifestyle. Your next chapter begins here – Start your property journey today!</p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">

                            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">

                                <a href="#" className="flex justify-center items-center py-3 px-5 text-base font-medium text-center  rounded-lg border border-gray-300 hover:bg-gray-700 focus:ring-4 focus:ring-gray-100 text-white dark:focus:ring-gray-800">
                                    <SiFuturelearn className="text-xl mr-2 text-white"/>
                                    Learn More
                                </a>

                                <a href="#" className="flex justify-center items-center py-3 px-5 text-base font-medium text-center  rounded-lg border border-gray-300 hover:bg-gray-700 focus:ring-4 focus:ring-gray-100 text-white dark:focus:ring-gray-800">
                                    <FaConnectdevelop className="text-xl mr-2 text-white"/>
                                    Connect With Us
                                </a>
                            </div>


                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Banner;