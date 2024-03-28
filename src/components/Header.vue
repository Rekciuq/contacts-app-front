<script>
export default {
  name: "ContactsHeader",
}
</script>

<template>
  <router-link to="/"><span>Contacts</span></router-link>
</template>

<style scoped>
a {
  text-decoration-line: none;
}
span {
  display: inline-block;
  margin: 0.5rem;
  font-size: 2.5rem;
  color: #5f6368;
}
</style>