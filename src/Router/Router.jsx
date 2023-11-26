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
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            // user only
            {
                path: 'my-profile',
                element: <h1>my profile</h1>
            },
            {
                path: 'wishlist',
                element: <h1>wishlist</h1>
            },
            {
                path: 'property-bought',
                element: <h1>property bought</h1>
            },
            {
                path: 'my-reviews',
                element: <h1>my reviews</h1>
            },
            
            // agent only
            {
                path: 'agent-profile',
                element: <h1>agent profile</h1>
            },
            {
                path: 'add-property',
                element: <h1>add property</h1>
            },
            {
                path: 'my-added-properties',
                element: <h1>my added properties</h1>
            },
            {
                path: 'my-sold-properties',
                element: <h1>my sold properties</h1>
            },
            {
                path: 'requested-properties',
                element: <h1>requested properties</h1>
            },

            // admin only
            {
                path: 'admin-profile',
                element: <h1>Admin Profile</h1>
            },
            {
                path: 'manage-properties',
                element: <h1>manage properties</h1>
            },
            {
                path: 'manage-users',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'manage-reviews',
                element: <h1>manage reviews</h1>
            },
        ]
    }
])

export default createdRoute;