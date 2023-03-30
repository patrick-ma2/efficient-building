<template>
    <ion-page>
        <ion-header class="ion-no-border">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/Settings/AppSettings"></ion-back-button>
                </ion-buttons>
                <ion-title>About</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <div class="content">
                <p class="m-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                    tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                    quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                    sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                    recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
                    minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
                    quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur
                    fugiat, temporibus enim commodi iusto libero magni deleniti quod quam
                    consequuntur! Commodi minima excepturi repudiandae velit hic maxime
                    doloremque. Quaerat provident commodi consectetur veniam similique ad
                    earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
                    fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore
                    suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
                    modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam
                    totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam
                    quasi aliquam eligendi, placeat qui corporis!</p>
            </div>
        </ion-content>
    </ion-page>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonButtons, IonBackButton, IonContent, IonHeader, IonToolbar, IonTitle } from "@ionic/vue";
import { mapState, mapWritableState } from "pinia";
import { useAppStore } from "@/store/app";

export default defineComponent({
    name: "SettingsPage",
    components: {
        IonContent,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonButtons,
        IonBackButton,
        IonPage
    },
    setup() {
        return {
            content: {},
        };
    },
    computed: {
        ...mapState(useAppStore, ["flags", "settings"]),
        ...mapWritableState(useAppStore, ["i18n"]),
    }
});
</script>