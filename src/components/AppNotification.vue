<template>
  <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
  >
    {{msg}}
    <template v-slot:action="{ attrs }">
      <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="$store.dispatch('notification/close')"
      >
        Закрыть
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: "AppNotification",
  computed: {
    snackbar: {
      get() {
        return this.$store.getters['notification/getSnackbar'];
      }
    },
    timeout: {
      get() {
        return this.$store.getters['notification/getTimeout'];
      }
    },
    msg: {
      get() {
        return this.$store.getters['notification/getMsg']
      }
    }
  },
}
</script>

<style scoped>

</style>