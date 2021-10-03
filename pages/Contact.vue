<template>
  <v-container class="fill-height d-flex flex-column justify-center pa-6">
    <v-form ref="form" v-model="valid">
      <h3 class="py-2">Contact</h3>
      <p class="text-justify text-sm-body-2">
        For requests, information or comments, please send me a message.
      </p>
      <v-text-field
        v-model="name"
        :rules="nameRules"
        label="Name"
        outlined
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        outlined
        required
      ></v-text-field>

      <v-textarea
        v-model="message"
        :rules="messageRules"
        label="Message"
        no-resize
        outlined
        required
      ></v-textarea>

      <v-btn
        :disabled="!valid || sending"
        color="success"
        class="mr-4"
        outlined
        @click="submit"
      >
        {{ sending ? "Sending..." : "Submit" }}
      </v-btn>
      <v-snackbar
        v-model="snackbar"
        :timeout="timeout"
        :color="sent ? 'success' : 'error'"
        >{{ notification }}</v-snackbar
      >

      <v-btn color="error" class="mr-4" outlined @click="$refs.form.reset()">
        Reset
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
const PHPMAILER = "http://jerryliang.co/sendmail/phpMail.php?";
export default {
  watch: {
    snackbar: function(value) {
      if (!value) this.sent = value;
    },
  },
  methods: {
    submit: function() {
      this.$refs.form.validate();
      if (!this.valid) return;
      this.sending = true;

      const xhr = new XMLHttpRequest();
      xhr.open("POST", PHPMAILER, true);
      xhr.onload = () => {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            this.sending = false;
            const { status, message } = JSON.parse(xhr.responseText);
            this.notification = message;
            this.snackbar = true;
            if (status == "SUCCESS") {
              this.sent = true;
            }
            this.$refs.form.reset();
          }
        }
      };

      xhr.onerror = () => {
        this.sending = false;
        this.notification = xhr.responseText.message;
        this.snackbar = true;
      };

      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.send(
        "name=" +
          this.fName +
          "&email=" +
          this.email +
          "&message=" +
          this.message
      );
    },
  },
  data: () => ({
    sent: false,
    sending: false,
    valid: false,
    snackbar: false,
    timeout: 2000,
    notification: "Message has been sent succussfully.",
    name: "",
    nameRules: [(v) => !!v || "Name is required"],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    message: "",
    messageRules: [
      (v) => !!v || "Message is required",
      (v) =>
        (v && v.length > 10) || "Message can not be less than 10 characters",
    ],
  }),
};
</script>

<style></style>
