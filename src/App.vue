<template>
  <div id="app">
    <div id="nav">
      <NavBar />
    </div>
    <router-view />
  </div>
</template>

<script>
import NavBar from "../src/components/NavBar";

export default {
  components: {
    NavBar,
  },
};
</script>

<style>
*{
  font-family: 'Times New Roman', Times, serif;
}

body {
  background-image: url("./store/backgroundthememain.png");
}

h1 {
  text-align: center;
}


</style>
