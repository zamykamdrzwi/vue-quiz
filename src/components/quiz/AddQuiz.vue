<template>
  <keep-alive>
    <component :is="tab"
    @changeTab="switchTab"
    @newQuizName="sendQuizName"
    :currentQuizName="tempQuizName"
    @backToQuiz="backToTheQuiz">
    </component>
  </keep-alive>
</template>

<script>
import QuizName from './QuizName.vue';
import CreateQuiz from './CreateQuiz.vue';
export default {
  components: {
    QuizName,
    CreateQuiz
  },
  data() {
    return {
      tab: 'quiz-name',
      tempQuizName: '',
      web: ''
    };
  },
  methods: {
    switchTab(value) {
      this.tab = value;
    },
    sendQuizName(value) {
      this.tempQuizName = value;
    },
    backToTheQuiz(value) {
      this.web = (value);
      this.$emit('backToQuiz', this.web);
    }
  },
}
</script>