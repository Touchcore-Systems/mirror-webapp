<template>
  <div
    class="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30"
  >
    <div id="provider-welcome">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb breadcrumb-style1 mg-b-10">
          <li class="breadcrumb-item">PROVIDER DASHBOARD</li>
          <li class="breadcrumb-item active" aria-current="page">
            {{route.name}}
          </li>
        </ol>
      </nav>
      <h2 v-if="route.meta.header == 'My Patients'"> {{ dashboardHeader }}</h2>
      <h4 v-else class="mg-b-0 tx-spacing--1"> {{route.meta.header}}</h4>

    </div>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const { firstName } = defineProps(["firstName"]);


const header = ref("");
const route = useRoute();
const router = useRouter();


const dashboardHeader = computed(() => {
  if (route.meta.header == "My Patients") {
      header.value = `Welcome ${firstName} `;
  }else{
 header.value=route.meta.header
  }
  return header.value;
});
</script>