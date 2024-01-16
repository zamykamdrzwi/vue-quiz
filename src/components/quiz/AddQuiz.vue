<template>
  <keep-alive>
    <component :is="tab"
    @changeTab="switchTab"
    @newQuizName="sendQuizName"
    :currentQuizName="tempQuizName">
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
      tempQuizName: ''
    };
  },
  methods: {
    switchTab(value) {
      this.tab = value;
    },
    sendQuizName(value) {
      this.tempQuizName = value;
    }
  },
}
</script>