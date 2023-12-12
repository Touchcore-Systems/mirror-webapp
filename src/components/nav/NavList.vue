<template>
    <li class="nav-item" :class="{ active: aciveTab }">
        <a :href="navList?.href" class="nav-link" :id="navList?.id">
            <vue-feather v-if="navList?.icon?.vueFeather" :type="navList?.icon?.iconName"></vue-feather>
            <i v-else :class="navList?.icon?.class" style="font-size: 14px;margin-right: 20px;"></i>
            <span>{{ navList?.name }}</span>
        </a>
    </li>
</template>

<script setup>
import { computed } from "vue";


const { navList } = defineProps([
    "navList",
]);


//deciding the active
const aciveTab = computed(() => {  })
</script>

    
