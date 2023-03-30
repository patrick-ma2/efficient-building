<template>
    <ion-page>
        <ion-header class="ion-no-border">
            <ion-toolbar>
                <ion-title class="logo-text">
                    Photovoltaic System
                </ion-title>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/dashboard" color="secondary"></ion-back-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content fullscreen="true">
            <div class="content">
                <ion-grid>
                    <ion-row>
                        <ion-col class="ion-no-padding">
                            <ion-card class="ion-no-margin">
                                <ion-card-content class='ion-no-padding'>
                                    <ion-grid>
                                        <ion-row>
                                            <ion-col>
                                                <ion-icon src="\assets\ionic-icons\home.svg" class="h-12 w-12" />
                                            </ion-col>
                                            <ion-col size="auto">
                                                <ion-row>
                                                    <ion-col>
                                                        <div class="ion-text-center">
                                                            <ion-text>
                                                                <h1>A small house</h1>
                                                            </ion-text>
                                                        </div>
                                                    </ion-col>
                                                </ion-row>
                                                <ion-row>
                                                    <ion-col>
                                                        Otto Str 50
                                                    </ion-col>
                                                    <ion-col>
                                                        01.07.2022
                                                    </ion-col>
                                                </ion-row>
                                            </ion-col>
                                        </ion-row>
                                    </ion-grid>
                                </ion-card-content>
                            </ion-card>
                        </ion-col>
                    </ion-row>
                    <ion-row class="ion-margin-vertical">
                        <ion-text v-if="!selectedTasks" style="font-weight: bold">
                            Plan
                        </ion-text>
                        <ion-text v-if="selectedTasks" style="font-weight: bold">
                            Construction Plan
                        </ion-text>
                    </ion-row>
                    <ion-row>
                        <ion-col class="ion-no-padding">
                            <ion-card v-if="!selectedTasks" v-on:click="nextPage()" class="ion-no-margin">
                                <ion-card-content class="ion-no-padding">
                                    <ion-grid>
                                        <ion-row>
                                            <ion-col size="auto">
                                                <ion-icon src="\assets\ionic-icons\create-outline.svg"
                                                    class="h-8 w-8" />
                                            </ion-col>
                                            <ion-col>
                                                <ion-row>
                                                    <ion-text>
                                                        <h2>Construction Plan</h2>
                                                    </ion-text>
                                                </ion-row>
                                                <ion-row>
                                                    <ion-text style="font-size:smaller">
                                                        Plan and keep track of your project
                                                    </ion-text>
                                                </ion-row>
                                            </ion-col>
                                        </ion-row>
                                    </ion-grid>
                                </ion-card-content>
                            </ion-card>
                            <ion-list v-if="selectedTasks" lines="none">
                                <ion-item
                                    v-for="task in project_tasks.tasks.filter(obj => { return obj.selected == true })"
                                    :key="task.task_id">
                                    <ion-checkbox slot="end" mode="md" v-on:click="markTasks(task.task_id)">
                                    </ion-checkbox>
                                    <ion-label for="taskname">
                                        <h3>{{ task.title }}</h3>
                                        <p>{{ task.description }}</p>
                                    </ion-label>
                                </ion-item>
                            </ion-list>
                        </ion-col>
                    </ion-row>
                    <ion-row v-if="selectedTasks" class="horizontal-scroll">
                        <ion-col class="ion-no-padding ion-text-center">
                            <ion-button shape="round" size="small" color="secondary" :disabled="!atleastOneMarked"
                                href="/craftsmen">
                                <ion-label>
                                    Contact craftsmen
                                </ion-label>
                            </ion-button>
                        </ion-col>
                        <ion-col class="ion-no-padding ion-text-center">
                            <ion-button id="Mark as privately organized" shape="round" size="small" color="secondary" :disabled="!atleastOneMarked">
                                <ion-label>
                                    Mark as privately organized
                                </ion-label>
                            </ion-button>
                        </ion-col>



    <ion-modal ref="/photovoltaic_project_dashboard" trigger="Mark as privately organized">
      <ion-content>
        <ion-toolbar>
          <ion-title>Task organize privately</ion-title>
          <ion-buttons slot="start">
        <ion-button @click="cancel">Cancel</ion-button>
      </ion-buttons>
      <ion-buttons slot="end">
        <ion-button @click="confirm">Confirm</ion-button>
      </ion-buttons>
        </ion-toolbar>
        <ion-item>
      <ion-label position="stacked">Task</ion-label>
      <ion-input v-model="name" placeholder="Install the solar panels"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Material price</ion-label>
      <ion-input  v-model="name" placeholder="Enter aggred task amount"></ion-input>
      <ion-note slot="helper">Euros</ion-note>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Start data</ion-label>
      <ion-input type= "date" v-model="name" placeholder="Please select start date"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">End date</ion-label>
      <ion-input type= "date" v-model="name" placeholder="Please select end date"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Description</ion-label>
      <ion-input v-model="name" placeholder="Work on setting up photovoltaic system"></ion-input>
    </ion-item>
       

      </ion-content>
    </ion-modal>














                        
                        <ion-col class="ion-no-padding ion-text-center">
                            <ion-button shape="round" size="small" class="edit-button" :disabled="!atleastOneMarked">
                                <ion-label>
                                    Edit
                                </ion-label>
                            </ion-button>
                        </ion-col>
                        <ion-col class="ion-no-padding ion-text-center">
                            <ion-button shape="round" size="small" color="danger" :disabled="!atleastOneMarked">
                                <ion-label>
                                    Delete
                                </ion-label>
                            </ion-button>
                        </ion-col>
                        <ion-col class="ion-no-padding ion-text-center">
                            <ion-button shape="round" size="small" class="export-button" :disabled="!atleastOneMarked">
                                <ion-label>
                                    Export
                                </ion-label>
                            </ion-button>
                        </ion-col>
                        <ion-col class="ion-no-padding ion-text-center">
                            <ion-button shape="round" size="small" :disabled="!atleastOneMarked">
                                <ion-label>
                                    Add Appointment
                                </ion-label>
                            </ion-button>
                        </ion-col>
                    </ion-row>
                    <ion-row class="ion-margin-vertical">
                        <ion-text style="font-weight: bold">
                            Project Management
                        </ion-text>
                    </ion-row>
                    <ion-row>
                        <ion-col class="ion-no-padding">
                            <ion-card class="ion-no-margin" :disabled="!selectedTasks">
                                <ion-card-content class="ion-no-padding">
                                    <ion-grid>
                                        <ion-card href="/management-appointments">
                                        <ion-row v-if="selectedTasks">
                                            <ion-col size="auto">
                                                <ion-icon src="\assets\ionic-icons\calendar-outline.svg"
                                                    class="h-8 w-8" />
                                            </ion-col>
                                            <ion-col>
                                            
                                                <ion-row>
                                                    <ion-text>
                                                        <h2>Appointments</h2>
                                                    </ion-text>
                                                </ion-row>
                                                <ion-row>
                                                    <ion-text style="font-size:smaller">
                                                        View and edit appointments
                                                    </ion-text>
                                                </ion-row>
                                            
                                            </ion-col>
                                        </ion-row></ion-card>
                                        <ion-card  href="/pv_upload_images">
                                            <ion-row>
                                            <ion-col size="auto">
                                                <ion-icon src="\assets\ionic-icons\solar-panel.svg" class="h-8 w-8" />
                                            </ion-col>
                                            <ion-col>
                                                <ion-row>
                                                    
                                                    <ion-text >
                                                        <h2>Parameters</h2>
                                                    </ion-text>
                                                
                                                </ion-row>
                                                <ion-row>
                                                    <ion-text style="font-size:smaller">
                                                        View and edit parameters
                                                    </ion-text>
                                                </ion-row>
                                            </ion-col></ion-row>
                                        </ion-card>
                                        <ion-card>
                                        <ion-row>
                                            <ion-col size="auto">
                                                <ion-icon src="\assets\ionic-icons\trash-outline.svg" color="danger"
                                                    class="h-8 w-8" />
                                            </ion-col>
                                            <ion-col>
                                                <ion-row>
                                                    <ion-text color="danger">
                                                        <h2>Delete Project</h2>
                                                    </ion-text>
                                                </ion-row>
                                                <ion-row>
                                                    <ion-text style="font-size:smaller">
                                                        This action can not be undone
                                                    </ion-text>
                                                </ion-row>
                                            </ion-col>
                                        </ion-row></ion-card>
                                    </ion-grid>
                                </ion-card-content>
                            </ion-card>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </div>
        </ion-content>
    </ion-page>
</template>

<script>

import {
    modalController,IonContent,IonModal,IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonCard,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonLabel,
    IonIcon,
    IonText,
    IonCardContent,
    IonCheckbox,
    IonItem,
    IonList
} from "@ionic/vue";

import { mapWritableState } from "pinia";
import { useAppStore } from "@/store/app";
import { storeToRefs } from 'pinia'

export default {
    name: "PhotovoltaicProjectDashboard",
    components: {
        IonContent,
        IonModal,
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonButtons,
        IonBackButton,
        IonCard,
        IonGrid,
        IonRow,
        IonCol,
        IonButton,
        IonLabel,
        IonIcon,
        IonText,
        IonCardContent,
        IonCheckbox,
        IonItem,
        IonList
    },
    data() {
        return {
            selectedTasks: false,
            markedTasks: [],
            atleastOneMarked: false
        }
    },
    setup() {
        const store = useAppStore();
        const { project_tasks } = storeToRefs(store);
        const { tasks } = storeToRefs(store);

        return {
            project_tasks,
            tasks,
            store,

        }
    },
    computed: {
        ...mapWritableState(useAppStore, ["project_tasks", "tasks"]),
    },
    beforeUpdate() {
        if (this.selectedTasks == false) {
            var i;
            var obj = JSON.parse(JSON.stringify(this.project_tasks));
            var size = obj['tasks'].length;

            for (i = 0; i < size; i++) {
                if (obj['tasks'][i].selected == true) {
                    this.selectedTasks = true;
                    break;
                }
            }
        }
    },

    methods: {
        cancel() {
        return modalController.dismiss(null, 'cancel');
      },
      confirm() {
        return modalController.dismiss(null, 'confirm');
      },


        nextPage() {
            this.$router.push("/photovoltaic_project_tasks");
        },
        markTasks(id) {


            if (!this.markedTasks.includes(id)) {
                this.markedTasks.push(id);
            }

            else if (this.markedTasks.includes(id)) {
                var index = this.markedTasks.indexOf(id);
                this.markedTasks.splice(index, 1);
            }

            if (this.markedTasks.length > 0)
                this.atleastOneMarked = true;
            else if (this.markedTasks.length == 0)
                this.atleastOneMarked = false;

        },
    },
};


</script>

<style>
 ion-modal {
    --height: 50%;
    --border-radius: 16px;
    --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  }

  ion-modal::part(backdrop) {
    background: rgba(209, 213, 219);
    opacity: 1;
  }

  ion-modal ion-toolbar {
    --background: rgb(14 116 144);
    --color: white;
  }


ion-row {
    flex-wrap: nowrap;
    align-items: center;
    padding: 2px;
}

ion-card {
    width: 100%;
    margin: 10px;
    --background: rgba(255, 255, 255, 0.4);
}

ion-button {
    --padding-start: 12px;
    --padding-end: 12px;
    font-size: small;
    font-weight: 100;
    --color: #fff;
}

.edit-button {
    --color: #fff;
    --background: #ffa509;
    --background-activated: #ffc409;
}

.export-button {
    --color: #fff;
    --background: #F494D4;
    --background-activated: #ff0990;
}

.logo-text {
    font-family: 'Lobster Two';
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 32px;
    color: #324A32;
    /* identical to box height */
}

ion-title {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
}

.horizontal-scroll {
    flex-wrap: nowrap;
    overflow-x: scroll !important;
    overflow-y: hidden;

}
</style>