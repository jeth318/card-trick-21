<template>
  <div class="playing-card-wrapper">
    <div
      class="playing-card-inner-wrapper"
      v-for="(card, index) in pile"
      :id="`${order}-${card.value}-${card.suit}`"
      :key="`${turn}-${order}-${card.value}-${card.suit}`"
      :style="{
        animation,
        animationDelay: `${getAnimationDelay(index)}ms`,
        animationFillMode: 'forwards',
        left: `${index * 3}px`,
        top: `${index * 50}px`
      }"
    >
      <vue-playing-card
        :key="`${card.value}-${card.suit}`"
        :signature="getSignature(card)"
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
<<<<<<< HEAD
  computed: {
    animation() {
      return this.turn < 3
        ? `make-visible, slide-up 500ms ease-in-out`
        : `make-visible, slide-down 500ms ease-out`
    }
  },
  methods: {
    getSignature(card) {
      return this.turn < 3
        ? `${card.value}${card.suit}`
        : null
    },
    getAnimationDelay(index) {
      console.log(Math.round((index + (this.order / 3)) * 1000));
      return this.turn < 3
        ? Math.round((index + (this.order / 3)) * 1000)
        : Math.floor(Math.random() * (1000 - 500)) + 0; 
=======
  methods: {
    getAnimationDelay(index) {
      return Math.round((index + (this.order / 3)) * 1000);
>>>>>>> ab85e7b66db5494b48620e8c81303e39c184ca72
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
<<<<<<< HEAD
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

@keyframes slide-down {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(1000px);
=======
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
>>>>>>> ab85e7b66db5494b48620e8c81303e39c184ca72
  }
}
</style>