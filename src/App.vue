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

<router-view></router-view>
</template>

<style scoped>

</style>
