<template>
  <div class="wrapper">
    <HeaderElem />
    <div class="wrapper-content">
      <div class="container">
        <router-view/>
        <!-- <h1>Hello world!</h1>
        <p>hello 2</p> -->
      </div>
    </div>
    <FooterElem />
  </div>
</template>

<script>
import HeaderElem from "../components/header-elem";
import FooterElem from "../components/footer-elem";
export default {
  components: {
    HeaderElem,
    FooterElem,
  },
}
</script>

<style></style>
