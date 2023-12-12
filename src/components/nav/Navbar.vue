<template >
    <aside class="aside aside-fixed">
        <NavHeader :role="role" :org_name="org_name" />
        <NavBody v-if="navList" :org_name="org_name" :navLists="navList" />
        <div class="tour-backdrop"></div>
    </aside>
</template>


<script setup>
import { computed } from "vue";


import NavBody from "./NavBody.vue";
import NavHeader from "./NavHeader.vue";
import { adminNavlist, providerNavlist } from './utils/NavData';


const { org_name, role,  } = defineProps([
    "org_name",
    "role",
]);

const navList = computed(() => {
    if (role == "Admin") {
        return adminNavlist
    }
    if (role == "Provider") {
        return providerNavlist
    }

    return false
}
)
</script>


