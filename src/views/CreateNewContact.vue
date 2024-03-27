<script>
import { createNewContact } from '../services/services';
import ContactForm from '../components/ContactForm.vue';
export default {
  name: "CreateNewContact",
  components: {
    ContactForm
  },
  methods: {
    async createContactHandler(preparedContact) {

      const response = await createNewContact(preparedContact);

      this.$router.push(`contact/${response.data.id}`);
    }
  }
}
</script>

<template>
 <contact-form :contact="null" :button-text="'Create new contact!'" @prepared-contact="createContactHandler"/>
</template>

<style></style>