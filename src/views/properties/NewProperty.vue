<template>
    <ion-page>
        <ion-header class="ion-no-border">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/dashboard" text=""></ion-back-button>
                </ion-buttons>
                <ion-title>
                    {{ content.new_property.title }}
                </ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
            <div class="content">
                <div class="flex flex-col justify-between items-center h-full">
                    <div class="flex flex-col justify-between items-center h-full">

                        <div v-show="page == 0" class="fle flex-row items-center w-full">
                            <ion-text class="p-20 font-semibold">
                                <p>{{ content.new_property.pages[0].title }}</p>
                            </ion-text>
                            <div class=" grid grid-cols-2 gap-1 max-w-sm">
                                <div v-bind:class="{ selectedFrame: house.building_type == 'detached', frame: house.building_type != 'detached' }"
                                    v-on:click="house.building_type = 'detached'">
                                    <ion-img src="/assets/new_property/detached_1.svg" />
                                    <ion-text class="text-sm">
                                        <p>{{ content.new_property.pages[0].detached }}</p>
                                    </ion-text>
                                </div>
                                <div v-bind:class="{ selectedFrame: house.building_type == 'semi-detached', frame: house.building_type != 'semi-detached' }"
                                    v-on:click="house.building_type = 'semi-detached'">
                                    <ion-img src="/assets/new_property/semi_detached_1.svg" />
                                    <ion-text class="text-sm">
                                        <p>{{ (content.new_property.pages[0].semi_detached) }}</p>
                                    </ion-text>
                                </div>
                                <div v-bind:class="{ selectedFrame: house.building_type == 'two-family', frame: house.building_type != 'two-family' }"
                                    v-on:click="house.building_type = 'two-family'">
                                    <ion-img src="/assets/new_property/two-family-house_1.svg" />
                                    <ion-text class="text-sm">
                                        <p>{{ content.new_property.pages[0].two_family_house }}</p>
                                    </ion-text>

                                </div>
                                <div v-bind:class="{ selectedFrame: house.building_type == 'apartment', frame: house.building_type != 'apartment' }"
                                    v-on:click="house.building_type = 'apartment'">
                                    <ion-img src="/assets/new_property/apartment_building_1.svg" />
                                    <ion-text class="text-sm">
                                        <p>{{ content.new_property.pages[0].apartment }}</p>
                                    </ion-text>
                                </div>
                            </div>
                        </div>

                        <div v-show="page == 1">
                            <ion-text class="p-20 font-semibold">
                                <p>{{ content.new_property.pages[1].title }}</p>
                            </ion-text>
                            <div class="grid grid-cols-3 gap-y-3 items-center gap-x-1">
                                <ion-label position="fixed">{{ content.new_property.pages[1].street }}</ion-label>
                                <ion-input class="col-span-2 input" v-model="house.address.street"></ion-input>

                                <ion-label position="fixed">{{ content.new_property.pages[1].postcode }}</ion-label>
                                <ion-input class="col-span-2 input" type="number"
                                    v-model="house.address.postcode"></ion-input>

                                <ion-label position="fixed">{{ content.new_property.pages[1].city }}</ion-label>
                                <ion-input class="col-span-2 input" v-model="house.address.city"></ion-input>

                                <ion-label position="fixed">{{ content.new_property.pages[1].country }}</ion-label>
                                <ion-input class="col-span-2 input" v-model="house.address.country"></ion-input>
                            </div>
                        </div>

                        <div v-show="page == 2">
                            <ion-text class="p-20 font-semibold">
                                <p>{{ content.new_property.pages[2].title }}</p>
                            </ion-text>
                            <div class=" grid grid-cols-2 gap-1 max-w-sm">
                                <div v-bind:class="{ selectedFrame: house.area < 50, frame: !(house.area < 50) }"
                                    v-on:click="house.area = 35">
                                    <ion-img src="/assets/new_property/floor_sm.svg" />
                                    <ion-text class="text-sm">
                                        <p>{{ content.new_property.pages[2].upto }} 50 m2</p>
                                    </ion-text>
                                </div>
                                <div v-bind:class="{ selectedFrame: house.area >= 50 && house.area < 100, frame: !(house.area >= 50 && house.area < 100) }"
                                    v-on:click="house.area = 75">
                                    <ion-img src="/assets/new_property/floor_md.svg" />
                                    <ion-text class="text-sm">
                                        <p>50 - 100 m2</p>
                                    </ion-text>
                                </div>
                                <div v-bind:class="{ selectedFrame: house.area >= 100 && house.area < 200, frame: !(house.area >= 100 && house.area < 200) }"
                                    v-on:click="house.area = 150">
                                    <ion-img src="/assets/new_property/floor_l.svg" />
                                    <ion-text class="text-sm">
                                        <p>100 - 200 m2</p>
                                    </ion-text>

                                </div>
                                <div v-bind:class="{ selectedFrame: house.area >= 200, frame: house.area < 200 }"
                                    v-on:click="house.area = 200">
                                    <ion-img src="/assets/new_property/floor_xl.svg" />
                                    <ion-text class="text-sm">
                                        <p>{{ content.new_property.pages[2].above }} 200 m2</p>
                                    </ion-text>

                                </div>



                            </div>
                            <ion-text class="p-20">
                                <h3>{{ content.new_property.pages[2].manual }}</h3>
                                <div class="flex fle-row justify-center items-center">
                                    <ion-input v-model:value="house.area">

                                    </ion-input>
                                    <p>m2</p>
                                </div>
                            </ion-text>
                        </div>

                        <div v-show="page == 3">
                            <ion-text class="p-20 font-semibold">
                                <p>{{ content.new_property.pages[3].title }}</p>
                            </ion-text>
                            <div class=" grid grid-cols-3 gap-1 max-w-sm">
                                <ion-img class="p-2" src="/assets/new_property/1977.svg"
                                    v-bind:class="{ selectedFrame: house.construction_year < 1978, frame: !(house.construction_year < 1978) }"
                                    v-on:click="house.construction_year = 1977" />
                                <ion-img class="p-2" src="/assets/new_property/1978.svg"
                                    v-bind:class="{ selectedFrame: house.construction_year >= 1978 && house.construction_year < 1995, frame: !(house.construction_year >= 1978 && house.construction_year < 1995) }"
                                    v-on:click="house.construction_year = 1994" />
                                <ion-img class="p-2" src="/assets/new_property/1995.svg"
                                    v-bind:class="{ selectedFrame: house.construction_year >= 1995 && house.construction_year < 2002, frame: !(house.construction_year >= 1995 && house.construction_year < 2002) }"
                                    v-on:click="house.construction_year = 2001" />
                                <ion-img class="p-2" src="/assets/new_property/2002.svg"
                                    v-bind:class="{ selectedFrame: house.construction_year >= 2002 && house.construction_year < 2019, frame: !(house.construction_year >= 2002 && house.construction_year < 2019) }"
                                    v-on:click="house.construction_year = 2019" />
                                <ion-img class="p-2" src="/assets/new_property/2019.svg"
                                    v-bind:class="{ selectedFrame: house.construction_year >= 2019, frame: house.construction_year < 2019 }"
                                    v-on:click="house.construction_year = 2019" />

                            </div>
                            <ion-text class="p-20">
                                <h3>{{ content.new_property.pages[3].manual }}</h3>
                                <ion-input v-model:value="house.construction_year">

                                </ion-input>
                            </ion-text>
                        </div>

                        <div v-show="(page == 4)">
                            <ion-text class="p-20 font-semibold">
                                <h5>{{ content.new_property.pages[4].title }}</h5>
                                <div class="flex flex-col justify-center items-center h-full w-full ">
                                    <div v-bind:class="{ selectedFrame: house.owned, frame: !house.owned }"
                                        v-on:click="house.owned = true">
                                        <img src="assets/new_property/house_owned.png" />
                                        <ion-text class="font-light">
                                            <p>{{ content.new_property.pages[4].my_house }}</p>
                                        </ion-text>
                                    </div>
                                    <div v-bind:class="{ selectedFrame: !house.owned, frame: house.owned }"
                                        v-on:click="house.owned = false">
                                        <img style="margin: 0 auto;" src="assets/new_property/house_wanted.png" />
                                        <ion-text class="font-light">
                                            <p>{{ content.new_property.pages[4].not_my_house }}</p>
                                        </ion-text>
                                    </div>
                                </div>
                            </ion-text>
                        </div>

                        <div v-show="(page == 5)">
                            <ion-text class="pt-8 font-semibold">
                                <p>{{ content.new_property.pages[5].title }}</p>
                            </ion-text>
                            <ion-input class="input" v-model="house.name">

                            </ion-input>
                            <div class="flex flex-col items-center justify-around">
                                <ion-text class="pt-8 font-semibold">
                                    <p>{{ content.new_property.pages[5].icon_standard }}</p>
                                </ion-text>
                                <img src="assets/new_property/icon_standard.svg" />

                                <ion-text class="pt-8 font-semibold">
                                    <p>{{ content.new_property.pages[5].icon_custom }}</p>
                                </ion-text>
                                <img src="assets/new_property/icon_upload.svg" class="frame" style="max-width: 100px" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ion-content>
        <div class="ion-no-border">
            <div class="content">
                <div class="flex flex-row justify-between ion-padding bottom-0">
                    <ion-button color="danger" shape="round" v-on:click="prevPage">
                        {{ content.new_property.back }}
                    </ion-button>
                    <router-link to="/dashboard">
                        <ion-button v-if="(page == 5)" color="secondary" shape="round" v-on:click="submit()">
                            {{ content.new_property.save }}
                        </ion-button>
                    </router-link>
                    <ion-button v-if="(page < 5)" color="secondary" shape="round" v-on:click="nextPage">
                        {{ content.new_property.next }}
                    </ion-button>
                </div>
            </div>
        </div>
    </ion-page>
</template>

<script lang="ts">
import {
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonButtons,
    IonBackButton,
    IonInput,
    IonLabel,
    IonText,
    IonImg
} from "@ionic/vue";


import { mapState, mapWritableState } from "pinia";
import { useAppStore } from "@/store/app";
import router from "@/router";

import { defineComponent } from "vue";

export default defineComponent({
    name: "NewProperty",
    components: {
        IonPage,
        IonContent,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonButton,
        IonButtons,
        IonBackButton,
        IonInput,
        IonLabel,
        IonText,
        IonImg
    },
    data() {
        return {
            page: 0,
            house: {
                name: "",
                address: {
                    street: "",
                    postcode: 0,
                    city: "",
                    country: "",
                },
                area: 0.0,
                construction_year: 2005,
                building_type: "",
                owned: false,
                img_url: "",
            }
        }
    },
    computed: {
        ...mapState(useAppStore, ["content", "i18n"]),
        ...mapWritableState(useAppStore, ["settings", "flags"]),
        ...mapWritableState(useAppStore, ["house_data", "house_data"])
    },
    methods: {
        prevPage(): void {
            if (this.page > 0) {
                this.page--;
            } else {
                router.back()
            }
        },
        nextPage() {
            if (this.page < 5) {
                this.page++;
            }
        },
        submit() {
            const store = useAppStore()
            store.house_data.push(this.house)

        },
        setLivingArea(size: number) {
            this.house.area = size;
        }
    }
})
</script>

<style scoped>
select {
    background-color: var(--ion-color-secondary-contrast);
    border-radius: 20px;
    padding: 8px;
}

ion-input {
    background-color: var(--ion-color-light);
    border-radius: 10px;
    padding: 0px 9px !important;
}

.font-light {
    text-align: center;
}

option:selection {
    background-color: var(--ion-color-primary);
}

ion-label {
    font-size: 15px;
    font-weight: 400;
}

.selectedFrame {
    border-radius: 10px;
    padding: 8px;
    margin: 5px;
    background-color: var(--ion-color-primary);
}

ion-back-button::part(icon) {
    font-size: 30px;
    color: #223321;
}

.frame {
    border-radius: 20px;
    padding: 8px;
    margin: 5px;
    background-color: var(--ion-color-light);
}

.text-sm {
    text-align: center;
}
</style>