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
          <li class="nav-item green">
            Start Quiz
          </li>
          <li class="nav-item green">
            Add Question
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>