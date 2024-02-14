<script setup>
import MyPatients from "./components/MyPatients.vue";

import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div class="row row-xs mg-t-10 marginl-5">
    <h4 class="mg-b-0">{{ route.meta.header }}</h4>
    <MyPatients />
  </div>
</template>
