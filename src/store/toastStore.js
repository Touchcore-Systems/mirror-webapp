import { computed, ref } from "vue";

import { defineStore } from "pinia";
import { useToast } from "primevue/usetoast";

export const useToastStore = defineStore("toast", () => {
    
    const toast = useToast();
    const toastContent=ref('')
    const toastTitle=ref('')
    
    
    //actions
  
  
  // theme=["success","info","warn","error","secondary",'contrast']
  const showToast = (theme,callback,life=3000) => {   
    toast.add({ severity: theme, summary:toastTitle.value, detail: toastContent.value, life : life}); 
    if (callback && typeof callback === "function") {
      callback();
    }
};
  

  return {
    toastContent,
    toastTitle,
    showToast
  };
});
