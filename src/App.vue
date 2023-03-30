<template>
  <ion-app>
    <ion-router-outlet v-if="$ready" />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { defineComponent } from "vue";
import { mapState } from "pinia";
import { useAppStore } from "@/store/app";
export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
  },
  computed: {
    ...mapState(useAppStore, ["$ready"]),
  },
});
</script>
