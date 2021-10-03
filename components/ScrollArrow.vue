<template>
  <v-btn text bottom fixed color="grey" @click="handleScroll">
    <v-icon class="scroll-arrow">{{
      bottom ? "mdi-chevron-double-up" : "mdi-chevron-double-down"
    }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "ScrollArrow",
  props: { bottom: { type: Boolean, default: false } },
  methods: {
    handleScroll() {
      if (this.$props.bottom)
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      else
        window.scrollTo({
          top: window.scrollY + window.innerHeight,
          behavior: "smooth",
        });
    },
  },
};
</script>

<style scoped>
.scroll-arrow {
  animation: blink 3s linear infinite;
}
@keyframes blink {
  50% {
    opacity: 0.5;
    scale: 90%;
  }
}
</style>
