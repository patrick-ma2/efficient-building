<template>
  <div class="flex flex-col items-center">
    <ion-text class="font-semibold">
      <p>{{ content.newPV.pages[2].title }}</p>
    </ion-text>
    <div class="grid grid-cols-3 gap-2 items-center">
      <div v-for="x in this.slopes" v-bind:key="x.img" v-bind:class="{ selected: pv_system.slope == x.deg, frame: true }"
        v-on:click="pv_system.slope = x.deg">
        <ion-img :src="x.img" class="h-20" />
        <ion-text class="text-center">
          <p>{{ x.deg }} °</p>
        </ion-text>
      </div>
    </div>
    <div class="float-left mt-4">
      <ion-text class="font-semibold">{{ content.newPV.pages[2].exact }}</ion-text>
      <div class="w-1/2">

        <div class="flex">
          <ion-label class="self-center">{{ content.newPV.pages[2].angle }}</ion-label>
          <ion-input type="number" class="w-24 ml-2" v-model:value="pv_system.slope"></ion-input>°
        </div>
      </div>
    </div>
  </div>

</template>
      
<script>
import { IonText, IonImg, IonInput, IonLabel } from "@ionic/vue";

import { mapState, mapWritableState } from "pinia";
import { useAppStore } from "@/store/app";

import { defineComponent } from "vue";

export default defineComponent({
  name: "PageZOne",
  components: {
    IonText,
    IonImg,
    IonInput,
    IonLabel
  },
  data() {
    const pv_system = useAppStore().pv_system;
    return {
      pv_system,
      slopes: [
        {
          deg: 0,
          img: "/assets/photo_settings/roof_0.png"
        },
        {
          deg: 15,
          img: "/assets/photo_settings/roof_15.png"
        },
        {
          deg: 30,
          img: "/assets/photo_settings/roof_30.png"
        },
        {
          deg: 45,
          img: "/assets/photo_settings/roof_45.png"
        },
        {
          deg: 60,
          img: "/assets/photo_settings/roof_60.png"
        }
      ]
    }
  },
  computed: {
    ...mapState(useAppStore, ["content", "i18n"]),
    ...mapWritableState(useAppStore, ["settings", "flags"]),
    ...mapWritableState(useAppStore, ["pv_system", "pv_system"])
  },
  methods: {
  }

})
</script>

<style scoped>
ion-input,
ion-item {
  background-color: var(--ion-color-light);
  border-radius: 10px;
}

.frame {
  background-color: var(--ion-color-light);
  border-radius: 10px;
  padding: 10px;
}

.selected {
  background-color: var(--ion-color-primary);
  border-radius: 10px;
}
</style>

