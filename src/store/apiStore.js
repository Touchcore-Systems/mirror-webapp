import { computed, ref } from "vue";

import { defineStore } from "pinia";

export const useApiStore = defineStore("api", () => {
    

    const apiLoading=ref(false)
    
    //actions
  
  

  

  return {
    apiLoading
  };
});
