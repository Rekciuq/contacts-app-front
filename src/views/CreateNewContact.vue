<script>
import { createNewContact } from '../services/services';
export default {
  name: "CreateNewContact",
  data() {
    return {
      contact: {
        name: "",
        phoneNumber: "",
        description: "",
        dateOfBirth: ""
      }
    }
  },
  methods: {
    async createContactHandler() {
      if(!this.contact.name) {
        return -1;
      };

      const response = await createNewContact({
        name: this.contact.name,
        phoneNumber: this.contact.phoneNumber,
        description: this.contact.description,
        dateOfBirth: this.contact.dateOfBirth //need in format YY-mm-dd
      });

      this.$router.push(`contact/${response.data.id}`);
    }
  }
}
</script>

<template>
  <div class="form-container">
    <div class="form__name">
      <label for="name">Name: </label>
      <input type="text" name="name" v-model="contact.name">
    </div>

    <div class="form__phone-number">
      <label for="phone-number">Phone number: </label>
      <input type="text" name="phone-number" v-model="contact.phoneNumber">
    </div>

    <div class="form__description">
      <label for="description">Description: </label>
      <input type="text" name="description" v-model="contact.description">
    </div>

    <div class="form__date-of-birth">
      <label for="date-of-birth">Date of Birth: </label>
      <input type="text" name="date-of-birth" v-model="contact.dateOfBirth">
      <span>YY-mm-dd</span>
    </div>

    <button @click="createContactHandler">Add new contact!</button>
  </div>
</template>

<style></style>