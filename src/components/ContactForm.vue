<script>

export default {
  name: "ContactForm",
  props: {
    contact: {
      type: Object,
      required: false,
      default: null
    },
    buttonText: {
      type: String,
      required: true,
      default: String
    }
  },
  emits: {
    "prepared-contact": (value) => typeof value === "object",
  },
  data() {
    return {
      rawContact: {
        name: null,
        phoneNumber: null,
        description: null,
        dateOfBirth: null
      },
    }
  },
  mounted() {
    if(this.$props.contact !== null) {
      Object.assign(this.rawContact, this.$props.contact);
    }
  },
  methods: {
    prepareContact() {
      if(this.rawContact.name) {
        this.$emit("prepared-contact", this.rawContact);
      } else {
        // This will be error
      }
    }
  }
}
</script>

<template>
  <div class="form-container">
    <div class="form__name flex-vertical-center">
      <span class="material-symbols-outlined">person</span>
      <input type="text" name="name" placeholder="Name" v-model="rawContact.name">
    </div>

    <div class="form__phone-number flex-vertical-center">
      <span class="material-symbols-outlined">call</span>
      <input type="text" name="phone-number" placeholder="Phone number" v-model="rawContact.phoneNumber">
    </div>

    <div class="form__date-of-birth flex-vertical-center">
      <span class="material-symbols-outlined">cake</span>
      <input type="date" name="date-of-birth" v-model="rawContact.dateOfBirth">
    </div>

    <div class="form__description">
      <span class="material-symbols-outlined">description</span>
      <textarea type="text" name="description" placeholder="Description" v-model="rawContact.description"></textarea>
    </div>

    <button @click="prepareContact">{{ buttonText }}</button>
  </div>
</template>

<style>
.form-container {
  margin: 0.5rem;
}

input {
  width: 100%;
  font-size: 1.5rem;
}

.form__description{
  display: flex;
}

.form__description textarea {
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  height: 5rem;
  resize: vertical;
  width: 100%;
}

@media (min-width: 30rem) {
 input {
  font-size: 1.3rem;
 }
 .form__description textarea {
  font-size:1.3rem;
 }
 .form-container {
  max-width: 30rem;
 }
}

</style>