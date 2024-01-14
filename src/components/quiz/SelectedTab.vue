<template>
  <div>
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
  </div>
</template>

<script>
import CheckAnswers from './CheckAnswers.vue';
import TheQuiz from './TheQuiz.vue';
export default {
  components: {
    TheQuiz,
    CheckAnswers
  },
  data() {
    return {
      selectedTab: 'the-quiz'
    };
  }
}
</script>