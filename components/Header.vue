<template>
  <nav>
    <v-app-bar app flat clipped-left style="z-index: 99; height:64px">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title
        class="text-uppercase"
        :style="{
          position: 'absolute',
          left: 'calc(50% - 104px)',
          'letter-spacing': '0.5rem'
        }"
      >
        <span class="font-weight-light">Jerry </span>
        <span>Liang</span></v-toolbar-title
      >
      <!-- <v-spacer class="d-none d-sm-flex"></v-spacer> -->
      <sociallinks />
      <v-btn
        text
        v-if="this.$route.path == '/projects'"
        @click="searchDrawer = !searchDrawer"
      >
        <v-icon>
          mdi-magnify
        </v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      mobile-breakpoint="0"
      v-model="drawer"
      app
      temporary
      style="top:64px"
      ><v-list>
        <v-list-item
          v-for="(route, index) in routes"
          :key="index"
          router
          :to="route.path"
        >
          <v-list-item-content>{{ route.name }}</v-list-item-content>
        </v-list-item></v-list
      ></v-navigation-drawer
    >

    <v-navigation-drawer
      v-if="this.$route.path == '/projects'"
      mobile-breakpoint="0"
      v-model="searchDrawer"
      app
      temporary
      right
      style="top:64px"
    >
      <div class="pa-2">
        <v-chip
          label
          outlined
          :close="filter.selected"
          @click="
            selectFilter({
              filter: { ...filter, selected: !filter.selected },
              index
            })
          "
          @click:close="
            selectFilter({ filter: { ...filter, selected: false }, index })
          "
          :color="filter.selected ? 'green' : 'default'"
          :style="{
            cursor: 'pointer'
          }"
          class="ma-1"
          v-for="(filter, index) in FILTERS"
          :key="index"
          >{{ filter.filter }}</v-chip
        >
      </div>
      <v-btn text @click="handleClose"><v-icon>mdi-check-outline</v-icon></v-btn
      ><v-btn
        :disabled="!(SELECTED_FILTERS && SELECTED_FILTERS.length > 0)"
        text
        @click="clearFilters"
        ><v-icon>mdi-trash-can-outline</v-icon></v-btn
      >
      <!-- <div class="pa-2 mt-6 text-center">
        <v-btn @click="handleClose">
          close
        </v-btn>
      </div> -->
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
// import Sociallinks from "./Sociallinks.vue";

export default {
  name: "Header",
  // components: {
  //   Sociallinks,
  // },
  props: ["routers"],
  computed: {
    ...mapGetters(["PROJECTS", "FILTERS", "SELECTED_FILTERS"]),
    routes: function() {
      return this.$props.routers.filter(route => route.path != "/");
    },
    selectedFilters: function() {
      return this.filters.filter(e => e.selected).length;
    }
  },
  methods: {
    handleClose: function() {
      this.searchDrawer = false;
    },
    selectFilter: function(filter) {
      this.$store.dispatch("setFilter", filter);
    },
    setFilters: function() {
      this.$store.dispatch(
        "setFilter",
        this.filters.filter(v => v.selected).map(v => v.filter)
      );
    },
    clearFilters: function() {
      this.$store.dispatch("setFilter");
    }
  },
  data() {
    return {
      drawer: false,
      searchDrawer: false
    };
  },
  asyncData() {
    return { filters: [...this.$store.getters.FILTERS] };
  },
  watch: {
    drawer: function(value) {
      this.$emit("showLeftDrawer", value);
    },
    searchDrawer: function(value) {
      this.$emit("showRightDrawer", value);
    },
    getCurrentFilter: function() {
      this.filters = [...this.$store.getters.getSearchFilters];
    }
  }
};
</script>
