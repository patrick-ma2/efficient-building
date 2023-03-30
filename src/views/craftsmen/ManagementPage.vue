<template>
  <ion-page class="">
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-button slot="start">
          <ion-back-button default-href="/photovoltaic_project_dashboard" text=""></ion-back-button>
        </ion-button>
        <ion-title>
          {{ content.craftsmen_management.title }}
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div class="content">
        <div class="flex flex-col justify-between items-center">
          <ion-card class="w-full">
            <ion-card-content>
              <div class="flex flex-row justify-center">
                <ion-text class="mr-4">Street St. 42.</ion-text>
                <ion-text class="ml-4">01.Jan.1970</ion-text>
              </div>
            </ion-card-content>
          </ion-card>
          <ion-title>{{ content.craftsmen_management.contractors }}</ion-title>
          <ion-segment mode="ios" value="all" v-model="tab">
            <ion-segment-button value="all">{{ content.craftsmen_management.all }}</ion-segment-button>
            <ion-segment-button value="contacted">{{ content.craftsmen_management.contacted }}</ion-segment-button>
            <!-- <ion-segment-button value="hidden">{{ content.craftsmen_management.hidden }}</ion-segment-button> -->
          </ion-segment>

          <div class="flex flex-col justify-start, items-center w-full">
            <div class="w-full">
              <!-- <ion-button v-if="tab == 'contacted'" color="secondary" shape="round" size="small" v-on:click="hide">{{
                  content.craftsmen_management.hide
              }}</ion-button> -->
            </div>
            <ion-card v-for="contractor in contractorList" v-bind:key="contractor.name" class="w-full">
              <ion-card-content v-if="contractor.category == tab || tab == 'all'">
                <div class="flex flex-row justify-between items-center">
                  <div class="flex flex-row justify-start">
                    <ion-img class="w-20 m-2"
                      src="http://images.provenexpert.com/22/8d/07f2376ed3279d41ff9f8bde88d1/haubrich-gebaeudedienste_full_1618425352.jpg"
                      alt="Contractor-Logo"></ion-img>
                    <div class="flex flex-col">
                      <ion-text class="text-lg">{{ contractor.name }}</ion-text>
                      <ion-text class="text-sm">{{ contractor.adress }}</ion-text>
                      <div class="flex flex-row justify-start">
                        <ion-icon v-for="n in contractor.stars" class="pr-1" v-bind:key="n" :src="star"></ion-icon>
                        <ion-icon v-for="n in 5 - contractor.stars" class="pr-1" v-bind:key="n"
                          :src="starOutline"></ion-icon>
                      </div>
                    </div>
                  </div>
                  <ion-button color="secondary" shape="round" size="small" v-on:click="btnClick(contractor)">{{
                      getBtnText(contractor.category)
                  }}</ion-button>
                </div>
              </ion-card-content>
            </ion-card>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
  
<script lang="ts">

import { mapState, mapWritableState } from "pinia";
import { useAppStore } from "@/store/app";
import {
  IonContent, IonHeader, IonPage, IonTitle,
  IonToolbar, IonBackButton, IonCard, IonCardContent,
  IonSegment, IonSegmentButton, IonIcon, IonImg, IonButton, IonText,
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

import { star, starOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'ManagementPage',
  components: {
    IonContent, IonHeader, IonPage, IonTitle,
  IonToolbar, IonBackButton, IonCard, IonCardContent,
  IonSegment, IonSegmentButton, IonIcon, IonImg, IonButton, IonText,
  },
  setup() {
    const router = useRouter();
    return {
      star,
      starOutline,
      router
    }
  },
  data() {
    return {
      tab: "all",
      hiding: false,
      contractors: [
        {
          name: "Haubrich GmbH",
          adress: "54312 Greimerath",
          logo: "logo.png",
          stars: 5,
          category: "all",
          hidden: false
        },
        {
          name: "Kasallek GmbH",
          adress: "12354 Berlin",
          logo: "logo2.png",
          stars: 3,
          category: "all",
          hidden: false
        },
        {
          name: "Meyer PV",
          adress: "52062 Aachen",
          logo: "logo2.png",
          stars: 3,
          category: "all",
          hidden: false
        },


      ]
    }
  },
  methods: {
    btnClick(contractor: any) {
      let index = this.contractors.findIndex((element) => element.name == contractor.name);
      //if on first page
      if (contractor.category == "all") {
        this.contractors[index].category = "contacted"
        //if on second page
      } else if (contractor.category == "contacted") {
        if (this.hiding && this.tab == "contacted") {
          this.contractors[index].category = "hidden"
          this.contractors[index].hidden = true;
          this.hiding = !this.hiding;
        } else {
          //todo open chat
          this.router.push('/craftsman-info')
        }
        //if on third page
      } else {
        this.contractors[index].category = "contacted";
        this.contractors[index].hidden = false;
      }

    },
    hide() {
      this.hiding = !this.hiding;
      console.log(this.hiding)
      return
    },
    getBtnText(category: any) {
      if (this.tab == "all") {
        if (category == "all") {
          return this.content.craftsmen_management.contact;
        } else {
          return this.content.craftsmen_management.chat;
        }
      } else if (this.tab == "contacted") {
        if (this.hiding) {
          return this.content.craftsmen_management.hide;
        } else {
          return this.content.craftsmen_management.chat;
        }
      }
      else {
        return this.content.craftsmen_management.show;
      }
    }
  },
  computed: {
    ...mapState(useAppStore, ["content", "i18n"]),
    ...mapWritableState(useAppStore, ["settings", "flags"]),
    contractorList: function () {
      return this.contractors.filter((element) => !element.hidden || this.tab == "hidden");
    }
  }
});
</script>
  
<style scoped>
ion-card,
ion-segment {
  background-color: var(--ion-color-light);
  border-radius: 10px;
  box-shadow: none;
}

ion-icon {
  color: orange;
}
</style>
  