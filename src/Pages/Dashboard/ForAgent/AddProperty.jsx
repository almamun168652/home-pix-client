import DashboardTitle from "../../../Components/Dashboard/DashboardTitle/DashboardTitle";


const AddProperty = () => {
    return (
        <div>

            <DashboardTitle title='Add Property'></DashboardTitle>

            <div className="md:mx-10 mb-10">
                <form className="bg-white p-4 md:p-8 rounded-md">
                    <div className="my-2">
                        <label className="text-gray-700">Property Title</label><br />
                        <input className="p-[6px] text-black rounded w-full border border-gray-500" type="text" name="modalUsername" id="" />
                    </div>
                    <div className="my-2">
                        <label className="text-gray-700">Property Location</label><br />
                        <input className="p-[6px] text-black rounded w-full border border-gray-500" type="text" name="modalEmail" id="" />
                    </div>
                    <div>
                        <label className="text-gray-700">Upload Property Image</label><br />
                        {/* <input type="file" className="file-input file-input-bordered file-input-md w-full max-w-xs" /> */}
                        <div className="flex flex-col md:flex-row gap-2 items-center">
                            <input type="file" className="file-input file-input-bordered border border-gray-500 rounded h-10 w-full max-w-xs" />
                            <span>Please upload your property image here.</span>
                        </div>
                    </div>
                    <div className="my-2">
                        <label className="text-gray-700">Agent Name</label><br />
                        <input type='text' className="p-[6px] text-black rounded w-full border border-gray-500" name="modalResume" id="" readOnly />
                    </div>
                    <div className="my-2">
                        <label className="text-gray-700">Agent Email</label><br />
                        <input type='text' className="p-[6px] text-black rounded w-full border border-gray-500" name="modalResume" id="" readOnly />
                    </div>
                    <div>
                        <label className="text-gray-700">Price Rangle</label><br />
                        <div className="flex flex-col items-center md:flex-row md:gap-2">
                            <div className="my-2 w-full">
                                <input type='number' placeholder="000$" className="p-[6px] text-black rounded w-full border border-gray-500" name="modalResume" id="" />
                            </div>
                            <div>
                                <h1>to</h1>
                            </div>
                            <div className="my-2 w-full">
                                <input type='number' placeholder="000$" className="p-[6px] text-black rounded w-full border border-gray-500" name="modalResume" id="" />
                            </div>
                        </div>
                    </div>
                    <div method="dialog" className="flex justify-end">
                        <button type="submit" className="mt-4">
                            <label className="bg-[#152475] hover:bg-[#1d32ae] px-8 py-2 rounded-md cursor-pointer text-white" htmlFor="applyJobModal">Add Property</label>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProperty;