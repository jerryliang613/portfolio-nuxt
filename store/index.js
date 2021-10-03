import Vue from "vue";
import Vuex from "vuex";
//import createPersistedState from "vuex-persistedstate";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import { PROJECTS as projects } from "../config";

Vue.use(Vuex);
export const store = new Vuex.Store({
  //plugins: [createPersistedState()],
  state: () => ({
    projects: [...projects],
    filters: [
      ...projects
        .reduce((acc, cur) => {
          return [...acc, ...cur["language"]];
        }, [])
        .filter((item, index, arr) => {
          return (
            arr.findIndex(
              v => v.toLowerCase().trim() == item.toLowerCase().trim()
            ) == index
          );
        })
        .map(e => ({
          filter: e,
          selected: false
        }))
    ]
  }),
  actions,
  getters,
  mutations
});

export const state = () => ({
  projects: [...projects],
  filters: [
    ...projects
      .reduce((acc, cur) => {
        return [...acc, ...cur["language"]];
      }, [])
      .filter((item, index, arr) => {
        return (
          arr.findIndex(
            v => v.toLowerCase().trim() == item.toLowerCase().trim()
          ) == index
        );
      })
      .map(e => ({
        filter: e,
        selected: false
      }))
  ]
});

export { actions, getters, mutations };
