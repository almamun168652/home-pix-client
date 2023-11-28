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
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
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
                element: <AgentRoute><h1>requested properties</h1></AgentRoute>
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
                element: <AdminRoute><h1>manage properties</h1></AdminRoute>
            },
            {
                path: 'manage-users',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path: 'manage-reviews',
                element: <AdminRoute><h1>manage reviews</h1></AdminRoute>
            },
        ]
    }
])

export default createdRoute;