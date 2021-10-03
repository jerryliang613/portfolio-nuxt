<template>
  <div :class="this.$route.path == '/projects' ? ['d-none', 'd-sm-flex'] : []">
    <v-btn
      v-for="(link, index) in socialLinks"
      :key="index"
      max-width="64px"
      min-width="auto"
      class="pa-1"
      :href="link.link"
      target="_blank"
      text
    >
      <v-icon>
        {{ link.icon }}
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "Sociallink",
  data: () => ({
    socialLinks: [
      {
        name: "github",
        link: "https://github.com/jerryliang613",
        icon: "mdi-github",
      },
      {
        name: "github",
        link: "https://stackoverflow.com/users/14391878/jerry",
        icon: "mdi-stack-overflow",
      },
    ],
  }),
};
</script>

<style></style>
