<template>
    <Navbar :org_name="org_name" :role="role" />
    <div class="content ht-100v pd-0">

         <!-- content-header -->
        <div class="content-header">
            <nav class="nav"></nav>
            <UserProfile :first-name="firstName" :last-name="lastName" :org_name="org_name" :role="role" />
        </div>
       

        <div class="content-body">

            <div class="container pd-x-0">
                <DashboardHeader :first-name="firstName" />


                <!-- active section -->
                <slot />
               
            </div>

           <!-- content-footer -->
            <DashboardFooter/>
          
        </div>
    </div>
   
    <!-- <router-view/> -->
</template>
<script setup>
import { ref } from 'vue';
import DashboardHeader from '../components/dashboard/DashboardHeader.vue';
import DashboardFooter from '../components/dashboard/DashboardFooter.vue';
import Navbar from '../components/nav/Navbar.vue';
import UserProfile from '../components/userprofile/UserProfile.vue';



const org_name = ref("MirrorAR")
const role = ref("Provider")
const firstName = ref("Roshni")
const lastName = ref("V R")

</script >
<style  >
.content-body {
    background: white;
    color: #001737
 
}


</style>