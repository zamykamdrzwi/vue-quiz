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
      this.$emit('slectTab', 'the-quiz');
    }
  }
}
</script>