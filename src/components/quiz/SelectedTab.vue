<template>
  <div>
    <keep-alive>
      <component 
        :is="selectedTab" 
        :selectedQuiz="selectedQuizTab"
        @slectTab="checkSelectTab"
        @currentQuizInfo="currentQuizData"
        :quizData="quizInfo"
        @backToQuiz="backToTheQuiz">
      </component>
    </keep-alive>
  </div>
</template>

<script>
import CheckAnswers from './CheckAnswers.vue';
import TheQuiz from './TheQuiz.vue';
import AddQuiz from './AddQuiz.vue';
export default {
  props: ['selectedQuizTab', 'switchWebsite'],
  components: {
    TheQuiz,
    CheckAnswers,
    AddQuiz
  },
  data() {
    return {
      selectedTab: 'the-quiz',
      quizInfo: '',
      quiz: ''
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
    },
    backToTheQuiz(value) {
      this.selectedTab = value.web;
      this.quiz = value.quiz;
      console.log(this.selectedQuizTab);
      // Trzeba dodać aby :selectedQuiz="quiz" ale jeszcze nwm jak
    }
  },
  watch: {
    switchWebsite(){
      this.checkSelectTab(this.switchWebsite.currentPage);
    },
  }
}
</script>