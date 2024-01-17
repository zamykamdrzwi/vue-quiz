<template>
  <div>
    <the-alert v-if="alertIsOpen">
      <div class="m-3">
        <div class="card-header fs-3">
          Unfortunately an error occurred :(
        </div>
        <div class="card-body">
          A quiz must contain at least one question to be added!
        </div>
        <div class="d-flex justify-content-center">
          <answer-card @click="closeAlert">
            I understand
          </answer-card>
        </div>
      </div>
    </the-alert>
    <the-card>
      <div class="card-header border-0 row">
        <span class="col-6">Question {{ questionNr+1 }}</span>
        <span class="col-6 d-flex justify-content-end">
          <span>{{ currentQuizName.quizName }}</span>
        </span>
      </div>
      <div class="card-body">
        <div class="card-title d-flex justify-content-center fs-2 pb-3">
          <div>QUESTION:</div>
        </div>
        <input type="text" class="form-control rounded-0 green shadow-none custom-placeholder mb-4"
          ref="nameInput" required placeholder="Enter your question here"
          v-model="questionValue" :class="{ 'invalid-input': invalidQuestion }">
        <div class="row mb-3">
          <label class="col-md-2 m-auto">Answer 1: </label> 
          <span class="col-md-10">
            <input type="text" class="form-control rounded-0 green shadow-none custom-placeholder"
              ref="nameInput" required placeholder="Enter your answer here" v-model="answersValue[0]"
              :class="{ 'invalid-input': checkAnswersValueTab[0] }">
          </span>
        </div>
        <div class="row mb-3">
          <label class="col-md-2 m-auto">Answer 2: </label> 
          <span class="col-md-10">
            <input type="text" class="form-control rounded-0 green shadow-none custom-placeholder"
            ref="nameInput" required placeholder="Enter your answer here" v-model="answersValue[1]"
            :class="{ 'invalid-input': checkAnswersValueTab[1] }">            
          </span>
        </div>
        <div class="row mb-3">
          <label class="col-md-2 m-auto">Answer 3: </label>                   
          <span class="col-md-10">
            <input type="text" class="form-control rounded-0 green shadow-none custom-placeholder"
              ref="nameInput" required placeholder="Enter your answer here" v-model="answersValue[2]"
              :class="{ 'invalid-input': checkAnswersValueTab[2] }">
          </span>
        </div>
        <div class="card-title d-flex justify-content-center fs-2 pb-3">
          Choose the correct answer:
        </div>
        <div class="row gap-2">
          <answer-card class="col-md-3 m-auto" id="0"
            @click="goodAnswer(0)" :class="{ 'good-answer': answers[0], 'pulsating-card': answerCheck }">
            Answer 1
          </answer-card>
          <answer-card class="col-md-3 m-auto" id="1"
            @click="goodAnswer(1)" :class="{ 'good-answer': answers[1], 'pulsating-card': answerCheck }">
            Answer 2
          </answer-card>
          <answer-card class="col-md-3 m-auto" id="2"
            @click="goodAnswer(2)" :class="{ 'good-answer': answers[2], 'pulsating-card': answerCheck }">
            Answer 3
          </answer-card>
        </div>
        <hr class="mt-4 custom-hr">
        <div class="row gap-2 mt-4">
          <answer-card class="fs-4 m-auto"
            @click="checkInputs">
            Add Question
          </answer-card>
          <answer-card class="fs-4 m-auto"
            @click="finishQuiz">
            Finish Quest
          </answer-card>
        </div>
      </div>
    </the-card>
  </div>
</template>

<script>
import questionsTab from './questions.json';
import quizNames from './quizNames.json'
export default {
  props: ['currentQuizName'],
  data() {
    return {
      alertIsOpen: false,
      questionValue: '',
      answersValue: ['','',''],
      answers: [
        false,
        false,
        false
      ],
      correctAnswer: '',
      questionNr: 0,
      invalidQuestion: false,
      checkAnswersValueTab: [],
      answerCheck: false
    };
  },
  methods: {
    closeAlert() {
      this.alertIsOpen = false;
    },
    goodAnswer(id) {
      for(let i=0; i<=2; i++){
        if(i===id){
          this.answers[id] = true;
          this.correctAnswer = i;
        }else{
          this.answers[i] = false;
        }
      }
    },
    checkInputs() {
      if(this.questionValue.length>0){
        this.invalidQuestion = false;
      }
      let checkAnswersValue = false;
      let badAnswers = [];
      let checkAnswers = false;
      this.answersValue.forEach((answer, i) => {
        if(answer==='' || answer===null || answer===undefined){
          this.checkAnswersValueTab[i] = true;
          badAnswers.push(i);
        }else{
          this.checkAnswersValueTab[i] = false;
        }
      });
      if(this.checkAnswersValueTab[0]===false && this.checkAnswersValueTab[1]===false && this.checkAnswersValueTab[2]===false){
        checkAnswersValue = true;
      }
      this.answers.forEach(answer => {
        if(answer===true){
          checkAnswers = true;
        }
      });
      if(checkAnswers===false || this.questionValue===''){
        if(checkAnswers===false){
          this.checkAnswerAnimation();
        }
        if(this.questionValue===''){
          this.invalidQuestion = true;
        }
        return;
      }
      if(checkAnswersValue===false){
        return;
      }
      this.invalidQuestion = false;
      this.createQuestion();
    },
    checkAnswerAnimation(){
      this.answerCheck = true;
      setTimeout(() => {
        this.answerCheck = false;
      }, 1600);
    },
    createQuestion() {
      const question = {
        id: this.questionNr,
        quest: this.questionValue,
        answers: [
          this.answersValue[0],
          this.answersValue[1],
          this.answersValue[2]
        ],
        correctAnswer: this.correctAnswer
      };
      questionsTab[this.currentQuizName.newArrayNr].push(question);
      this.questionNr++;
      console.log(questionsTab);
      this.questionValue = '';
      this.answersValue = ['','',''];
      this.answers = [
        false,
        false,
        false
      ];
    },
    finishQuiz() {
      if(questionsTab[questionsTab.length-1].length>0){
        const tryNewQuiz = {
          web: 'the-quiz',
          quiz: questionsTab.length-1
        }
        this.$emit('backToQuiz', tryNewQuiz);
        quizNames.push(this.currentQuizName.quizName);
      }
      else{
        this.alertIsOpen = true;
      }
    }
  },
}
</script>

<style scoped>
.form-control{
  border: 3px solid #00DC82;
  background: rgba(0,0,0,0.2) !important;
}
.custom-placeholder::placeholder {
  color: rgba(0,220,130,0.4);
}
.btn{
  border: 2px solid #00DC82;
}
.good-answer{
  background: #00DC82;
  color: white !important;
}
.invalid-input{
  border: 3px solid #dc3545 !important;
}

@keyframes pulsating {
  0% {
    box-shadow: 0 0 0 0 rgba(0,220,130,0.4);
  }
  70% {
    box-shadow: 0 0 0 30px rgba(255, 165, 0, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 165, 0, 0);
  }
}
.pulsating-card {
  animation: pulsating 1.5s ease-out;
}
.custom-hr{
  border: 2px solid #00DC82;
}
</style>