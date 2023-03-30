import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/views/onboarding/SplashScreen.vue"),
  },
  {
    path: "/onboarding",
    component: () => import("@/views/onboarding/OnboardingPage.vue"),
  },
  {
    path: "/settings",
    component: () => import("@/views/settings/SettingsPage.vue"),
  },
  {
    path: "/about",
    component: () => import("@/views/settings/AboutPage.vue"),
  },
  {
    path: "/pv_setup",
    component: () => import("@/views/photovoltaic-settings/PVSetup.vue"),
  },
  {
    path: "/sim_report",
    component: () => import("@/views/photovoltaic-settings/SimulationReport.vue"),
  },
  {

    path: "/pv_upload_images",
    component: () =>import("@/views/photovoltaic-settings/PVUploadImages.vue"),
  },

  {
    path: "/Settings/AppSettings",
    component: () => import("@/views/settings/AppSettings.vue"),
  },
  {
    path: "/Settings/ReportBug",
    name: "ReportPage",
    component: () => import("@/views/settings/ReportPage.vue"),
  },
  {
    path: "/newproperty",
    component: () => import("@/views/properties/NewProperty.vue"),
  },
  {
    path: "/settings",
    component: () => import("@/views/settings/SettingsPage.vue"),
  },
  {
    path: "/about",
    component: () => import("@/views/settings/AboutPage.vue"),
  },
  
  {
    path: "/myinfo",
    component: () => import("@/views/settings/MyInfo.vue"),
  },
  {
    path:"/photovoltaic_project_dashboard",
    component: () =>import("@/views/photovoltaic_project/PhotovoltaicProjectDashboard.vue"),
  },

  {
    path:"/photovoltaic_project_tasks",
    component: () =>import("@/views/photovoltaic_project/PhotovoltaicProjectTasks.vue"),
  },
  {
    path:"/photovoltaic_project_addtask",
    component: () =>import("@/views/photovoltaic_project/PhotovoltaicProjectAddTask.vue"),
  },

  {
    path: "/management-appointments",
    component: () => import("@/views/managementappointments.vue"),
  },
  {
    path: "/craftsman-info",
    component: () => import("@/views/craftsmen/CraftsmanInformation.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("@/views/Dashboard.vue"),
  },
  {
    path: "/login_register",
    name: "LoginRegister",
    component: () => import("@/views/login_signup/LoginRegister.vue"),
  },
  {

    path: "/property_details",
    name: "PropertyDetails",
    component: ()=>import("@/views/properties/PropertyDetails.vue"),

  },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/myinfo",
    component: () => import("@/views/settings/MyInfo.vue"),
  },
  {
    path: "/craftsmen",
    name: "CraftsmenPage",
    component: () => import("@/views/craftsmen/ManagementPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
