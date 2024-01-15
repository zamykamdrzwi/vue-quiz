<template>
  <div>
    <keep-alive>
      <component 
        :is="selectedTab" 
        :selectedQuiz="selectedQuizTab"
        @slectTab="checkSelectTab"
        @currentQuizInfo="currentQuizData"
        :quizData="quizInfo">
      </component>
    </keep-alive>
  </div>
</template>

<script>
import CheckAnswers from './CheckAnswers.vue';
import TheQuiz from './TheQuiz.vue';
export default {
  props: ['selectedQuizTab'],
  components: {
    TheQuiz,
    CheckAnswers
  },
  data() {
    return {
      selectedTab: 'the-quiz',
      quizInfo: ''
    };
  },
  methods: {
    checkSelectTab(value){
      this.selectedTab = value;
    },
    currentQuizData(selectedQuiz, score, quizName, playerAnswers) {
      this.quizInfo = {
        selectedQuiz: selectedQuiz,
        score: score,
        quizName: quizName,
        playerAnswers: playerAnswers
      };
    }
  }
}
</script>