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
  animation: liftAndDown 3s ease-out 2 alternate;
  animation-delay: 1s;
}

.delete-pop-up span {
  font-size: 1.75rem;
  color: white;
}

@keyframes liftAndDown {
  0% {
    bottom: -7.5rem;
  }

  100% {
    bottom: 2.5rem;
  }
}
</style>