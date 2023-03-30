<template>
    <ion-page>
        <ion-header class="ion-no-border">
            <ion-toolbar>
                <ion-title class="logo-text">
                    Green Home
                </ion-title>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/dashboard" color="secondary"></ion-back-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content fullscreen="true">
            <div class="content">
                <ion-grid>
                    <ion-row class="ion-margin-vertical">
                        <ion-text style="font-size:larger; font-weight: bold;">
                            Property Details
                        </ion-text>
                    </ion-row>
                    <ion-row>
                        <ion-card class="ion-no-margin property-details">
                            <ion-card-content class='ion-no-padding'>
                                <ion-grid>
                                    <ion-row>
                                        <ion-col>
                                            <ion-icon src="\assets\ionic-icons\home-outline.svg" class="h-12 w-12" />
                                        </ion-col>
                                        <ion-col>
                                            <div class="ion-text-center">
                                                <circle-progress :percent="0" :viewport="true" :size="80"
                                                    :show-percent="true" :border-width="12" :border-bg-width="12"
                                                    :is-gradient="true" :gradient="{
                                                        angle: 90,
                                                        startColor: '#324a32',
                                                        stopColor: '#324a32'
                                                    }" />
                                            </div>
                                        </ion-col>
                                        <ion-col size="auto">
                                            <ion-row>
                                                <ion-col>
                                                    Type:
                                                </ion-col>
                                                <ion-col size="auto">
                                                    Detached House
                                                </ion-col>
                                            </ion-row>
                                            <ion-row>
                                                <ion-col>
                                                    Adress:
                                                </ion-col>
                                                <ion-col size="auto">
                                                    Ottostr 50
                                                </ion-col>
                                            </ion-row>
                                            <ion-row>
                                                <ion-col>
                                                    Creation:
                                                </ion-col>
                                                <ion-col size="auto">
                                                    01.07.2022
                                                </ion-col>
                                            </ion-row>
                                        </ion-col>
                                    </ion-row>
                                </ion-grid>
                            </ion-card-content>
                        </ion-card>
                    </ion-row>
                    <ion-row class="ion-margin-vertical">
                        <ion-text style="font-weight:bold">
                            Property Management
                        </ion-text>
                    </ion-row>
                    <ion-row>
                        <ion-card class="ion-no-margin property-details">
                            <ion-card-content class="ion-no-padding">
                                <ion-grid>
                                    <ion-row v-on:click="editProperty()">
                                        <ion-col>
                                            <ion-icon src="\assets\ionic-icons\create-outline.svg" class="h-6 w-6">
                                            </ion-icon>
                                        </ion-col>
                                        <ion-col size="auto">
                                            <div style="width: 226px">
                                                <ion-row>
                                                    <ion-text style="font-weight:bold">
                                                        Parameters
                                                    </ion-text>
                                                </ion-row>
                                                <ion-row>
                                                    <ion-text style="font-size:small">
                                                        View and edit property parameters
                                                    </ion-text>
                                                </ion-row>
                                            </div>
                                        </ion-col>
                                        <ion-col>
                                        </ion-col>
                                    </ion-row>
                                    <ion-row v-on:click="deleteProperty()">
                                        <ion-col>
                                            <ion-icon src="\assets\ionic-icons\trash-outline.svg" class="h-6 w-6"
                                                color="danger"></ion-icon>
                                        </ion-col>
                                        <ion-col size="auto">
                                            <div style="width: 226px">
                                                <ion-row>
                                                    <ion-text style="font-weight:bold" color="danger">
                                                        Delete Property
                                                    </ion-text>
                                                </ion-row>
                                                <ion-row>
                                                    <ion-text style="font-size:small">
                                                        This action can not be undone
                                                    </ion-text>
                                                </ion-row>
                                            </div>
                                        </ion-col>
                                        <ion-col>
                                        </ion-col>
                                    </ion-row>
                                </ion-grid>
                            </ion-card-content>
                        </ion-card>
                    </ion-row>
                    <ion-row class="ion-margin-vertical">
                        <ion-text style="font-weight:bold">
                            Energy Demand Projects
                        </ion-text>
                    </ion-row>
                    <ion-row>
                        <ion-card class="ion-no-margin property-details">
                            <ion-card-content class="ion-no-padding">
                                <ion-grid>
                                    <ion-row>
                                        <ion-col>
                                            <ion-icon src="\assets\ionic-icons\co2.svg" class="h-6 w-6" />
                                        </ion-col>
                                        <ion-col size="auto">
                                            <div style="width:226px">
                                                <ion-row>
                                                    <ion-text>
                                                        <h2>CO2 Footprint</h2>
                                                    </ion-text>
                                                </ion-row>
                                                <ion-row>
                                                    <ion-text style="font-size:small">
                                                        Compute emissions of your property
                                                    </ion-text>
                                                </ion-row>
                                            </div>
                                        </ion-col>
                                        <ion-col text-right
                                            style="display: flex; justify-content: flex-end; align-items: flex-end;">
                                            <ion-button size="small" color="secondary">
                                                Begin
                                            </ion-button>
                                        </ion-col>
                                    </ion-row>
                                </ion-grid>
                            </ion-card-content>
                        </ion-card>
                    </ion-row>
                    <ion-row class="ion-margin-vertical">
                        <ion-text style="font-weight: bold">
                            Construction Projects
                        </ion-text>
                    </ion-row>
                    <ion-row>
                        <ion-card class="ion-no-margin property-details">
                            <ion-card-content class="ion-no-padding">
                                <ion-grid>
                                    <ion-row>
                                        <ion-col>
                                            <ion-icon src="\assets\ionic-icons\solar-panel.svg" class="h-6 w-6" />
                                        </ion-col>
                                        <ion-col size="auto">
                                            <div style="width:226px">
                                                <ion-row>
                                                    <ion-text>
                                                        <h2>Photovoltaic Systems</h2>
                                                    </ion-text>
                                                </ion-row>
                                                <ion-row>
                                                    <ion-text style="font-size:small">
                                                        Compute suitable photovoltaic systems
                                                    </ion-text>
                                                </ion-row>
                                            </div>
                                        </ion-col>
                                        <ion-col text-right
                                            style="display: flex; justify-content: flex-end; align-items: flex-end;">
                                            <ion-button size="small" color="secondary"
                                                href="/photovoltaic_project_dashboard">
                                                Begin
                                            </ion-button>
                                        </ion-col>
                                    </ion-row>
                                    <ion-row>
                                        <ion-col>
                                            <ion-icon src="\assets\ionic-icons\construct-outline.svg" class="h-6 w-6" />
                                        </ion-col>
                                        <ion-col size="auto">
                                            <div style="width:226px;">
                                                <ion-row>
                                                    <ion-text>
                                                        <h2>Energetic Renovation</h2>
                                                    </ion-text>
                                                </ion-row>
                                                <ion-row>
                                                    <ion-text style="font-size:small">
                                                        Button Description
                                                    </ion-text>
                                                </ion-row>
                                            </div>
                                        </ion-col>
                                        <ion-col text-right
                                            style="display: flex; justify-content: flex-end; align-items: flex-end;">
                                            <ion-button size="small" color="secondary">
                                                Begin
                                            </ion-button>
                                        </ion-col>
                                    </ion-row>
                                    <ion-row>
                                        <ion-col>
                                            <ion-icon src="\assets\ionic-icons\electric-car-charging.svg"
                                                class="h-6 w-6" />
                                        </ion-col>
                                        <ion-col size="auto">
                                            <div style="width:226px;">
                                                <ion-row>
                                                    <ion-text>
                                                        <h2>Charging Infrastructure</h2>
                                                    </ion-text>
                                                </ion-row>
                                                <ion-row>
                                                    <ion-text style="font-size:small">
                                                        Button Description
                                                    </ion-text>
                                                </ion-row>
                                            </div>
                                        </ion-col>
                                        <ion-col text-right
                                            style="display: flex; justify-content: flex-end; align-items: flex-end;">
                                            <ion-button size="small" color="secondary">
                                                Begin
                                            </ion-button>
                                        </ion-col>
                                    </ion-row>
                                </ion-grid>
                            </ion-card-content>
                        </ion-card>
                    </ion-row>
                </ion-grid>
            </div>
        </ion-content>
    </ion-page>
</template>

<script>
import {
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonText,
    IonCard,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonIcon,
    IonCardContent,
    IonButton,
} from "@ionic/vue";
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";

export default {
    name: "PropertyDetails",
    components: {
        IonPage,
        IonContent,
        IonGrid,
        IonRow,
        IonCol,
        IonText,
        IonCard,
        IonHeader,
        IonTitle,
        IonToolbar,
        IonButtons,
        IonBackButton,
        CircleProgress,
        IonIcon,
        IonCardContent,
        IonButton,
    },

    methods: {
        deleteProperty() {
            console.log("deleted");
        },

        editProperty() {
            console.log("edited");
        }
    }


};

</script>

<style>
ion-title {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
}

ion-row {
    flex-wrap: nowrap;
    align-items: center;
}

.property-details {
    width: 100%;
    margin: 10px;
}

ion-button {
    --padding-start: 8px;
    --padding-end: 8px;
    font-size: small;
    font-weight: 100;
    --color: #fff;
}

ion-card {
    --background: rgba(255, 255, 255, 0.4);
}

.logo-text {
    font-family: 'Lobster Two';
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 32px;
    color: #324A32;
    /* identical to box height */
}

span.current-counter::after {
    content: '%';
}

/*Media querry for margin for laptop */
@media only screen and (min-width: 992px) {
    ion-grid {
        margin-left: 16px;
        margin-right: 16px;
    }
}
</style>