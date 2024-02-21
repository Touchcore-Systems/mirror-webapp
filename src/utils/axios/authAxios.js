// axios.interceptors.request.use(
//     config => {
//       config.headers['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
//           return config;
//       },
//       error => {
//           return Promise.reject(error);
//       }
//   );

import authAxiosInstance from "./authAxiosInstance";

const authAxios = async (
  url,
  method = "GET",
  payload = undefined,
  additionalHeaders = undefined
) => {
  try {
    const axiosConfig = {
      method,
      url,
    };

    if (payload) {
      axiosConfig.data = payload;
       //axiosConfig.data = JSON.parse(JSON.stringify(payload));
    }

    if (additionalHeaders) {
      axiosConfig.headers = {
        ...authAxiosInstance.defaults.headers.common,
        ...additionalHeaders,
      };
    }
    const { data } = await authAxiosInstance(axiosConfig);
    console.log(data, `data from ${authAxiosInstance.defaults.baseURL + url}`);
    return data;


  } catch (error) {
    const err =
      error.response && error.response.data
        ? error.response.data
        : "Something went wrong";
        
    console.error(err, `error from ${authAxiosInstance.defaults.baseURL + url}`);

    throw err;
  }
};

export default authAxios;
