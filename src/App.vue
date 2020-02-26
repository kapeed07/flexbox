<template>
  <div id="app">
    <div class="db-full-width db-full-height db-flex db-column db-justify-center">
      <div class="db-flex db-justify-center">
        <p class="db-heading">FLEXBOX</p>
      </div>
      <flexbox></flexbox>
    </div>
  </div>
</template>

<script>
import Flexbox from './components/flexbox';

export default {
  name: 'App',
  components: {
    Flexbox
  }
}
</script>

<style>

#app {
  font-family: 'Luckiest Guy' !important;
}

.db-heading {
  letter-spacing: 50px;
  color: #acc8dd;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #56A8E4;
  font-size: 100px;
}
.db-full-width {
  width: 100vw;
}
.db-full-height {
  height: 100vh;
}

body {
  width: 100vw;
  height: 100vh;
  background-color: #F0F7FE;
}

</style>
