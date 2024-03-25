<script>
import {getOneContact} from '../services/services.js'
export default {
  name: "ShowOneContact",
  async beforeMount() {
    this.contact = await getOneContact(this.$route.params.id)
  },
  data() {
    return {
      contact: ''
    }
  },
  methods: {
  }
}
</script>

<template>
  <div class="card">
    {{ contact }}
  </div>
</template>

<style></style>