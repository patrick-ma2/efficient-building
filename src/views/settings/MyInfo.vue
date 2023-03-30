<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/Settings/AppSettings" text=""></ion-back-button>
        </ion-buttons>
        <ion-title>
          {{ content.myInfo.title }}
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="content">
        <form>
          <ion-list lines="none">
            <ion-item>
              <ion-label class="label"> {{ content.myInfo.firstName }} </ion-label>
              <ion-input name="firstName" type="text"></ion-input>
            </ion-item>

            <ion-item>
              <ion-label class="label"> {{ content.myInfo.lastName }} </ion-label>
              <ion-input name="lastName" type="text"></ion-input>
            </ion-item>

            <ion-item>
              <ion-label class="label"> {{ content.myInfo.email }} </ion-label>
              <ion-input name="email" type="text"></ion-input>
            </ion-item>

            <ion-item>
              <ion-label> {{ content.myInfo.phone }} </ion-label>
              <ion-input name="phone" type="tel"></ion-input>
            </ion-item>

            <ion-item>
              <ion-label class="label"> {{ content.myInfo.houseNumber }} </ion-label>
              <ion-input name="houseNumber"></ion-input>
            </ion-item>

            <ion-item>
              <ion-label class="label"> {{ content.myInfo.street }} </ion-label>
              <ion-input name="street"></ion-input>
            </ion-item>

            <ion-item>
              <ion-label class="label"> {{ content.myInfo.zip }} </ion-label>
              <ion-input name="zip"></ion-input>
            </ion-item>

            <ion-item>
              <ion-label> {{ content.myInfo.country.title }} </ion-label>
              <ion-select name="contact_option" :placeholder="content.myInfo.country.placeholder">
                <ion-select-option v-for="(option, text) in content.myInfo.country.options" :key="text" :value="text">
                  {{ option }}</ion-select-option>
              </ion-select>
            </ion-item>

            <ion-item>
              <ion-label> {{ content.myInfo.role.title }} </ion-label>
              <ion-select name="contact_option" :placeholder="content.myInfo.role.placeholder">
                <ion-select-option v-for="(option, text) in content.myInfo.role.options" :key="text" :value="text">
                  {{ option }}</ion-select-option>
              </ion-select>
            </ion-item>

          </ion-list>

          <div id="send">
            <ion-button type="submit" color="secondary" shape="round">
              {{ content.myInfo.save }}
            </ion-button>
          </div>
        </form>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage, IonList, IonItem, IonLabel, IonInput, IonSelect, IonButton, IonButtons, IonBackButton, IonTitle, IonToolbar, IonHeader, IonSelectOption } from '@ionic/vue';
import { mapState } from "pinia";
import { useAppStore } from "@/store/app";
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
