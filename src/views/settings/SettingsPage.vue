<template>
    <ion-page>
        <ion-header class="ion-no-border">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/Settings/AppSettings"></ion-back-button>
                </ion-buttons>
                <ion-title>Settings</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <div class="content">
                <h1 class="text-lg mt-6 settings-label">Language</h1>

                <ion-item style="margin-bottom: 20px;">
                    <ion-select name="contact_option" placeholder="Deutsch">
                        <ion-select-option value="de">Deutsch</ion-select-option>
                        <ion-select-option value="en">English</ion-select-option>
                    </ion-select>
                </ion-item>

                <h1 class="text-lg mt-6 settings-label" style="float: left;">Light Theme</h1>
                <ion-toggle style="float: right;" slot="end" :checked="true"></ion-toggle>
                

            </div>
        </ion-content>
    </ion-page>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { 
    IonPage, 
    IonButtons, 
    IonBackButton, 
    IonItem, 
    IonSelectOption,
    IonContent, 
    IonToggle,
    IonSelect,
    IonHeader, 
    IonToolbar, 
    IonTitle,
} from "@ionic/vue";
import { mapState, mapWritableState } from "pinia";
import { useAppStore } from "@/store/app";
import { cloudUploadOutline } from 'ionicons/icons'


export default defineComponent({
    name: "SettingsPage",
    components: {
        IonContent,
        IonItem,
        IonSelectOption,
        IonSelect,
        IonHeader,
        IonToggle,
        IonToolbar,
        IonTitle,
        IonButtons,
        IonBackButton,
        IonPage,
    },
    setup() {
        const language = ref<string>("en");
        const color = ref<string>("green");
        const font = ref<string>("timesNewRoman");
        let img: File;

        const flags = {
            gb: require("/public/assets/flags/gb.png"),
            de: require("/public/assets/flags/de.png"),
            fr: require("/public/assets/flags/fr.png"),
            it: require("/public/assets/flags/it.png"),
            lx: require("/public/assets/flags/lx.png")
        };

        const updateSettings = () => {
            // Update the Settings in final storage place (e.g. localStorage, DB User Settings, etc.)

            console.log("language: " + language.value +
                "\ncolor: " + color.value +
                "\nfont: " + font.value +
                "\nimg: " + img);
            console.log(img);
        };

        const updateImage = (event: any) => {
            console.log("changing file");
            console.log(event);
            img = event.srcElement.files[0];
            updateSettings();
        };

        return {
            language,
            color,
            font,
            updateSettings,
            updateImage,
            flags,
            cloudUploadOutline,
            content: {},
        };
    },
    computed: {
        ...mapState(useAppStore, ["content", "i18n"]),
    },
    // async mounted() {
    //     i18n = i18n;
    //     this.content = i18n[this.settings.language || "de"];

    //     //set the local i18n.json to localstorage if development or backend send no file
    //     this.i18n = i18n;
    // },
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

/* styling ion components */

ion-content::part(background) {
}

ion-content::part(scroll) {
    padding: 0 10px 10px 10px;
}

ion-toolbar {
    --border-style: 0px;
    --min-height: 80px;
}

ion-title.title- {
    font-family: 'Times New Roman', Times, serif;
    font-size: 30px;
    text-align: center;
    position: absolute;
    line-height: 80px;
    color: #223321;
}

ion-back-button::part(text) {
    display: none;
}

ion-back-button::part(icon) {
    font-size: 30px;
    color: #223321;
}

ion-list {
    /* background: #eaebe6 !important; */
}

ion-item::part(native) {
    background: var(--ion-color-light);
    border-radius: 10px;
    margin: 5px 0;
    box-shadow: none;
    padding-left: 10px;
}

ion-item::part(native):active {
    border: 3px solid #96b095;
}

ion-radio::part(container) {
    display: none;
}

ion-label {
    line-height: 40px;
}

/* styling label icons */

.flag-icon {
    float: left;
    height: 40px;
    margin-right: 10px;
}

.color-block {
    float: left;
    height: 40px;
    margin-right: 10px;
    width: 50px;
}

/* custom upload Button */

input[type="file"] {
    display: none;
}

.custom-file-upload {
    border: none;
    display: inline-block;
    padding: 8px 40px;
    cursor: pointer;
    background: #324a32;
    color: #fff;
    border-radius: 15px;
    font-size: larger;
}
</style>
