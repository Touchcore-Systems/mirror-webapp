<template>
    <div class="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
        <div id="provider-welcome">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb breadcrumb-style1 mg-b-10">
                    <li class="breadcrumb-item">PROVIDER DASHBOARD</li>
                    <li class="breadcrumb-item active" aria-current="page">My Patients</li>
                </ol>
            </nav>
            <h2>Welcome {{ firstName }}</h2>
        </div>
    </div>
</template>
<script setup>

const { firstName } = defineProps([
    "firstName",

]);
</script>