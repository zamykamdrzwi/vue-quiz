<template>
  <div>
    <the-card>
      <div class="card-header border-0 fs-3 m-auto">
        Create new quiz!
      </div>
      <div class="card-body">
        <form class="needs-validation" @submit.prevent="submitData">
          <div class="row">
            <label for="" class="form-label col-md-2 m-auto">Quiz name: </label>
            <span class="col-md-10">
              <input type="text" class="form-control rounded-0 green shadow-none"
              ref="nameInput" required>
            </span>
          </div>
          <div class="d-flex justify-content-center mt-4">
            <input type="submit" class="btn btn-dark green rounded-0" value="Submit">
          </div>
        </form>
      </div>
    </the-card>
  </div>
</template>

<script>
import questionsTab from './questions.json';
export default {
  data() {
    return {

    };
  },
  methods: {
    submitData() {
      const quizName = this.$refs.nameInput.value;
      const emptyArray = [];
      questionsTab.push(emptyArray);
      const newArrayNr = questionsTab.length-1;
      const quizData = {
        quizName: quizName,
        newArrayNr: newArrayNr
      }
      this.$emit('newQuizName', quizData);
      this.$emit('changeTab', 'create-quiz');
    }
  }
}
</script>

<style scoped>
.form-control{
  border: 3px solid #00DC82;
  background: rgba(0,0,0,0.2) !important;
}
.btn{
  border: 2px solid #00DC82;
}
</style>