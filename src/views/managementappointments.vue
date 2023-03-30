<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button default-href="/photovoltaic_project_dashboard" :icon="chevronBackOutline">
            </ion-back-button>
          </ion-buttons>
          <ion-title>Appointments</ion-title>
        </ion-toolbar>
      </ion-header>
  
  
      <ion-content>

       

      
        <ion-card>
        


          <ion-row>
                        <ion-col>
                            
                                <ion-card-content class="ion-no-padding">
                                    <ion-grid>
                                        <ion-row>
                                            <ion-col class="ion-text-center">
                                              <ion-text >
                                              <h3>Filter by   data range</h3>
                                                </ion-text> 
                                            </ion-col>
                                            <ion-col class="ion-text-center">

                                              <ion-datetime-button datetime="First" ></ion-datetime-button>
    <ion-modal :keep-contents-mounted="true">
      <ion-datetime id="First" :show-default-buttons="true" v-model="taskStartDate" presentation="month-year"></ion-datetime>
    </ion-modal>
     
     <ion-datetime-button datetime="Second"></ion-datetime-button>
    <ion-modal :keep-contents-mounted="true">
      <ion-datetime id="Second" :show-default-buttons="true" v-model="taskEndDate" presentation="month-year"></ion-datetime>
    </ion-modal>

                                            </ion-col>
                                        </ion-row>
                                    </ion-grid>
                                </ion-card-content>
                            
                        </ion-col>
                    </ion-row>
</ion-card>







         
  
  
         

        <ion-card size="cover">
        <ion-datetime>
        </ion-datetime>
      </ion-card> 

        <ion-card>     
       
          <ion-card-content >
            <h1>Work on the roof</h1>
            <ion-col>
              <div class="flex justify-start">
                <ion-datetime-button datetime="Work"></ion-datetime-button>
                <ion-modal :keep-contents-mounted="true">
                  <ion-datetime id="Work" :show-default-buttons="true" v-model="taskStartDate"></ion-datetime>
                </ion-modal>
              </div>
            </ion-col>
          </ion-card-content>
        </ion-card>
        <ion-card>       
          <ion-card-content>
            <h1>Paths and private property</h1>
            <ion-col>
              <div class="flex justify-start">
                <ion-datetime-button datetime="Paths"></ion-datetime-button>
                <ion-modal :keep-contents-mounted="true">
                  <ion-datetime id="Paths" :show-default-buttons="true" v-model="taskStartDate"></ion-datetime>
                </ion-modal>
              </div>
            </ion-col>
          </ion-card-content>
        </ion-card>
        <ion-card>       
          <ion-card-content>
            <h1>Photovoltaic system</h1>
            <ion-col>
              <div class="flex justify-start">
                <ion-datetime-button datetime="Photovoltaic"></ion-datetime-button>
                <ion-modal :keep-contents-mounted="true">
                  <ion-datetime id="Photovoltaic" :show-default-buttons="true" v-model="taskStartDate"></ion-datetime>
                </ion-modal>
              </div>
            </ion-col>
          </ion-card-content>
        </ion-card>
      </ion-content>
    </ion-page>
  </template>
    
  <script lang="ts">
  import { defineComponent, } from 'vue';
  import {
    IonDatetime, IonDatetimeButton, IonModal, IonHeader, IonToolbar, IonBackButton, IonButtons, IonContent, IonPage, IonCard, IonCol,
  } from "@ionic/vue";
  import { mapState } from "pinia";
  import { useAppStore } from "@/store/app";
  
  
  import {
    chevronBackOutline,
  } from "ionicons/icons";
  
  
  
  
  export default defineComponent({
    name: "ManagementAppointments",
    components: {
      IonDatetime, IonDatetimeButton, IonModal, IonHeader, IonToolbar, IonBackButton, IonButtons, IonContent, IonPage, IonCard, IonCol,
  
    },
    data() {
      return {
        message: '',
      };
    },
  
    computed: {
      ...mapState(useAppStore, ["flags", "settings"]),
  
    },
  
  
    setup() {
      return {
        chevronBackOutline
      };
    },
  
  
  });
  </script>
  
  <style>
  
  
  
  .settings-label {
      font-family: 'Times New Roman', Times, serif;
      font-weight: 600;
      font-size: 1.5rem;
      margin: 5px 0 10px 0;
  }
  
  .scroll-container {
      max-height: 215px;
      overflow: auto;
  }
  ion-back-button::part(icon) {
      font-size: 30px;
      color: #223321;
  }
  
  ion-back-button::part(text) {
      display: none;
  }
  
  :root {
      --ion-color-new: #223321;
      --ion-color-new-rgb: 34,51,33;
      --ion-color-new-contrast: #ffffff;
      --ion-color-new-contrast-rgb: 255,255,255;
      --ion-color-new-shade: #1e2d1d;
      --ion-color-new-tint: #384737;
  }
  
  .ion-color-new {
      --ion-color-base: var(--ion-color-new);
      --ion-color-base-rgb: var(--ion-color-new-rgb);
      --ion-color-contrast: var(--ion-color-new-contrast);
      --ion-color-contrast-rgb: var(--ion-color-new-contrast-rgb);
      --ion-color-shade: var(--ion-color-new-shade);
      --ion-color-tint: var(--ion-color-new-tint);
  }
  ion-content::part(background) {
      background: #eaebe6;
  }
  
  
  
  </style>
  