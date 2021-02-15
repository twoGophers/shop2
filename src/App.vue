<template>
  <div id="app">

    <vHeader />
    <vMain />
    <vFooter />
  </div>
</template>

<script>
import vHeader from "./components/header/v-header"
import vMain from "./components/main/v-main"
import vFooter from "./components/footer/v-footer"

export default {
  name: 'App',
  components: {
    vHeader,
    vMain,
    vFooter
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

</style>
