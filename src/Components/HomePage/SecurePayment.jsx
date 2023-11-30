import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";


const SecurePayment = () => {
    return (
        <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="md:w-1/2">
                <img className="w-full" src='https://i.ibb.co/3cZP5BS/home-house.png' alt="" />
            </div>
            <div className="md:w-1/2">
                <h1 className="text-2xl md:text-4xl font-bold text-[#152475]">Secure Payment System</h1>
                <p className="my-4">Pavilion Payments offers a broad portfolio of solutions to help our clients get to know their guests and create safe and fun gaming  experiences. Our solutions span all of a casinos guest touch points, whether thats at the cage, on the casino floor, or online.</p>
                <div className="list-none">
                    <li className="flex gap-1 items-center"><IoCheckmarkDoneCircleOutline></IoCheckmarkDoneCircleOutline><span>Find Excellent Deals.</span></li>
                    <li className="flex gap-1 items-center"><IoCheckmarkDoneCircleOutline></IoCheckmarkDoneCircleOutline><span>Friendly Host and Fast Support.</span></li>
                    <li className="flex gap-1 items-center"><IoCheckmarkDoneCircleOutline></IoCheckmarkDoneCircleOutline><span>Secure Payment System.</span></li>
                </div>
            </div>
        </div>
    );
};

export default SecurePayment;