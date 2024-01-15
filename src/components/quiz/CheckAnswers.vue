<template>
  <div>
    <div>Cokowliek</div>
    <div class="green">{{ questions[0][0].quest }}</div>
    <button @click="qwe">qwe</button>
  </div>
</template>

<script>
import questionsTab from './questions.json';
export default {
  props: ['selectedQuiz'],
  data() {
    return {
      questions: questionsTab
    };
  },
  methods: {
    qwe(){
      this.$emit('slectTab', 'the-quiz');
    },
  }
}
</script>