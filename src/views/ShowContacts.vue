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
      console.log(window.location.href);
    }
  },
  created() {
    if(window.location.href.includes("page")) {
      console.log(1);
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
   <!-- Here drop contacts forEach or smh -->
   <div class="contacts">
    <div class="contacts__item" v-for="contact in contacts" :key="contact.id">
      <span class="contacts__item__name">{{ contact.name }}</span>
      <span class="contacts__item__phone-number">{{ contact.phoneNumber }}</span>
      <span class="contacts__item__date-of-birth">{{ contact.dateOfBirth }}</span>
    </div>
   </div>
   <!-- Pagination -->
   <div class="pagination-container">
    <span class="pagination__first-page"></span>
    <span class="pagination__last-page"></span>
   </div>
   <!-- End of Pagination -->
  </div>
</template>

<style scoped>
.contacts-container {
  background-color: white;
}
</style>