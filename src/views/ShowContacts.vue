<script>
import { getAllContacts } from '../services/services';
export default {
  name: "ShowContacts",
  data() {
    return {
      contacts: [],
    }
  },
  methods: {
    assignData(dataObj) {
      this.contacts = dataObj.data;
    }
  },
  async beforeMount() {
    this.assignData(await getAllContacts());
  }

}
</script>

<template>
  <div class="contacts-container">
   <h2>Contacts</h2>
   <div class="contacts__headers">
    <span>Name</span>
    <span>Phone number</span>
    <span>Date of Birth</span>
   </div>

   <div class="contacts">
    <router-link class="contacts__item" v-for="contact in contacts" :key="contact.id" :to="{name: 'ShowOneContact', params: { id: contact.id}}">
      <span class="contacts__item__name">{{ contact.name }}</span>
      <span class="contacts__item__phone-number">{{ contact.phoneNumber }}</span>
      <span class="contacts__item__date-of-birth">{{ contact.dateOfBirth }}</span>
    </router-link>
   </div>
  </div>
</template>

<style scoped>
.contacts-container {
  background-color: white;
}
</style>