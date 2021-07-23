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
            <v-spacer></v-spacer>Авторизация<v-spacer></v-spacer>
          </v-card-title>
          <v-form ref="formLogin" @keyup.native.enter="login">
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
                  v-model="password"
                  id="password"
                  label="Пароль"
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                  :rules="passwordRules"
              ></v-text-field>
            </v-card-text>
            <v-alert
                type="error"
                dismissible
                :value="login_error"
                transition="scale-transition"
                @input="login_error = !login_error"
            >
              {{msg_error}}
            </v-alert>
            <v-card-actions>
              <v-btn
                  text
                  color="primary"
                  :to="'/registration'"
              >
                Регистрация
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn @click="login" outlined color="blue" class="px-4">Вход</v-btn>
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
  name: "Login",
  methods: {
    login: function () {
      if (this.$refs.formLogin.validate()) {
        this.msg_error = '';
        this.login_error = false;
        AuthService.authorization({email: this.email, password: this.password})
            .catch((err) => {
              this.msg_error = err;
              this.login_error = true;
            });
      }
    }
  },
  data(){
    return {
      msg_error: "",
      login_error: false,
      email : "",
      password : "",
      emailRules: [
        v => !!v || 'Email обязательно',
        v => Helpers.regular_email.test(v) || 'Некорректный email'
      ],
      passwordRules: [
        v => !!v || 'Пароль обязательно',
      ],
    }
  },

}
</script>

<style scoped>

</style>