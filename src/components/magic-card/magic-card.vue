<template>
  <div v-if="turned">
    <h1>You are thinking of...</h1>
    <vue-playing-card
      class="magic-card flip"
      :key="`${card.value}-${card.suit}`"
      :signature="`${card.value}${card.suit}`"
    ></vue-playing-card>
  </div>
</template>

<script>
export default {
  name: "magic-card",
  props: {
    card: { type: Object },
    turned: { type: Boolean, default: false }
  }
};
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}

.flip {
  animation: flip 2s ease-in-out;
}

@keyframes flip {
  0% {
     transform: rotate(1080deg) scaleX(-1);
  }
}
</style>