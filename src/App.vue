<script>
import Header from './components/Header.vue'
import {getAllContacts, getOneContact, createNewContact, editOneContact, deleteContact} from './services/services'
import ShowContacts from './components/ShowContacts.vue'
export default {
  name: 'App',
  components: {
    Header,
    ShowContacts
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

<ShowContacts/>
</template>

<style scoped>

</style>
