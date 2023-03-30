<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/home"></ion-back-button>
                </ion-buttons>
                <ion-title>Photovoltaic System</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <ion-grid>
                <ion-row>
                    <ion-col>
                        Water heated electricity:
                    </ion-col>
                    <ion-col>
                        <ion-segment value="yes">
                            <ion-segment-button value="yes">
                                <ion-label>Yes</ion-label>
                            </ion-segment-button>
                            <ion-segment-button value="no">
                                <ion-label>No</ion-label>
                            </ion-segment-button>
                        </ion-segment>
                    </ion-col>
                </ion-row>
                <ion-row class="ion-align-items-center">
                    <ion-col>
                        Number of residents:
                    </ion-col>
                    <ion-col>
                        <ion-input dir="rtl" type="number" placeholder="0"></ion-input>
                    </ion-col>
                </ion-row>
            </ion-grid>

        </ion-content>

        <ion-footer class="ion-no-border md:container md:mx-auto">
            <ion-toolbar>
                <div class="grid grid-cols-4">
                    <ion-button shape="round" color="danger">Back</ion-button>
                    <div class="col-span-2"><ion-button shape="round" color="warning">Save & continue later</ion-button></div>
                    <ion-button shape="round" color="success" class="next-btn">Next</ion-button>
                </div>          
            </ion-toolbar>
        </ion-footer>
    </ion-page>
</template>
  
<script lang="ts">
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonFooter,
    IonButtons,
    IonButton,
    IonBackButton,
    IonLabel,
    IonSegment,
    IonSegmentButton,
    IonGrid,
    IonRow,
    IonCol,
    IonInput
} from '@ionic/vue';

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'NikosComponents',
    components: {
        IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar,
        IonFooter,
        IonButtons,
        IonButton,
        IonBackButton,
        IonLabel,
        IonSegment,
        IonSegmentButton,
        IonGrid,
        IonRow,
        IonCol,
        IonInput
    }
});
</script>
  
<style scoped>
#container {
    text-align: center;

    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}

#container strong {
    font-size: 20px;
    line-height: 26px;
}

#container p {
    font-size: 16px;
    line-height: 22px;

    color: #8c8c8c;

    margin: 0;
}

#container a {
    text-decoration: none;
}

.next-btn::part(native) {
    background-color: #324a32;
}

ion-toolbar .grid * {
    width: 100%;
    padding: 0 3px;
    font-size: .85em;
}

/* styling ion components */

ion-content::part(background) {
    background: #eaebe6;
}

ion-content::part(scroll) {
    padding: 0 10px 10px 10px;
}

ion-toolbar {
    --background: #eaebe6;
    --border-style: 0px;
    --min-height: 80px;
}

ion-title {
    font-family: 'Times New Roman', Times, serif;
    font-size: 30px;
    padding: 0 auto;
    width: auto;
    text-align: center;
    color: #223321;
}

ion-back-button::part(text) {
    display: none;
}

ion-back-button::part(icon) {
    font-size: 30px;
    color: #223321;
}

ion-input {
    --background: #fbfbf9;
    --padding-start: 10px;
    --padding-top: 3px;
    --padding-bottom: 3px;
    border-radius: 5px;
}

</style>
  