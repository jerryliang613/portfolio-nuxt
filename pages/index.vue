<template>
  <v-container
    class="justify-center align-center fill-height cover flex-column"
  >
    <h1 class="text-uppercase font-weight-light white--text jerry">
      <span>J</span><span>e</span><span>r</span><span>r</span><span>y</span
      ><span> </span> <span>L</span><span>i</span><span>a</span><span>n</span
      ><span>g</span>
    </h1>
    <h3 class="white--text font-weight-light jerry2">Web Developer</h3>

    <v-btn
      class="start"
      outlined
      fab
      text
      fixed
      bottom
      color="white"
      href="https://jerryliang613.github.io/portfolio-nuxt/Projects"
    >
      <v-icon>mdi-chevron-double-down</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Anton|Roboto");
.start {
  border: thin solid #fff !important;
  animation: flash 4s ease-in infinite, bounce 3s ease-in infinite;
}
@keyframes bounce {
  50% {
    transform: translateY(-10%);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes flash {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
    transform: translateY(-10%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.jerry {
  font-family: "Anton", sans-serif;
  perspective: 1000px;
}
.cover {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  max-width: 100% !important;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes line {
  25% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.5;
  }
  70% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}

.jerry2 {
  opacity: 0;
  animation: line 2s ease-in-out 3s forwards;
}
.jerry::after {
  width: 66%;
  content: "";
  display: block;
  height: 1px;
  background: white;
  margin: 15px auto 15px;
  animation: line 2s ease-in-out 3s forwards;
  opacity: 0;
}
h1,
h3 {
  letter-spacing: 0.5rem;
}

.jerry span {
  display: inline-block;
}

.jerry span {
  animation: smoky 2s both reverse;
}
.jerry span:nth-child(even) {
  animation-name: smoky-mirror;
}

@keyframes smoky {
  60% {
    text-shadow: 0 0 40px whitesmoke;
  }
  to {
    transform: translate3d(15rem, -8rem, 0) rotate(-40deg) skewX(70deg)
      scale(1.5);
    text-shadow: 0 0 20px whitesmoke;
    opacity: 0;
  }
}

@keyframes smoky-mirror {
  60% {
    text-shadow: 0 0 40px whitesmoke;
  }
  to {
    transform: translate3d(18rem, -8rem, 0) rotate(-40deg) skewX(-70deg)
      scale(2);
    text-shadow: 0 0 20px whitesmoke;
    opacity: 0;
  }
}

@for $item from 1 through 12 {
  span:nth-of-type(#{$item}) {
    animation-delay: #{0.2 + ($item/10)}s;
  }
}
</style>
