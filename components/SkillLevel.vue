<template>
  <div>
    <span>{{ skill }}</span
    ><span
      ><v-progress-linear
        v-model="knowledgePercent"
        color="teal"
        height="20"
      ></v-progress-linear
    ></span>
  </div>
</template>

<script>
export default {
  name: "SkillLevel",
  props: {
    skill: String,
    level: Number,
    visible: { type: Boolean, default: false }
  },
  watch: {
    visible: function(value) {
      if (value) this.knowledgePercent = this.level;
    }
  },
  data: () => ({
    knowledgePercent: 0
  })
};
</script>

<style></style>
