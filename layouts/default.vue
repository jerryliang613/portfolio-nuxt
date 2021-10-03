<template>
  <div id="app">
    <v-app>
      <Header
        :routers="routes"
        v-if="this.$route.path !== '/'"
        @showLeftDrawer="handleDrawerLeft"
        @showRightDrawer="handleDrawerRight"
      />
      <v-main ref="main" :style="styleObject">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-main>
      <Footer v-if="this.$route.path !== '/'" />
    </v-app>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import routes from "./routes";
export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  data: () => ({
    routes,
    drawer: false,
    searchDrawer: false
  }),
  methods: {
    handleDrawerLeft: function(value) {
      this.drawer = value;
    },
    handleDrawerRight: function(value) {
      this.searchDrawer = value;
    }
  },
  computed: {
    styleObject: function() {
      if (this.drawer || this.searchDrawer)
        return {
          transform: this.drawer ? "translateX(5%)" : "translateX(-5%)"
        };
      else return { transform: "translateX(0)" };
    }
  }
};
</script>
<style global>
.fade-enter {
  opacity: 0;
  transform: rotate3d(0, -1, 0, 90deg);
}
.fade-leave-to {
  opacity: 0;
  /* transform: scale(1); */
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1.5s ease-in-out;
}
</style>
