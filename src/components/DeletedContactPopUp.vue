<script>
export default {
  name: "DeletedContactPopUp"
}
</script>

<template>
  <div class="delete-pop-up">
    <span>Contact is Deleted!</span>
  </div>
</template>

<style>
.delete-pop-up {
  position: fixed;
  left: 2.5rem;
  bottom: -7.5rem;
  background-color: rgba(48, 48, 48, 0.95);
  padding: 1.5rem;
  border-radius: 10px;
}

.delete-pop-up span {
  font-size: 1.75rem;
  color: white;
}

</style>