<template>
  <ion-grid>

    <ion-row v-for="item in photo.pageSeven.items" :key="item.id">

      <ion-col v-if="item.type == 'category'">
        <ion-label class="category">
          {{ item.label }}
        </ion-label>
      </ion-col>

      <ion-col v-if="item.type == 'item'">
        {{ item.label }}
      </ion-col>

      <ion-col v-if="item.type == 'item'">
        <ion-item color="background" lines="none">
          <ion-input :value="item.value">
          </ion-input>
          {{ item.unit }}
        </ion-item>
      </ion-col>
    </ion-row>

      <apexchart v-for="chart in photo.pageSeven.graphs" :key="chart.id" type="pie" :options="chart.chartOptions" :series="chart.series"></apexchart>

  </ion-grid>
</template>
    
<script>
import { IonGrid, IonCol, IonRow, IonItem, IonInput, IonLabel } from "@ionic/vue";

import { mapState, mapWritableState } from "pinia";
import { useAppStore } from "@/store/app";
import photo from "@/data/photovoltaic.json";

import { defineComponent } from "vue";

export default defineComponent({
  name: "PageSeven",
  components: {
    IonGrid, IonCol, IonRow, IonItem, IonInput, IonLabel
  },
  computed: {
    ...mapState(useAppStore, ["content", "i18n"]),
    ...mapWritableState(useAppStore, ["settings", "flags"]),
  },
  methods: {
  },
  data() {
    return {
      photo: photo,
    }
  },
})

</script>

<style scoped>
.category {
  font-weight: bold;
}

ion-input,
ion-item {
  background-color: var(--ion-color-light);
  border-radius: 20px;
}

ion-row {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>