<template>

  <div class="float-left mt-4">
    <ion-text class="font-semibold">{{content.newPV.pages[4].title}}</ion-text>
    <div class="mt-3 w-full flex justify-between">
      <span>{{content.newPV.pages[4].west}}</span>
      <span>{{content.newPV.pages[4].south}}</span>
      <span>{{content.newPV.pages[4].east}}</span>
    </div>
    <ion-range @ionChange="onIonChange" :value="sliderValue" :ticks="true" :snaps="true" :min="0" :max="4" class="pt-0"></ion-range>
    <ion-img :src="require('@/../public/assets/3d_house/' + orientations[sliderValue] + '.png')" class="w-72"></ion-img>
  </div>

</template>
      
<script>
import { 
  IonRange, 
  IonText,
  IonImg
} from "@ionic/vue";

import { mapState, mapWritableState } from "pinia";
import { useAppStore } from "@/store/app";

import { defineComponent } from "vue";

export default defineComponent({
  name: "PageThree",
  components: {
    IonRange,
    IonText,
    IonImg
  },
  data() {
    const pv_system = useAppStore().pv_system
    var orientations = ["west", "southwest", "south", "southeast", "east"];
    var sliderValue = 0;
    if(pv_system.orientation != undefined) sliderValue = orientations.indexOf(pv_system.orientation);    
    
    return {
      pv_system,
      sliderValue,
      orientations
    }
  },
  computed: {
    ...mapState(useAppStore, ["content", "i18n"]),
    ...mapWritableState(useAppStore, ["settings", "flags"]),
    ...mapWritableState(useAppStore, ["pv_system","pv_system"]),
  },
  methods: {
    onIonChange({detail }) {
      this.sliderValue = detail.value
      this.pv_system.orientation = this.orientations[this.sliderValue]
    }
  }

})
</script>
<style>
</style>