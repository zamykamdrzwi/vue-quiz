<template>
  <nav class="navbar navbar-expand-md bg-dark">
    <div class="container">
      <div class="green fs-3">
        <font-awesome-icon :icon="['far', 'circle-question']" />
        <span> QUIZ</span>
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
          <li class="nav-item">
            <a href="#" class="nav-link green">Start Quiz</a>
          </li>
          <li class="nav-item dropdown">
            <a href="#" class="nav-link green dropdow-toggle"
            data-bs-toggle="dropdown">
              Choose Quiz
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a href="#" class="dropdown-item green"
                @click="chooseQuest(0)">Quiz 1</a></li>
              <li><a href="#" class="dropdown-item green"
                @click="chooseQuest(1)">Quiz 2</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link green">Add Question</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {
    chooseQuest(nr) {
      this.$emit('selectQuiz', nr);
    }
  }
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