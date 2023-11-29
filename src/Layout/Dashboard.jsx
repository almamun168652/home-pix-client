import { Link, NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaListUl , FaLaptopHouse , FaUsersCog   } from "react-icons/fa";
import { FaMoneyCheckDollar , FaHouseMedicalCircleCheck } from "react-icons/fa6";
import { VscPreview } from "react-icons/vsc";
import { MdAddBusiness  ,MdPending , MdOutlineRateReview   } from "react-icons/md";
import { BsHousesFill } from "react-icons/bs";
import useAdmin from "../hooks/useAdmin";
import useAgent from "../hooks/useAgent";


const Dashboard = () => {
    

    const [isAdmin] = useAdmin();
    const [isAgent] = useAgent();


    return (
        <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto px-4">
            <div className="w-full md:w-3/12 min-h-screen bg-[#152475]">
                <div className="bg-white border-x-2 border-[#152475] py-2 mt-4 mb-8 flex justify-center">
                    <Link to='/' className="flex gap-1 items-center">
                        <img className="w-8" src="https://i.ibb.co/cQbN1hq/logo.png" alt="" /><span className="text-[#152475] font-bold text-xl">Home Pix</span>
                    </Link>
                </div>
                { (!isAdmin && !isAgent) && <ul>
                    <li>
                        <NavLink
                            to="/dashboard/my-profile"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " bg-[#7DD3FC] font-semibold text-black box-border py-2 block w-full pl-10" : "text-white py-2 pl-10 border-y border-[#7DD3FC] block"
                            }
                        >
                            <div className="flex items-center gap-2">
                                <CgProfile />  <span>My Profile</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/wishlist"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " bg-[#7DD3FC] font-semibold text-black box-border py-2 block w-full pl-10" : "text-white py-2 pl-10 border-b border-[#7DD3FC] block"
                            }
                        >
                            <div className="flex items-center gap-2">
                                <FaListUl />  <span>Wishlist</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/property-bought"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " bg-[#7DD3FC] font-semibold text-black box-border py-2 block w-full pl-10" : "text-white py-2 pl-10 border-b border-[#7DD3FC] block"
                            }
                        >
                            <div className="flex items-center gap-2">
                                <FaMoneyCheckDollar />  <span>Property Bought</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/my-reviews"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " bg-[#7DD3FC] font-semibold text-black box-border py-2 block w-full pl-10" : "text-white py-2 pl-10 border-b border-[#7DD3FC] block"
                            }
                        >
                            <div className="flex items-center gap-2">
                                <VscPreview />  <span>My Reviews</span>
                            </div>
                        </NavLink>
                    </li>


                </ul>}

                {isAgent && <ul>
                    <li>
                        <NavLink
                            to="/dashboard/agent-profile"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " bg-[#7DD3FC] font-semibold text-black box-border py-2 block w-full pl-10" : "text-white py-2 pl-10 border-y border-[#7DD3FC] block"
                            }
                        >
                            <div className="flex items-center gap-2">
                                <CgProfile />  <span>Agent Profile</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/add-property"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " bg-[#7DD3FC] font-semibold text-black box-border py-2 block w-full pl-10" : "text-white py-2 pl-10 border-b border-[#7DD3FC] block"
                            }
                        >
                            <div className="flex items-center gap-2">
                                <MdAddBusiness />  <span>Add Property</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/my-added-properties"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " bg-[#7DD3FC] font-semibold text-black box-border py-2 block w-full pl-10" : "text-white py-2 pl-10 border-b border-[#7DD3FC] block"
                            }
                        >
                            <div className="flex items-center gap-2">
                                <FaHouseMedicalCircleCheck  />  <span>My Added Properties</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/my-sold-properties"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " bg-[#7DD3FC] font-semibold text-black box-border py-2 block w-full pl-10" : "text-white py-2 pl-10 border-b border-[#7DD3FC] block"
                            }
                        >
                            <div className="flex items-center gap-2">
                                <BsHousesFill />  <span>My Sold Properties</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/requested-properties"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " bg-[#7DD3FC] font-semibold text-black box-border py-2 block w-full pl-10" : "text-white py-2 pl-10 border-b border-[#7DD3FC] block"
                            }
                        >
                            <div className="flex items-center gap-2">
                                <MdPending  />  <span>Requested Properties</span>
                            </div>
                        </NavLink>
                    </li>


                </ul>}


                {isAdmin && <ul>
                    <li>
                        <NavLink
                            to="/dashboard/admin-profile"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " bg-[#7DD3FC] font-semibold text-black box-border py-2 block w-full pl-10" : "text-white py-2 pl-10 border-y border-[#7DD3FC] block"
                            }
                        >
                            <div className="flex items-center gap-2">
                                <CgProfile />  <span>Admin Profile</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/manage-properties"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " bg-[#7DD3FC] font-semibold text-black box-border py-2 block w-full pl-10" : "text-white py-2 pl-10 border-b border-[#7DD3FC] block"
                            }
                        >
                            <div className="flex items-center gap-2">
                                <FaLaptopHouse  />  <span>Manage Properties</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/manage-users"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " bg-[#7DD3FC] font-semibold text-black box-border py-2 block w-full pl-10" : "text-white py-2 pl-10 border-b border-[#7DD3FC] block"
                            }
                        >
                            <div className="flex items-center gap-2">
                                <FaUsersCog   />  <span>Manage Users</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/manage-reviews"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " bg-[#7DD3FC] font-semibold text-black box-border py-2 block w-full pl-10" : "text-white py-2 pl-10 border-b border-[#7DD3FC] block"
                            }
                        >
                            <div className="flex items-center gap-2">
                                <MdOutlineRateReview  />  <span>Manage Reviews</span>
                            </div>
                        </NavLink>
                    </li>

                </ul>}
            </div>
            <div className="w-full md:w-9/12 bg-[#7DD3FC] px-4 ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;