<template>
  <transition
    enter-active-class="animate__bounceIn animate__animated"
    leave-active-class="animate__fadeOut animate__animated"
    mode="out-in"
    appear
  >
    <component :is="page" @pageChange="changePage"> </component>
  </transition>
</template>

<script>
import blessing from './components/blessing.vue';
import index from './components/index.vue';
import { onMounted, ref } from 'vue';
import { prevent } from './hooks/windowAction';

export default {
  name: 'App',
  components: {
    blessing,
    index
  },
  setup() {
    const page = ref('index');
    const changePage = (value) => {
      page.value = value;
    };
    onMounted(() => {
      prevent();
    });
    return {
      page,
      changePage
    };
  }
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
