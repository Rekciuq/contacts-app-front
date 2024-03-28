<script>
export default {
  name: "CreateButton",
  methods: {
    redirectToCreateContactPage() {
      this.$router.push('new')
    }
  }
}
</script>

<template>
      <button @click="redirectToCreateContactPage" class="create-button">
        <span class="material-symbols-outlined">add</span>
      </button>
</template>

<style scoped>
.create-button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 2.5rem;
  bottom: 2.5rem;
  width: 5rem;
  height: 5rem;
  border: 0;
  vertical-align: middle;
  border-radius: 33%;
  background-color: #c7daf9;
  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.1);
}

.material-symbols-outlined {
  font-variation-settings: 'wght' 250;
}

span {
  font-size: 3.5rem;
}

.create-button:hover,
.create-button:active {
 background-color: #a6c6f8;
 transition: background-color 0.3s;
}

.create-button:focus {
  background-color: #7dacf8;
}


@media (min-width: 50rem) {
  .create-button {
    width: 6rem;
    height: 6rem;
  }
  span {
    font-size: 5rem;
  }
}



</style>