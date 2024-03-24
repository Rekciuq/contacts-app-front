<script>
export default {
name: "ShowContacts",
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
    <div class="contacts__item">
      <span class="contacts__item__name"></span>
      <span class="contacts__item__phone-number"></span>
      <span class="contacts__item__date-of-birth"></span>
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