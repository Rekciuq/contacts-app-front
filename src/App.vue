<script>
import ContactsHeader from './components/Header.vue'
export default {
  name: 'App',
  components: {
    ContactsHeader,
  },
}
</script>

<template>
<contacts-header/>

<div class="container">
  <router-view></router-view>
</div>
</template>

<style scoped>
.container {
  background-color: white;
  height: calc(100vh - 65px);
  overflow-y: auto;
}

@media (min-width:40rem) {
  .container {
    margin: 0 0.5rem;
    border-radius: 15px;
    height: calc(100vh - 80px);
  }
}


</style>
