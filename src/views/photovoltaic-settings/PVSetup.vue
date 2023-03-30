<template>
    <ion-page class="ion-padding">
        <ion-header class=" ion-no-border">
            <ion-toolbar>
                <ion-back-button default-href="/dashboard" slot="start"></ion-back-button>
                <ion-title class="ion-text-center" size="large">{{ content.newPV.title }}</ion-title>
            </ion-toolbar>
        </ion-header>

        <div class="flex flex-row justify-center">
            <ion-card class="w-full" v-show="page>0">
                <ion-card-content>
                    <div class="flex flex-row justify-center">
                        <ion-text class="mr-4">Street St. 42.</ion-text>
                        <ion-text class="ml-4">01.Jan.1970</ion-text>
                        </div>
                </ion-card-content>
        </ion-card>

        </div>


        <ion-content>
            <div class="flex flex-col justify-between items-center  h-full ">
                <div class="flex flex-col justify-start items-center h-full w-full">
                    <ion-text v-if="page != 0">{{ page }} / 7</ion-text>
                    <PageZero v-if="page == 0"></PageZero>
                    <SelectRooftype v-if="page == 1"></SelectRooftype>
                    <SelectSlope v-if="page == 2"></SelectSlope>
                    <DrawRoof v-if="page == 3"></DrawRoof>
                    <SelectOrientation v-if="page == 4"></SelectOrientation>
                    <ChoseProfile v-if="page == 5"></ChoseProfile>
                    <ConfigureProfile v-if="page == 6"></ConfigureProfile>
                    <SelectPanelType v-if="page == 7"></SelectPanelType>
                    <!-- <PageSix v-if="page == 6"></PageSix> -->
                    <!-- <PageSeven v-if="page == 7"></PageSeven> -->
                </div>
            </div>
        </ion-content>

        <!-- -----------------------------Buttonbar---------------------------------------- -->
        <div v-if="page == 0" class="flex flex-row justify-center">
            <ion-button color="secondary" shape="round" v-on:click="nextPage()">{{content.newPV.pages[0].button}}</ion-button>
        </div>
        <div class="flex flex-row justify-between w-full" v-if="page != 7 && page > 0">
            <div class="flex flex-row justify-start ">
                <ion-button class="" color="danger" shape="round" v-on:click="prevPage()">
                {{ content.newPV.back }}
            </ion-button>
            <ion-button class="col-span-3" color="warning" shape="round">
                {{ content.newPV.saveLater }}
            </ion-button>
            </div>
            <ion-button class="" color="secondary" shape="round" v-on:click="nextPage()"
            v-if="page!=5 || pv_system.profile_type!=''">
                {{ content.newPV.next }}
            </ion-button>
        </div>
        <div class="flex flex-row justify-between items-center w-full" v-if="page == 7">
            <ion-button class="" color="danger" shape="round" v-on:click="prevPage()">{{ content.newPV.back }}
            </ion-button>
            <ion-button color="secondary" shape="round" v-on:click="submit()" router-link="/sim_report">{{ content.newPV.save }}
            </ion-button>
        </div>
    </ion-page>
</template>

<script>
import {
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonBackButton,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonCard,
    IonCardContent,
    IonText,

} from "@ionic/vue";

// import {
//     save,
//     trash,
// } from 'ionicons/icons';

import { mapState, mapWritableState } from "pinia";
import { useAppStore } from "@/store/app";
import router from "@/router";

import { defineComponent } from "vue";

//pages

import PageZero from './PageZero.vue';
import SelectSlope from './SelectSlope.vue';
import SelectRooftype from "./SelectRooftype.vue";
import DrawRoof from './DrawRoof.vue';
import SelectOrientation from './SelectOrientation.vue';
import ChoseProfile from './ChooseProfile.vue';
import ConfigureProfile from './ConfigureProfile.vue';
import SelectPanelType from './SelectPanelType.vue';
// import PageSix from './PageSix.vue';
// import PageSeven from './PageSeven.vue';

export default defineComponent({
    name: "ParameterSettings",
    components: {
        IonPage,
        IonContent,
        IonButton,
        IonToolbar,
        IonHeader,
        IonTitle,
        IonBackButton,
        PageZero,
        SelectSlope,
        SelectRooftype,
        DrawRoof,
        SelectOrientation,
        ChoseProfile,
        ConfigureProfile,
        SelectPanelType,
        IonCard,
        IonCardContent,
        IonText,
        // PageSix,
        // PageSeven
    },
    data() {
        return {
            page: 0,
        }
    },
    setup() {
        const store = useAppStore()
        store.pv_system =  {
                rooftype: "",
                slope: 0,
                orientation: "west",
                profile_type: "",
                residentCount: 0,
                anual_consumption: 0,
                electric_water: true,
                panel_type: "",
            } 
        return {
            pv_system: store.pv_system
        }
    },
    computed: {
        ...mapState(useAppStore, ["content", "i18n"]),
        ...mapWritableState(useAppStore, ["settings", "flags"]),
        ...mapWritableState(useAppStore, ["pv_system", "pv_system"])
    },
    methods: {
        nextPage() {
            this.page++
        },
        prevPage() {
            if (this.page == 0) {
                router.back()
            } else {
                this.page--
            }
        },
        submit() {
            console.log(useAppStore().pv_system);
            //todo
        }

    }
});

</script>

<style scoped>
ion-button {
    font-size: 10px;
}

ion-card {
    background-color: var(--ion-color-light);
    border-radius: 10px;
}
</style>