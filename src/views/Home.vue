<template>
  <div class="home">
    <IdeaItem />
    <LightSwitch />
  </div>
</template>

<script>
import LightSwitch from '@/components/LightSwitch.vue';
import IdeaItem from '@/components/IdeaItem.vue';

export default {
  name: 'Home',
  components: {
    LightSwitch,
    IdeaItem
  }
};
</script>
