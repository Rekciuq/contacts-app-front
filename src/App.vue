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
  beforeMount() {
   if(window.location.pathname === "/deleted") {
    this.isDeleted = true;
   }
  }
}
</script>

<template>
<contacts-header/>

<div class="container">
  <router-view></router-view>
</div>
<deleted-contact-pop-up v-if="isDeleted"/>
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
