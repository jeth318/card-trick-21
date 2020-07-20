<template>
  <div class="playing-card-wrapper">
    <div
      class="playing-card-inner-wrapper"
      v-for="(card, index) in pile"
      :id="`${order}-${card.value}-${card.suit}`"
      :key="`${turn}-${order}-${card.value}-${card.suit}`"
      :style="{
        top: index*50 + 'px',
        left: index*3 + 'px',
        animation: `make-visible, slide-up 500ms ease-in-out`,
        animationDelay: `${getAnimationDelay(index)}ms`,
        animationFillMode: 'forwards'
      }"
    >
      <vue-playing-card
        :key="`${card.value}-${card.suit}`"
        :signature="`${card.value}${card.suit}`"
      ></vue-playing-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-pile",
  props: {
    turn: { type: Number, required: true },
    order: { type: Number, required: true },
    pile: { type: Array, default: () => [] }
  },
  methods: {
    getAnimationDelay(index) {
      return Math.round((index + (this.order / 3)) * 1000);
    }
  }
};
</script>

<style>
.playing-card-wrapper {
  position: relative;
}
.playing-card-inner-wrapper {
  position: absolute;
  opacity: 0;
  height: 100px;
  width: 100px;
}

@keyframes make-visible {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slide-up {
  0% {
    transform: translateY(15px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>