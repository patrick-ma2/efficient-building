<template>
  <ion-header class="header ion-no-border">
    <ion-toolbar>
      <ion-back-button default-href="/dashboard" slot="start"></ion-back-button>
      <ion-title class="ion-text-center">{{ content.CraftsmanInfo.title }}</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <div class="content">
      <!-- <ion-card mode="ios" style="margin: 20px 0; background-color: #fff;">
      <ion-grid style="padding: 0;">
        <ion-row class="property-details">
          <ion-col>{{ content.CraftsmanInfo.property_address }}</ion-col>
          <ion-col>{{ content.CraftsmanInfo.property_date }}</ion-col>
        </ion-row>
      </ion-grid>
    </ion-card> -->

      <ion-segment mode="ios" value="information" v-model="tab" style="margin-bottom: 20px;">
        <ion-segment-button value="information">
          <ion-label>Information</ion-label>
        </ion-segment-button>
        <ion-segment-button value="chat">
          <ion-label>Chat</ion-label>
        </ion-segment-button>
      </ion-segment>

      <div>
        <div v-if="tab == 'information'">
          <ion-card class="contractor-details">
            <ion-grid>
              <ion-row>
                <ion-col style="max-width: 94px;">
                  <ion-img
                    src="http://images.provenexpert.com/22/8d/07f2376ed3279d41ff9f8bde88d1/haubrich-gebaeudedienste_full_1618425352.jpg"
                    alt="Contractor-Logo"></ion-img>
                </ion-col>
                <ion-col>
                  <ion-row class="craftsman_name">
                    <ion-col style="padding: 2px 10px;">{{ content.CraftsmanInfo.craftsman_name }}</ion-col>
                  </ion-row>
                  <ion-row class="craftsman_address">
                    <ion-col style="padding: 2px 10px;">{{ content.CraftsmanInfo.craftsman_address }}</ion-col>
                  </ion-row>
                  <ion-row class="">
                    <ion-col style="padding: 2px 10px;">
                      <star-rating :rating="4.5" v-bind:increment="0.5" v-bind:star-size="20"
                        v-bind:read-only="true"></star-rating>
                    </ion-col>
                  </ion-row>
                </ion-col>
                <ion-col style="max-width: 75px;">
                  <ion-button class="call-button" shape="round" color="secondary">Call</ion-button>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card>
          <ion-grid class="justify-center">
            <ion-row><ion-button class="option-buttons" shape="round" color="secondary">Set an
                appointment</ion-button></ion-row>
            <ion-row><ion-button class="option-buttons" shape="round" color="secondary">Mark as
                completed</ion-button></ion-row>
            <ion-row><ion-button class="option-buttons" shape="round" color="secondary" id="open-modal"
                expand="block">Assign task to contractor</ion-button></ion-row>
          </ion-grid>
          <!-- <ion-button class="option-buttons" shape="round" color="secondary">Set an appointment</ion-button>
        <ion-button class="option-buttons" shape="round" color="secondary">Mark as completed</ion-button>
        <ion-button class="option-buttons" shape="round" color="secondary" id="open-modal" expand="block">Assign task to
          contractor</ion-button> -->

          <ion-modal ref="modal" trigger="open-modal" class="modal-info">
            <ion-content>



              <div class="modal-content">

                <ion-grid>
                  <ion-row>
                    <ion-col>
                      <strong>Firm:</strong>
                    </ion-col>
                    <ion-col>
                      <ion-item lines="none" disabled="true">
                        {{ content.CraftsmanInfo.craftsman_name }}
                      </ion-item>
                    </ion-col>
                  </ion-row>

                  <ion-row>
                    <ion-col>
                      <strong>Task</strong>
                    </ion-col>
                    <ion-col>
                      <ion-item lines="none" disabled="true">
                        {{ content.CraftsmanInfo.title }}
                      </ion-item>
                    </ion-col>
                  </ion-row>

                  <ion-row>
                    <ion-col>
                      <strong>Start:</strong>
                    </ion-col>
                    <ion-col>
                      <ion-item lines="none">
                        <ion-datetime-button datetime="starttime"></ion-datetime-button>

                        <ion-modal :keep-contents-mounted="true">
                          <ion-datetime id="starttime" showDefaultButtons="true" v-model="taskStartDate"></ion-datetime>
                        </ion-modal>
                      </ion-item>
                    </ion-col>
                  </ion-row>

                  <ion-row>
                    <ion-col>
                      <strong>End:</strong>
                    </ion-col>
                    <ion-col>
                      <ion-item lines="none">
                        <ion-datetime-button datetime="endtime"></ion-datetime-button>

                        <ion-modal :keep-contents-mounted="true">
                          <ion-datetime id="endtime" showDefaultButtons="true" v-model="taskEndDate"></ion-datetime>
                        </ion-modal>
                      </ion-item>
                    </ion-col>
                  </ion-row>

                  <ion-row>
                    <ion-col>
                      <strong>Price:</strong>
                    </ion-col>
                    <ion-col>
                      <ion-item lines="none" disabled="true">
                        1000 €
                      </ion-item>
                    </ion-col>
                  </ion-row>
                </ion-grid>



                <!-- <p class="assign-details"><strong>Firm:</strong> {{ content.CraftsmanInfo.craftsman_name }}</p>
              <p class="assign-details"><strong>Task:</strong> {{ content.CraftsmanInfo.title }}</p>
              <p class="assign-details"> <strong>Start</strong>
                <ion-datetime-button datetime="starttime"></ion-datetime-button>

                <ion-modal :keep-contents-mounted="true">
                  <ion-datetime id="starttime" showDefaultButtons="true"></ion-datetime>
                </ion-modal>
              </p>
              <p class="assign-details"><strong>End: </strong>
                <ion-datetime-button datetime="endtime" mode="ios"></ion-datetime-button>

                <ion-modal :keep-contents-mounted="true" mode="ios">
                  <ion-datetime id="endtime" showDefaultButtons="true"></ion-datetime>
                </ion-modal>
              </p>
              <p class="assign-details"><strong>Price:</strong> 1000 Euros</p> -->

                <ion-textarea class="custom-textarea" placeholder="Comment" :auto-grow="true"
                  v-model="assignTaskComment"></ion-textarea>


                <ion-grid class="modal-footer">
                  <ion-row style="text-align: center;">
                    <ion-col style="padding: 0;">
                      <ion-button shape="round" color="danger" style="--background: transparent;"
                        @click="cancelAssign()">Cancel</ion-button>
                    </ion-col>
                    <ion-col style="padding: 0;">
                      <ion-button shape="round" style="--background: transparent; color: #324a32;"
                        @click="confirmAssign()">Confirm</ion-button>
                    </ion-col>
                  </ion-row>
                </ion-grid>

              </div>
            </ion-content>

          </ion-modal>

          <ion-accordion-group :multiple="true" style="margin-top: 20px;">
            <ion-accordion value="first">
              <ion-item slot="header" color="rose" class="accordion-item">
                <ion-label>Task Information</ion-label>
              </ion-item>
              <div class="ion-padding" slot="content">
                <ion-grid>
                  <ion-row>
                    <ion-col class="label-col">
                      <strong>Firm:</strong>
                    </ion-col>
                    <ion-col>
                      <ion-item class="task-information" lines="none" disabled="true">
                        {{ content.CraftsmanInfo.craftsman_name }}
                      </ion-item>
                    </ion-col>
                  </ion-row>

                  <ion-row>
                    <ion-col class="label-col">
                      <strong>Task:</strong>
                    </ion-col>
                    <ion-col>
                      <ion-item class="task-information" lines="none" disabled="true">
                        {{ content.CraftsmanInfo.title }}
                      </ion-item>
                    </ion-col>
                  </ion-row>

                  <ion-row>
                    <ion-col class="label-col">
                      <strong>Start:</strong>
                    </ion-col>
                    <ion-col>
                      <ion-item class="task-information" lines="none">
                        <ion-datetime-button datetime="starttime"></ion-datetime-button>

                        <ion-modal :keep-contents-mounted="true">
                          <ion-datetime id="starttime" showDefaultButtons="true" v-model="taskStartDate"></ion-datetime>
                        </ion-modal>
                      </ion-item>
                    </ion-col>
                  </ion-row>

                  <ion-row>
                    <ion-col class="label-col">
                      <strong>End:</strong>
                    </ion-col>
                    <ion-col>
                      <ion-item class="task-information" lines="none">
                        <ion-datetime-button datetime="endtime" mode="ios"></ion-datetime-button>

                        <ion-modal :keep-contents-mounted="true" mode="ios">
                          <ion-datetime id="endtime" showDefaultButtons="true" v-model="taskEndDate"></ion-datetime>
                        </ion-modal>
                      </ion-item>
                    </ion-col>
                  </ion-row>

                  <ion-row>
                    <ion-col class="label-col">
                      <strong>Price:</strong>
                    </ion-col>
                    <ion-col>
                      <ion-item class="task-information" lines="none">
                        1000 €
                      </ion-item>
                    </ion-col>
                  </ion-row>

                  <ion-row>
                    <ion-col class="label-col">
                      <strong>Price:</strong>
                    </ion-col>
                    <ion-col>
                      <ion-textarea class="custom-textarea" placeholder="Comment" :auto-grow="true"
                        v-model="assignTaskComment" disabled="true"></ion-textarea>
                    </ion-col>
                  </ion-row>

                </ion-grid>
              </div>
            </ion-accordion>
            <ion-accordion value="second">
              <ion-item slot="header" color="rose" class="accordion-item">
                <ion-label>About</ion-label>
              </ion-item>
              <div class="ion-padding" slot="content">Second Content</div>
            </ion-accordion>
            <ion-accordion value="third">
              <ion-item slot="header" color="rose" class="accordion-item">
                <ion-label>Reviews</ion-label>
              </ion-item>
              <div class="ion-padding" slot="content">Third Content</div>
            </ion-accordion>
          </ion-accordion-group>

        </div>
        <div v-if="tab == 'chat'">
          <ion-grid>
            <ion-row v-for="message in messages" :key="message.id">
              <ion-col style="color:white" v-if="currentUser !== message.sender" class="message message-other">
                <b>{{ message.sender }}</b> <br>
                <span>{{ message.message }}</span>
                <div class="message-time" text-right>{{ formatDate(message.timestamp * 1000) }}</div>
              </ion-col>

              <ion-col offset="3" style="color:white" v-if="currentUser === message.sender"
                class="message message-self">
                <b>{{ message.sender }}</b> <br>
                <span>{{ message.message }}</span>
                <div class="message-time" text-right style="color: white">{{ formatDate(message.timestamp * 1000) }}
                </div>
              </ion-col>
            </ion-row>
          </ion-grid>

          <div>
            <ion-item class="message-send" style="width:100%; padding: 0;">
              <ion-row align-items-center style="width:100%;">
                <ion-col>
                  <ion-textarea class="custom-textarea" :auto-grow=true placeholder="Type a message"
                    v-model="message"></ion-textarea>
                </ion-col>
              </ion-row>

              <ion-button slot="end" fill="clear" @click="sendMessage()" :disabled="message === ''"
                style="margin: 43px 0px 43px 0;">
                <ion-icon :src="send" slot="icon-only"></ion-icon>
              </ion-button>
            </ion-item>
          </div>
        </div>
      </div>
    </div>
  </ion-content>
</template>

<script lang="ts">
import {
  IonHeader, IonTitle, IonToolbar, IonBackButton, IonCard, IonCol, IonGrid, IonRow,
  IonLabel, IonSegment, IonSegmentButton, IonIcon, IonImg, IonButton, IonAccordion,
  IonModal, IonContent, IonAccordionGroup, IonItem, IonTextarea, IonDatetime, IonDatetimeButton
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { star, send, calendarOutline } from 'ionicons/icons';
import StarRating from 'vue-star-rating';

import { mapState } from "pinia";
import { useAppStore } from "@/store/app";

export default defineComponent({
  name: 'CraftsmanInformation',
  components: {
    IonHeader,
    IonAccordion,
    IonAccordionGroup,
    IonImg,
    StarRating,
    IonTextarea,
    IonTitle,
    IonModal, IonContent, IonItem,
    IonToolbar,
    IonBackButton,
    IonLabel,
    IonIcon,
    IonSegment,
    IonSegmentButton,
    IonCard,
    IonButton,
    IonCol,
    IonGrid,
    IonRow,
    IonDatetime,
    IonDatetimeButton,
  },
  setup() {
    return {
      star,
      send,
      calendarOutline
    }
  },
  computed: {
    ...mapState(useAppStore, ["content", "i18n"])
  },
  data() {
    return {
      tab: "information",
      messages: [
        {
          sender: "self",
          message: "Let's get in touch, how about tomorrow at 12?",
          id: 0,
          timestamp: 1669216232
        },
        {
          sender: "other",
          message: "That sounds great! See you tomorrow!",
          id: 1,
          timestamp: 1669216232
        },
      ],
      currentUser: "self",
      message: "",
      taskStartDate: "",
      taskEndDate: "",
      assignTaskComment: "",
    }
  },
  methods: {
    formatDate(date: any) {
      return new Date(date).toLocaleString();
    },
    sendMessage() {
      this.messages.push({
        sender: this.currentUser,
        message: this.message,
        id: this.messages.length,
        timestamp: Math.floor(Date.now() / 1000)
      });
      this.message = "";
    }
  },
  async mounted() {
    document.body.classList.toggle("light", true);
  }

});
</script>

<style scoped>
ion-grid {
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
}

.property-details {
  text-align: center;
  color: #324a32;
}

.contractor-details {
  border: 1px solid #bbdabb;
  margin-bottom: 20px;
}

.assign-details {
  font-weight: 500;
  color: #324a32;
}

.accordion-item button {
  padding: 0 10px;
  font-size: 19px;
}

.label-col {
  max-width: 25%;
}

.task-information {
  --inner-border-width: 0;
  --min-height: 31px;
}

.ion-color-rose {
  --ion-color-base: transparent;
  --ion-color-base-rgb: transparent;
  --ion-color-contrast: #111;
  --ion-color-contrast-rgb: 0, 0, 0;
  --ion-color-shade: transparent;
  --ion-color-tint: transparent;
}

div[slot="content"] {
  background: rgba(var(--ion-color-rose-rgb), 0.25);
  color: #324a32;
}

.property-icon {
  font-size: 25px !important;
  color: #fcce32;
}

.message {
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 4px;
  white-space: pre-wrap;
  max-width: 80%;
}

.message-self {
  background: var(--ion-color-secondary);
  color: white;
}

.message-other {
  background: var(--ion-color-primary);
}

.message-self .message-time {
  font-size: small;
  color: black;
  text-align: right;
}

.message-other .message-time {
  font-size: small;
  color: black;
  text-align: right;
}

.message-send {
  position: fixed;
  bottom: 0;
  --ion-item-background: transparent;
}

ion-modal.modal-date-picker {
  --height: 63%;
}

ion-modal.modal-info {
  /* --height: 27%; */
  --width: 80%;
  --border-radius: 10px;
  --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}

ion-modal.modal-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  min-height: 56px;
}

ion-modal::part(backdrop) {
  background: rgba(209, 213, 219);
  opacity: 1;
}

ion-textarea.custom-textarea {
  margin-left: 22px;
  width: 90%;
  border-radius: 10px;
  --background: #d9d9d9;
  --color: #6c6c6c;
  --padding-end: 10px;
  --padding-start: 10px;
  --placeholder-color: #6c6c6c;
  --placeholder-opacity: 0.8;
}

ion-modal ion-toolbar {
  --background: rgb(14 116 144);
  --color: white;
}

.modal-content {
  padding: 13px;
  font-size: 14px;
}

.craftsman_name {
  font-size: 17px;
}

.call-button {
  height: 30px;
  border-radius: 0;
  font-size: 15px;
  width: 70px;
  margin: 26px -13px;
}

.craftsman_address {
  font-size: 14px;
}

.option-buttons {
  width: 100%;
  color: #fff;
  height: 32px;
}

ion-card {
  margin: 0;
  background-color: white;
  border-radius: 20px;
  box-shadow: none;

}

ion-segment {
  color: #324a32;
}

ion-segment-button {
  --indicator-color: #fff;
}
</style>
