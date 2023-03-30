import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => {
    const obj: any = {
      settings: { language: "de" },
      flags: null,
      pollAnswers: null,
      userAddress: null,
      searchAddress: null,
      shadowShutdownToggle: null,
      participationAnswers: null,
      offlineData: null,
      natureReserves: null,
      i18n: null,
      house_data: null,
      pv_system: null,
      version: null,
      projectId: null,
      uuid: null,
      poll: null,
      evaluation: null,
      colors: null,
      tasks: null
    };
    return obj;
  },
  getters: {
    content: (state) => {
      return state.i18n[state.settings.language];
    },

    project_tasks: (state)=>{
      return state.tasks;
    }

  },
});
