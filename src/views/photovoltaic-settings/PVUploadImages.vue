<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title class="logo-text">
                    Photovoltaic System
                </ion-title>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/photovoltaic_project_dashboard" color="secondary"></ion-back-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content fullscreen="true">
            <div class=content>
                <ion-grid>
                    <ion-row>
                        <ion-col>
                            <ion-card>
                                <ion-card-content class="ion-no-padding">
                                    <ion-grid>
                                        <ion-row>
                                            <ion-col class="ion-text-center">
                                                <ion-text>
                                                    OttoStr 50.
                                                </ion-text>
                                            </ion-col>
                                            <ion-col class="ion-text-center">
                                                <ion-text>
                                                    01.09.2020
                                                </ion-text>
                                            </ion-col>
                                        </ion-row>
                                    </ion-grid>
                                </ion-card-content>
                            </ion-card>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col class="ion-text-center ion-no-padding">
                            <ion-text>
                                {{ page }}/13
                            </ion-text>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <ion-text  v-if="page == 1">
                                Upload image for property overview: 
                            </ion-text>
                            <ion-text v-if="page == 2">
                                Upload image for to be occupied roof surface:
                            </ion-text>
                            <ion-text v-if="page == 3">
                                Upload image for property gable end:
                            </ion-text>
                            <ion-text v-if="page == 4">
                                Upload image for meter cabinet:
                            </ion-text>
                            <ion-text v-if="page == 5">
                                Upload image for equipotential bonding rail:
                            </ion-text>
                            <ion-text v-if="page == 6">
                                Upload router image:
                            </ion-text>
                            <ion-text v-if="page == 7">
                                Upload image for wide rafters:
                            </ion-text>
                            <ion-text v-if="page == 8">
                                Upload image for rafter spacing:
                            </ion-text>
                            <ion-text v-if="page == 9">
                                Upload image for brick front side:
                            </ion-text>
                            <ion-text v-if="page == 10">
                                Upload image for bric back side:
                            </ion-text>
                            <ion-text v-if="page == 11">
                                Upload image for installation location inverter:
                            </ion-text>
                            <ion-text v-if="page == 12">
                                Upload image for nstallation location inverter:
                            </ion-text>
                            <ion-text v-if="page == 13">
                                Upload image for installation location wall box:
                            </ion-text>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <ion-img src="/assets/pv_images_placeholder/property_overview_1.svg" v-if="page == 1" />
                            <ion-img src="/assets/pv_images_placeholder/roof_1.svg" v-if="page == 2" />
                            <ion-img src="/assets/pv_images_placeholder/gable_end.svg" v-if="page == 3" />
                            <ion-img src="/assets/pv_images_placeholder/meter_cabinet.svg" v-if="page == 4" />
                            <ion-img src="/assets/pv_images_placeholder/equipotential.svg" v-if="page == 5" />
                            <ion-img src="/assets/pv_images_placeholder/router.svg" v-if="page == 6" />
                            <ion-img src="/assets/pv_images_placeholder/rafters_width.svg" v-if="page == 7" />
                            <ion-img src="/assets/pv_images_placeholder/rafter_spacing.svg" v-if="page == 8" />
                            <ion-img src="/assets/pv_images_placeholder/brick_front.svg" v-if="page == 9" />
                            <ion-img src="/assets/pv_images_placeholder/brick_back.svg" v-if="page == 10" />
                            <ion-img src="/assets/pv_images_placeholder/inverter_location.svg" v-if="page == 11" />
                            <ion-img src="/assets/pv_images_placeholder/battery_storage.svg" v-if="page == 12" />
                            <ion-img src="/assets/pv_images_placeholder/wall_box.svg" v-if="page == 13" />
                        </ion-col>
                        <ion-col style="padding: 30px;" size="auto">
                            <ion-icon src="\assets\ionic-icons\trash-outline.svg" class="h-6 w-6"
                                color="danger"></ion-icon>
                        </ion-col>
                    </ion-row>
                    <ion-row v-if="page == 1 || page == 2">
                        <ion-col>
                            <ion-img src="/assets/pv_images_placeholder/property_overview_2.svg" v-if="page == 1" />
                            <ion-img src="/assets/pv_images_placeholder/roof_2.svg" v-if="page == 2" />
                        </ion-col>
                        <ion-col style="padding: 30px; " size="auto">
                            <ion-icon src="\assets\ionic-icons\trash-outline.svg" class="h-6 w-6"
                                color="danger"></ion-icon>
                        </ion-col>
                    </ion-row>
                    <ion-row class="ion-margin-top">
                        <ion-col class="ion-text-center">
                            <ion-button color="secondary" >
                                <ion-icon slot="start" src="\assets\ionic-icons\camera-outline.svg">
                                </ion-icon >
                                Take a Photo
                            </ion-button>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col class="ion-text-center">
                            <ion-button color="danger">
                                <ion-icon slot="start" src="\assets\ionic-icons\images-outline.svg">
                                </ion-icon>
                                Select images
                            </ion-button>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </div>
        </ion-content>
        <ion-footer mode="ios" collapse="fade">
            <ion-grid>
                <ion-row>
                    <ion-col class="ion-text-center ion-no-padding ion-no-margin">
                        <ion-button color="transparent" v-on:click="prevPage()" style="color:red">
                            <ion-icon slot="start" src="\assets\ionic-icons\chevron-back-outline.svg" color="red" class="ion-no-margin">
                            </ion-icon>
                            Back
                        </ion-button>
                    </ion-col>
                    <ion-col class="ion-text-center ion-no-padding ion-no-margin" size="auto">
                        <ion-button color="transparent">
                            Save & continue later
                        </ion-button>
                    </ion-col>
                    <ion-col class="ion-text-center ion-no-padding ion-no-margin">
                        <ion-button color="transparent" v-on:click="nextPage()" style="color:var(--ion-color-secondary)">
                            <ion-icon slot="end" src="\assets\ionic-icons\chevron-forward-outline.svg"
                                color=var(--ion-color-secondary) class="ion-no-margin">
                            </ion-icon>
                            Next
                        </ion-button>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-footer>
    </ion-page>
</template>
<script >
import {
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonCard,
    IonCardContent,
    IonGrid,
    IonCol,
    IonRow,
    IonText,
    IonImg,
    IonIcon,
    IonButton,
    IonFooter,
    
} from "@ionic/vue";

import { defineComponent } from "vue";
import router from "@/router";



    




export default defineComponent({
    name: "PVUploadImages",
    components: {
        IonPage,
        IonContent,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonButtons,
        IonBackButton,
        IonCard,
        IonCardContent,
        IonGrid,
        IonCol,
        IonRow,
        IonText,
        IonImg,
        IonIcon,
        IonButton,
        IonFooter
    },
    data() {
        return {
            page: 1,
        }
    },
    methods: {
        nextPage() {
            this.page++
        },
        prevPage() {
            if (this.page == 1) {
                router.back()
            } else {
                this.page--
            }
        },

    }

});
</script>

<style>
.logo-text {
    font-family: 'Lobster Two';
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 32px;
    color: #324A32;
    /* identical to box height */
}

ion-title {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
}

ion-card {
    --background: rgba(255, 255, 255, 0.4);
}
</style>