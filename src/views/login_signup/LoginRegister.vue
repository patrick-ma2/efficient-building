<template>
    <ion-page>
        <ion-content fullscreen="true">
            <div class="content">
                <ion-grid>
                    <div class="mb-20 flex flex-col items-center">
                        <img :src="`/assets/logo.svg`" class="mt-20 primary-color-svg w-30 " />
                        <ion-text class="logo-text mt-4">
                            <h3>GreenHome</h3>
                        </ion-text>
                    </div>
                    <ion-row>
                        <ion-col>
                            <ion-segment mode="ios" color=none @ionChange="segmentChanged($event)"
                                :value="$data.segment">
                                <ion-segment-button value="login">
                                    <ion-label>
                                        {{ content.login_signup.login }}
                                    </ion-label>
                                </ion-segment-button>

                                <ion-segment-button value="register">
                                    <ion-label>
                                        {{ content.login_signup.register }}
                                    </ion-label>
                                </ion-segment-button>
                            </ion-segment>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <div v-if="segment == 'login'">
                                <LoginFragment />
                            </div>

                            <div v-if="segment == 'register'">
                                <RegisterFragment />
                            </div>
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
    IonContent, 
    IonRow, 
    IonGrid, 
    IonCol, 
    IonSegment, 
    IonSegmentButton, 
    IonLabel,
    IonText
} from "@ionic/vue";
import LoginFragment from "@/views/login_signup/LoginFragment.vue";
import RegisterFragment from "@/views/login_signup/RegisterFragment.vue";
import { mapState } from "pinia";
import { useAppStore } from "@/store/app";

export default {
    name: "LoginRegister",
    components: {
        IonPage,
        IonContent,
        IonRow,
        IonCol,
        IonGrid,
        IonSegment,
        IonSegmentButton,
        LoginFragment,
        RegisterFragment,
        IonLabel,
        IonText
    },

    computed:
    {
        ...mapState(useAppStore, ["content", "i18n"]),
    },

    data() {
        return {
            segment: 'login'
        };
    },


    methods:
    {
        segmentChanged(ev) {
            this.segment = ev.detail.value;
        },
    },




};

</script>

<style>
.segment-button-checked::part(indicator-background) {
    background-color: var(--ion-color-secondary);

}

ion-segment-button.md::part(native) {
    color: rgba(0, 0, 0, 0.215);
    width: 30px;
    flex-direction: row;
}

.segment-button-checked.md::part(native) {
    color: var(--ion-color-primary);
}

ion-segment-button.md::part(indicator) {
    width: 0px;
    margin: auto;
}

ion-segment-button.ios::part(native) {
    color: var(--ion-color-secondary);
    font-weight: bold;
}

.segment-button-checked.ios::part(native) {
    color: #fff;
}



.center-block {
    display: block;
    margin-left: auto;
    margin-right: auto;
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

@media only screen and (min-width: 426px) {
    ion-grid {
        margin-left: 16px;
        margin-right: 16px;
    }
}
</style>