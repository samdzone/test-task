<template>
  <v-app>
    <v-main>
      <router-view/>
      <AppNotification/>
    </v-main>
  </v-app>
</template>

<script>
import AppNotification from "@/components/AppNotification";

export default {
  name: 'App',
  components: {AppNotification},
  data: () => ({
    //
  }),
};
</script>
