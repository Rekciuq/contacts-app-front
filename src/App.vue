<script>
import ContactsHeader from './components/Header.vue'
import DeletedContactPopUp from './components/DeletedContactPopUp.vue';
export default {
  name: 'App',
  components: {
    ContactsHeader,
    DeletedContactPopUp
  },
  data() {
    return {
      isDeleted: false,
    }
  },
  methods: {
    deleteContactAnimation() {
      this.isDeleted = true;
      setTimeout(() => {
        this.isDeleted = false;
      }, 5000)

    }
  }
}
</script>

<template>
<contacts-header/>

<div class="container">
  <router-view @contact-deleted="deleteContactAnimation"></router-view>
</div>

<deleted-contact-pop-up :class="{'delete-animation': isDeleted}" />
</template>

<style>
.container {
  background-color: white;
  height: calc(100vh - 65px);
  overflow-y: auto;
}

@media (min-width:40rem) {
  .container {
    margin: 0 0.5rem;
    border-radius: 15px;
    height: calc(100vh - 80px);
  }
}


</style>
