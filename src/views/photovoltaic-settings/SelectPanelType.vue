<template>
    <div class="w-2/3 flex flex-col items-center">
        <ion-text class="text-sm font-semibold text-center mb-4">
            <p>{{content.newPV.pages[7].title}}</p>
        </ion-text>
        <div class="flex flex-wrap justify-around gap-4">
            <div 
                v-bind:class="{selected: pv_system.panel_type == 'blue', frame: true}"
                v-on:click="pv_system.panel_type = 'blue'">
                <ion-img src="/assets/panels/blue.jpg" class="w-60"/>
                <ion-text class="text-center">
                    <p>{{content.newPV.pages[7].blue}}</p>
                </ion-text>
            </div>
            <div
                v-bind:class="{selected: pv_system.panel_type == 'black', frame: true}"
            v-on:click="pv_system.panel_type = 'black'">
                <ion-img src="/assets/panels/black.jpg" class="w-60"/>
                <ion-text class="text-center">
                    <p>{{content.newPV.pages[7].black}}</p>
                </ion-text>
            </div>

        </div>
    </div>
</template>
        
  <script>
  import {  IonText, IonImg } from "@ionic/vue";
  
  import { mapState, mapWritableState } from "pinia";
  import { useAppStore } from "@/store/app";
  
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "SelectRooftype",
    components: {
      IonText,
      IonImg,
  
    },
    data() {
      const pv_system = useAppStore().pv_system
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
  .frame {
    background-color: var(--ion-color-light);
    border-radius: 10px;
    padding: 10px;
  }
  .selected {
    background-color: var(--ion-color-primary);
  }
  </style>
  
  