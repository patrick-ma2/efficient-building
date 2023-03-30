<template>
    <ion-page class="ion-padding">
        <ion-header class=" ion-no-border">
            <ion-toolbar>
                <ion-back-button default-href="/property_details" slot="start"></ion-back-button>
                <ion-title class="ion-text-center" size="large">{{ content.newPV.title }}</ion-title>
            </ion-toolbar>
        </ion-header>
        Hello

        <!-- --------------------------Site Content-------------------------------------------------- -->
        <ion-content>
            <div class="flex flex-col items-center ">
                <ion-text class="text-sm font-semibold">
                    <p>This is how a photovoltaic system pays off for you</p>
                </ion-text>
                <ion-text class="text-sm">
                    <p>You can save <b>4000 $</b> annually by using this photovoltaic system</p>
                </ion-text>
                <div class="flex flex-col max-w-lg">
                    <ion-label>
                        Number of panels:
                    </ion-label>
                    <div class="flex flex-row">
                        <ion-range :value="noPanels" @ionChange="noPanelsChange"></ion-range>
                        <ion-input v-model:value="noPanels" @ionChange="noPanelsChange" class="w-60"></ion-input>
                    </div>
                </div>

                <div class="flex flex-col max-w-lg">
                    <ion-label>
                        Battery Capacity:
                    </ion-label>
                    <div class="flex flex-row items-center">
                        <ion-range :value="batteryCapacity/20" @ionChange="bcChange"></ion-range>
                        <ion-input v-model:value="batteryCapacity" @ionChange="onInputChange" class="w-60"></ion-input>
                        <span>kWh</span>
                    </div>
                </div>
            
            </div>
            

        </ion-content>

        <!-- ---------------------------Buttonbar--------------------------------------------------- -->
        <div class="flex flex-row justify-between">
        <ion-button color="danger" shape="round" @click="$router.go(-1)">
            {{content.newPV.back}}
        </ion-button>
        <ion-button color="secondary" shape="round" href="/property_details" v-on:click="submit">
            {{content.newPV.save}}
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
    IonLabel,
    IonRange,
} from "@ionic/vue";

// import {
//     save,
//     trash,
// } from 'ionicons/icons';

import { mapState, mapWritableState } from "pinia";
import { useAppStore } from "@/store/app";

import { defineComponent } from "vue";

//pages

// import PageZero from './PageZero.vue';
// import SelectSlope from './SelectSlope.vue';
// import SelectRooftype from "./SelectRooftype.vue";
// import DrawRoof from './DrawRoof.vue';
// import SelectOrientation from './SelectOrientation.vue';
// import ChoseProfile from './ChooseProfile.vue';
// import ConfigureProfile from './ConfigureProfile.vue';
// import SelectPanelType from './SelectPanelType.vue';
// import PageSix from './PageSix.vue';
// import PageSeven from './PageSeven.vue';

export default defineComponent({
    name: "SimulationReport",
    components: {
        IonPage,
        IonContent,
        IonButton,
        IonToolbar,
        IonHeader,
        IonTitle,
        IonBackButton,
        IonRange,
        IonInput,
        IonLabel

    },
    data() {
        return {
            page: 0,
            noPanels: 20,
            batteryCapacity: 200,
        }
    },
    setup() {
        const store = useAppStore()
        store.pv_system =  {
                rooftype: "",
                slope: 0,
                orientation: "",
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
        submit() {
            console.log("finished")
        },
        noPanelsChange({detail}) {
            this.noPanels = detail.value
        },
        bcChange({detail}) {
            this.batteryCapacity = detail.value * 20
        },
        onInputChange({detail}) {
            this.batteryCapacity = detail.value
        } 
    }
});

</script>

<style scoped>
ion-button {
    font-size: 10px;
}

ion-input {
    background-color: var(--ion-color-dark-contrast);
    border-radius: 10px;
}
</style>