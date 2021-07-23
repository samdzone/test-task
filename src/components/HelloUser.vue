<template>
  <v-container
      class="fill-height"
      fluid
  >
    <v-row
        justify="center"
    >
      <v-col
          cols="12"
          sm="8"
          md="4"
      >
        <h2 style="text-align: center">Здравствуйте, {{username}}!</h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloUser",
  data() {
    return {
      username: this.$store.getters['auth/getUsername']
    }
  }
}
</script>

<style scoped>

</style>