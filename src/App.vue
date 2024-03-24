<script>
import Header from './components/Header.vue'
import {getAllContacts, getOneContact, deleteContact} from './services/services'
import ShowContacts from './components/ShowContacts.vue'
export default {
  name: 'App',
  components: {
    Header,
    ShowContacts
  },
  data() {
    return {
      allContactsJSON: ""
    }
  },
  methods: {
    getOneContactt() {
      getOneContact(16);
    },
    deleteContactt() {
      deleteContact(16);
    }

  },
  computed: {
    bindContacts() {
      this.allContactsJSON = getAllContacts();
    }
  }
}
</script>

<template>
<Header/>

<ShowContacts/>
<button @click="bindContacts">Gety</button>
<button @click="getOneContactt">GetyOne</button>
<button @click="deleteContactt">Dety</button>
</template>

<style scoped>

</style>
