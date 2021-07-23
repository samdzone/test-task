<template>
  <v-app-bar
      app
      color="grey darken-4"
      dark
  >
    <h3>App ACAB</h3>
    <v-spacer></v-spacer>
    <v-btn
        icon
        color="white"
        @click="logout()"
    >
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import AuthService from "@/services/auth";
export default {
  name: "AppBar",
  methods: {
    logout() {AuthService.logout()}
  }
}
</script>

<style scoped>

</style>