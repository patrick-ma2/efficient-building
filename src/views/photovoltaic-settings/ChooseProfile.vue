<template>

  <div class="float-left mt-4 flex flex-wrap">
    <ion-text class="font-semibold w-full text-center">{{content.newPV.pages[5].title}}</ion-text>
    <div class="mt-3 w-full flex flex-wrap justify-around gap-4">
      <div class="w-40 flex flex-wrap justify-center align-start frame"
      :class="{selected: pv_system.profile_type== 'residential'}"
      v-on:click="pv_system.profile_type = 'residential'">
        <ion-img src="/assets/photo_settings/profile_residential.png" class="w-4/5 mt-3" />
        <ion-text class="w-full text-center">{{content.newPV.pages[5].residential}}</ion-text>
      </div>
      <div class="w-40 flex flex-wrap justify-center align-start frame"
      :class="{selected:pv_system.profile_type == 'commercial'}"
      v-on:click="pv_system.profile_type = 'commercial'">
        <ion-img src="/assets/photo_settings/profile_commercial.png" class="w-4/5 mt-3" />
        <ion-text class="w-full text-center">{{content.newPV.pages[5].commercial}}</ion-text>
      </div>
      <div class="w-40 flex flex-wrap justify-center align-start frame"
        :class="{selected: pv_system.profile_type == 'other'}"
        v-on:click="pv_system.profile_type = 'other'">
        <ion-img src="/assets/photo_settings/profile_other.png" class="w-4/5 mt-3" />
        <ion-text class="w-full text-center">{{content.newPV.pages[5].other}}</ion-text>
      </div>
    </div>
  </div>

</template>

<script>
import { IonText, IonImg } from "@ionic/vue";

import { mapState, mapWritableState } from "pinia";
import { useAppStore } from "@/store/app";

import { defineComponent } from "vue";

export default defineComponent({
  name: "PageFour",
  components: {
    // IonLabel,
    // IonSelect,
    // IonSelectOption,
    // IonSegment,
    // IonSegmentButton,
    // IonButton,
    // IonItem
    IonText,
    IonImg
  },
  data() {
    const pv_system = useAppStore().pv_system;
    return {
      pv_system,
    }
  },
  computed: {
    ...mapState(useAppStore, ["content", "i18n"]),
    ...mapWritableState(useAppStore, ["settings", "flags"]),
    ...mapWritableState(useAppStore, ["pv_system", "pv_system"]),
  },
  methods: {
  }

})
</script>

<style scoped>
ion-input,
ion-select,
ion-item,
ion-segment {
  background-color: var(--ion-color-light);
  border-radius: 20px;
}

.frame {
  background-color: var(--ion-color-light);
  border-radius: 10px;
  padding: 2px;
}

.selected {
  background-color: var(--ion-color-primary);
}
</style>