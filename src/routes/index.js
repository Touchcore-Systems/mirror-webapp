import { createRouter, createWebHistory } from "vue-router";
import LoginView from '../views/login/LoginView.vue';
import PasswordResetView from '../views/password/PasswordResetView.vue';
import AuthLayout from '../layouts/AuthLayout.vue';
import  DashboardLayout  from '../layouts/DashboardLayout.vue';


import MyPatients from '../components/patients/MyPatients.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            // path: "/",
            path: "/mirror-webapp",
            component: AuthLayout,
            children:[
                {
                    path:'',
                    name:'Login',
                    component:LoginView
                },
                {
                    path: "request-reset-password",
                    name:'PasswordReset',
                    component: PasswordResetView,
        
                },

            ]
        },
        {
            path: "/mirror-webapp/my-patients",
            name:'My Patients',
            component: MyPatients,
        },
        // {
        //     path: "/mirror-webapp/assessments",
        //     name:'My Patients',
        //     component: aSSESSMENTS,
        // },
        // {
        //     path: "/mirror-webapp/reports",
        //     name:'My Patients',
        //     component: ,
        // },
        // {
        //     path: "/mirror-webapp/dashboard",
        //     component: DashboardLayout,
        //     children:[
        //         {
        //             path:'',
        //             name:'My Patients',
        //             component:MyPatients
        //         },
        //     ]


        // },
    ],
});
export default router