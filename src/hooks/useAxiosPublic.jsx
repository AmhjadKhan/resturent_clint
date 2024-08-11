import axios from "axios";

 export const axiosPublic = axios.create({
    baseURL: 'https://resturent-server-gamma.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;