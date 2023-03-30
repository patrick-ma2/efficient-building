<template>
  <div class="flex flex-col justify-around items-center h-full">
    <div class="flex flex-row justify-evenly items-center w-full">
      <div class="w-12" v-on:click="showPopup(1)">
        <ion-img src="/assets/photo_settings/reason_1.png"/>
        <ion-text class="infotext text-center">
          <p>Erneuerbare Energie</p>
        </ion-text>
      </div>
      <div class="w-12" v-on:click="showPopup(2)">
        <ion-img  src="/assets/photo_settings/reason_2.png"/>
        <ion-text class="infotext text-center">
          <p>Geld Sparen</p>
        </ion-text>
      </div>
    </div>
    <div class="flex flex-row justify-between items-center w-full">
      <div class="w-12" v-on:click="showPopup(3)">
        <ion-img src="/assets/photo_settings/reason_3.png"/>
        <ion-text class="infotext text-center">
          <p>Erneuerbare Energie</p>
        </ion-text>
      </div>
      <ion-img class="w-40" src="/assets/logo.svg" />
      <div class="w-12" v-on:click="showPopup(4)">
        <ion-img src="/assets/photo_settings/reason_4.png"/>
        <ion-text class="infotext text-center">
          <p>geringer Wartungsaufwand</p>
        </ion-text>
      </div>
    </div>
    <div class="w-12" v-on:click="showPopup(5)">
      <ion-img src="/assets/photo_settings/reason_5.png"/>
      <ion-text class="infotext text-center">
        <p>Klimaschutz</p>
      </ion-text>
    </div>

    <!-- <div>
      <div class="flex flex-col p-1">
        <div class="grid grid-cols-5" v-for="item in content.newPV.pages[0].reasons" v-bind:key="item.label">
          <ion-text class="col-span-2 pr-2 text-sm">
            {{item.label}}
          </ion-text>
          <ion-text class="col-span-3 text-xs">
            {{item.text}}
          </ion-text>
        </div>
      </div>
      <ion-text class="text-xs">
        {{content.newPV.pages[0].infotext}}
      </ion-text>
    </div> -->
  </div>
</template>
    
<script lang="ts">
import { IonImg, IonText} from "@ionic/vue";

import { mapState, mapWritableState } from "pinia";
import { useAppStore } from "@/store/app";

import { defineComponent } from "vue";

export default defineComponent({
    name:"PageZero",
    components: {
        IonImg,
      IonText
    },
    data() {
        return {
            
        }
    },
    computed: {
    ...mapState(useAppStore, ["content", "i18n"]),
    ...mapWritableState(useAppStore, ["settings", "flags"]),
  },
  methods: {
      showPopup(id: number) {
        console.log(id)
        return
      },
  }

})
</script>

<style scoped>
.infotext {
  font-size: 8px;
}
</style>