<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/Settings/AppSettings" text=""></ion-back-button>
        </ion-buttons>
        <ion-title>
          {{ content.reportBug.title }}
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="content">

        <form>
          <ion-list lines="none">
            <ion-item>
              <ion-label class="label"> {{ content.reportBug.subject }} </ion-label>
              <ion-input name="subject" type="text" required=true></ion-input>
            </ion-item>

            <ion-item>
              <ion-label class="label"> {{ content.reportBug.email }} </ion-label>
              <ion-input name="email" type="email" required=true></ion-input>
            </ion-item>

            <ion-item>
              <ion-label class="label"> {{ content.reportBug.operatingSystem }} </ion-label>
              <ion-input name="operating_system"></ion-input>
            </ion-item>

            <ion-item>
              <ion-label> {{ content.reportBug.device }} </ion-label>
              <ion-input name="device" type="text"></ion-input>
            </ion-item>

            <ion-item>
              <ion-label> {{ content.reportBug.contact.title }} </ion-label>
              <ion-select name="contact_option" :placeholder="content.reportBug.contact.placeholder">
                <ion-select-option v-for="(option, text) in content.reportBug.contact.options" :key="text"
                  :value="text">
                  {{ option }}</ion-select-option>
              </ion-select>
            </ion-item>

            <ion-item>
              <ion-label> {{ content.reportBug.bugType.title }} </ion-label>
              <ion-select name="bug_type" :placeholder="content.reportBug.bugType.placeholder">
                <ion-select-option v-for="(option, text) in content.reportBug.bugType.options" :key="text"
                  :value="text">
                  {{ option }}</ion-select-option>
              </ion-select>
            </ion-item>

            <ion-item>
              <ion-label position="stacked"> {{ content.reportBug.description }} </ion-label>
              <ion-textarea autoGrow="true" required=true></ion-textarea>
            </ion-item>
          </ion-list>
          <div id="send">
            <ion-button type="submit" color="secondary" shape="round">
              {{ content.reportBug.submit }}
            </ion-button>
          </div>
        </form>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage, IonList, IonItem, IonLabel, IonInput, IonSelect, IonButton, IonButtons, IonBackButton, IonTitle, IonToolbar, IonHeader, IonSelectOption, IonTextarea } from '@ionic/vue';
import { mapState } from "pinia";
import { useAppStore } from "@/store/app";

/* Core CSS required for Ionic components to work properly */

import "@ionic/vue/css/core.css";


export default {
  name: "ReportPage",
  components: {
    IonContent,
    IonPage,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonSelect,
    IonButton,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonSelectOption,
    IonTextarea,
  },
  computed: {
    ...mapState(useAppStore, ["content", "i18n"]),
  },
};

</script>


<style scoped>
#send {
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}

ion-input,
ion-select {
  background-color: var(--ion-color-light);
  border-radius: 10px;
  max-width: 200px;
  margin-left: 5em;
  float: right;
  color: black;
  margin-left: auto;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  font-size: small;
  --ion-background-color: var(--ion-color-light);
  --background: var(--ion-color-light);
}

ion-textarea {
  background-color: var(--ion-color-light);
  border-radius: 20px;
  color: black;
}

ion-select {
  min-width: 200px;
}

ion-toolbar {
  /* --background: #eaebe6; */
}

ion-back-button {
  --color: #4b5b48;
}
</style>