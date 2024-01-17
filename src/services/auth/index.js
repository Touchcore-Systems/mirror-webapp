import AJAX from "@/utils/ajax/Ajax";
import { addtoLocalstorage, getfromLocalstorage } from '@/services/helpers';
import _ from 'lodash';
export const login = async (email, password) => {

    const data = await AJAX("/default/call/json/authorize", "POST", {
        email,
        password
    });

    setLoggedInUser(data)
    return data

}


function setLoggedInUser(data) {

    const user = data.user;
    const orgSettings = data.orgSettings;
    const availableOrgs = data.availableOrgs;


    addtoLocalstorage('first_name', user.first_name)
    addtoLocalstorage('last_name', user.last_name)
    addtoLocalstorage('user_id', user.user_id)
    addtoLocalstorage('role', user.role)
    addtoLocalstorage('home_url', user.home_url)
    addtoLocalstorage('org_logo', user.org_logo)
    addtoLocalstorage('auth_token', data.token)

    addtoLocalstorage('show_tour', user.userInfo.showTour)

    addtoLocalstorage('timezone', orgSettings.timezone)
    addtoLocalstorage('org_id', orgSettings._id)
    addtoLocalstorage('orgSettings', JSON.stringify(orgSettings));
    addtoLocalstorage('availableOrgs', JSON.stringify(availableOrgs));


    const selectedOrg = _.filter(availableOrgs, { selected: true })[0];
    addtoLocalstorage('org_name', selectedOrg.orgName);
    addtoLocalstorage("userInfo", JSON.stringify(user.userInfo));

}



export const isLoggedIn = async () => {

    // const data = await AJAX("/default/call/json/require_login/");
    // if (data.status == "error")
    //     return false
    // return true
    const user=getfromLocalstorage('auth_token')
    console.log(user);
    if (user)
        return true
    return false

}