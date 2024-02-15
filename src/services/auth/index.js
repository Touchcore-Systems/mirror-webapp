import _ from "lodash";
import axios from "axios";
import { APP_URL, BASE_URL } from "@/utils/config";





export const login = async (email, password) => {
    try {
        const headers = {
            "Accept": "application/json, text/plain",
            "Content-Type": "application/json",
        };
        const { data } = await axios.post(
            `${BASE_URL + APP_URL}/default/call/json/authorize`,
            {
                email,
                password,
            },
            { headers }
        );

        //setLoggedInUser(data);
        return data;

    } catch (error) {
        console.log(error);
        const err = error.response && error.response.data ?
            error.response.data : "Something went wrong"
        console.log(err, `error from ${BASE_URL + APP_URL}/default/call/json/authorize`);

        throw err
    }

};



export const isLoggedIn = async () => {
    // const data = await AJAX("/default/call/json/require_login/");
    // if (data.status == "error")
    //     return false
    // return true
    const user = null;
    console.log(user);
    if (user) return true;
    return false;
};
