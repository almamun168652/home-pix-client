import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex max-w-[1200px] mx-auto px-4">
            <div className="w-3/12 min-h-screen bg-[#152475]">
                <ul>
                    <li>
                        <NavLink to="/dashboard/cart">My Cart</NavLink>
                    </li>
                </ul>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;