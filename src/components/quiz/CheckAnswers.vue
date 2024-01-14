<template>
  <div>
    <div>Cokowliek</div>
    <button @click="qwe">qwe</button>
  </div>
</template>

<script>
export default {
  inject: ['message'],
  methods: {
    qwe(){
      console.log(this.message);
    }
  }
}
</script>