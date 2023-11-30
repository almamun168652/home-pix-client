import axios from "axios";


const axiosOpen = axios.create({
    baseURL: 'https://home-pix-server.vercel.app/'
})

const useAxiosOpen = () => {
    return axiosOpen;
};

export default useAxiosOpen;