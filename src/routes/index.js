import { createRouter, createWebHistory } from "vue-router";


import LoginView from '@/views/login/LoginView.vue';
import PasswordResetView from '@/views/password/PasswordResetView.vue';
import MyPatientsView from '@/views/mypatients/MyPatientsView.vue';
import AssessmentView from '@/views/assessments/AssessmentView.vue';
import ReportView from '@/views/reports/ReportView.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import  DashboardLayout  from '@/layouts/DashboardLayout.vue';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            // path: "/",
            path: "",
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
            path: "/",
            name:'Dashboard',
            component: DashboardLayout,
            children:[
                {
                    path:'/my-patients',
                    name:'My Patients',
                    component:MyPatientsView,
                    meta: { header:'My Patients' },
                },
                {
                    path: "/assessments",
                    name:'Assessments',
                    component:AssessmentView,
                    meta: { header:'Assessment Library'},
        
                },
                {
                    path: "/reports",
                    name:'Reports',
                    component:ReportView,
                    meta: { header:'REPORTS'},
        
                },

            ]
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