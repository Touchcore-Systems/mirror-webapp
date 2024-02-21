import { createRouter, createWebHistory } from "vue-router";

import LoginView from "@/views/login/LoginView.vue";
import PasswordResetView from "@/views/password/PasswordResetView.vue";
import MyPatientsView from "@/views/mypatients/MyPatientsView.vue";
import AllAssessmentsView from "@/views/assessments/AllAssessmentsView.vue";
import ReportView from "@/views/reports/ReportView.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import DashboardLayout from "@/layouts/DashboardLayout.vue";
import { DEFAULT_TITLE } from "../utils/config";
import { nextTick } from "vue";
import { isLoggedIn } from "../services/auth";
import { useUserStore } from "../store/userStore";
import { useApiStore } from "../store/apiStore";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            // path: "/",
            path: "",
            component: AuthLayout,
            children: [
                {
                    path: "",
                    name: "Login",
                    component: LoginView,
                    meta: {
                        title: "Login",
                        requiresAuth: false,
                    },
                },
                {
                    path: "request-reset-password",
                    name: "PasswordReset",
                    component: PasswordResetView,
                    meta: {
                        title: "Reset Password",
                        requiresAuth: false,
                    },
                },
            ],
        },
        {
            path: "/",
            name: "Dashboard",
            component: DashboardLayout,
            children: [
                {
                    path: "/my-patients",
                    name: "My Patients",
                    component: MyPatientsView,
                    meta: {
                        header: "My Patients",
                        title: "My Patients",
                        requiresAuth: true,
                    },
                },
                {
                    path: "/assessments",
                    name: "Assessments",
                    component: AllAssessmentsView,
                    meta: {
                        header: "Assessment Library",
                        title: "Assessment Library",
                        requiresAuth: true,
                    },
                },
                {
                    path: "/reports",
                    name: "Reports",
                    component: ReportView,
                    meta: {
                        header: "REPORTS",
                        title: "Reports",
                        requiresAuth: true,
                    },
                },
            ],
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

router.afterEach((to) => {
    nextTick(() => {
        document.title = `${DEFAULT_TITLE}${to.meta.title ? ` | ${to.meta.title}` : ""
            }`;
    });
});

router.beforeEach(async (to, from) => {
    const userStore = useUserStore();
    const apiStore = useApiStore();
    const isLoggedIn = () => userStore.authUser.auth_token ? true : false;


    if (isLoggedIn() && to.name == "Login") {
        return { name: "My Patients" };
    }


    if(to.meta.requiresAuth && !isLoggedIn() ){
        apiStore.handleApiError("Authentication required. Please log in",to.fullPath)
    }

});
export default router;
