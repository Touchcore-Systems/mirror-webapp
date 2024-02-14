<template>
  <li class="nav-item" :class="{ active: aciveTab }">
    <div
      @click="router.push({ name: navList.name })"
      class="nav-link"
      :id="navList?.id"
    >
      <vue-feather
        v-if="navList?.icon?.vueFeather"
        :type="navList?.icon?.iconName"
      ></vue-feather>
      <i
        v-else
        :class="navList?.icon?.class"
        class="icon-class"
      ></i>
      <span>{{ navList?.name }}</span>
    </div>
  </li>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const { navList } = defineProps(["navList"]);

const route = useRoute();
const router = useRouter();

//deciding the active
const aciveTab = computed(() => navList.name === route.name);


</script>
<style scoped>
.nav-item {
  cursor: pointer !important;
}

.icon-class{
  font-size: 14px;
   margin-right: 20px
}
</style>
