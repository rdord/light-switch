<template>
  <div>
    <h1 class="name">{{ idea.name }}</h1>
    <p class="description">{{ idea.description }}</p>
    <small v-if="idea.dependencies"><strong>Dependencies</strong>: {{ dependencies }}</small>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState } = createNamespacedHelpers('idea');

export default {
  name: 'IdeaItem',
  computed: {
    ...mapState({
      idea: state => state.randomIdea,
      ideas: state => state.items
    }),
    dependencies() {
      const dependentIdeas = this.idea.dependencies.map(id => this.ideas[id].name);
      console.log('dependentIdeas', dependentIdeas);
      return dependentIdeas.join(', ');
    }
  }
};
</script>

<style scoped></style>
