import PropTypes from 'prop-types';

const DashboardTitle = ({ title }) => {
    return (
        <div>
            <h2 className='border-y-2 w-full md:w-1/3 mx-auto border-[#152475] text-black text-center text-xl py-1 my-10 font-bold'>{title}</h2>
        </div>
    );
};

DashboardTitle.propTypes = {
    title: PropTypes.node
}

export default DashboardTitle;