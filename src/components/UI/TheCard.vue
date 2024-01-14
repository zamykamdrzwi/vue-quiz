<template>
  <div class="card text-bg-dark green border-0 rounded-0 m-5 ps-5 pe-5 pt-2 pb-2">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.card{
  background: rgba(0,0,0,0.2) !important;
}
@media(max-width:500px){
  .card{
    margin: 13px !important;
    padding-top: 3px !important;
    padding-left: 13px !important;
    padding-right: 13px !important;
  }
}
</style>