import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllProperties from "../Pages/AllProperties/AllProperties";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import ManageUsers from "../Components/Dashboard/AdminDashboard/ManageUsers";
import AdminRoute from "./AdminRoute";
import AgentRoute from "./AgentRoute";
import AdminProfile from "../Components/Dashboard/AdminDashboard/AdminProfile";
import AgentProfile from "../Components/Dashboard/AgentDashboard/AgentProfile";
import AddProperty from "../Pages/Dashboard/ForAgent/AddProperty";
import MyAddedProperties from "../Pages/Dashboard/ForAgent/MyAddedProperties";
import PropertyUpdate from "../Pages/Dashboard/ForAgent/PropertyUpdate";
import ManageProperties from "../Pages/Dashboard/ForAdmin/ManageProperties";
import Details from "../Pages/Detaiils/Details";
import Wishlist from "../Pages/Dashboard/ForUser/Wishlist";
import Offered from "../Pages/Dashboard/ForUser/Offered";
import PropertyBought from "../Pages/Dashboard/ForUser/PropertyBought";
import RequestedProperties from "../Pages/Dashboard/ForAgent/requestedProperties";
import MyReview from "../Pages/Dashboard/ForUser/MyReview";
import ManageReviews from "../Pages/Dashboard/ForAdmin/ManageReviews";
import UserProfile from "../Components/Dashboard/UserDashboard/UserProfile";
import AdvertiseProperty from "../Pages/Dashboard/ForAdmin/AdvertiseProperty";

const createdRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/all-properties',
                element: <PrivateRoute><AllProperties></AllProperties></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/verifiedProperty/details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/verifiedProperty/details/${params.id}`) 
            },
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            // user only
            {
                path: 'my-profile',
                element: <UserProfile></UserProfile>
            },
            {
                path: 'wishlist',
                element: <Wishlist></Wishlist>
            },
            {
                path: 'property-bought',
                element: <PropertyBought></PropertyBought>
            },
            {
                path: 'my-reviews',
                element: <MyReview></MyReview>
            },
            {
                path: 'wishlist/offered/:id',
                element: <Offered></Offered>,
                loader: ({ params }) => fetch(`http://localhost:5000/wishlist/${params.id}`)
            },

            // agent only
            {
                path: 'agent-profile',
                element: <AgentRoute><AgentProfile></AgentProfile></AgentRoute>
            },
            {
                path: 'add-property',
                element: <AgentRoute><AddProperty></AddProperty></AgentRoute>
            },
            {
                path: 'my-added-properties',
                element: <AgentRoute><MyAddedProperties></MyAddedProperties></AgentRoute>
            },
            {
                path: 'my-sold-properties',
                element: <AgentRoute><h1>my sold properties</h1></AgentRoute>
            },
            {
                path: 'requested-properties',
                element: <AgentRoute><RequestedProperties></RequestedProperties></AgentRoute>
            },
            {
                path: 'my-added-properties/update/:id',
                element: <AgentRoute><PropertyUpdate></PropertyUpdate></AgentRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/addedProperties/${params.id}`)
            },

            // admin only
            {
                path: 'admin-profile',
                element: <AdminRoute><AdminProfile></AdminProfile></AdminRoute>
            },
            {
                path: 'manage-properties',
                element: <AdminRoute><ManageProperties></ManageProperties></AdminRoute>
            },
            {
                path: 'manage-users',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path: 'manage-reviews',
                element: <AdminRoute><ManageReviews></ManageReviews></AdminRoute>
            },
            {
                path: 'advertise-property',
                element: <AdminRoute><AdvertiseProperty></AdvertiseProperty></AdminRoute>
            },
        ]
    }
])

export default createdRoute;