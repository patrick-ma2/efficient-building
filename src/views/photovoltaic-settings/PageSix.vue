<!-- <template>
  <ion-grid>

    <ion-row v-for="item in photo.pageSix.items" :key="item.id">
      
      <ion-col v-if="item.type == 'category'">
        <ion-label class="category">
          {{ item.label }}
        </ion-label>
      </ion-col>

      <ion-col v-if="item.type == 'item'">
        {{ item.label }}
      </ion-col>

      <ion-col v-if="item.type == 'item'">
        <ion-item color="background" lines="none">
          <ion-input :value="item.value">
          </ion-input>
          {{ item.unit }}
        </ion-item>
      </ion-col>
    </ion-row>
    

  </ion-grid>
</template> -->

<template>

  <div class="grid mt-4 w-full justify-items-center">
    <ion-text class="font-semibold">Anzahl der Einwohner</ion-text>
    <ion-range v-model="residents" :ticks="true" :snaps="true" :min="1" :max="5" class="pt-0 w-full"></ion-range>
    <div class="flex items-center">
      <ion-input v-model="residents" type="number" class="w-1/2 mr-2"></ion-input>
    </div>      
  </div>

  <div class="grid mt-4 w-full justify-items-center">
    <ion-text class="font-semibold">Jährlicher Energieverbrauch</ion-text>
    <ion-range :ticks="true" :snaps="true" :min="1" :max="2000" class="pt-0 w-full"></ion-range>
    <div class="flex items-center">
      <ion-input type="number" class="w-1/2 mr-2"></ion-input><span>kWp</span>
    </div>
  </div>

</template>
    
<script>
import {
  // IonGrid, 
  // IonCol, 
  // IonRow, 
  // IonItem, 
  // IonInput, 
  // IonLabel 
  IonText,
  IonRange
} from "@ionic/vue";

import { mapState, mapWritableState } from "pinia";
import { useAppStore } from "@/store/app";
import photo from "@/data/photovoltaic.json";

import { defineComponent } from "vue";

export default defineComponent({
  name: "PageSix",
  components: {
    // IonGrid, 
    // IonCol, 
    // IonRow, 
    // IonItem, 
    // IonInput, 
    // IonLabel,
    IonText,
    IonRange
  },
  computed: {
    ...mapState(useAppStore, ["content", "i18n"]),
    ...mapWritableState(useAppStore, ["settings", "flags"]),
  },
  methods: {
  },
  data() {
    return {
      residents: 3,
      photo: photo,
    }
  },
})

</script>

<style scoped>
.category {
  font-weight: bold;
}

ion-input,
ion-item {
  background-color: var(--ion-color-light);
  border-radius: 20px;
}

ion-row {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>