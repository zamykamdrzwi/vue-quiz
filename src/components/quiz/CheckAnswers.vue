<template>
  <div>
    <div>Cokowliek</div>
    <button @click="qwe">qwe</button>
  </div>
</template>

<script>
export default {
  props: ['selectedQuiz'],
  methods: {
    qwe(){
      console.log(this.selectedQuiz);
    }
  }
}
</script>