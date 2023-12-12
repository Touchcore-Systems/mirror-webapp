<template>
        <div class="aside-header" id="orgSelect">
            <a id="logo" href="/" class="aside-logo mirror-ar-logo">
                <div style="margin-top: 20px;margin-bottom: 10px;">
                    <div class="org-name" :title="org_name">{{ org_name }}</div>
                    <div class="tx-10 tx-color-03" style="text-transform: uppercase;margin-top: -5px;font-weight: normal;">
                        {{ role }}</div>
                </div>
            </a>
            <a href="" class="aside-menu-link d-xl-none">
                <vue-feather type="menu"></vue-feather>
                <vue-feather type="x"></vue-feather>
            </a>
        </div>
</template>

<script setup>

const { role, org_name, user_id } = defineProps([
    "role",
    "org_name",
    "user_id"
]);
</script>