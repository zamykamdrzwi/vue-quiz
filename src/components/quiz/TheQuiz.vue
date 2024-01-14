<template>
  <div>
    <the-alert v-if="openAlert">
      <div class="card-header fs-3">
        Congratulations, you have completed the {{ quizName[selectedQuiz] }}!
      </div>
      <div class="card-body">
        <div>
          <font-awesome-icon :icon="['fas', 'rocket']" />
          <span> Your Score: {{ score }}/{{ questions[this.selectedQuiz].length }}</span>
        </div>
        <div class="d-flex justify-content-center m-auto mt-3 gap-3">
          <answer-card
            @click="closeAlert">
            Try Again!
          </answer-card>
          <answer-card
            @click="checkAllAnswers">
            Check The Answers!
          </answer-card>
        </div>
      </div>
    </the-alert>
    <the-card>
      <div class="card-header border-0 row">
        <span class="col-6">Question {{ nextQuestion+1 }}/{{ questions[this.selectedQuiz].length }}</span>
        <span class="col-6 d-flex justify-content-end">
          <span>{{ quizName[selectedQuiz] }}</span>
        </span>
      </div>
      <div class="card-body">
        <div class="card-title d-flex justify-content-center fs-2 pb-3">
          {{ questions[selectedQuiz][nextQuestion].quest }}
        </div>
        <div class="row  gap-3">
          <answer-card
            class="col-xl-3 m-auto"
            @click="checkAnswer(0, questions[selectedQuiz][nextQuestion].correctAnswer)">
            {{ questions[selectedQuiz][nextQuestion].answers[0] }}</answer-card>
          <answer-card
            class="col-xl-3 m-auto"
            @click="checkAnswer(1, questions[selectedQuiz][nextQuestion].correctAnswer)">
            {{ questions[selectedQuiz][nextQuestion].answers[1] }}</answer-card>
          <answer-card
            class="col-xl-3 m-auto"
            @click="checkAnswer(2, questions[selectedQuiz][nextQuestion].correctAnswer)">
            {{ questions[selectedQuiz][nextQuestion].answers[2] }}</answer-card>        
        </div>
      </div>
    </the-card>
  </div>
</template>

<script>
export default {
  props: ['selectedQuiz'],
  data() {
    return {
      openAlert: false,
      score: 0,
      nextQuestion: 0,
      quizName: [
        'Quiz 1',
        'Quiz 2'
      ],
      questions: [
        [
          {
            id: 1,
            quest: 'Example question',
            answers: [
              'Answer One',
              'Answer Two',
              'Answer Three',
            ],
            correctAnswer: 1
          },
          {
            id: 2,
            quest: 'Example question 2',
            answers: [
              'Answer One',
              'Answer Two',
              'Answer Three',
            ],
            correctAnswer: 1
          },
        ],
        [
        {
            id: 1,
            quest: 'Example question 34',
            answers: [
              'Answer One',
              'Answer Two',
              'Answer Three',
            ],
            correctAnswer: 2
          },
          {
            id: 2,
            quest: 'Example question 321321',
            answers: [
              'Answer One',
              'Answer Two',
              'Answer Three',
            ],
            correctAnswer: 1
          },
        ]
      ],
    };
  },
  methods: {
    checkAnswer(nr, answer){
      if(nr === answer){
        this.score++;
        this.goToNextQuestion();
      }else{
        this.goToNextQuestion();
      }
    },
    goToNextQuestion(){
      if(this.nextQuestion+1 < this.questions[this.selectedQuiz].length){
        this.nextQuestion++;
      }else{
        this.openAlert = true;
      }
    },
    closeAlert(){
      this.openAlert = false;
      this.score = 0;
      this.nextQuestion = 0;
    },
    checkAllAnswers(){
      this.closeAlert();
    }
  },
  watch: {
    selectedQuiz(){
      this.nextQuestion = 0;
    }
  }
}
</script>