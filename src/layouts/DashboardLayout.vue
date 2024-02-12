<template>
  <Navbar :org_name="user.org_name" :role="user.role" />
  <div class="content ht-100v pd-0">
    <!-- content-header -->
    <div class="content-header">
      <nav class="nav"></nav>
      <UserProfile
        :first-name="user.first_name"
        :last-name="user.last_name"
        :org_name="user.org_name"
        :role="user.role"
      />
    </div>

    <div class="content-body">
      <div class="container pd-x-0">
        <DashboardHeader :first-name="user.first_name" />

        <!-- active section -->
        <!-- <slot /> -->
        <router-view />
      </div>

      <!-- content-footer -->
      <DashboardFooter />
    </div>
  </div>

  <!-- <router-view/> -->
</template>
<script setup>
import { ref } from "vue";
import DashboardHeader from "../components/dashboard/DashboardHeader.vue";
import DashboardFooter from "../components/dashboard/DashboardFooter.vue";
import Navbar from "../components/nav/Navbar.vue";
import UserProfile from "../components/userprofile/UserProfile.vue";
import { getfromLocalstorage } from "../services/helpers";
import { useUserStore } from "../store/userStore";
import { storeToRefs } from "pinia";

const org_name = ref(getfromLocalstorage('org_name'));
const role = ref(getfromLocalstorage('role'));
const firstName = ref("Roshni");
const lastName = ref("V R");

const store = useUserStore()
const {  user } = storeToRefs(store)
</script >
<style  >
.content-body {
  background: white;
  color: #001737;
}
</style>