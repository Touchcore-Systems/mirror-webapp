<template >
    <div id="user-profile">
        <div class="navbar-right">
            <div class="dropdown dropdown-profile">
                <a href="" class="dropdown-link" data-toggle="dropdown" data-display="static">
                    <div class="avatar avatar-sm"><span
                            class="avatar-initial rounded-circle">{{ firstName[0] }} {{ lastName[0] }}</span>
                    </div>
                </a>
                <!-- dropdown-link -->
                <div class="dropdown-menu dropdown-menu-right tx-13 padding-t-0px">
                    <h6 class="tx-semibold mg-b-5 padding-lr padding-top-25px">{{ firstName }} {{ lastName }}
                    </h6>
                    <p class="tx-12 tx-color-03 padding-lr font-trans" >{{ role }}</p>
                    <div class="dropdown-divider padding-lr"></div>
                    <!-- <ul id="orgList">
                        <li v-for="availOrg in availableOrgs" v-on:click="selectOrg($event, availOrg)"
                            :class="availOrg.selected ? 'active' : ''">
                            <div>
                                <input type="radio" :value="true" v-model="availOrg.selected">
                            </div>
                            <label class="mg-b-0">
                                <h6 class="tx-semibold mg-b-0">{{ availOrg.orgName }}</h6>
                                <p class="tx-12 tx-color-03 mg-b-0" style="text-transform: uppercase;">{{ availOrg.role }}</p>
                            </label>
                        </li>
                    </ul> -->
                    <a href="#" v-on:click="signout()" class="dropdown-item padding-lr"><i data-feather="log-out"></i>Sign
                        Out</a>
                    <div class="dropdown-divider padding-lr"></div>
                    <p class="mg-b-3 tx-12 padding-lr"><span class="powered-by">MirrorAR</span><sup class="font-size-7px">TM</sup></p>
                    <!-- <p class="mg-b-0 tx-12 tx-color-03 padding-lr" style="padding-bottom:10px!important;">Version
                        {{ backendVersion }}</p>

                    <div v-if="userInfo.licenseType">
                        <p class="mg-b-0 tx-12  padding-lr" style="padding-bottom:8px!important;">License Type: <a
                                target="_blank" :href="userInfo.licenseUrl"> {{ userInfo.licenseType }}</a></p>
                    </div>
                    <div v-else>
                        <p class="mg-b-0 tx-12  padding-lr" style="padding-bottom:8px!important;">License Type: <a
                                target="_blank" :href="orgSettings.licenseUrl"> {{ orgSettings.licenseType }}</a></p>
                    </div>
                    <p v-if="orgSettings.expires" class="mg-b-0 tx-12  padding-lr" style="padding-bottom:8px!important;">
                        Expires: {{ orgSettings.expires }}</p>
                    <p style="padding-bottom:10px!important;"> </p> -->
                </div>
                <!-- dropdown-menu -->
            </div>
            <!-- dropdown -->

        </div>
    </div>
</template>
<script setup>


const { org_name, role, firstName,lastName } = defineProps([
    "org_name",
    "role",
    "firstName",
    "lastName"
]);

</script>
<style >
.dropdown-item {
    cursor: pointer;
}

#orgList {
    list-style: none;
    padding: 0;
}

#orgList li {
    position: relative;
    display: flex;
    align-content: center;
    align-items: center;
    padding: 8px 25px 0px 25px;
}

#orgList li label {
    flex: 10;
}

#orgList li:hover {
    background-color: #f3f4f7;
}

#orgList li * {
    cursor: pointer;
}

#orgList li div:first-child {
    padding-right: 15px;
    flex: 1;
}

#orgList li.active:before {
    content: " ";
    position: absolute;
    border-left: 3px solid #2ba58d;
    left: 0px;
    top: 0;
    bottom: 0;
}

/* appearance for checked radiobutton */
#orgList li input[type="radio"]:checked {
    background-color: #fff;
    color: #2ba58d;
}

#orgList li input[type='radio'] {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    outline: none;
    border: 2px solid gray;
}

#orgList li input[type='radio']:before {
    content: '';
    display: block;
    width: 60%;
    height: 60%;
    margin: 20% auto;
    border-radius: 50%;
}

#orgList li input[type="radio"]:checked:before {
    background: #2ba58d;

}

#orgList li input[type="radio"]:checked {
    border-color: #2ba58d;
}

.padding-lr {
    padding: 0px 25px 0px 25px !important;
}

.powered-by {
    font-weight: 700;
    color: #595B6B;
}

.padding-t-0px{
    padding:0px;
}

.padding-top-25px{
    padding-top:25px!important;
}

.font-trans{
    text-transform: uppercase;
}
.font-size-7px{
    font-size: 7px;
}
</style>