<script>
import { getAllContacts } from '../services/services';
import CreateButton from '../components/buttons/CreateButton.vue';
export default {
  name: "ShowContacts",
  components: {
    CreateButton
  },
  data() {
    return {
      contacts: [],
      isEmpty: false
    }
  },
  methods: {
    assignData(dataObj) {
      if(dataObj.data.length) {
        this.contacts = dataObj.data;
        this.isEmpty = false;
      }
      else {
        this.isEmpty = true;
      }
    }
  },
  async beforeMount() {
    this.assignData(await getAllContacts());
  }

}
</script>

<template>
  <div class="contacts__headers">
    <div class="contacts__headers__name">Name</div>
    <div class="contacts__headers__phone-number">Phone number</div>
    <div class="contacts__headers__date-of-birth">Date of Birth</div>
  </div>

  <div class="contacts-container" v-if="!isEmpty">

    <router-link class="contacts__item" v-for="contact in contacts" :key="contact.id" :to="{name: 'ShowOneContact', params: { id: contact.id}}">
      <span class="contacts__item__name">{{ contact.name }}</span>
      <span class="contacts__item__phone-number">{{ contact.phoneNumber }}</span>
      <span class="contacts__item__date-of-birth">{{ contact.dateOfBirth }}</span>
    </router-link>
  </div>

  <div class="not-found__container" v-else-if="isEmpty">
    <span>There are no records!</span>
  </div>

  <create-button/>
</template>

<style scoped>

.not-found__container {
  height: auto;
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