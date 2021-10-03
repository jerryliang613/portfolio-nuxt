<template>
  <v-container
    ref="profile"
    class="fill-height d-flex justify-center align-start relative"
    @scroll.passive="onScroll"
  >
    <scroll-arrow :bottom="bottom" />
    <v-col lg="5" cols="12">
      <div class="d-sm-flex flex-row">
        <v-col sm="4" cols="12" class="d-flex justify-center"
          ><v-img
            position="center"
            :src="require('../assets/img/jerry.png')"
            max-width="150px"
          >
          </v-img
        ></v-col>
        <v-col sm="8" cols="12"
          ><v-card flat class="profile">
            <h3 class="text-sm-left text-center">Jerry Liang</h3>
            <p class="caption text-sm-left text-center">Web Developer</p>
            <p class="text-justify body-2 profile">
              I am a web developer with good knowledge of front/backend
              techniques. Love structure and order with quality. Love spending
              time on fixing details and optimizing webs. Can work independently
              and be a good team player as well. Excellent time mangement ablity
              and be able to work well under pressure. A fast hand and a quick
              learner with ‘can do and no problem’ attitude.
            </p></v-card
          ></v-col
        >
      </div>

      <div class="mt-10 d-sm-flex flex-row ">
        <v-col sm="4" cols="12" class="d-flex justify-center"
          ><h3>Work Experience</h3></v-col
        >
        <v-col sm="8" cols="12"
          ><v-card flat class="profile">
            <p class="text-justify body-2 profile">
              I am a web developer with good knowledge of front-end techniques.
              Love structure and order with quality. Love spending time on
              fixing details and optimizing webs. Can work independently and be
              a good team player as well. Excellent time mangement ablity and be
              able to work well under pressure. A fast hand and a quick learner
              with ‘can do and no problem’ attitude. Qualification Certificate
              of Computer and Software Technology Proficiency
            </p></v-card
          ></v-col
        >
      </div>

      <div class="mt-10 d-sm-flex flex-row ">
        <v-col sm="4" cols="12" class="d-flex justify-center"
          ><h3>Education</h3></v-col
        >
        <v-col sm="8" cols="12"
          ><v-card flat class="profile">
            <p class=" text-justify body-2 font-weight-medium">
              Bachelor of Computer Science
            </p>
            <p class="text-justify body-2 profile">
              Inner Mongolia University of Science and Technology, China, 2000
            </p></v-card
          ></v-col
        >
      </div>

      <div class="mt-10 d-sm-flex flex-row ">
        <v-col sm="4" cols="12" class="d-flex justify-center"
          ><h3>Certification</h3></v-col
        >
        <v-col sm="8" cols="12"
          ><v-card flat class="profile">
            <p class="text-justify body-2 profile">
              Qualification Certificate of Computer and Software Technology
              Proficiency, China, 2005
            </p></v-card
          ></v-col
        >
      </div>

      <div class="mt-10 d-sm-flex flex-row ">
        <v-col sm="4" cols="12" class="d-flex justify-center"
          ><h3 id="skills" ref="skills">Skills</h3></v-col
        >
        <v-col sm="8" cols="12" ref="skilllevel"
          ><v-card flat class="profile">
            <p class="text-justify body-2 profile">
              <SkillLevel
                v-for="(skill, index) in SKILLS"
                :key="index"
                :skill="skill.skill"
                :level="skill.level"
                :visible="knowledgeBar"
              /></p></v-card
        ></v-col>
      </div>
    </v-col>
  </v-container>
</template>

<script>
import { SKILLS } from "../config";
export default {
  data: () => ({
    bottom: false,
    knowledgeBar: false,
    SKILLS
  }),
  mounted() {
    document.addEventListener("scroll", this.onScroll);
  },
  unmounted() {
    document.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll: function() {
      if (process.client) {
        if (
          window.scrollY + window.innerHeight >=
          document.body.offsetHeight - 60
        )
          this.bottom = true;
        else this.bottom = false;
        if (
          this.$refs.skilllevel.getBoundingClientRect().top <
          window.innerHeight - 200
        )
          this.knowledgeBar = true;
      }
    }
  }
};
</script>

<style scoped>
.profile {
  letter-spacing: 0.2rem;
  line-height: 1.7rem;
}
</style>
