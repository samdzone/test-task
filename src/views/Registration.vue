<template>
  <v-container
      class="fill-height"
      fluid
      style="height: 100vh; overflow-y: auto"
  >
    <v-row
        align="center"
        justify="center"
    >
      <v-col
          cols="12"
          sm="8"
          md="4"
      >
        <v-card elevation="0"
        >
          <v-card-title>
            <v-spacer></v-spacer>
            <img
                :src="require('../assets/acab_logo.png')"
                alt="lorem"
                class="image"
                width="200px"
            >
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-title>
            <v-spacer></v-spacer>Регистрация<v-spacer></v-spacer>
          </v-card-title>
          <v-form ref="formRegistration" @keyup.native.enter="registration">
            <v-card-text>
              <v-text-field
                  v-model="email"
                  label="Email"
                  name="email"
                  prepend-icon="mdi-account"
                  type="text"
                  :rules="emailRules"
              ></v-text-field>
              <v-text-field
                  v-model="name"
                  label="Имя"
                  name="name"
                  prepend-icon="mdi-account"
                  type="text"
                  :rules="nameRules"
              ></v-text-field>
              <v-text-field
                  v-model="password"
                  id="password"
                  label="Пароль"
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                  :rules="passwordRules"
              ></v-text-field>
              <v-text-field
                  v-model="password_repeat"
                  id="password_repeat"
                  label="Повторить пароль"
                  name="password_repeat"
                  prepend-icon="mdi-lock"
                  type="password"
                  :rules="passwordRepeatRules"
              ></v-text-field>
            </v-card-text>
            <v-alert
                type="error"
                dismissible
                :value="registration_error"
                transition="scale-transition"
                @input="registration_error = !registration_error"
            >
              {{msg_error}}
            </v-alert>
            <v-card-actions>
              <v-btn
                  text
                  color="primary"
                  :to="'/login'"
              >
                Авторизация
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn @click="registration" outlined color="blue" class="px-4">Регистрация</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AuthService from "@/services/auth";
import Helpers from "@/helpers";

export default {
  name: "Registration",
  methods: {
    registration: function () {
      if (this.$refs.formRegistration.validate()) {
        this.msg_error = '';
        this.registration_error = false;
        AuthService.registration({name: this.name, email: this.email, password: this.password})
            .catch((err) => {
              this.msg_error = err;
              this.registration_error = true;
            });
      }
    }
  },
  data(){
    return {
      registration_error: false,
      msg_error: "",
      email : "",
      name: "",
      password : "",
      password_repeat : "",
      emailRules: [
        v => !!v || 'Email обязательно',
        v => Helpers.regular_email.test(v) || 'Некорректный email'
      ],
      nameRules: [
        v => !!v || 'Имя обязательно',
      ],
      passwordRules: [
        v => !!v || 'Пароль обязательно',
      ],
      passwordRepeatRules: [
        v => !!v || 'Повторить пароль обязательно',
        v => v === this.password || 'Пароли не совпадают',
      ]
    }
  },
}
</script>

<style scoped>

</style>