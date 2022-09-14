<template>
  <div class="example">
    <div class="example__code">
      <slot />
    </div>

    <template v-if="console">
      <console :code="code" />
    </template>
  </div>
</template>

<script>
import Console from "./Console.vue";

export default {
  name: "Example",
  components: { Console },
  props: {
    console: { type: Boolean, default: false },
  },
  data() {
    return {
      code: "",
    };
  },
  mounted() {
    let codeWrapper = this.$el.querySelector("code");
    this.code = codeWrapper.textContent ?? "";
  },
};
</script>

<style scoped>
.example {
}
</style>
