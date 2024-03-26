<script>
import {getOneContact, deleteContact} from '../services/services.js'
export default {
  name: "ShowOneContact",
  async beforeMount() {
    this.contact = await getOneContact(this.$route.params.id)
  },
  data() {
    return {
      contact: "",
    }
  },
  methods: {
    deleteHandler() {
      deleteContact(this.contact.id);
      this.contact = "Contact was removed.";
    }
  }
}
</script>

<template>
  <div class="card">
    {{ contact }}
    <button @click="deleteHandler">Delete contact</button>
  </div>
</template>

<style></style>