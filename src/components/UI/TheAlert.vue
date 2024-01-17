<template>
  <div class="custom-alert d-flex justify-content-center">
    <div class="card text-bg-dark green border-0 rounded-0 mb-auto">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.custom-alert{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background: rgba(0,0,0,0.4) !important;
}
.card{
  background: rgba(0,0,0,0.8) !important;
  margin-top: 20%;
  z-index: 100;
}
@media(max-width: 500px){
  .card{
    margin-left: 13px !important;
    margin-right: 13px !important;
    margin-top: 80px !important;
    padding-top: 3px !important;
    padding-left: 13px !important;
    padding-right: 13px !important;
  }
}
</style>