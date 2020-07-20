<template>
  <div class="playing-card-wrapper">
    <div
      class="playing-card-inner-wrapper"
      v-for="(card, index) in pile"
      :id="`${id}-${card.value}-${card.suit}`"
      :key="`${id}-${card.value}-${card.suit}`"
      :style="{ top: index*50 + 'px', left: index*3 + 'px', opacity: 1, transition: 'opacity 2s ease-in' }"
    >
      <transition-group name="fade">
        <vue-playing-card
          :key="`${card.value}${card.suit}`"
          :signature="`${card.value}${card.suit}`"
        ></vue-playing-card>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-pile",
  props: {
    id: { type: Number, required: true },
    pile: { type: Array, default: () => [] }
  },
  methods: {}
};
</script>

<style>
.playing-card-wrapper {
  position: relative;
}
.playing-card-inner-wrapper {
  position: absolute;
  max-height: "199px";
}

.fade-enter-active,
.fade-leave-active {
  transition: max-height 5s;
}
.fade-enter,
.fade-leave-to {
  max-height: 0;
}
</style>