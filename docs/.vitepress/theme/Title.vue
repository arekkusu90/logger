<template>
  <div class="title">
    <div class="title__text-write">Write</div>
    <div class="title__text-beautiful">beautiful logs</div>
    <div class="title__text-console">in the browser console</div>
  </div>
</template>

<script>
export default {
  name: "Title",
};
</script>

<style lang="scss" scoped>
.title {
  font-family: "Ms Madi", cursive;
  line-height: 1;

  &__text-write {
    font-size: 6rem;
    text-align: left;
    background: #d84315;
    background: linear-gradient(to left bottom, #d84315 0%, #f9a825 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-left: 32px;
  }

  &__text-beautiful {
    font-size: 10rem;
    text-align: center;
    background: #3f51b5;
    background: linear-gradient(to right, #3f51b5 0%, #e91e63 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-bottom: 32px;
  }

  &__text-console {
    font-family: "Indie Flower", cursive;
    font-size: 3rem;
    text-align: right;
    background: #009688;
    background: linear-gradient(to right top, #009688 0%, #2196f3 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
