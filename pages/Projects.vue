<template>
  <v-container class="fill-height d-flex justify-center relative">
    <v-col cols="12">
      <v-row v-if="selectedFilters && selectedFilters.length > 0">
        <v-btn text
          ><v-chip
            @click="$store.dispatch('setFilter')"
            class="success mx-2 caption"
            outlined
            >All</v-chip
          ></v-btn
        >
        <v-chip
          @click="
            $store.dispatch('setFilter', {
              filter: { ...filter.filter, selected: false },
              index: filter.index
            })
          "
          class="success mx-2 caption"
          label
          close
          outlined
          v-for="(filter, index) in selectedFilters"
          :key="index"
          >{{ filter.filter.filter }}</v-chip
        >
      </v-row>
      <v-row class="justify-center">
        <v-col sm="6" md="4" v-for="(project, index) in projects" :key="index">
          <Project :project="project" />
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      projects: "PROJECTS",
      selectedFilters: "SELECTED_FILTERS"
    })
  }
};
</script>
