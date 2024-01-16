<template>
  <nav class="navbar navbar-expand-md bg-dark">
    <div class="container">
      <div class="green fs-3">
        <a href="#" class="nav-link"
          @click="switchWeb('the-quiz')">
          <font-awesome-icon :icon="['far', 'circle-question']" />
          <span> QUIZ</span>
        </a>
      </div>
      <button class="navbar-toggler shadow-none border-0 fs-3" type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav">
        <span class="green">
          <font-awesome-icon :icon="['fas', 'ellipsis-vertical']" />
        </span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto gap-3">
          <li class="nav-item dropdown">
            <a href="#" class="nav-link green dropdow-toggle"
            data-bs-toggle="dropdown" @click="updateQuizList">
              Choose Quiz
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li v-for="(quiz, index) in quizList" :key="index">
                <a href="#" class="dropdown-item green"
                  @click="chooseQuest(index)">
                  {{ quiz }}
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link green"
            @click="switchWeb('add-quiz')">Add Quiz</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import quizNames from '../quiz/quizNames.json';
export default {
  data() {
    return {
      quizList: ['Quiz 1', 'Quiz 2', 'Mateuszowy Quiz']
    };
  },
  methods: {
    chooseQuest(nr) {
      this.$emit('selectQuiz', nr);
    },
    switchWeb(value) {
      this.$emit('switchWeb', value);
    },
    updateQuizList() {
      this.quizList = quizNames;
    }
  },
}
</script>

<style scoped>
.dropdown-menu{
  background-color: rgba(0,0,0,0.2) !important;
}
.dropdown-item:active{
  background-color: rgba(0,0,0,0.2) !important;
}
</style>