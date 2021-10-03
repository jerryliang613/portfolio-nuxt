import Vue from "vue";

export default {
  SET_FILTERS: (state, object) => {
    if (object) {
      const { filter, index } = object;
      Vue.set(state.filters, index, {
        ...filter,
      });
    } else {
      for (let i = 0; i < state.filters.length; i++) {
        Vue.set(state.filters, i, {
          ...state.filters[i],
          selected: false,
        });
      }
    }
  },
};
