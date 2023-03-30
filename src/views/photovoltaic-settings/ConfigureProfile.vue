
<template>
  <div v-if="pv_system.profile_type != 'other'" class="flex flex-col">
    <ion-text class="text-sm font-semibold mt-4 w-full" v-if="pv_system.profile_type == 'residential'">
      <p>{{content.newPV.pages[6].number_residents}}</p>
    </ion-text>
    <!-- <div class="flex flex-row" v-if="pv_system.profile_type == 'residential'">
      <ion-img src="/assets/photo_settings/resident.svg" v-for=" n in pv_system.residentCount" v-bind:key="n"/>
    </div> -->
    <ion-input :value="pv_system.residentCount" type="number" 
    @ionInput="pv_system.residentCount = $event.target.value" v-if="pv_system.profile_type == 'residential'">

    </ion-input>

    <ion-text class="text-sm font-semibold mt-4" >
      <p>{{content.newPV.pages[6].consumption}}</p>
      <ion-range v-bind:value="sliderValue" @ionChange="onSlider2Change"></ion-range>
      <div class=" flex flex-row items-center">
        <ion-input v-model:value="pv_system.anual_consumption"/><p>kWh</p>
      </div>
    </ion-text>

    <ion-text class="text-sm font-semibold mt-4">
      <p>{{content.newPV.pages[6].heated}}</p>
    </ion-text>
      <ion-segment mode="ios" value="yes">
        <ion-segment-button value="yes">
          <ion-label>Ja</ion-label>
        </ion-segment-button>
        <ion-segment-button value="no">
          <ion-label>Nein</ion-label>
        </ion-segment-button>
      </ion-segment>

  </div>

  <div v-if="pv_system.profile_type == 'other'" class="flex flex-col">
    <ion-button color="secondary" shape="round">
      {{content.newPV.pages[6].upload_profile}}
    </ion-button>
  </div>
</template> 
    
<script>
import { IonInput, IonRange} from "@ionic/vue";

import { mapState, mapWritableState } from "pinia";
import { useAppStore } from "@/store/app";

import { defineComponent } from "vue";

export default defineComponent({
  name: "ConfigureProfile",
  components: {
    // IonGrid,
    // IonCol,
    // IonRow,
    // IonItem, 
    IonInput,
    // IonLabel,
    // IonSelect,
    IonRange,
  },
  data() {
    const pv_system = useAppStore().pv_system
    var sliderValue = pv_system.anual_consumption/40
    return {
      pv_system,
      sliderValue,
    }
  },
  computed: {
    ...mapState(useAppStore, ["content", "i18n"]),
    ...mapWritableState(useAppStore, ["settings", "flags"]),
    ...mapWritableState(useAppStore, ["pv_system", "pv_system"]),
  },
  methods: {
    createRange(num) {
    var arr = []
    for(var i = 1; i<= num; i++) {
      if(i>10) {
        break;
      }
      arr.push(i)
    }
  },
  onSlider2Change({detail}) {
    this.sliderValue = detail.value
    this.pv_system.anual_consumption = detail.value * 4000/100;
    console.log(detail.value)
  }
  },
})

</script>

<style scoped>
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