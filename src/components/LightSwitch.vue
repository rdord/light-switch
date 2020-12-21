<template>
  <div class="container">
    <div class="button center" @click="toggle">
      <input id="checkbox" type="checkbox" />
      <div class="button-center center">
        <i class="far fa-lightbulb" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapActions } = createNamespacedHelpers('idea');

export default {
  name: 'LightSwitch',
  data() {
    return {
      on: false
    };
  },
  methods: {
    ...mapActions(['pickIdea', 'clearIdea']),
    toggle() {
      this.on = !this.on;

      if (this.on) {
        this.pickIdea();
        document.body.classList.add('light');
        document.body.classList.remove('dark');
      } else {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        this.clearIdea();
      }
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  padding-top: 140px;
}

.button {
  width: 200px;
  height: 200px;
  background: linear-gradient(130deg, #646265, #101010);
  box-shadow: -2px -2px 1px 3px #1b1b1b, 2px 2px 1px 2px #686868, -12px -12px 15px #605e61, 12px 12px 15px #1b1b1b;
  border-radius: 50%;
  transition: 0.2s ease;

  &-center {
    width: 80px;
    height: 80px;
    background: linear-gradient(130deg, #646265, #101010);
    box-shadow: 0px 0px 5px 5px #323232, 5px 4px 5px 1px #9b999c, -5px -5px 10px 5px #1b1b1b;
    border: 3px solid #2d2d2d;
    border-radius: 50%;
    font-size: 29px;
    color: #9b999c;
    transition: 0.7s ease;
  }

  &:active {
    box-shadow: -0px -0px 1px 3px #1b1b1b, 0px 0px 1px 2px #686868, -3px -3px 15px #605e61, 3px 3px 15px #1b1b1b;
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

input {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  opacity: 0;
  cursor: pointer;

  &:active,
  &:focus {
    background: transparent;
    box-shadow: none;
    outline: none;
    outline-width: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  }

  &[type='checkbox']:checked ~ .button-center {
    color: #add8e6;
    box-shadow: 0px 0px 10px 2px #add8e6, 0px 0px 5px 5px #323232, 5px 4px 5px 1px #9b999c, -5px -5px 10px 5px #1b1b1b;
  }
}
</style>
