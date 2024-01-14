<template>
  <div>
    <the-card>
      <div class="card-header border-0">Question 1</div>
      <div class="card-body">
        <div class="card-title d-flex justify-content-center fs-2 pb-3">
          {{ questions[0][0].quest }}
        </div>
        <div class="row  gap-3">
          <answer-card
            class="col-xl-3 m-auto"
            @click="checkAnswer(1)">
            {{ questions[0][0].answer1 }}</answer-card>
          <answer-card
            class="col-xl-3 m-auto"
            @click="checkAnswer(2)">
            {{ questions[0][0].answer2 }}</answer-card>
          <answer-card
            class="col-xl-3 m-auto"
            @click="checkAnswer(3)">
            {{ questions[0][0].answer3 }}</answer-card>        
        </div>
      </div>
    </the-card>
  </div>
</template>

<script>
import AnswerCard from '../UI/AnswerCard.vue';
export default {
  props: ['selectedQuiz'],
  components: {
    AnswerCard
  },
  data() {
    return {
      xd: 'das',
      questions: [
        [
          {
            id: 1,
            quest: 'Example questionpadding-left: 10px !important;padding-left: 10px !important;padding-left: 10px !important;',
            answer1: 'Answer One  Answer OneAnswer OneAnswer OneAnswer OneAnswer OneAnswer OneAnswer OneAnswer OneAnswer OneAnswer One',
            answer2: 'Answer Two padding-left: 10px !important; niger niger niger niger niger niger',
            answer3: 'Answer Three nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger ',
            correctAnswer: 2
          },
          {
            id: 2,
            quest: 'Second example question',
            answer1: 'Answer One',
            answer2: 'Answer Two',
            answer3: 'Answer Three',
            correctAnswer: 1
          }
        ],
        [
          {
            id: 1,
            quest: 'Tab2 Second example question',
            answer1: 'Answer One',
            answer2: 'Answer Two',
            answer3: 'Answer Three',
            correctAnswer: 1
          },
          {
            id: 2,
            quest: 'Tab2 dsadsadasSecond example question',
            answer1: 'Answer One',
            answer2: 'Answer Two',
            answer3: 'Answer Three',
            correctAnswer: 1
          }
        ]
      ],
    };
  },
  methods: {
    checkAnswer(nr) {
      console.log(nr);
      console.log(`dsada ${this.choosedQuiz}`)
    }
  },
}
</script>

<style scoped>
  
</style>