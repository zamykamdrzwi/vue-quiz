<template>
  <div>
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
          v-model="questionValue">
        <div class="row mb-3">
          <label class="col-md-2 m-auto">Answer 1: </label> 
          <span class="col-md-10">
            <input type="text" class="form-control rounded-0 green shadow-none custom-placeholder"
              ref="nameInput" required placeholder="Enter your answer here" v-model="answersValue[0]">
          </span>
        </div>
        <div class="row mb-3">
          <label class="col-md-2 m-auto">Answer 2: </label> 
          <span class="col-md-10">
            <input type="text" class="form-control rounded-0 green shadow-none custom-placeholder"
            ref="nameInput" required placeholder="Enter your answer here" v-model="answersValue[1]">            
          </span>
        </div>
        <div class="row mb-3">
          <label class="col-md-2 m-auto">Answer 3: </label>                   
          <span class="col-md-10">
            <input type="text" class="form-control rounded-0 green shadow-none custom-placeholder"
              ref="nameInput" required placeholder="Enter your answer here" v-model="answersValue[2]">
          </span>
        </div>
        <div class="card-title d-flex justify-content-center fs-2 pb-3">
          Choose the correct answer:
        </div>
        <div class="row gap-2">
          <answer-card class="col-md-3 m-auto" id="0"
            @click="goodAnswer(0)" :class="{ 'good-answer': answers[0] }">
            Answer 1
          </answer-card>
          <answer-card class="col-md-3 m-auto" id="1"
            @click="goodAnswer(1)" :class="{ 'good-answer': answers[1] }">
            Answer 2
          </answer-card>
          <answer-card class="col-md-3 m-auto" id="2"
            @click="goodAnswer(2)" :class="{ 'good-answer': answers[2] }">
            Answer 3
          </answer-card>
        </div>
        <div class="d-flex justify-content-center mt-5">
          <answer-card class="fs-4"
            @click="createQuestion">
            Add Question
          </answer-card>
        </div>
      </div>
    </the-card>
  </div>
</template>

<script>
import questionsTab from './questions.json';
export default {
  props: ['currentQuizName'],
  data() {
    return {
      questionValue: '',
      answersValue: [],
      answers: [
        false,
        false,
        false
      ],
      correctAnswer: '',
      questionNr: 0
    };
  },
  methods: {
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
</style>