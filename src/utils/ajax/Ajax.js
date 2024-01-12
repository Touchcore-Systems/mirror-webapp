import globalAxios from "../axios/globalAxiosInstance";

const timeout = function (s) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};


// export const getJson = async (url)=> {
//     try {
//       const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)])
//       const data = await res.json()

//       if (!res.ok) {
//         throw new Error
//       }
//       return data
//     } catch (error) {
//       throw error
//     }

//   }


const AJAX = async (url, method = "GET", uploadData = undefined,additionalHeaders=undefined) => {
    try {
        const axiosConfig = {
            method,
            url,
        };

        if (uploadData) {
            axiosConfig.data = uploadData;
        }

        if(additionalHeaders){
            axiosConfig.headers = { ...globalAxios.defaults.headers.common, ...additionalHeaders };  
        }


        const { data } = await globalAxios(axiosConfig)
        console.log(data,`data from ${globalAxios.defaults.baseURL + url}`);
        return data

    } catch (error) {

        console.error(error.response.data,'AJAX Error:');
        throw error

    }

}

export default AJAX