<script>
import Header from './components/Header.vue'
import {createNewContact, editOneContact, deleteContact} from './services/services'
export default {
  name: 'App',
  components: {
    Header,
  },
  data() {
    return {
    }
  },
  methods: {

  },
  computed: {

  }
}
</script>

<template>
<Header/>

<router-view></router-view>
</template>

<style scoped>

</style>
