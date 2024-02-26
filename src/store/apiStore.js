import { computed, ref } from "vue";
import { defineStore } from "pinia";

import { useToastStore } from "./toastStore";
import { useRoute, useRouter } from "vue-router";
import nProgress from "nprogress";

export const useApiStore = defineStore("api", () => {
  const apiLoading = ref(false);

  const router = useRouter();
  const route = useRoute();


  const toastStore = useToastStore();

  //actions
  const handleApiError = (error, toQuery = null) => {
    toastStore.toastTitle = "Authentication"
    if (error == "Authentication required. Please log in" ||"Authorization Header Expired" ) {
      toastStore.toastContent = "Something went wrong. Please log in again."
      toastStore.showToast("error");
      console.log(toQuery,"toQuery");
      if (toQuery)
        router.push({ name: "Login", query: { redirect: toQuery } })
      else
        router.push({ name: "Login" });
    } else {
      toastStore.toastContent = "Something went wrong. Please try again."
      toastStore.showToast("error");
    }
  };

  const startProgress = () => {
    apiLoading.value=true
  };

  const endProgress = () => {
    apiLoading.value=false
  };

  return {
    apiLoading,
    handleApiError,
    startProgress,
    endProgress
  };
});
