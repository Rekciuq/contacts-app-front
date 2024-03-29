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
      hasError: false,
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
        this.hasError = true;
      }
    }
  },
  watch: {
    'rawContact.name': function() {
      if(this.rawContact.name === "") {
        this.hasError = true;
      } else {
        this.hasError = false;
      }
    },
  }
}
</script>

<template>
  <div class="form-container">
    <div class="form__name flex-vertical-center">
      <span class="material-symbols-outlined">person</span>
      <input type="text" name="name" placeholder="Name" :class="{'border-error': hasError}" v-model="rawContact.name">
    </div>
    <div :class="{'name-error': hasError, 'display-none': !hasError}">You must enter name!</div>

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

  </div>
  <button @click="prepareContact" class="form__button">{{ buttonText }}</button>
</template>

<style>
.form-container {
  margin: 0.5rem;
}

.name-error {
  display: block;
  color: red;
  font-size: 1.5rem;
  margin-left: 3rem;
}

.form__button {
  background-color: #0B57D0;
  color: white;
  border: 0;
  font-size: 1.5rem;
  margin-left: 0.5rem;
  font-family: inherit;
  padding: 0.5rem;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2)
}

.form__button:hover,
.form__button:active {
  background-color: #1E64D4;
}

.display-none {
  display: none;
}

.border-error {
  border: 1px solid red;
}

.border-error:focus {
  outline: 0;
}

input {
  width: 100%;
  font-size: 1.5rem;
  padding: 0.3rem;
}

.form__description {
  display: flex;
}

.form__description span {
  padding-top: 0;
}

.form__description textarea {
  margin-bottom: 1.5rem;
  padding: 0.3rem;
  font-size: 1.5rem;
  height: 5rem;
  resize: vertical;
  width: 100%;
}

.form__name,
.form__phone-number,
.form__date-of-birth,
.form__description {
  margin-top: 0.5rem;
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