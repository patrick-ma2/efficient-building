<template>
  <ion-page>
    <ion-content :fullscreen="true" v-if="!loading">
      <div class="content">
        <div class="md:grid md:grid-cols-8 h-screen primary-color-bg flex flex-col justify-center">
          <div class="md:col-start-3 md:col-span-4 mx-8 flex flex-col justify-evenly h-full">
            <div class="mx-3">
              <div class="flex flex-row justify-center">
                <img src="\assets\icon\app_logo.svg" class="h-32 w-32" />
              </div>
              <p class="text-center primary-color-h mb-2 mt-8 text-3xl">
                {{ content.splash.app_title }}
              </p>
            </div>

            <div class="mt-10">
              <p class="text-center primary-color-h mb-3">
                {{ content.splash.loadingText }}
              </p>
              <ion-progress-bar :value="loadingProgress" color="primary"></ion-progress-bar>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonProgressBar } from "@ionic/vue";
import { mapState, mapWritableState } from "pinia";
import { useAppStore } from "@/store/app";
import i18n from "@/data/i18n.json";
import photo from "@/data/houseData.json";
import tasks from "@/data/project_tasks.json";

export default {
  name: "SplashScreen",
  components: {
    IonContent,
    IonPage,
    IonProgressBar,
  },
  data() {
    return {
      loadingProgress: 0,
      loading: true,
      content: {},
      house: {},
      project_tasks: {},
    };
  },
  computed: {
    ...mapState(useAppStore, ["flags", "settings", "infos"]),
    ...mapWritableState(useAppStore, ["i18n", "tasks"]),
  },
  async mounted() {
    this.i18n = i18n;
    this.content = i18n[this.settings.language || "de"];
    const store = useAppStore();
    store.house_data = photo.house.items;

    this.tasks = tasks;
    this.project_tasks = tasks;

    // // Use matchMedia to check the user preference
    // const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

    // toggleDarkTheme(prefersDark.matches);

    // // Listen for changes to the prefers-color-scheme media query
    // prefersDark.addListener((mediaQuery) =>
    //   toggleDarkTheme(mediaQuery.matches)
    // );

    // // Add or remove the "dark" class based on if the media query matches
    // function toggleDarkTheme(shouldAdd) {
    //   document.body.classList.toggle("dark", shouldAdd);
    // }

    toggleLightTheme(true);
    // Add or remove the "light" class based on if the media query matches
    function toggleLightTheme(shouldAdd) {
      document.body.classList.toggle("light", shouldAdd);
    }

    this.loading = false;
    setInterval(
      () => {
        this.loadingProgress += 0.01;
      },
      this.flags?.notFirstTime ? 15 : 30
    );
    await new Promise((r) =>
      setTimeout(r, this.flags?.notFirstTime ? 2000 : 3500)
    );

    //set the local i18n.json to localstorage if development or backend send no file
    this.i18n = i18n;
    this.tasks = tasks;

    this.$router.push("/onboarding");
  },
};
</script>
