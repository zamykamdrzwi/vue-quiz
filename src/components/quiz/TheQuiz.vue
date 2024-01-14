<template>
  <div>
    <the-card>
      <div class="card-header border-0">Question {{ nextQuestion+1 }}/{{ questions[this.selectedQuiz].length }}</div>
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
import AnswerCard from '../UI/AnswerCard.vue';
export default {
  props: ['selectedQuiz'],
  components: {
    AnswerCard
  },
  data() {
    return {
      nextQuestion: 0,
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
      console.log(nr);
      //console.log(`quiz ${quiz}`);
      console.log(`answer ${answer}`);
      if(nr === answer){
        console.log('Dobrze');
        this.goToNextQuestion();
      }else{
        console.log('Źle');
        this.goToNextQuestion();
      }
    },
    goToNextQuestion(){
      if(this.nextQuestion+1 < this.questions[this.selectedQuiz].length){
        this.nextQuestion++;
      }else{
        console.log('Koniec');
        return;
      }
    }
  },
}
</script>

<style scoped>
  
</style>