<script>
import {getOneContact, deleteContact} from '../services/services.js'
import EditContact from '../components/EditContact.vue'
import EditButton from '../components/buttons/EditButton.vue'
import DeleteButton from '../components/buttons/DeleteButton.vue'

export default {
  name: "ShowOneContact",
  components: {
    EditContact,
    EditButton,
    DeleteButton
  },
  async beforeCreate() {
    try {
      this.contact = await getOneContact(this.$route.params.id);
    } catch (error) {
      this.$router.push({name: "NotFound", params: {catchAll: "Not_exist"}});
    }
  },
  data() {
    return {
      contact: {},
      isEdit: false
    }
  },
  methods: {
      editCompletedHandler(response) {
        this.isEdit = false;
        this.contact = response;

    },
    deleteContactHandler() {
      const response = deleteContact(this.contact.id);
      response.then(() => {
        window.location.href = window.location.origin + '/deleted';
      })
    }
  }
}
</script>

<template>
    <div v-if="isEdit">
      <edit-contact :contact="contact" @edit-completed="editCompletedHandler">
        <button class="form__button" @click="isEdit = false">Go back</button>
      </edit-contact>
    </div>

    <div class="contact-info" v-else-if="!isEdit">
      <div class="contact-info__name">
        <span class="contact-info__name__name">{{ contact.name }}</span>
        <edit-button @click="isEdit = true"/>
        <delete-button @click="deleteContactHandler"/>
      </div>

      <hr>

      <div class="contact-info__details">
        <span>Contact information:</span>

        <div class="contact-info__phone-number flex-vertical-center">
          <span class="material-symbols-outlined">call</span>
          <span>{{ contact.phoneNumber }}</span>
        </div>

        <div class="contact-info__date-of-birth flex-vertical-center">
          <span class="material-symbols-outlined">cake</span>
          <span>{{ contact.dateOfBirth }}</span>
        </div>

        <div class="contact-info__description">
          <div class="contact-info__description--icon">
            <span class="material-symbols-outlined">description</span>
          </div>
          <div class="contact-info__description--text">{{ contact.description }}</div>
        </div>

      </div>
    </div>
</template>

<style scoped>
.contact-info__name {
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
  font-size: 1.7rem;
  display: flex;
  align-items: center;
}

.contact-info__details {
  font-size: 1.3rem;
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: #F0F4F9;
  margin: 0.5rem;
  border-radius: 15px;
}

hr {
  border-color: rgba(204, 204, 204, 0.5);
}



.contact-info__description {
  width: 100%;
  margin-bottom: 0.5rem;
  display: flex;
}

.contact-info__description--text {
  width: 80%;
  padding-top: 0.5rem;
}

@media (min-width: 40rem) {
  .contact-info__details {
    max-width: 40rem;
  }
}
</style>