<template>
  <div id="app">
    <div class="piles-container">
      <div v-for="(pile, index) in piles" :key="index" style="width: 230px">
          <button :disabled="turn === 3" @click="onPileSelected(index)">Välj</button>
        <card-pile :id="index" :pile="pile"></card-pile>
      </div>
    </div>
  </div>
</template>

<script>
import CardPile from "./components/card-pile/card-pile.vue";
import { shuffledDeckOf21 } from "./components/utils/card-util";

export default {
  name: "App",
  components: { CardPile },
  data: () => ({
    deck: shuffledDeckOf21,
    pileA: [],
    pileB: [],
    pileC: [],
    turn: 0
  }),
  created() {
    console.log(shuffledDeckOf21);
  },
  mounted() {
    this.dealCards();
  },
  computed: {
    piles() {
      return [this.pileA, this.pileB, this.pileC];
    },
    magicCard() {
      return this.deck[10];
    }
  },
  methods: {
    dealCards() {
      this.resetPiles();
      this.deck.forEach((card, index) => {
        switch (index % 3) {
          case 0:
            this.pileA.push(card);
            break;
          case 1:
            this.pileB.push(card);
            break;
          case 2:
            this.pileC.push(card);
            break;
        }
      });
    },
    resetPiles() {
      this.pileA = [];
      this.pileB = [];
      this.pileC = [];
    },
    onPileSelected(index) {
      this.stackPiles(index);
      this.dealCards();
    },
    stackPiles(index) {
      console.log("i was clocked with index", index);
      this.turn += 1;
      switch (index) {
        case 0:
          this.deck = this.pileB.concat(this.pileA).concat(this.pileC);
          break;
        case 1:
          this.deck = this.pileA.concat(this.pileB).concat(this.pileC);
          break;
        case 2:
          this.deck = this.pileA.concat(this.pileC).concat(this.pileB);
          break;
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.piles-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
