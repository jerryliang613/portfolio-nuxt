<template>
  <v-container class="pa-6">
    <p class="text-center text-caption">
      All works &copy; Jerry Liang {{ year }}
    </p>
  </v-container>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    year: new Date().getFullYear(),
  }),
};
</script>

<style>
p {
  width: 100%;
  text-align: center;
}
</style>
