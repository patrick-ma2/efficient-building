<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/dashboard" :icon="chevronBackOutline"></ion-back-button>
        </ion-buttons>
        <ion-title>
          <h1>App Settings</h1>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="content">
        <ion-card Button="true" href="/myinfo">
          <ion-card-content>
            <ion-grid>
              <ion-row>
                <ion-col class="settings-icons">
                  <div class="flex justify">
                    <ion-icon style= "padding-top: 6px; padding-left: 6px; color: #737e71;" slot="start" :icon="newspaperOutline" size="large"></ion-icon>
                  </div>
                </ion-col>
                <ion-col>
                  <h2>{{ content.appSettings.Info }}</h2>
                  <p>view and edit user information</p>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card-content>
        </ion-card>

        <ion-card Button="true" href="/settings">
          <ion-card-content>
            <ion-grid>
              <ion-row>
                <ion-col class="settings-icons">
                  <div class="flex justify">
                    <ion-icon style= "padding-top: 6px; padding-left: 6px; color: #737e71;" slot="start" :icon="settingsOutline" size="large"></ion-icon>
                  </div>
                </ion-col>
                <ion-col>
                  <h2>{{ content.appSettings.Appsettings }}</h2>
                  <p>view and edit app settings</p>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card-content>
        </ion-card>

        <ion-card Button="true" href="/about">
          <ion-card-content>
            <ion-grid>
              <ion-row>
                <ion-col class="settings-icons">
                  <div class="flex justify">
                    <ion-icon style= "padding-top: 6px; padding-left: 6px; color: #737e71;" slot="start" :icon="alertCircleOutline" size="large"></ion-icon>
                  </div>
                </ion-col>
                <ion-col>
                  <h2>{{ content.appSettings.About }}</h2>
                  <p>Read about the app</p>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card-content>
        </ion-card>


        <ion-card Button="true" href="/Settings/ReportBug">
          <ion-card-content>
            <ion-grid>
              <ion-row>
                <ion-col class="settings-icons">
                  <div class="flex justify">
                    <ion-icon style= "padding-top: 6px; padding-left: 6px; color: #737e71;" slot="start" :icon="buildOutline" size="large"></ion-icon>
                  </div>
                </ion-col>
                <ion-col>
                  <h2>{{ content.appSettings.Bug }}</h2>
                  <p>Report us system bug</p>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card-content>
        </ion-card>

        <ion-card Button="true" href="/login_register">
          <ion-card-content>
            <ion-grid>
              <ion-row>
                <ion-col class="settings-icons">
                  <div class="flex justify">
                    <ion-icon style="color: red;" slot="start" :icon="logOutOutline" size="large"></ion-icon>
                  </div>
                </ion-col>
                <ion-col>
                  <h2 style="padding-top: 9px;">{{ content.appSettings.LogOut }}</h2>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card-content>
        </ion-card>
        
        <ion-card href="/newProperty" class="house-button">
          <button class="add-home">
            <ion-icon :icon="homeOutline" class="home-icon" style="color: white; padding: 0;"></ion-icon>
          </button>
        </ion-card>

      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
  IonBackButton,
  IonButtons,
  IonIcon,
  IonCard,
  IonCol,
  IonGrid,
  IonRow,
  IonCardContent,
} from "@ionic/vue";
import { defineComponent } from "vue";

import {
  newspaperOutline,
  settingsOutline,
  alertCircleOutline,
  buildOutline,
  chevronBackOutline,
  logOutOutline,
  homeOutline
} from "ionicons/icons";
import { mapState } from "pinia";
import { useAppStore } from "@/store/app";

export default defineComponent({
  name: "AppSettings",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonBackButton,
    IonButtons,
    IonIcon,
    IonCard,
    IonCol,
    IonGrid,
    IonRow,
    IonCardContent,
    IonTitle,
  },
  computed: {
    ...mapState(useAppStore, ["content"]),
  },
  setup() {
    return {
      newspaperOutline,
      settingsOutline,
      alertCircleOutline,
      buildOutline,
      chevronBackOutline,
      logOutOutline,
      homeOutline,
    };
  },
});


</script>
<style>

.card-content-ios{
  padding-top: 0!important;
  padding-bottom: 0!important;
  padding-inline-start: 0!important;
}

.settings-label {
  font-family: 'Times New Roman', Times, serif;
  font-weight: 600;
  font-size: 1.5rem;
  margin: 5px 0 10px 0;
}

.house-button {
  border-radius: 35px!important;
  background: #96b097!important;
  color: white!important;
  position: absolute!important;
  right: 0!important;
}

.add-home {
  background: #324b32;
  border-radius: 35px;
  margin-right: 0px;
  padding: 12px;
  width: 63px;
  height: 63px;
}

.home-icon {
  font-size: 34px;
}

.scroll-container {
  max-height: 215px;
  overflow: auto;
}

ion-back-button::part(icon) {
  font-size: 30px;
  color: #223321;
}

ion-card {
  background-color: var(--ion-color-light);
  border-radius: 10px;
  box-shadow: none;
  margin: 10px 16px;
}

.settings-icons {
  max-width: 15%;
}
</style>



