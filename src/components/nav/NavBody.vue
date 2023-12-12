<template>
    <div class="aside-body" id="sidenav">
        <p class="poweredbymenu tx-12 text-muted" v-if="org_name && !org_name.toLowerCase().includes('mirrorar')">
            Powered By <span class="powered-by">MirrorAR</span><sup style="font-size: 7px;">TM</sup></p>
        <ul class="nav nav-aside">
            <NavList v-for="navList in navLists" :navList="navList" :key="navList.name" />
        </ul>
    </div>
</template>

<script setup>
import NavList from './NavList.vue';

const {  org_name, navLists } = defineProps([
    "org_name",
    'navLists',
]);
</script>