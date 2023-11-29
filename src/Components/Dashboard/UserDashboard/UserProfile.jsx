
import useRole from "../../../hooks/useRole";
import Loader from "../../Shared/Loader/Loader";


const UserProfile = () => {

    const [userRole, userRoleLoading] = useRole();

    if (userRoleLoading) {
        return <Loader></Loader>
    }

    const {role , photo , name , email} = userRole || {}

    return (
        <div className="max-w-4xl mx-auto bg-[#E3EFF3] rounded-t-lg mt-4">
            <div className="rounded-t-lg flex justify-center items-center h-[200px] overflow-hidden bg-[#152475] text-white">
                <h1 className="text-2xl font-semibold -mt-4">My Profile</h1>
            </div>
            <div className="mx-auto w-32 h-32 relative ">
                <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                    <img
                        className="object-cover object-center h-32"
                        src={photo}
                        alt="Woman looking front"
                    />
                </div>
                {role && (
                    <button className="rounded-full uppercase  font-semibold px-4 py-2 text-xs absolute border border-white  top-4 bg-gray-900 text-white -right-12">
                        {role}
                    </button>
                )}
            </div>
            <div className="text-center mt-2 pb-20">
                <h2 className="font-bold text-lg text-black">{name}</h2>
                <p className="text-black font-semibold">{email}</p>
            </div>
        </div>
    );
};

export default UserProfile;



