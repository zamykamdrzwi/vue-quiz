<template>
  <div>
    <div v-for="(question, index) in questions[quizData.selectedQuiz]" 
      :key="questions[quizData.selectedQuiz][question]">
      <the-card>
        <div class="card-header border-0 row">
          <span class="col-6">Question {{ index+1 }}/{{ questions[quizData.selectedQuiz].length }}</span>
          <span class="col-6 d-flex justify-content-end">
            <span>{{ quizData.quizName }}</span>
          </span>
        </div>
        <div class="card-body">
          <div class="card-title d-flex justify-content-center fs-2 pb-3">
            {{ question.quest }}
          </div>
          <div v-if="question.correctAnswer===quizData.playerAnswers[index]" class="row gap-3">
            <div class="d-flex justify-content-center">
              <span>GOOD ANSWER</span>
            </div>
            <answer-card class="col-xl-3 m-auto" mode="btn-none"
            :class="{ 'good-answer': question.correctAnswer===0 }">
              {{ question.answers[0] }}
            </answer-card>
            <answer-card class="col-xl-3 m-auto" mode="btn-none"
            :class="{ 'good-answer': question.correctAnswer===1 }">
              {{ question.answers[1] }}
            </answer-card>
            <answer-card class="col-xl-3 m-auto" mode="btn-none"
            :class="{ 'good-answer': question.correctAnswer===2 }">
              {{ question.answers[2] }}
            </answer-card>
          </div>
          <div v-else class="row gap-3">
            <div class="d-flex justify-content-center">
              <span class="text-danger">BAD ANSWER</span>
            </div>
            <answer-card class="col-xl-3 m-auto" mode="btn-none"
            :class="{ 'good-answer': question.correctAnswer===0,
            'bad-answer': quizData.playerAnswers[index]===0 }">
              {{ question.answers[0] }}
            </answer-card>
            <answer-card class="col-xl-3 m-auto" mode="btn-none"
            :class="{ 'good-answer': question.correctAnswer===1,
            'bad-answer': quizData.playerAnswers[index]===1 }">
              {{ question.answers[1] }}
            </answer-card>
            <answer-card class="col-xl-3 m-auto" mode="btn-none"
            :class="{ 'good-answer': question.correctAnswer===2,
            'bad-answer': quizData.playerAnswers[index]===2 }">
              {{ question.answers[2] }}
            </answer-card>
          </div>
        </div>
      </the-card>
    </div>
    <div class="green fs-3 d-flex justify-content-center mb-4">
      <font-awesome-icon :icon="['fas', 'rocket']" />
      <span> Your Score: 
        {{ quizData.score }}/{{ questions[quizData.selectedQuiz].length }}
      </span>
    </div>
    <div class="d-flex justify-content-center mb-4">
      <answer-card @click="backToTheQuiz">Next Quiz?</answer-card>
    </div>
  </div>
</template>

<script>
import AnswerCard from '../UI/AnswerCard.vue';
import questionsTab from './questions.json';
export default {
  components: { AnswerCard },
  props: ['quizData'],
  data() {
    return {
      questions: questionsTab,
    };
  },
  methods: {
    backToTheQuiz(){
      this.$emit('slectTab', 'the-quiz');
    },
  },
  mounted(){
    //console.log(this.questions[0][0].quest)
  }
}
</script>

<style scoped>
.good-answer{
  background: #00DC82;
  color: white !important;
}
.bad-answer{
  background: #dc3545;
  color: white !important;
}
</style>