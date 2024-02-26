import { computed, ref, watch } from "vue";

import { defineStore } from "pinia";
import { useForm } from "vee-validate";


import {
    getAllpatients,
    } from "@/services/provider/dashboard";

export const useProviderStore = defineStore("provider", () => {
    const myallPatients = ref([]);

  



  //actions



  const handleGetallPatients = async () => {
    try {
      myallPatients.value = await getAllpatients();
    } catch (error) {
      
    }
  };

  return {
    myallPatients,
    handleGetallPatients
  };
});
