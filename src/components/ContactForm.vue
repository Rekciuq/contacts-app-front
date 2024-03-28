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
      }
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
    <div class="form__name">
      <label for="name">Name: </label>
      <input type="text" name="name" v-model="rawContact.name">
    </div>

    <div class="form__phone-number">
      <label for="phone-number">Phone number: </label>
      <input type="text" name="phone-number" v-model="rawContact.phoneNumber">
    </div>

    <div class="form__description">
      <label for="description">Description: </label>
      <input type="text" name="description" v-model="rawContact.description">
    </div>

    <div class="form__date-of-birth">
      <label for="date-of-birth">Date of Birth: </label>
      <input type="date" name="date-of-birth" v-model="rawContact.dateOfBirth">
    </div>

    <button @click="prepareContact">{{ buttonText }}</button>
  </div>
</template>

<style></style>