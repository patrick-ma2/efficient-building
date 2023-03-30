<template>
    <div class="w-full flex flex-col items-center">
        <ion-text class="text-sm font-semibold text-center mb-4">
            <p>{{content.newPV.pages[1].title}}</p>
        </ion-text>
        <div class="grid grid-cols-3 gap-2 items-center">
            <div v-for="(x,index) in this.roofArray" v-bind:key="x.img" 
            v-bind:class="{selected: pv_system.rooftype == x.name, frame: true}"
            v-on:click="pv_system.rooftype = x.name">
                <ion-img :src="x.img" class="h-20"/>
                <ion-text class="tex-sm text-center">
                    <p>{{content.newPV.pages[1].types[index].name}}</p>
                </ion-text>
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
    name: "SelectRooftype",
    components: {
      IonText,
      IonImg,
  
    },
    data() {
        const pv_system = useAppStore().pv_system;
      return {
        pv_system,
        roofArray: [
            {
                name: "open_gable",
                img: "/assets/photo_settings/rooftype_1.png"
            },
            {
                name: "box_gable",
                img: "/assets/photo_settings/rooftype_2.png"
            },
            {
                name: "hip",
                img: "/assets/photo_settings/rooftype_3.png"
            },
            {
                name: "flat",
                img: "/assets/photo_settings/rooftype_4.png"
            },
            {
                name: "gambrel",
                img: "/assets/photo_settings/rooftype_5.png"
            },
            {
                name: "shed",
                img: "/assets/photo_settings/rooftype_6.png"
            },
            {
                name: "dormer",
                img: "/assets/photo_settings/rooftype_7.png"
            },
            {
                name: "m_shaped",
                img: "/assets/photo_settings/rooftype_8.png"
            },
            {
                name: "pyramid_hip",
                img: "/assets/photo_settings/rooftype_9.png"
            },
            {
                name: "saltbox",
                img: "/assets/photo_settings/rooftype_10.png"
            },
            {
                name: "jerkinhead",
                img: "/assets/photo_settings/rooftype_11.png"
            },
            {
                name: "butterfly",
                img: "/assets/photo_settings/rooftype_12.png"
            },
        ]
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
    border-radius: 10px;
  }
  </style>
  
  