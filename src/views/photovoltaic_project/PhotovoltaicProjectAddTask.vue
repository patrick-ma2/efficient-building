<template>
    <ion-page>
        <ion-header class="ion-no-border">
            <ion-toolbar>
                <ion-title class="logo-text">
                    Photovoltaic System
                </ion-title>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/photovoltaic_project_tasks" color="secondary"></ion-back-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content fullscreen="true">
            <div class="content">
                <ion-grid>
                    <ion-row>
                        <ion-col>
                            <ion-text style="font-weight: bold">
                                <h1>Add a Custom Task </h1>
                            </ion-text>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <ion-list lines="none">
                                <ion-item>
                                    <ion-label position="floating" class="vertical-align">
                                        <h1>Name</h1>
                                    </ion-label>
                                    <ion-input v-model="task_name" placeholder="Give a name to you task"></ion-input>
                                </ion-item>
                                <ion-item>
                                    <ion-label position="floating">
                                        <h1>Description</h1>
                                    </ion-label>
                                    <ion-input v-model="task_description" placeholder="Give a description to your task">
                                    </ion-input>
                                </ion-item>
                            </ion-list>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col class="ion-text-center">
                            <ion-button shape="round" v-on:click="addTask()" color="secondary">
                                Add Task
                            </ion-button>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </div>
        </ion-content>
    </ion-page>
</template>

<script>
import { 
    IonPage, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonButtons, 
    IonBackButton, 
    IonInput, 
    toastController,
    IonList,
    IonItem,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonText,
    IonContent
} from "@ionic/vue";
import { mapWritableState } from "pinia";
import { useAppStore } from "@/store/app";
import { storeToRefs } from 'pinia'

export default {
    name: "PhotovoltaicProjectTasks",

    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonButtons,
        IonBackButton,
        IonInput,
        IonList,
        IonItem,
        IonLabel,
        IonGrid,
        IonRow,
        IonCol,
        IonButton,
        IonText,
        IonContent
    },

    data() {
        return {
            task_name: '',
            task_description: '',

        }
    },

    setup() {
        const store = useAppStore();
        const { project_tasks } = storeToRefs(store);
        const { tasks } = storeToRefs(store);

        return {
            project_tasks,
            tasks,
            store

        }
    },

    computed: {
        ...mapWritableState(useAppStore, ["project_tasks", "tasks"]),
    },

    methods: {
        async addTask() {

            var obj = JSON.parse(JSON.stringify(this.project_tasks));
            var last_id = obj['tasks'].length;
            obj['tasks'].push({ "task_id": last_id + 1, "title": this.task_name, "description": this.task_description, "selected": false });
            this.tasks = JSON.stringify(obj);

            const toast = await toastController.create({
                message: 'New Task Added!',
                duration: 1500,
                position: 'bottom'
            });

            await toast.present();

            this.$router.push("/photovoltaic_project_tasks");

        }
    }
};


</script>

<style>
ion-item {
    margin: 5px 0;

}

ion-item::part(native) {
    background: rgba(255, 255, 255, 0.4);
    border-radius: 10px;


}

.vertical-align {
    display: flex;
    align-content: center;
    align-items: center;
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
</style>