<template>
    <ion-page>
        <ion-header class="ion-no-border">
            <ion-toolbar>
                <ion-title class="logo-text">
                    Photovoltaic System
                </ion-title>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/photovoltaic_project_dashboard" color="secondary"></ion-back-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content fullscreen="true">
            <div class="content">
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <ion-text style="font-weight: bold">
                            <h1 v-if="!selectedTasks">Pick which tasks you'd like planned</h1>
                            <h1 v-if="selectedTasks">Suggested Plan</h1>
                        </ion-text>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <ion-list v-if="!selectedTasks" lines="none">
                            <ion-item>
                                <ion-label>
                                    <h3>Custom Task</h3>
                                    <p>Create your own task </p>
                                </ion-label>
                                <ion-button v-on:click="nextPage()" slot="end" color="secondary">
                                    Create
                                </ion-button>
                            </ion-item>
                            <ion-item v-for="task in project_tasks.tasks" :key="task.task_id">
                                <ion-checkbox v-on:ionChange="task.selected = !task.selected" slot="end" mode="md"  :checked="task.selected">
                                </ion-checkbox>
                                <ion-label for="taskname">
                                    <h3>{{ task.title }}</h3>
                                    <p>{{ task.description }}</p>
                                </ion-label>
                            </ion-item>
                        </ion-list>
                        <ion-list v-if="selectedTasks" lines="none">
                            <ion-item v-for="task in project_tasks.tasks.filter(obj => { return obj.selected == true })"
                                :key="task.task_id">
                                <ion-checkbox slot="end" mode="md" v-on:ionChange="task.selected = !task.selected"
                                    checked="true">
                                </ion-checkbox>
                                <ion-label for="taskname">
                                    <h3>{{ task.title }}</h3>
                                    <p>{{ task.description }}</p>
                                </ion-label>
                            </ion-item>
                        </ion-list>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col v-if="selectedTasks">
                        <ion-button class="transparent_button" color="transparent" v-on:click="goBack()">
                            <ion-label>
                                Back
                            </ion-label>
                        </ion-button>
                    </ion-col>
                    <ion-col class="ion-text-center">
                        <ion-button class="rounded_button" shape="round" v-on:click="gotoSelected()" color="secondary">
                            <ion-label v-if="!selectedTasks">
                                Next
                            </ion-label>
                            <ion-label v-if="selectedTasks">
                                Accept
                            </ion-label>
                        </ion-button>
                    </ion-col>
                    <ion-col v-if="selectedTasks">
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
    IonItem, 
    IonCheckbox,
    IonText,
    IonCol,
    IonRow,
    IonGrid,
    IonList,
    IonButton,
    IonLabel,
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
        IonItem,
        IonCheckbox,
        IonText,
        IonCol,
        IonRow,
        IonGrid,
        IonList,
        IonButton,
        IonLabel,
        IonContent
    },
    data() {
        return {
            selectedTasks: false
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
    methods: {
        nextPage() {
            this.$router.push("/photovoltaic_project_addtask")
        },

        goBack(){
            this.selectedTasks = false;
        },

        gotoSelected() {
            var i;
            var obj = JSON.parse(JSON.stringify(this.project_tasks));
            var size = obj['tasks'].length;
            if (this.selectedTasks == true)
                this.$router.push("/photovoltaic_project_dashboard");
            else {
                for (i = 0; i < size; i++) {
                    if (obj['tasks'][i].selected == true) {
                        console.log(obj['tasks'][i].selected);
                        this.selectedTasks = true;
                        break;
                    }
                }
            }

        }

    },

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

ion-item.item-border-color {
    border-radius: 10px;
    border: 2px solid var(--ion-color-secondary);
}


ion-checkbox::part(container) {
    --background: transparent;
}

ion-checkbox::part(mark) {
    --checkmark-color: #fff;
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

.rounded_button {
    --padding-start: 32px;
    --padding-end: 32px;
    font-weight: 100;
    --color: #fff;
}

.transparent_button{
    font-weight: 100;
    --color:var(--ion-color-secondary);
}

</style>