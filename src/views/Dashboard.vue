<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="primary">
          <ion-button class="settings-button" href="/Settings/AppSettings">
            <ion-icon :src="settings" class="settings-icon"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title style="text-align: center">{{
            content.myDashboard.headerText
        }}</ion-title>
        <!-- <ion-img src="logo.jpg" alt="Logo GreenHome"></ion-img> -->
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="content h-full">
        <ion-grid>
          <ion-row>
            <ion-grid v-if="!no_property">
              <ion-row>
                <h3 class="addedProperties-Text">
                  {{ content.myDashboard.title }}
                </h3>
              </ion-row>
              <ion-row v-for="item in houses" :key="item.id">
                <ion-card class="property-card" router-link="/property_details">
                  <ion-row>
                    <ion-col style="max-width: 70px">
                      <ion-icon :src="homeOutline" class="property-icon home-icon" style="float: left"></ion-icon>
                    </ion-col>
                    <ion-col class="propertyInformation">
                      <ion-row>
                        <ion-card-title class="property-title">{{
                            item.name
                        }}</ion-card-title>
                      </ion-row>
                      <ion-row style="margin-top: 15px">
                        <ion-col style="padding: 0">
                          <ion-card-content class="property-address">{{
                              item.address.street
                          }}</ion-card-content>
                        </ion-col>
                        <ion-col style="padding: 0">
                          <ion-card-content class="property-date">{{
                              item.construction_year
                          }}</ion-card-content>
                        </ion-col>
                      </ion-row>
                    </ion-col>
                    <ion-col style="max-width: 70px">
                      <radial-progress-bar v-for="chart in photo.charts.items" :key="chart.id" :diameter="50"
                        :completed-steps="chart.completedSteps" :total-steps="chart.totalSteps" :stopColor="chart.color"
                        :innerStrokeWidth="5">
                        <p class="procent-bar">{{ chart.completedSteps }}</p>
                      </radial-progress-bar>
                    </ion-col>
                  </ion-row>
                </ion-card>
              </ion-row>

            </ion-grid>
            <div v-if="no_property" class=" flex flex-col justify-center items-center h-full w-full">
              <ion-icon :icon="homeOutline" class="home-icon no-home-icon mt-40" />
              <ion-text>
                <h3>
                  {{ content.myDashboard.noProperties }}
                </h3>
              </ion-text>
            </div>
          </ion-row>
        </ion-grid>

        <ion-card href="/newProperty" v-on:click="addHouse()" class="house-button">
          <ion-card-content v-if="no_Property">
            {{ content.myDashboard.newHome }}
          </ion-card-content>
          <button class="add-home">
            <ion-icon :icon="homeOutline" class="home-icon"></ion-icon>
          </button>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonIcon,
  IonButton,
  IonButtons,
  IonTitle,
  IonCard,
  IonCardContent,
  IonContent,
  IonToolbar,
  IonHeader,
  IonRow,
  IonCol,
  IonGrid,
  IonPage,
  IonCardTitle,
  IonText
} from "@ionic/vue";
import { defineComponent } from "vue";
import RadialProgressBar from "vue3-radial-progress";
import photo from "@/data/houseData.json";
import { settings, homeOutline } from "ionicons/icons";

import { mapState } from "pinia";
import { useAppStore } from "@/store/app";

import "@ionic/vue/css/core.css";

export default defineComponent({
  name: "MyDashboard",
  components: {
    IonIcon,
    IonButton,
    IonButtons,
    IonTitle,
    IonCard,
    IonCardContent,
    RadialProgressBar,
    IonContent,
    IonToolbar,
    IonHeader,
    IonRow,
    IonCol,
    IonGrid,
    IonPage,
    IonCardTitle,
    IonText
  },
  computed: {
    ...mapState(useAppStore, ["content", "i18n", "house_data"]),
  },
  setup() {
    const store = useAppStore();
    let no_property = !store.house_data.length;
    console.log(no_property);
    return {
      houses: store.house_data,
      no_property,
      settings,
      homeOutline
    };
  },
  data() {
    return {
      photo: photo,
      series: [70],
      no_Property: true
    };
  },
  methods: {
    addHouse() {
      this.no_Property = false;
      console.log(this.house_data);
    },
  },
});
</script>

<style scoped>
ion-card-content {
  float: left!important;
  margin: 8px 0!important;
  padding: 13px!important;
}

ion-toolbar {
  --background: none;
  padding-top: 10px !important;
}

.property-card {
  float: left;
  padding: 6px 0;
  margin: 10px 0 0 0;
  border-radius: 0;
  background: transparent;
  color: #324b32;
  width: 100%;
  margin-inline: 0;
}

.propertyInformation {
  margin-left: 25px;
}

.addedProperties-Text {
  font-family: initial;
  color: #324a32;
  font-size: 23px;
  padding-left: 10px;
}

.full {
  width: 100%;
}

.property-icon {
  font-size: 60px !important;
  color: #324a32;
}

.no-home-icon {
  font-size: 50px !important;
}

.property-title {
  font-size: 20px;
  color: #324a32;
  font-weight: 300;
}

.procent-bar {
  font-size: 11px !important;
}

.property-address,
.property-date {
  padding: 0;
  font-size: 13px;
  color: #324a32;
}

.property-procent {
  padding: 0;
  font-size: 10px;
}

.title-properties {
  margin: 10px 20px;
  font-weight: 700;
  font-size: 30px;
  color: #223322;
}

.empty-list-text {
  text-align: center;
  color: #304030;
}

span.current-counter::after {
  content: "%";
}

.vue3-circular-progressbar {
  height: 40px !important;
  width: 40px !important;
  font-size: 11px;
}

.apexcharts-datalabels-group {
  font-size: 12px !important;
}

.house-button {
  border-radius: 35px!important;
  background: #96b097!important;
  color: white!important;
  position: absolute!important;
  bottom: 10px!important;
  right: 0!important;
}

.card-content-ios{
  padding: 13px!important;
}

.add-home {
  background: #324b32!important;
  border-radius: 35px!important;
  margin-right: 0px!important;
  padding: 12px!important;
  width: 63px!important;
  height: 63px!important;
}

#send {
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}

ion-button {
  --background: #374934;
  color: white;
}

.settings-icon {
  color: #374934;
  font-size: 25px !important;
  padding-right: 15px;
}

.settings-button {
  --background: none;
}

.home-icon {
  font-size: 34px;
}
</style>
