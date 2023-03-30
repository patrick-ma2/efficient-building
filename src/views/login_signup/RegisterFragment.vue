<template>
    <ion-card class="card-center-transparent">
        <ion-card-content class="ion-no-padding">
            <ion-grid>
                <ion-row>
                    <ion-col size="12">
                        <ion-item class="custom-rounded-input" lines="none">
                            <ion-input type="email" placeholder="Email"></ion-input>
                        </ion-item>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col size="12">
                        <ion-item class="custom-rounded-input" lines="none">
                            <ion-input type="password" placeholder="Password"></ion-input>
                        </ion-item>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col size="12">
                        <ion-item class="custom-rounded-input" lines="none">
                            <ion-input type="password" placeholder="Confirm password"></ion-input>
                        </ion-item>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col size="12">
                        <ion-button expand="block" shape="round">
                            {{ content.login_signup.create_account }}
                        </ion-button>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-card-content>
    </ion-card>
</template>

<script>
import { IonCard, IonCardContent, IonGrid, IonRow, IonButton, IonInput, IonCol, IonItem } from "@ionic/vue";
import { mapState } from "pinia";
import { useAppStore } from "@/store/app";

export default {
    name: "LoginFragment",
    components:
    {
        IonCard,
        IonCardContent,
        IonGrid,
        IonRow,
        IonButton,
        IonInput,
        IonCol,
        IonItem,
    },

    computed:
    {
        ...mapState(useAppStore, ["content", "i18n"]),
    }
}
</script>

