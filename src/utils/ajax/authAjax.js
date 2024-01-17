// axios.interceptors.request.use(
//     config => {
//       config.headers['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
//           return config;
//       },
//       error => {
//           return Promise.reject(error);
//       }
//   );
import authAxios from '../axios/authAxiosInstance';

const authAJAX = async (url, method = "GET", uploadData = undefined, additionalHeaders = undefined) => {
    try {
        const axiosConfig = {
            method,
            url,
        };

        if (uploadData) {
            axiosConfig.data = uploadData;
        }

        if (additionalHeaders) {
            axiosConfig.headers = { ...authAxios.defaults.headers.common, ...additionalHeaders };
        }


        const { data } = await authAxios(axiosConfig)
        console.log(data, `data from ${authAxios.defaults.baseURL + url}`);
        return data

    } catch (error) {
        console.log(error);
        const err = error.response && error.response.data ?
            error.response.data : "Something went wrong"
        console.log(err, `error from ${authAxios.defaults.baseURL + url}`);

        throw err

    }

}

export default authAJAX