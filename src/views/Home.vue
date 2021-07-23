<template>
<!--  <hello-world />-->
  <div>
    <app-bar/>
    <hello-user/>
  </div>
</template>

<script>
  //import HelloWorld from '../components/HelloWorld'
  import HelloUser from "@/components/HelloUser";
  import AppBar from "@/components/AppBar";

  export default {
    name: 'Home',

    components: {
      HelloUser,
      AppBar
      //HelloWorld,
    },
  }
</script>
