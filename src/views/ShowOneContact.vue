<script>
import {getOneContact, deleteContact} from '../services/services.js'
import EditContact from '../components/EditContact.vue'
export default {
  name: "ShowOneContact",
  components: {
    EditContact
  },
  async beforeCreate() {
    this.contact = await getOneContact(this.$route.params.id)
  },
  data() {
    return {
      contact: null,
      isEdit: false
    }
  },
  methods: {
    deleteContactHandler() {
      deleteContact(this.contact.id);
      this.contact = "Contact was removed.";
    },
    editContactHandler() {
      console.log("OK!"); //Handle this later with pop-up or something

      this.isEdit = false;
    }
  }
}
</script>

<template>
  <div class="card">
    <div v-if="isEdit">
      <edit-contact :contact="contact" @edit-completed="isEdit = false">
        <button @click="isEdit = false">Go back</button>
      </edit-contact>
    </div>

    <div class="" v-else-if="!isEdit">
      {{ contact }}
      <button @click="isEdit = true">Edit contact</button>
      <button @click="deleteContactHandler">Delete contact</button>
    </div>
  </div>
</template>

<style></style>