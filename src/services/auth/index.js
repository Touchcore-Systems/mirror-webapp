import _ from "lodash";
import axios from "axios";





export const login = async (email, password) => {
    try {
        const headers = {
            "Accept": "application/json, text/plain",
            "Content-Type": "application/json",
        };
        const { data } = await axios.post(
            `${import.meta.env.VITE_MIRRORAR_API_URL}/default/call/json/authorize`,
            {
                email,
                password,
            },
            { headers }
        );

        //setLoggedInUser(data);
        return data;

    } catch (error) {
        const err = error.response && error.response.data ?
            error.response.data : "Something went wrong"
        console.log(err, `error from ${import.meta.env.VITE_MIRRORAR_API_URL}/default/call/json/authorize`);

        throw err
    }

};



export const isLoggedIn = async () => {
    // const data = await AJAX("/default/call/json/require_login/");
    // if (data.status == "error")
    //     return false
    // return true
    const user = null;
    if (user) return true;
    return false;
};
