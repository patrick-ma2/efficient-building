<!-- <template>
  <ion-segment value="roof" mode="ios" class="mt-2">
    <ion-segment-button value="roof">
      <ion-label>Roof Surface</ion-label>
    </ion-segment-button>
    <ion-segment-button value="restrictive">
      <ion-label>Restrictive Areas</ion-label>
    </ion-segment-button>
  </ion-segment>

  <div class="grid place-content-center justify-items-center mt-2 w-1/3">
    <ion-img :src="mockupImg" />
  </div>

  <div class="grid grid-cols-3 justify-items-end">
    <ion-button v-on:click="saveImg()" color="secondary col-start-2 col-end-3 w-full mr-2">
      <ion-icon slot="start" :icon="save"></ion-icon>
      Save
    </ion-button>
    <ion-button v-on:click="removeImg()" color="danger col-start-3 col-end-4 w-full">
      <ion-icon slot="start" :icon="trash"></ion-icon>
      Remove
    </ion-button>
  </div>

  <div class="mt-4 grid">
    <div class="row-auto flex justify-center">
      <ion-text class="font-semibold w-full text-center">Dach Ecken malen<ion-icon :icon="pencil" class="ml-2"></ion-icon></ion-text>
    </div>    
    <div class="row-auto flex items-center">
      <ion-input type="number"></ion-input><span>m²</span>
    </div>    
  </div>

<div class="mt-4 grid">
  <div class="row-auto flex justify-center">
    <ion-text class="font-semibold w-full text-center">Dach Hindernisse malen<ion-icon :icon="pencil" class="ml-2"></ion-icon></ion-text>
  </div>    
  <div class="row-auto flex items-center">
    <ion-input type="number"></ion-input><span>m²</span>
  </div>    
</div>
</template> -->
  

<template>
  <div class="flex flex-col items-center">
    <ion-img src="/assets/maps_roof_mockup.png" class="max-w-xs mb-4" style="border-radius: 10px;"/>
    <div>
      <div class="flex flex-row items-center">
        <ion-text class="text-sm font-semibold">
          <p>{{content.newPV.pages[3].side1}}</p>
        </ion-text>
        <ion-icon :src="pencil"></ion-icon>
      </div>
      <div class="flex flex-row items-center mb-4">
        <ion-input></ion-input>
        <span>m²</span>
      </div>

      <div class="flex flex-row items-center">
        <ion-text class="text-sm font-semibold">
          <p>{{content.newPV.pages[3].side2}}</p>
        </ion-text>
        <ion-icon :src="pencil"></ion-icon>
      </div>
      <div class="flex flex-row items-center mb-4">
        <ion-input></ion-input>
        <span>m²</span>
      </div>

      <div class="flex flex-row items-center">
        <ion-text class="text-sm font-semibold">
          <p>{{content.newPV.pages[3].windows}}</p>
        </ion-text>
        <ion-icon :src="pencil"></ion-icon>
      </div>
      <div class="flex flex-row items-center mb-4">
        <ion-input></ion-input>
        <span>m²</span>
      </div>

      <div class="flex flex-row items-center">
        <ion-text class="text-sm font-semibold">
          <p>{{content.newPV.pages[3].chimney}}</p>
        </ion-text>
        <ion-icon :src="pencil"></ion-icon>
      </div>
        <div class="flex flex-row items-center">
          <ion-input></ion-input>
          <span>m²</span>
      </div>
    </div>

  </div>
</template>
<script>
import { IonIcon, IonImg, IonText, IonInput} from "@ionic/vue";
import { save, trash, pencil} from "ionicons/icons";

import { mapState, mapWritableState } from "pinia";
import { useAppStore } from "@/store/app";

import { defineComponent } from "vue";

// const mockupImg = require("@/../public/assets/maps_roof_mockup.png");

export default defineComponent({
  name: "PageTwo",
  components: {
    IonImg,
    IonText,
    IonInput,
    IonIcon,
  },
  data() {
    return {
      mockupImg: require("@/../public/assets/maps_roof_mockup.png"),
      save,
      trash,
      pencil,
    };
  },
  computed: {
    ...mapState(useAppStore, ["content", "i18n"]),
    ...mapWritableState(useAppStore, ["settings", "flags"]),
  },
  methods: {
  }

})
</script>

<style scoped>
ion-input {
  background-color: var(--ion-color-light);
  border-radius: 20px;
}
</style>