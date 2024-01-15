<template>
  <button class="btn btn-dark green rounded-0"
  :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['mode']
}
</script>

<style scoped>
.btn{
  border: 2px solid #00DC82;
}
.btn-none{
  pointer-events: none;
}
</style>