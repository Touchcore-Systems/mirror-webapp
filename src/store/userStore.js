import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { defineStore } from "pinia";
import _ from "lodash";

import { login } from "@/services/auth";

export const useUserStore = defineStore(
  "user",
  () => {
    const router = useRouter();
    const route = useRoute();

    const loading = ref(false);
    const error = ref(null);
    const user = ref({});

    //getters
    const authUser = computed(() => user.value);

    //actions
    async function handleLogin(credentials) {
      try {
        loading.value = true;
        error.value = null;
        const data = await login(credentials.email, credentials.password);
        email.value = password.value = "";
        setLoggedInUser(data);
        const redirectTo = route.query.redirect || { name: "My Patients" };
        router.push(redirectTo);
        console.log(data,"userStore");

      } catch (e) {
        console.log(e);
        error.value = e;
      } finally {
        loading.value = false;
      }
    }

    function setLoggedInUser(data) {
      const userInfo = data.user;
      const orgSettings = data.orgSettings;
      const availableOrgs = data.availableOrgs;

      user.value.first_name = userInfo.first_name;
      user.value.last_name = userInfo.last_name;
      user.value.user_id = userInfo.user_id;
      user.value.role = userInfo.role;
      user.value.home_url = userInfo.home_url;
      user.value.org_logo = userInfo.org_logo;
      user.value.auth_token = data.token;
      user.value.show_tour = userInfo.userInfo.showTour;
      user.value.timezone = orgSettings.timezone;
      user.value.org_id = orgSettings._id;
      user.value.orgSettings = JSON.stringify(orgSettings);
      user.value.availableOrgs = JSON.stringify(availableOrgs);

      const selectedOrg = _.filter(availableOrgs, { selected: true })[0];
      user.value.org_name = selectedOrg.orgName;
      user.value.userInfo = JSON.stringify(userInfo.userInfo);
    }

    function $reset() {
      user.value = {};
    }

    function logOut() {
      user.value = {};
    }

    return {
      loading,
      error,
      authUser,
      user,
      handleLogin,
      $reset,
      logOut,
    };
  },

  {
    persist: [
      {
        paths: ["user"],
        storage: localStorage,
      },
    ],
  }
);
