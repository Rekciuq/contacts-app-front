<script>
import { editOneContact } from '../services/services';
import ContactForm from './ContactForm.vue';
export default {
  name: "EditContact",
  components: {
    ContactForm
  },
  emits: {
    "edit-completed": (value) => typeof value === "boolean",
  },
  props: {
    contact: {
      type: Object,
      required: true,
      default: Object
    }
  },
  methods: {
    async editOneContactHandler(preparedContact) {
      const response = await editOneContact(this.$props.contact.id, preparedContact);
      console.log(response);
      this.$emit("edit-completed", false);
    }
  }
}
</script>

<template>
 <contact-form :contact="contact" :button-text="'Save'" @prepared-contact="editOneContactHandler"/>
 <slot/>
</template>

<style></style>