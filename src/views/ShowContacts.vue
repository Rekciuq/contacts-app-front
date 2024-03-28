<script>
import { getAllContacts } from '../services/services';
import CreateButton from '../components/CreateButton.vue';
export default {
  name: "ShowContacts",
  components: {
    CreateButton
  },
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
    <div class="contacts">

      <div class="contacts__headers">
        <div class="contacts__headers__name">Name</div>
        <div class="contacts__headers__phone-number">Phone number</div>
        <div class="contacts__headers__date-of-birth">Date of Birth</div>
      </div>

      <router-link class="contacts__item" v-for="contact in contacts" :key="contact.id" :to="{name: 'ShowOneContact', params: { id: contact.id}}">
        <span class="contacts__item__name">{{ contact.name }}</span>
        <span class="contacts__item__phone-number">{{ contact.phoneNumber }}</span>
        <span class="contacts__item__date-of-birth">{{ contact.dateOfBirth }}</span>
      </router-link>
      <create-button/>
   </div>
  </div>
</template>

<style scoped>

.contacts-container {
  background-color: white;
}

.contacts__headers {
  font-size: 1.3rem;
  padding: 0.5rem;
  border-bottom: 1px solid #ccc;
}

.contacts__headers__phone-number,
.contacts__headers__date-of-birth,
.contacts__item__phone-number,
.contacts__item__date-of-birth {
  display: none;
}

a {
  text-decoration-line: none;
  color: #1f1f1f;
  font-size: 1.3rem;
  padding: 0.5rem;
  display: inline-block;
  width: 100%;
}
a:active,
a:hover {
  background-color: #EBF2FC;
  transition: background-color 0.3s;
}
@media (min-width: 50rem) {
  .contacts__headers {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .contacts__item {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .contacts__headers__phone-number,
  .contacts__item__phone-number {
    display: block;
  }

}

@media (min-width: 75rem) {
  .contacts__headers {
    grid-template-columns: repeat(3, 1fr);
  }
  .contacts__item {
    grid-template-columns: repeat(3, 1fr);
  }
  .contacts__headers__date-of-birth,
  .contacts__item__date-of-birth {
    display: block;
  }
}

</style>