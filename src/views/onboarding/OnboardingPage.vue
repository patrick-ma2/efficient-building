<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="content">
        <div class="h-screen">
          <swiper :pagination="true" :modules="modules" class="mySwiper h-slides" ref="slides"
            @swiper="getSwiperInstance" v-on:ReachEnd="isLastSlide = true" v-on:fromEdge="isLastSlide = false">
            <swiper-slide>
              <div style="margin: 180px 10px;">
                <ion-grid class="center-grid">
                  <ion-row>
                    <img src="assets/onboarding/onboarding_1.svg" style="margin: 0 auto;" />
                  </ion-row>
                  <ion-row>
                    <ion-text class="text-2xl" color="secondary">
                      <h1>{{ content.onboarding.selectLang }}</h1>
                    </ion-text>
                  </ion-row>
                  <ion-select interface="popover" :value="this.settings.language" @ionChange="setLanguage"
                    placeholder="Sprache wählen" class="input mt-8">
                    <ion-select-option v-for="(content, languageKey) in this.i18n" :key="content"
                      :value="languageKey">{{
                          content.label
                      }}</ion-select-option>
                  </ion-select>
                </ion-grid>
              </div>
            </swiper-slide>

            <swiper-slide v-for="(slide, index) in content.onboarding.slides" v-bind:key="slide.title"
              class="flex flex-col justify-center items-center h-full w-full">
              <img :src="`/assets/onboarding/onboarding_${index + 2}.svg`" alt="img not found" />
              <div class="max-w-xs text-center">
                <ion-text class="text-2xl my-20" color="secondary">
                  <h1>{{ slide.title }}</h1>
                </ion-text>
                <ion-text class="text-xs font-light">
                  <p>{{ slide.description }}</p>
                </ion-text>
              </div>

            </swiper-slide>
          </swiper>

          <div className="flex flex-row-reverse justify-between mx-4 buttons-row">
            <ion-button class="button" shape="round" color="onboarding" v-if="!isLastSlide" v-on:click="clickToNext">
              {{ content.onboarding.next }}
            </ion-button>
            <ion-button class="button" shape="round" color="onboarding" v-if="!isLastSlide"
              router-link="/login_register">
              {{ content.onboarding.skip }}
            </ion-button>
            <ion-button class="button" shape="round" color="onboarding" v-if="isLastSlide" v-on:click="getStarted"
              router-link="/login_register">
              {{ content.onboarding.sign_in }}
            </ion-button>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonButton,
  IonSelect,
  IonSelectOption,
  IonRow,
  IonText,
  IonGrid,
} from "@ionic/vue";
import { mapState, mapWritableState } from "pinia";
import { useAppStore } from "@/store/app";
import { ScreenOrientation } from "@ionic-native/screen-orientation";
// import required modules for Swipe
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";

// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";
// import "swiper/swiper-bundle.css";

/* Core CSS required for Ionic components to work properly */
import "@ionic/vue/css/core.css";

export default {
  name: "OnboardingPage",
  swiperInstance: {},
  components: {
    IonContent,
    IonPage,
    IonButton,
    Swiper,
    SwiperSlide,
    IonSelect,
    IonSelectOption,
    IonRow,
    IonText,
    IonGrid,
  },
  data() {
    return {
      isLastSlide: false,
      screenOrientation: ScreenOrientation,
    };
  },
  async mounted() {
    if (window.innerHeight < 600 && window.innerWidth < 1024) {
      this.screenOrientation.unlock();
      this.screenOrientation.lock(
        this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY
      );
    }
  },
  computed: {
    ...mapState(useAppStore, ["content", "i18n"]),
    ...mapWritableState(useAppStore, ["settings", "flags"]),
  },
  methods: {
    async getStarted() {
      this.flags = { notFirstTime: true };
    },
    async setLanguage(e) {
      this.settings.language = e.target.value;
    },
    clickToNext() {
      this.swiperInstance.slideNext();
    },
    getSwiperInstance(swiper) {
      this.swiperInstance = swiper;
    }
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>

<style scoped>
h1 {
  font-family: initial;
  text-align: center;
}

.h-slides {
  height: calc(100% - 6rem);
}

.buttons-row {
  margin-top: 30px;
  margin-left: 0;
  margin-right: 0;
}

.slide-title {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 37px;
  text-align: center;
}

.slide-description {
  /* Text/Small */
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
}

.button {
  --box-shadow: none;
  font-weight: 400;
  font-size: 20px;
  font-family: initial;
  line-height: 27px;
  text-transform: unset;
  --ion-color-contrast: #324A32;
  /* identical to box height */

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

.input {
  border-radius: 20px;
  background-color: var(--ion-color-light);
  padding: 10px 14px;
  max-width: 200px;
}
</style>
