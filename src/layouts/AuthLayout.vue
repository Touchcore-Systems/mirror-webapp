<script setup>
import BaseFooter from '../components/base/BaseFooter.vue';
import BaseLogo from '../components/base/BaseLogo.vue';


</script>
<template>
    <div>
        <div class="content content-fixed content-auth">
            <div class="container">
                <div class="media align-items-stretch justify-content-center ht-100p pos-relative">
                    <div class="sign-wrapper">
                        <BaseLogo />
                        <div class="wd-100p">
                            
                                <router-view/>
                          
                            <BaseFooter />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style >
body {
    background: #3a3a45e6;
    color: white;
}

h1,
h2,
h3 {
    color: white;
}
</style>