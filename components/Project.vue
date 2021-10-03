<template>
  <v-hover v-slot="{ hover }">
    <v-card flat class="project">
      <v-img :src="project.img" class="project-img"
        ><v-expand-transition>
          <v-overlay
            opacity="0.7"
            v-if="hover"
            absolute
            class="text-center align-evenly"
          >
            <h3>{{ project.title }}</h3>
            <p class="caption">{{ project.description }}</p>
            <div class="pa-2">
              <v-chip
                class="ma-1"
                :color="filters && filters.includes(tech) ? 'green' : 'default'"
                v-for="(tech, index) in project.language"
                :key="index"
                >{{ tech }}</v-chip
              >
            </div>

            <v-btn
              outlined
              :href="project.link"
              target="_blank"
              v-if="project.link"
              >Vie Website</v-btn
            >
            <v-btn v-else @click="openImageDialog">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </v-overlay>
        </v-expand-transition></v-img
      >
      <v-dialog v-model="dialog" max-width="800px">
        <v-carousel hide-delimiters>
          <v-carousel-item
            v-for="(img, index) in project.imgs"
            :key="index"
            :src="img"
          ></v-carousel-item>
        </v-carousel>
        <v-btn @click="dialog = false">
          close
        </v-btn>
      </v-dialog>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "Project",
  props: {
    project: Object,
    filters: Array,
  },
  methods: {
    openImageDialog: function() {
      this.dialog = !this.dialog;
    },
  },
  data: () => ({
    dialog: false,
  }),
};
</script>

<style scoped>
.project {
  cursor: pointer;
}
.project-img:hover {
  transform: translateY(10%);
  transition: transform 0.5s ease;
}
</style>
