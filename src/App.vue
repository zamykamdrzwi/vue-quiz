<template>
  <div>
    <the-header @selectQuiz="checkSelectQuiz"></the-header>
    <selected-tab :selectedQuizTab="selectQuizBox"></selected-tab>
  </div>
</template>

<script>
import SelectedTab from './components/quiz/SelectedTab.vue';
import TheHeader from './components/layouts/TheHeader.vue';
export default {
  components: {
    TheHeader,
    SelectedTab,
  },
  data() {
    return {
      selectQuizBox: 0 
    };
  },
  methods: {
    checkSelectQuiz(nr){
      this.selectQuizBox = nr;
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500&family=Kanit:wght@100;200;300;400;500&family=Lobster&family=Noto+Sans+Mono:wght@300;400&family=Poppins:wght@300;400;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300&display=swap');
body{
  background: #0A1026;
  font-family: 'Inter', sans-serif;
}
.green{
  color: #00DC82 !important;
}
</style>